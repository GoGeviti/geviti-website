import { PaginatedDocs } from 'payload/database';

import { Product } from '@/payload/payload-types';

export const getProducts = async(): Promise<PaginatedDocs<Product>> => {
	try {
		const res = await fetch(process.env.BASE_URL + '/api/products?depth=2');
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
		return Promise.reject(error);
	}
};
