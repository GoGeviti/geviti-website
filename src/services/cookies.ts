'use server';

import { cookies } from 'next/headers';

export const setCookie = ({ key, value, cookie }: { key: string, value: string, cookie?: any; }) => { // eslint-disable-line @typescript-eslint/no-explicit-any
	const threeMonths = 90 * 24 * 60 * 60 * 1000;

	cookies().set(
		key,
		JSON.stringify(value),
		{ expires: Date.now() + threeMonths, ...cookie }
	);
};

export const getCookie = (key: string) => {
	const cookieStored = cookies().get(key);
	const cookieVal = cookieStored?.value;

	return cookieVal && JSON.parse(cookieVal);
};