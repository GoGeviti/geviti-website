import { Metadata, NextPage } from 'next';

import { OnboardingComponent } from '@/components';

export type PageProps = {
	params: { id: string; };
	searchParams: { [key: string]: string | string[] | undefined; };
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
	const variantID = searchParams?.variant;

	return {
		themeColor: variantID ? '#181A1C' : '#FFFFFF'
	};
}

const OnboardingPage: NextPage<PageProps> = pageProps => {
	return (
		<OnboardingComponent.Main { ...pageProps } />
	);
};

export default OnboardingPage;