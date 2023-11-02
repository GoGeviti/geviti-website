import type { CollectionConfig } from 'payload/types';

const Products: CollectionConfig = {
	access: {},
	admin: {
		useAsTitle: 'name',
	},
	fields: [
		{
			name: 'name',
			label: 'Name',
			type: 'text',
			required: true,
		},
		{
			name: 'description',
			label: 'Description',
			type: 'textarea',
			required: true,
		},
		{
			name: 'price',
			label: 'Price',
			type: 'number',
			required: true,
		},
		{
			name: 'category',
			label: 'Category',
			type: 'relationship',
			relationTo: 'categories',
			hasMany: false,
			required: true,
		},
		{
			name: 'benefits',
			label: 'Benefits',
			type: 'relationship',
			relationTo: 'benefits',
			hasMany: true,
			required: true,
		},
		{
			name: 'bloodTest',
			type: 'checkbox',
			label: 'Blood test required?',
			defaultValue: false,
		},
		{
			name: 'shopify_variant_id',
			type: 'text',
			label: 'Shopify Variant Id',
		},
		{
			name: 'images',
			label: 'Images',
			type: 'array',
			minRows: 1,
			maxRows: 10,
			fields: [
				{
					name: 'image',
					label: 'Image',
					type: 'upload',
					relationTo: 'media',
					required: true,
					filterOptions: {
						mimeType: { contains: 'image' },
					},
				},
			],
		},
		{
			name: 'faq',
			type: 'array',
			label: 'FAQ',
			minRows: 1,
			maxRows: 10,
			fields: [
				{
					name: 'title',
					type: 'text',
				},
				{
					name: 'description',
					type: 'textarea',
				},
			],
		},
	],
	slug: 'products',
};

export default Products;
