import qs from 'qs';

import {
	Benefit,
	Category,
	Faq,
	PaginatedDocs,
	Post,
	Privacy,
	Product,
} from '@/payload/payload-types'; ;

export const getProducts = async(): Promise<PaginatedDocs<Product>> => {
	try {
		const res = await fetch(
			process.env.BASE_API_URL + '/api/products?depth=1',
			{
				cache: 'no-store',
			}
		);
		const data = await res.json();
		return data;
	} catch (error) {
		// console.log(error);
		return Promise.reject(error);
	}
};

export const getProductById = async(id:string): Promise<Product> => {

	try {
		const res = await fetch(
			process.env.BASE_API_URL + `/api/products/${id}?depth=2`,
			{
				cache: 'no-store',
			}
		);
		const data = await res.json();
		return data;
	} catch (error) {
		// console.log(error);
		return Promise.reject(error);
	}
};

export const getCategory = async(): Promise<PaginatedDocs<Category>> => {
	try {
		const res = await fetch(
			process.env.BASE_API_URL + '/api/categories?depth=1',
			{
				cache: 'no-store',
			}
		);
		const data = await res.json();
		return data;
	} catch (error) {
		// console.log(error);
		return Promise.reject(error);
	}
};
export const getBenefits = async(): Promise<PaginatedDocs<Benefit>> => {
	try {
		const res = await fetch(
			process.env.BASE_API_URL + '/api/benefits?depth=1',
			{
				cache: 'no-store',
			}
		);
		const data = await res.json();
		return data;
	} catch (error) {
		// console.log(error);
		return Promise.reject(error);
	}
};

export const getPostById = async(id:string): Promise<Post> => {
	try {
		const res = await fetch(
			process.env.BASE_API_URL + `/api/posts/${id}?depth=2&draft=false`,
			{
				cache: 'no-store',
			}
		);
		const data = await res.json();
		return data;
	} catch (error) {
		// console.log(error);
		return Promise.reject(error);
	}
};

export const getAllPost = async(limit?:number): Promise<PaginatedDocs<Post>> => {
	const stringifiedQuery = qs.stringify({
		depth: 1,
		limit: limit ?? 100,
		draft: false,
		sort: '-publishedOn'
	});

	try {
		const res = await fetch(
			process.env.BASE_API_URL + `/api/posts?${stringifiedQuery}`,
			{
				cache: 'no-store',
			}
		);
		const data = await res.json();
		return data;
	} catch (error) {
		// console.log(error);
		return Promise.reject(error);
	}
};

export const getPrivacyById = async(id:number): Promise<Privacy> => {
	try {
		const res = await fetch(
			process.env.BASE_API_URL + `/api/privacy/${id}?depth=1&draft=false`,
			{
				cache: 'no-store',
			}
		);
		const data = await res.json();
		return data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const getAllFaq = async(): Promise<PaginatedDocs<Faq>> => {
	const stringifiedQuery = qs.stringify({
		depth: 1,
		draft: false,
	});

	try {
		const res = await fetch(
			process.env.BASE_API_URL + `/api/faq?${stringifiedQuery}`,
			{
				cache: 'no-store',
			}
		);
		const data = await res.json();
		return data;
	} catch (error) {
		// console.log(error);
		return Promise.reject(error);
	}
};
