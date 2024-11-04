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
} from '@/payload/payload-types';

export const getProducts = async(): Promise<PaginatedDocs<Product>> => {
	const stringifiedQuery = qs.stringify({
		depth: 1,
		limit: 100,
		draft: false,
		sort: 'order',
	});
	try {
		const res = await fetch(
			process.env.BASE_API_URL + `/api/products?${ stringifiedQuery }`,
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
			process.env.BASE_API_URL + `/api/products/${ id }?depth=2`,
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

export const getProductByCategory = async(
	category: string,
	productSlug?: string,
): Promise<Product[]> => {
	const stringifiedQuery = qs.stringify(
		{
			depth: 2,
			draft: false,
			where: {
				slug: { equals: productSlug },
				'category.slug': { equals: category },
			},
			limit: 99,
		},
		{ addQueryPrefix: true }
	);
	try {
		const res = await fetch(
			process.env.BASE_API_URL + `/api/products?${stringifiedQuery}`,
			{
				cache: 'no-store',
			}
		);
		const data = await res.json() as PaginatedDocs<Product>;
		if (!res.ok) {
			return Promise.reject('Not Found');
		}
		return data.docs;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const getCategoryBySlug = async(slug:string): Promise<Category> => {
	const stringifiedQuery = qs.stringify(
		{
			depth: 2,
			draft: false,
			where: {
				slug: { equals: slug },
			},
			limit: 1,
		},
		{ addQueryPrefix: true }
	);
	try {
		const res = await fetch(
			process.env.BASE_API_URL + `/api/categories?${stringifiedQuery}`,
			{
				cache: 'no-store',
			}
		);
		const data = await res.json();
		if (!res.ok) {
			return Promise.reject('Not Found');
		}
		if (data.docs.length > 0) {
			return data.docs[0];
		}
		return Promise.reject('Not Found');
	} catch (error) {
		// console.log(error);
		return Promise.reject(error);
	}
};
export const getCategories = async(slug?:string, gender?:string): Promise<{
	singleCategory: Category;
	categories: Category[];
}> => {
	const type = gender === 'women' ? 'female' : 'male';
	const stringifiedQuery = qs.stringify(
		{
			depth: 2,
			draft: false,
			where: {
				or: [
					{
						type: { equals: type }
					},
					{
						type: { equals: 'both' }
					}
				]
			},
			limit: 99,
		},
		{ addQueryPrefix: true }
	);
	try {
		const res = await fetch(
			process.env.BASE_API_URL + `/api/categories?${stringifiedQuery}`,
			{
				cache: 'no-store',
			}
		);
		const data = await res.json() as PaginatedDocs<Category>;
		const singleCategory = data.docs.find(category => category.slug === slug);
		if (slug && !singleCategory) {
			return Promise.reject('Not Found');
		}
		return { singleCategory: singleCategory ?? data.docs[0], categories: data.docs.filter(category => category.slug !== slug) };
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

export const getPostById = async(slug: string): Promise<Post> => {
	const stringifiedQuery = qs.stringify(
		{
			depth: 2,
			draft: false,
			where: {
				slug: {
					equals: slug,
				},
			},
			limit: 1,
		},
		{ addQueryPrefix: true }
	);
	try {
		const res = await fetch(
			process.env.BASE_API_URL + `/api/posts?${ stringifiedQuery }`,
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

export const getAllPost = async(
	limit?: number
): Promise<PaginatedDocs<Post>> => {
	const stringifiedQuery = qs.stringify({
		depth: 1,
		limit: limit ?? 100,
		sort: 'order',
		draft: true,
		where: {
			_status: {
				equals: 'published',
			},
		},
	});

	// console.log('getAllPost ==> ', process.env.BASE_API_URL + `/api/posts?${stringifiedQuery}`);

	try {
		const res = await fetch(
			process.env.BASE_API_URL + `/api/posts?${ stringifiedQuery }`,
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

export const getPrivacyById = async(): Promise<Privacy> => {
	const stringifiedQuery = qs.stringify({
		depth: 1,
		limit: 1,
		draft: false,
		sort: '-updatedAt',
	});
	try {
		const res = await fetch(
			process.env.BASE_API_URL + `/api/privacy?${ stringifiedQuery }`,
			{
				cache: 'no-store',
			}
		);
		const data = await res.json();
		return data.docs[0];
	} catch (error) {
		return Promise.reject(error);
	}
};

export const getTermsAndConditions = async(id:number): Promise<Privacy> => {
	const stringifiedQuery = qs.stringify({
		depth: 2,
		limit: 1,
		draft: false,
		sort: '-updatedAt',
		where: {
			id: { equals: id },
		},
	});
	try {
		const res = await fetch(
			process.env.BASE_API_URL + `/api/terms?${ stringifiedQuery }`,
			{
				cache: 'no-store',
			}
		);
		const data = await res.json();
		return data.docs[0];
	} catch (error) {
		return Promise.reject(error);
	}
};

export const getAllFaq = async(): Promise<PaginatedDocs<Faq>> => {
	const stringifiedQuery = qs.stringify({
		depth: 1,
		limit: 99,
		draft: false,
		sort: 'order',
	});

	try {
		const res = await fetch(
			process.env.BASE_API_URL + `/api/faq?${ stringifiedQuery }`,
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

export const getAllContactSubjects = async(): Promise<
  PaginatedDocs<ContactSubject>
> => {
	const stringifiedQuery = qs.stringify({
		depth: 1,
		limit: 99,
		draft: false,
	});

	try {
		const res = await fetch(
			process.env.BASE_API_URL + `/api/contact-subject?${ stringifiedQuery }`,
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
