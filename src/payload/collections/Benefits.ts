import type { CollectionConfig } from 'payload/types';

const Benefits: CollectionConfig = {
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
	slug: 'benefits',
};

export default Benefits;