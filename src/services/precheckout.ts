'use server';

import { cookies } from 'next/headers';

import { IPrecheckout } from '@/interfaces';

export const setCartData = async(data: IPrecheckout.CheckoutData) => {
	const threeMonths = 90 * 24 * 60 * 60 * 1000;

	cookies().set('cart', JSON.stringify(data), { expires: Date.now() + threeMonths });
};

export const getCartData = (): IPrecheckout.CheckoutData | undefined => {
	const cartCookies = cookies().get('cart');
	const cart = cartCookies?.value;

	return cart && JSON.parse(cart);
};