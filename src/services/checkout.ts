/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { Client } from '@notionhq/client';

import { IPrecheckout } from '@/interfaces';

import { calculateAge } from './precheckout';

type ResponseType = {
	status: 'OK' | 'ERROR';
	message?: string;
};

export const createNotionDatabase = async(
	formData: IPrecheckout.UserDetailData & {
		isWaitingList?: boolean,
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
								content: formData.name
							}
						}
					]
				},
				Age: {
					type: 'number',
					number: formData.birthdate ? await calculateAge(formData.birthdate) : null
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
				'Phone Number': {
					type: 'number',
					number: Number(formData.phone_number)
				},
				'Address 1': {
					rich_text: [
						{
							type: 'text',
							text: {
								content: formData.address_1
							}
						}
					]
				},
				'Address 2': {
					rich_text: [
						{
							type: 'text',
							text: {
								content: formData.address_2
							}
						}
					]
				},
				City: {
					rich_text: [
						{
							type: 'text',
							text: {
								content: formData.city
							}
						}
					]
				},
				'Zip Code': {
					type: 'number',
					number: Number(formData.zip_code)
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
	} catch (err: any) {
		return { status: 'ERROR', message: 'Opps, something went wrong! ' };
	}
};