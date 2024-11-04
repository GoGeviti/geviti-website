'use server';

import {
	ApiKeySession, ListsApi, ProfileCreateQuery, ProfilesApi, SubscriptionCreateJobCreateQuery
} from 'klaviyo-api'

const session = new ApiKeySession(process.env.KLAVIYO_API_KEY)
const profilesApi = new ProfilesApi(session)
const listsApi = new ListsApi(session)

type ResponseType = {
	status: 'OK' | 'ERROR';
	message?: string;
	profileId?: string;
	listId?: string;
};

export const createKlaviyoProfile = async(
	profile: ProfileCreateQuery,
	listID : string

): Promise<ResponseType> => {
	try {
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
									'email': profile.data.attributes.email,
									'phoneNumber': profile.data.attributes?.phoneNumber?.replaceAll(' ', ''),
									'subscriptions': {
										'email': {
											'marketing': {
												'consent': 'SUBSCRIBED'
											}
										},
										...(profile.data.attributes?.phoneNumber && {
											'sms': {
												'marketing': {
													'consent': 'SUBSCRIBED'
												}
											}
										}),
									}
								}
							}
						]
					},
					'historicalImport': false
				},
				'relationships': {
					'list': {
						'data': {
							'type': 'list',
							'id': listID
						}
					}
				}
			}
		}
		await profilesApi.subscribeProfiles(subscribe)
		// console.log('re ==> ', re)
		return { status: 'OK', message: 'Data Created', profileId: resCreateProfile.body.data.id ?? '', listId: listID };
	} catch (error:any) {
		console.log(error)
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

export const deleteKlaviyoProfileFromList = async(
	profileId:string,
	listId:string
): Promise<ResponseType> => {
	try {
		await listsApi.deleteListRelationships(listId, {
			data: [
				{
					type: 'profile',
					id: profileId
				}
			]
		});
		return { status: 'OK', message: 'Data Deleted' };
	} catch (error) {
		return { status: 'ERROR', message: 'Opss Something Wrong!' };
	}
}