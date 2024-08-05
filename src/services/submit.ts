/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

type ResponseType = {
  status: 'OK' | 'ERROR';
  message?: string;
};

export type ContactUsType = {
  full_name: string;
  email: string;
  subject: string;
  message: string;
	isPartner: boolean;
	phone_number?: number;
	company?: string;
	role?: string;
}

export const createContact = async(
	formData: ContactUsType
): Promise<ResponseType> => {
	try {
		const req = await fetch(process.env.BASE_API_URL + '/api/contacts', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...formData,
				subject: parseInt(formData.subject)
			}),
		});
		const data = await req.json();
		if (data?.errors?.length > 0) {
			return { status: 'ERROR', message: data.errors[0].message };
		}
		return { status: 'OK', message: 'Contact created successfully' };
	} catch (err:any) {
		return { status: 'ERROR', message: 'Opps, something went wrong! ' };
	}
};

export const sendSlackNotification = async(contactData: any) => {
	const slackWebhookUrl = 'https://hooks.slack.com/services/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';
	
	const slackPayload = {
		text: 'New Contact Form Submission',
		blocks: [
			{
				type: 'section',
				text: {
					type: 'mrkdwn',
					text: '*New Contact Form Submission*'
				}
			},
			{
				type: 'section',
				fields: [
					{
						type: 'mrkdwn',
						text: `*Name:* ${contactData.full_name}`
					},
					{
						type: 'mrkdwn',
						text: `*Email:* ${contactData.email}`
					},
					{
						type: 'mrkdwn',
						text: `*Subject:* ${contactData.subject}`
					},
					{
						type: 'mrkdwn',
						text: `*Company:* ${contactData.company}`
					},
					{
						type: 'mrkdwn',
						text: `*Role:* ${contactData.role}`
					},
					{
						type: 'mrkdwn',
						text: `*Is Partner:* ${contactData.isPartner ? 'Yes' : 'No'}`
					}
				]
			},
			{
				type: 'section',
				text: {
					type: 'mrkdwn',
					text: `*Message:*\n${contactData.message}`
				}
			}
		]
	};

	try {
		const response = await fetch(slackWebhookUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(slackPayload),
		});

		if (!response.ok) {
			throw new Error('Failed to send Slack notification');
			
		} else {
			return { status: 'OK', message: 'Contact created successfully' };
		}
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error('Error sending Slack notification:', error);
		return { status: 'ERROR', message: 'Error sending Slack notification' };
	}
};
