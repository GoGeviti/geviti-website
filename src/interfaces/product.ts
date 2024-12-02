export interface ProductItem {
	id: number;
	name: string;
	price: number;
	description?: string;
	category?: string;
	bloodTest?: string;
	value?: string;
	shopify_variant_id?: string;
	imageSrc?: string;
	images?: string[];
	details?: {
		question: string;
		answer: string | string[];
	}[];
	benefits?: string[];
};

export interface ProductMembership {
	productId:            number;
	productName:          string;
	productType:          string;
	productDescription:   string;
	defaultPriceId:       string;
	defaultAmount:        string;
	defaultInterval:      string;
	defaultIntervalCount: number;
	productPrices:        ProductPrice[];
}

export interface ProductPrice {
	productPriceId:   number;
	nickname:         string;
	price:            number;
	priceId:          string;
	priceType:        string;
	billingFrequency: string;
	interval:         string;
	intervalCount:    number;
	isCurrentPrice:   boolean;
	isHidden:         boolean;
	isLegacy:         boolean;
	isDefault:        boolean;
}
