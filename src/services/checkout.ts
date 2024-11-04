/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { Client } from '@hubspot/api-client';
import { format } from 'date-fns';
import {
	ApiKeySession, ProfileCreateQuery, ProfileEnum, ProfilesApi, SubscriptionCreateJobCreateQuery
} from 'klaviyo-api'

const session = new ApiKeySession(process.env.KLAVIYO_API_KEY)
const profilesApi = new ProfilesApi(session)
// const listApi = new ListsApi(session)

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
): Promise<ResponseType> => {
	// const res = await hubspotClient.crm.contacts.basicApi
	// 	.create({
	// 		associations: [],
	// 		properties: {
	// 			firstname: formData.name,
	// 			email: formData.email,
	// 			phone: formData.phone_number,
	// 			state: formData.state,
	// 		},
	// 	})
	// 	.then(async responseCreate => {
	// 		await hubspotClient.crm.lists.membershipsApi.add(8, [Number(responseCreate.id)]);
	// 		return { status: 'OK', message: 'Data Created' };
	// 	})
	// 	.catch((e:any) => {
	// 		return { status: 'ERROR', message: e.body.message };
	// 	});
	// return res as ResponseType;

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
							'id': process.env.KLAVIYO_LISTID
						}
					}
				}
			}
		}
		await profilesApi.subscribeProfiles(subscribe)
		// const addProfileToList:ListMembersAddQuery = {
		// 	data: [
		// 		{
		// 			type: ProfileEnum.Profile,
		// 			id: resCreateProfile.body.data.id ?? ''
		// 		}
		// 	]
		// }
		// listApi.createListRelationships(process.env.KLAVIYO_LISTID, addProfileToList)
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

export const submitGiveaway = async(
	formData: IPrecheckout.DiscountData & {
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