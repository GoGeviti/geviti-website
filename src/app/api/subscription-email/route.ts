import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import SubscriptionEmail from '../../../../templates/SubscriptionEmail';
interface RequestPayload {
  customer: {
    email: string;
    first_name: string;
    last_name: string;
  }
}

export interface subscriptionKeyResponse {
  id: number;
  createdAt: string;
  subscriptionKey: string;
  isValid: boolean;
  invalidationDate?: null;
}

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: Request) {
	const requestPayload = (await request.json()) as RequestPayload;

	const reqHeaders = Array.from(headers().entries());
	console.log('request headers');
	for (const [key, value] of reqHeaders) {
		console.log(`${key}: ${value}`);
	}

	console.log('request payload');

	for (const item in requestPayload) {
		console.log(`${item}`);
		console.log(JSON.stringify(requestPayload[item as keyof RequestPayload]));
	}

	const { customer: { email, first_name, last_name } } = requestPayload;

	if (!email || !first_name || !last_name) {
		return NextResponse.json({ error: 'Invalid request payload' }, { status: 400 });
	}

	try {
		const { subscriptionKey } = await getSubscriptionKey();
		const { data, error } = await sendSubscriptionEmail(
			email,
			first_name,
			last_name,
			subscriptionKey
		);

		if (error) {
			return NextResponse.json({ error }, { status: 500 });
		}

		return NextResponse.json({
			status: 200,
			message: 'Email sent successfully!',
			emailId: data?.id,
		});
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
}

async function sendSubscriptionEmail(
	email: string, firstName: string, lastName: string,
	subscriptionKey: string
) {
	const emailPayload = {
		from: 'app@gogeviti.com',
		to: email,
		subject: 'Welcome to Geviti',
		react: SubscriptionEmail({ firstName, lastName, subscriptionKey }),
	};

	return resend.emails.send(emailPayload);
}

async function getSubscriptionKey() {
	const apiUrl = `${process.env.SUBSCRIPTION_API_URL}/subscription-keys`; // Replace with your actual API endpoint

	const response = await fetch(apiUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.SUBSCRIPTION_TOKEN}`,
		},
	});

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	return (await response.json()) as subscriptionKeyResponse;
}
