import { NextPage, Viewport } from 'next';
import { redirect } from 'next/navigation';

import { OnboardingComponent } from '@/components';
import { getCartData } from '@/services/precheckout';

export type PageProps = {
	searchParams: { [key: string]: string | string[] | undefined; };
};

export async function generateViewport({ searchParams }: PageProps): Promise<Viewport> {
	const variantID = searchParams?.variant;

	return {
		themeColor: variantID ? '#181A1C' : '#FFFFFF'
	};
}

const OnboardingPage: NextPage<PageProps> = ({ searchParams }) => {
	const variantID = searchParams?.variant;
	const cartData = getCartData();

	if (variantID && !cartData?.variantID) {
		redirect('/onboarding');
	}

	return (
		<OnboardingComponent.Main
			searchParams={ searchParams }
			state={ cartData } />
	);
};

export default OnboardingPage;