import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://www.gogeviti.com',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'https://www.gogeviti.com/solution/men',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://www.gogeviti.com/solution/onboarding',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://www.gogeviti.com/solution/women',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://www.gogeviti.com/solution/membership',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://www.gogeviti.com/blog',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
		{
			url: 'https://www.gogeviti.com/faq',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5,
		},
		{
			url: 'https://www.gogeviti.com/contact-us',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5,
		},
		{
			url: 'https://www.gogeviti.com/privacy-policy',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.3,
		},
		{
			url: 'https://www.gogeviti.com/terms-and-conditions',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.3,
		},
	]
}