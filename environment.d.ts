declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'development' | 'production';
			BASE_URL: string;
			DATABASE_URI: string;
			PAYLOAD_SECRET: string;
			PAYLOAD_CONFIG_PATH: string;
			S3_ACCESS_KEY_ID: string;
			S3_SECRET_ACCESS_KEY: string;
			S3_REGION: string;
			S3_BUCKET: string;
			S3_URL: string;
		}
	}
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
