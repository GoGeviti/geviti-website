export interface ProductItem {
	id: number;
	name: string;
	price: number;
	description?: string;
	category: string;
	value?: string;
	imageSrc?: string;
	imageAlt?: string;
};