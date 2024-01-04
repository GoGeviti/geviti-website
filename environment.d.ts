declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'development' | 'production';
			BASE_API_URL: string;
			NOTION_WAITING_LIST_DATABASE_ID: string;
			NOTION_DATABASE_ID: string;
			NEXT_PUBLIC_STAGE: 'development' | 'production';
		}
	}
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { };
