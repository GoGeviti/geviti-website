import { AxiomRequest, withAxiom } from 'next-axiom';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import SubscriptionEmail from '../../../../transactional/emails/SubscriptionEmail';

export const dynamic = 'force-dynamic';

interface LineItem {
	title: string;
}
interface RequestPayload {
	customer: {
		email: string;
		first_name: string;
		last_name: string;
	},
	line_items: LineItem[];
}

export interface SubscriptionKeyResponse {
	id: number;
	createdAt: string;
	subscriptionKey: string;
	isValid: boolean;
	invalidationDate?: null;
}

const resend = new Resend(process.env.RESEND_API_KEY);
export const POST = withAxiom(async (req: AxiomRequest) => {
	const rawData = await req.text();
	const requestPayload = JSON.parse(rawData) as RequestPayload;

	// const reqHeaders = Array.from(headers().entries()).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
	// req.log.info('request headers', reqHeaders);
	// req.log.info('request payload', requestPayload);

	const preCalcHmac = headers().get('x-shopify-hmac-sha256');
	const hmacVerificationResult = await calculateShopifyWebhookHmacUsingSubtle(process.env.SHOPIFY_WEBHOOK_SECRET ?? '', rawData, preCalcHmac ?? '');

	// req.log.info(`preCalcHmac: ${preCalcHmac}`);
	// req.log.info(`hmacVerificationResult: ${hmacVerificationResult}`);

	if (!hmacVerificationResult) {
		return NextResponse.json({ error: 'Unauthorized Request: Signature Verification Failed.' }, { status: 403 });
	}

	const { customer: { email, first_name, last_name } } = requestPayload;
	let plan = ''
	if (requestPayload.line_items.length === 1) {
		const product = requestPayload.line_items[0];
		plan = extractKeyFromTitle(product.title);
	}

	if (!email || !first_name || !last_name) {
		return NextResponse.json({ error: 'Invalid request payload' }, { status: 400 });
	}

	try {
		const { subscriptionKey } = await getSubscriptionKey(plan);
		const { data, error } = await sendSubscriptionEmail(
			email,
			first_name,
			last_name,
			subscriptionKey,
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
	subscriptionKey: string
) {
	const dashboardUrl = process.env.DASHBOARD_BASE_URL ?? '';
	const baseUrl = process.env.VERCEL_URL ?? '';

	const appStoreUrl = process.env.APP_STORE_URL ?? '';
	const playStoreUrl = process.env.PLAY_STORE_URL ?? '';

	const emailPayload = {
		from: 'Geviti <app@gogeviti.com>',
		to: `${firstName} ${lastName} <${email}>`,
		subject: 'Welcome to Geviti',
		react: SubscriptionEmail({ firstName, subscriptionKey, baseUrl, dashboardUrl, appStoreUrl, playStoreUrl }),
	};

	return resend.emails.send(emailPayload);
}

async function getSubscriptionKey(planId: string) {
	const apiUrl = `${process.env.SUBSCRIPTION_API_URL}/subscription-keys`;

	const response = await fetch(apiUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.SUBSCRIPTION_TOKEN}`,
		},
		body: JSON.stringify({ planId })
	});

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	return (await response.json()) as SubscriptionKeyResponse;
}

async function calculateShopifyWebhookHmacUsingSubtle(secret: string, data: string, sign: string) {
	const encoder = new TextEncoder();
	const encodedData = encoder.encode(data);
	const encodedSecret = encoder.encode(secret);

	// calculate hmac using the secret and data using crypto.subtle
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

	return hmacResult;
}

function extractKeyFromTitle(title: string) {
	const keys = ['ultimate', 'comprehensive', 'essentials']; // Add other keys as needed
	const lowercaseTitle = title.toLowerCase();
	for (const key of keys) {
		if (lowercaseTitle.includes(key)) {
			return key;
		}
	}
	throw new Error('Product not found');
}