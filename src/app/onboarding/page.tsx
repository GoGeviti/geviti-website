import { NextPage, Viewport } from 'next';

import { CheckoutComponent } from '@/components';
import IntroScreen from '@/components/IntroScreen';

export type PageProps = {
	searchParams: { [key: string]: string | string[] | undefined; };
};

export async function generateViewport({ searchParams }: PageProps): Promise<Viewport> {
	const userEmail = searchParams?.email;

	return {
		themeColor: !userEmail ? '#181A1C' : '#FFFFFF'
	};
}

const OnboardingPage: NextPage<PageProps> = async({ searchParams }) => {
	return (
		<IntroScreen type='image'>
			<CheckoutComponent.Main searchParams={ searchParams } />
		</IntroScreen>
	);
};

export default OnboardingPage;
