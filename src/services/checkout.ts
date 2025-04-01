/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { Client } from '@hubspot/api-client';
import { format } from 'date-fns';
import { SignJWT } from 'jose';
import {
	ApiKeySession, 	ProfileCreateQuery, ProfileEnum, ProfilesApi, SegmentsApi,
	SubscriptionCreateJobCreateQuery
} from 'klaviyo-api'
import { cookies } from 'next/headers';

const session = new ApiKeySession(process.env.KLAVIYO_API_KEY)
const profilesApi = new ProfilesApi(session)
const segmentApi = new SegmentsApi(session)

import { IPrecheckout } from '@/interfaces';

const hubspotClient = new Client({ accessToken: process.env.HUBSPOT_API_KEY });

type ResponseType = {
  status: 'OK' | 'ERROR';
  message?: string;
};

export const createNotionDatabase = async(
	formData: IPrecheckout.UserDetailData & {
    isWaitingList?: boolean,
  }
): Promise<ResponseType> => {
	// return console.log(JSON.stringify(formData));
	const res = await hubspotClient.crm.contacts.basicApi
		.create({
			associations: [],
			properties: {
				firstname: formData.first_name,
				lastname: formData.last_name,
				email: formData.email,
				phone: formData.phone_number,
				address_1: formData.address_1,
				address_2: formData.address_2,
				gender: formData.gender,
				date_of_birth: formData.birthdate ? format(formData.birthdate, 'MM/dd/yyyy') : '',
				city: formData.city,
				zip: formData.zip_code,
				state: formData.state,
			},
		})
		.then(async responseCreate => {
			if (!formData.isWaitingList) {
				await hubspotClient.crm.lists.membershipsApi.add(7, [Number(responseCreate.id)]);
			} else {
				await hubspotClient.crm.lists.membershipsApi.add(6, [Number(responseCreate.id)]);
			}
			return { status: 'OK', message: 'Contact created successfully' };
		})
		.catch((e:any) => {
			return { status: 'ERROR', message: e.body.message };
		});
	return res as ResponseType;
};

export const createDiscount = async(
	formData: IPrecheckout.DiscountData
): Promise<ResponseType & { profileId?: string }> => {

	try {
		const profile: ProfileCreateQuery = {
			data: {
				type: ProfileEnum.Profile,
				attributes: {
					email: formData.email,
					// phoneNumber: formData.phone_number,
					firstName: formData.name,
					lastName: '',
					location: {
						region: formData.state,
					}
				}
			}
		}
		
		const resCreateProfile = await profilesApi.createOrUpdateProfile(profile);
		const profileId = resCreateProfile.body.data.id ?? '';
		
		const subscribe : SubscriptionCreateJobCreateQuery = {
			'data': {
				'type': 'profile-subscription-bulk-create-job',
				'attributes': {
					'customSource': 'Marketing Event',
					'profiles': {
						'data': [
							{
								'type': 'profile',
								'id': profileId,
								'attributes': {
									'email': formData.email,
									// 'phoneNumber': formData.phone_number ? formData.phone_number.replaceAll(' ', '') : '',
									'subscriptions': {
										'email': {
											'marketing': {
												'consent': 'SUBSCRIBED'
											}
										},
										// 'sms': formData.phone_number ? {
										// 	'marketing': {
										// 		'consent': 'SUBSCRIBED'
										// 	}
										// } : undefined
									}
								}
							}
						]
					},
					// 'historical_import': false
				},
				'relationships': {
					'list': {
						'data': {
							'type': 'list',
							'id': formData.options
						}
					}
				}
			}
		}
		await profilesApi.subscribeProfiles(subscribe)
		return { status: 'OK', message: 'Data Created', profileId };
	} catch (error:any) {
		let errorMessage = 'Opss Something Wrong!';

		// Check if error response contains the expected structure
		if (error.response && error.response.data && Array.isArray(error.response.data.errors)) {
			// Extract the first error detail if available
			const errorDetail = error.response.data.errors[0]?.detail;
			if (errorDetail) {
				errorMessage = errorDetail;
			}
		}
		return { status: 'ERROR', message: errorMessage };
	}
};

// New function to update profile with phone number
export const updateDiscountWithPhone = async(
	{ profileId, phone_number }: { profileId: string; phone_number: string }
): Promise<ResponseType> => {
	try {
		if (!profileId || !phone_number) {
			return { status: 'ERROR', message: 'Missing required data' };
		}

		await profilesApi.updateProfile(profileId, {
			data: {
				type: ProfileEnum.Profile,
				id: profileId,
				attributes: {
					phoneNumber: phone_number.replaceAll(' ', '')
				}
			}
		});

		const subscribe : SubscriptionCreateJobCreateQuery = {
			'data': {
				'type': 'profile-subscription-bulk-create-job',
				'attributes': {
					'customSource': 'Marketing Event',
					'profiles': {
						'data': [
							{
								'type': 'profile',
								'id': profileId,
								'attributes': {
									'phoneNumber': phone_number.replaceAll(' ', ''),
									'subscriptions': {
										'sms': {
											'marketing': {
												'consent': 'SUBSCRIBED'
											}
										}
									}
								}
							}
						]
					},
					// 'historical_import': false
				}
			}
		}
		await profilesApi.subscribeProfiles(subscribe)

		return { status: 'OK', message: 'Profile updated with phone number' };
	} catch (error: any) {
		let errorMessage = 'Error updating profile';

		if (error.response && error.response.data && Array.isArray(error.response.data.errors)) {
			const errorDetail = error.response.data.errors[0]?.detail;
			if (errorDetail) {
				errorMessage = errorDetail;
			}
		}

		return { status: 'ERROR', message: errorMessage };
	}
};

