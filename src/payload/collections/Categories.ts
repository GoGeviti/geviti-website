import type { CollectionConfig } from 'payload/types';

const Categories: CollectionConfig = {
	access: {},
	admin: {
		useAsTitle: 'title',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
		},
		{
			name: 'description',
			type: 'text',
			required: true,
		},
	],
	slug: 'categories',
};

export default Categories;