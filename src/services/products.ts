import {
	Benefit,
	Category,
	PaginatedDocs,
	Product,
} from '@/payload/payload-types';

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

export const getProductById = async(id: string): Promise<Product> => {
	try {
		const res = await fetch(
			process.env.BASE_API_URL + `/api/products/${id}?depth=1`,
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
