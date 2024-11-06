import { NextPage, Viewport } from 'next';

import { CheckoutComponent } from '@/components';
import IntroScreen from '@/components/IntroScreen';

export type PageProps = {
	searchParams: Promise<{ [key: string]: string | string[] | undefined; }>;
};

export async function generateViewport(props: PageProps): Promise<Viewport> {
	const searchParams = await props.searchParams;
	const userEmail = searchParams?.email;

	return {
		themeColor: !userEmail ? '#181A1C' : '#FFFFFF'
	};
}

const OnboardingPage: NextPage<PageProps> = async props => {
	const searchParams = await props.searchParams;
	return (
		<IntroScreen type='image'>
			<CheckoutComponent.Main searchParams={ searchParams } />
		</IntroScreen>
	);
};

export default OnboardingPage;
