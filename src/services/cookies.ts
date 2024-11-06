'use server';

import { cookies } from 'next/headers';

export const setCookie = async({ key, value, cookie }: { key: string, value: string, cookie?: any; }) => { // eslint-disable-line @typescript-eslint/no-explicit-any
	const threeMonths = 90 * 24 * 60 * 60 * 1000;
 	const cookiess = await cookies();
 	cookiess.set(
		key,
		JSON.stringify(value),
		{ expires: Date.now() + threeMonths, ...cookie }
	);
};

export const setCookieIntro = async({ key, value, cookie }: { key: string, value: string, cookie?: any; }) => { // eslint-disable-line @typescript-eslint/no-explicit-any
	const cookiess = await cookies();
	cookiess.set(
		key,
		JSON.stringify(value),
		{ ...cookie }
	);
};

export const getCookie = async(kasyncey: string) => {
	const cookiess = await cookies();
	const cookieStored = cookiess.get(kasyncey);
	const cookieVal = cookieStored?.value;

	return cookieVal && JSON.parse(cookieVal);
};