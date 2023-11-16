import qs from 'qs';

import {
	Benefit,
	Category,
	ContactSubject,
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

export const getPostById = async(slug:string): Promise<Post> => {
	const stringifiedQuery = qs.stringify({
		depth: 2,
		draft: false,
		where: {
			slug: {
				equals: slug
			}
		},
		limit: 1
	}, { addQueryPrefix: true },);
	try {
		const res = await fetch(
			process.env.BASE_API_URL + `/api/posts/${stringifiedQuery}`,
			{
				cache: 'no-store',
			}
		);
		const data = await res.json();
		if (!res.ok) {
			return Promise.reject('Not Found');
		}
		return data.docs[0];
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

export const getAllContactSubjects = async(): Promise<PaginatedDocs<ContactSubject>> => {
	const stringifiedQuery = qs.stringify({
		depth: 1,
		draft: false,
	});

	try {
		const res = await fetch(
			process.env.BASE_API_URL + `/api/contact-subject?${stringifiedQuery}`,
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
