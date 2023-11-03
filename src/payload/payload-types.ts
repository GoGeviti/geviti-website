export interface Category {
	id: number;
	title: string;
	description: string;
	updatedAt: string;
	createdAt: string;
}
export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	category: Category;
	benefits: Benefit[];
	bloodTest?: boolean;
	shopify_variant_id?: string;
	images: {
		image: Media;
		id?: string;
	}[];
	faq: {
		title?: string;
		description?: string;
		id?: string;
	}[];
	updatedAt: string;
	createdAt: string;
}
export interface Benefit {
	id: number;
	title: string;
	description: string;
	updatedAt: string;
	createdAt: string;
}
export interface Media {
	id: number;
	alt?: string;
	updatedAt: string;
	createdAt: string;
	url?: string;
	filename?: string;
	mimeType?: string;
	filesize?: number;
	width?: number;
	height?: number;
	sizes?: {
		thumbnail?: {
			url?: string;
			width?: number;
			height?: number;
			mimeType?: string;
			filesize?: number;
			filename?: string;
		};
		card?: {
			url?: string;
			width?: number;
			height?: number;
			mimeType?: string;
			filesize?: number;
			filename?: string;
		};
		tablet?: {
			url?: string;
			width?: number;
			height?: number;
			mimeType?: string;
			filesize?: number;
			filename?: string;
		};
	};
}
export interface User {
	id: number;
	updatedAt: string;
	createdAt: string;
	email: string;
	resetPasswordToken?: string;
	resetPasswordExpiration?: string;
	salt?: string;
	hash?: string;
	loginAttempts?: number;
	lockUntil?: string;
	password: string;
}
export type PaginatedDocs<T> = {
	docs: T[];
	hasNextPage: boolean;
	hasPrevPage: boolean;
	limit: number;
	nextPage?: null | number | undefined;
	page?: number;
	pagingCounter: number;
	prevPage?: null | number | undefined;
	totalDocs: number;
	totalPages: number;
};