export const submitGiveaway = async(
	formData: Omit<IPrecheckout.DiscountData, 'options'> & {
		birthdate: Date | null;
	}
): Promise<ResponseType> => {

	try {
		const profile: ProfileCreateQuery = {
			data: {
				type: ProfileEnum.Profile,
				attributes: {
					email: formData.email,
					phoneNumber: formData.phone_number,
					firstName: formData.name,
					lastName: '',
					location: {
						region: formData.state,
					},
					properties: {
						date_of_birth: formData.birthdate ? format(formData.birthdate, 'MM/dd/yyyy') : '-'
					}
				}
			}
		}
		
		const resCreateProfile = await profilesApi.createOrUpdateProfile(profile);
		const subscribe : SubscriptionCreateJobCreateQuery = {
			'data': {
				'type': 'profile-subscription-bulk-create-job',
				'attributes': {
					'customSource': 'Marketing Event',
					'profiles': {
						'data': [
							{
								'type': 'profile',
								'id': resCreateProfile.body.data.id ?? '',
								'attributes': {
									'email': formData.email,
									'phoneNumber': formData.phone_number.replaceAll(' ', ''),
									'subscriptions': {
										'email': {
											'marketing': {
												'consent': 'SUBSCRIBED'
											}
										},
										'sms': {
											'marketing': {
												'consent': 'SUBSCRIBED'
											}
										}
									}
								}
							}
						]
					},
					// 'historical_import': false
				},
				'relationships': {
					'list': {
						'data': {
							'type': 'list',
							'id': 'T6d9qR'
						}
					}
				}
			}
		}
		await profilesApi.subscribeProfiles(subscribe)
		return { status: 'OK', message: 'Data Created' };
	} catch (error:any) {
		let errorMessage = 'Opss Something Wrong!';

		// Check if error response contains the expected structure
		if (error.response && error.response.data && Array.isArray(error.response.data.errors)) {
			// Extract the first error detail if available
			const errorDetail = error.response.data.errors[0]?.detail;
			if (errorDetail) {
				errorMessage = errorDetail;
			}
		}
		return { status: 'ERROR', message: errorMessage };
	}
};
export const submitWaitlist = async(
	formData: {
		firstName: string;
		lastName: string;
		email: string;
	}
): Promise<ResponseType> => {

	try {
		const profile: ProfileCreateQuery = {
			data: {
				type: ProfileEnum.Profile,
				attributes: {
					email: formData.email,
					firstName: formData.firstName,
					lastName: formData.lastName,
				}
			}
		}
		
		const resCreateProfile = await profilesApi.createOrUpdateProfile(profile);
		const subscribe : SubscriptionCreateJobCreateQuery = {
			'data': {
				'type': 'profile-subscription-bulk-create-job',
				'attributes': {
					'customSource': 'Marketing Event',
					'profiles': {
						'data': [
							{
								'type': 'profile',
								'id': resCreateProfile.body.data.id ?? '',
								'attributes': {
									'email': formData.email,
									'subscriptions': {
										'email': {
											'marketing': {
												'consent': 'SUBSCRIBED'
											}
										}
									}
								}
							}
						]
					},
					// 'historical_import': false
				},
				'relationships': {
					'list': {
						'data': {
							'type': 'list',
							'id': 'RAB6DH'
						}
					}
				}
			}
		}
		await profilesApi.subscribeProfiles(subscribe)
		return { status: 'OK', message: 'Data Created' };
	} catch (error:any) {
		let errorMessage = 'Opss Something Wrong!';

		// Check if error response contains the expected structure
		if (error.response && error.response.data && Array.isArray(error.response.data.errors)) {
			// Extract the first error detail if available
			const errorDetail = error.response.data.errors[0]?.detail;
			if (errorDetail) {
				errorMessage = errorDetail;
			}
		}
		return { status: 'ERROR', message: errorMessage };
	}
};

export const submitWaitlistWithPassword = async(
	formData: {
		password: string;
	}
): Promise<ResponseType> => {
	// Get the passwords string and split it into an array
	const validPasswords = (process.env.WAITLIST_PASSWORD || '').split(',').map(pwd => pwd.trim());
	
	if (validPasswords.includes(formData.password)) {
		// Create a new JWT using jose
		const token = await new SignJWT({ authorized: true })
			.setProtectedHeader({ alg: 'HS256' })
			.setExpirationTime('24h')
			.sign(new TextEncoder().encode(process.env.JWT_SECRET));

		// Set the cookie using next/headers
		const cookieStore = await cookies();
		cookieStore.set('waitlist-token', token, {
			path: '/',
			maxAge: 60 * 60 * 24, // 24 hours
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
		});

		return { status: 'OK', message: 'Password is correct' };
	}
	return { status: 'ERROR', message: 'Invalid Password' };
}

let cachedCount = 0;
let lastFetchTime = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds

export const getWaitlistTotal = async(): Promise<number> => {
	const now = Date.now();
  
	// Return cached value if it's still fresh
	if (now - lastFetchTime < CACHE_TTL) {
		return cachedCount;
	}
  
	try {
		const response = await segmentApi.getSegment('Yye7vr', {
			additionalFieldsSegment: ['profile_count']
		});
    
		// Update cache
		cachedCount = response.body.data.attributes.profileCount || 0;
		lastFetchTime = now;
		return cachedCount;
	} catch (error) {
		console.error('Error fetching waitlist count:', error);

		// If we have a cached value, return it even if expired
		if (cachedCount > 0) {
			return cachedCount;
		}
    
		return 0;
	}
};
