/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { Client }  from '@notionhq/client';
import { cookies } from 'next/headers';

import { IPrecheckout } from '@/interfaces';

type ResponseType = {
  status: 'OK' | 'ERROR';
  message?: string;
};

export const setCartData = async(data: IPrecheckout.CheckoutData) => {
	const threeMonths = 90 * 24 * 60 * 60 * 1000;

	(await cookies()).set('cart', JSON.stringify(data), { expires: Date.now() + threeMonths });
};

export const getCartData = async(): Promise<IPrecheckout.CheckoutData | undefined> => {
	const cokies = await cookies();
	const cartCookies = cokies.get('cart');
	const cart = cartCookies?.value;

	return cart && JSON.parse(cart);
};

// create function to calculate age
const calculateAge = (birthdate: Date) => {
	const today = new Date();
	return today.getFullYear() - birthdate.getFullYear();
};

export const createNotionDatabase = async(
	formData: IPrecheckout.UserData & {
	isAlreadyOnHRT : boolean,
	isWaitingList? : boolean,

	}
): Promise<ResponseType> => {
	const notion = new Client({
		auth: process.env.NOTION_TOKEN,
	});
	try {
		await notion.pages.create({
			parent: {
				type: 'database_id',
				database_id: formData.isWaitingList ? process.env.NOTION_WAITING_LIST_DATABASE_ID : process.env.NOTION_DATABASE_ID
			},
			properties: {
				Name: {
					type: 'title',
					title: [
						{
							type: 'text',
							text: {
								content: formData.first_name
							}
						}
					]
				},
				Age: {
					type: 'number',
					number: formData.birthdate ? calculateAge(formData.birthdate) : null
				},
				Sex: {
					select: {
						name: formData.gender
					}
				},
				Email: {
					email: formData.email
				},
				State: {
					rich_text: [
						{
							type: 'text',
							text: {
								content: formData.state
							}
						}
					]
				},
				'On HRT': {
					select: {
						name: formData.isAlreadyOnHRT ? 'Yes' : 'No'
					}
				},
				
				...(
					formData.isWaitingList ? {
						'Waitlist Opt-in': {
							select: {
								name: formData.isWaitingList ? 'Yes' : 'Unclear'
							}
						}
					} : {}
				)
				
			}
		});
		return { status: 'OK', message: 'Contact created successfully' };
	} catch (err:any) {
		return { status: 'ERROR', message: 'Opps, something went wrong! ' };
	}
};