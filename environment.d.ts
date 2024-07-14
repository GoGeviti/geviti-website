declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'development' | 'production';
			BASE_API_URL: string;
			NOTION_WAITING_LIST_DATABASE_ID: string;
			NOTION_SUBSCRIPTION_DATABASE_ID: string;
			NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: string;
			NEXT_PUBLIC_APPLE_STORE_URL: string;
			NEXT_PUBLIC_PLAY_STORE_URL: string;
			NOTION_DATABASE_ID: string;
			NEXT_PUBLIC_STAGE: 'development' | 'production';
			NEXT_PUBLIC_PRECHECKOUT_WAITLIST: 'true' | 'false';
		}
	}
	interface Window {
    dataLayer: any[];
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { };
