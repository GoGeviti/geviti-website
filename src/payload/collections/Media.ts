import { CollectionConfig } from 'payload/types';

export const Media: CollectionConfig = {
	slug: 'media',
	admin: {
		useAsTitle: 'alt',
	},
	upload: {
		staticURL: process.env.S3_URL,
		staticDir: '',
		mimeTypes: ['image/*'],
		disableLocalStorage: true,
		focalPoint: false,
		crop: false,
		// adminThumbnail: process.env.S3_URL
		adminThumbnail: ({ doc }) => {
			// console.log('doc', doc);
			return doc.url as string ?? '';
		},
	},
	hooks: {
		beforeOperation: [async({ args }) => {
			const files = args.req?.files;
			if (files && files.file && files.file.name) {
				const parts = files.file.name.split('.');
				files.file.name = `${(Math.random() + 1).toString(36).substring(2)}.${parts[parts.length - 1]}`;
			}
		}]
	},
	fields: [
		{
			name: 'alt',
			type: 'text',
		},
	],
};