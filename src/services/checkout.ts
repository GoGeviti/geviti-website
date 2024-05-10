/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { Client } from '@hubspot/api-client';
import { format } from 'date-fns';

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
				firstname: formData.name,
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
		.then(() => {
			return { status: 'OK', message: 'Contact created successfully' };
		})
		.catch((e:any) => {
			return { status: 'ERROR', message: e.body.message };
		});
	return res as ResponseType;
};