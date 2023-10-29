import { webpackBundler } from '@payloadcms/bundler-webpack';
import { postgresAdapter } from '@payloadcms/db-postgres';
// import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';
// import seo from '@payloadcms/plugin-seo';
import { slateEditor } from '@payloadcms/richtext-slate';
import path from 'path';
import { buildConfig } from 'payload/config';

import Benefits from './collections/Benefits';
import Categories from './collections/Categories';
import { Media } from './collections/Media';
import Products from './collections/Products';
// import { Pages } from './collections/Pages';
// import { Users } from './collections/Users';
// import { MainMenu } from './globals/MainMenu';

const adapter = s3Adapter({
	config: {
		credentials: {
			accessKeyId: process.env.S3_ACCESS_KEY_ID,
			secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
		},
		region: process.env.S3_REGION,
	},
	bucket: process.env.S3_BUCKET,
});

export default buildConfig({
	db: postgresAdapter({
	  pool: {
	    connectionString: process.env.DATABASE_URI
	  }
	}),
	editor: slateEditor({}),
	admin: {
		bundler: webpackBundler()
	},
	collections: [
		Categories,
		Products,
		Media,
		Benefits
	],
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts'),
	},
	plugins: [
		cloudStorage({
			collections: {
				'media': {
					adapter: adapter,
				},
			},
		}),
	],
});