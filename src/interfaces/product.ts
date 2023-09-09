export interface ProductItem {
	id: number;
	name: string;
	price: number;
	description?: string;
	category?: string;
	bloodTest?: string;
	value?: string;
	shopify_variant_id: string;
	imageSrc?: string;
	images?: string[];
	details?: {
		question: string;
		answer: string | string[];
	}[];
	benefits?: string[];
};