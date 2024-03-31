/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { Client } from '@notionhq/client';

type ResponseType = {
	status: 'OK' | 'ERROR';
	message?: string;
};

export const createEmailSubscription = async(
	email: string
): Promise<ResponseType> => {
	const notion = new Client({
		auth: process.env.NOTION_TOKEN,
	});
	try {
		await notion.pages.create({
			parent: {
				type: 'database_id',
				database_id: process.env.NOTION_SUBSCRIPTION_DATABASE_ID
			},
			properties: {
				Email: {
					type: 'title',
					title: [
						{
							type: 'text',
							text: {
								content: email
							}
						}
					]
				},
			}
		});
		return { status: 'OK', message: 'Thank you! You\'ve been successfully subscribed' };
	} catch (err: any) {
		return { status: 'ERROR', message: 'Opps, something went wrong! ' };
	}
};