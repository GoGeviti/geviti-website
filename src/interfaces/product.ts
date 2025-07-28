import { BillingInterval } from '@/lib/generateStripeNickname';

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
	interval:         BillingInterval;
	intervalCount:    number;
	isCurrentPrice:   boolean;
	isHidden:         boolean;
	isLegacy:         boolean;
	isDefault:        boolean;
}

export interface NewProductMembership {
	productId:        string;
	name:             string;
	description:      string;
	productType:      string;
	productFamily:    string;
	defaultAmount:    string;
	billingFrequency: string;
	interval:         string;
	defaultPriceId:   string;
	intervalCount:    number;
	stripeProductId:  string;
	prices:           Price[];
	productMetadata:  ProductMetadata;
}

export interface Price {
	id:               string;
	price:            string;
	priceId:          string;
	priceType:        string;
	nickname:         string;
	lookupKey:        string;
	billingFrequency: string;
	interval:         string;
	intervalCount:    number;
	isActive:         boolean;
	isDefault:        boolean;
}

export interface ProductMetadata {
	features: Feature[];
}

export interface Feature {
	free:        boolean;
	title:       string;
	premium:     boolean;
	description: string;
}
