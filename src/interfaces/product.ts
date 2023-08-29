export interface ProductItem {
	id: number;
	name: string;
	price: number;
	description?: string;
	category?: string;
	bloodTest?: string;
	value?: string;
	imageSrc?: string;
	imageAlt?: string;
	images?: string[];
	details?: {
		question: string;
		answer: string;
	}[];
};