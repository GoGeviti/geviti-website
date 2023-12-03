import crypto from 'crypto';
import { AxiomRequest, withAxiom } from 'next-axiom';
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
export const POST = withAxiom(async(req: AxiomRequest) => {
	const rawData = await req.text();
	const requestPayload = JSON.parse(rawData) as RequestPayload;

	const reqHeaders = Array.from(headers().entries()).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
	req.log.info('request headers', reqHeaders);
	req.log.info('request payload', requestPayload);

	const preCalcHmac = headers().get('x-shopify-hmac-sha256');
	const hmacVerificationResult = await calculateShopifyWebhookHmacUsingSubtle(process.env.SHOPIFY_WEBHOOK_SECRET ?? '', rawData, preCalcHmac ?? '');
	const calcHmacCrypto = await calculateShopifyWebhookHmacUsingCrypto(process.env.SHOPIFY_WEBHOOK_SECRET ?? '', rawData);

	req.log.info(`preCalcHmac: ${preCalcHmac}`);
	req.log.info(`hmacVerificationResult: ${hmacVerificationResult}`);
	req.log.info(`calcHmacCrypto: ${calcHmacCrypto}`);

	if (!hmacVerificationResult) {
		return NextResponse.json({ error: 'Unauthorized Request: Signature Verification Failed.' }, { status: 403 });
	}

	const { customer: { email, first_name, last_name } } = requestPayload;

	if (!email || !first_name || !last_name) {
		return NextResponse.json({ error: 'Invalid request payload' }, { status: 400 });
	}

	const basePath = req.nextUrl.basePath;
	req.log.info(`basePath: ${basePath}`);
	req.log.info('Next URL: ', req.nextUrl);

	try {
		const { subscriptionKey } = await getSubscriptionKey();
		const { data, error } = await sendSubscriptionEmail(
			email,
			first_name,
			last_name,
			subscriptionKey,
			basePath
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
});

async function sendSubscriptionEmail(
	email: string,
	firstName: string,
	lastName: string,
	subscriptionKey: string,
	basePath: string
) {
	const emailPayload = {
		from: 'app@gogeviti.com',
		to: email,
		subject: 'Welcome to Geviti',
		react: SubscriptionEmail({ firstName, lastName, subscriptionKey, basePath }),
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

async function calculateShopifyWebhookHmacUsingCrypto(secret: string, data: string) {
	const hmac = crypto.createHmac('sha256', secret);
	hmac.update(data);
	return hmac.digest('base64');
}

async function calculateShopifyWebhookHmacUsingSubtle(secret: string, data: string, sign: string) {
	const encoder = new TextEncoder();
	const encodedData = encoder.encode(data);
	const encodedSecret = encoder.encode(secret);

	// calculate hmac using the secret and data using cypto.subtle
	const key = await crypto.subtle.importKey(
		'raw',
		encodedSecret,
		{
			name: 'HMAC',
			hash: { name: 'SHA-256' },
		},
		true,
		['sign', 'verify']
	);

	const signBytes = Uint8Array.from(atob(sign), c => c.charCodeAt(0));

	const hmacResult = await crypto.subtle.verify('HMAC', key, signBytes, encodedData);

	// const result = await crypto.subtle.verify(', key, signature, data)

	return hmacResult;
  
}