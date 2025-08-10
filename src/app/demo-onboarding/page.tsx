import { NextPage, Viewport } from 'next';

// import { redirect } from 'next/navigation';
import { OnboardingComponent } from '@/components';
// import { getCartData } from '@/services/precheckout';

export type PageProps = {
	searchParams: Promise<{ [key: string]: string | string[] | undefined; }>;
};

export async function generateViewport(props: PageProps): Promise<Viewport> {
	const searchParams = await props.searchParams;
	const variantID = searchParams?.variant;

	return {
		themeColor: variantID ? '#181A1C' : '#FFFFFF'
	};
}

const OnboardingPage: NextPage<PageProps> = async() => {
	// const searchParams = await props.searchParams;
	// const variantID = searchParams?.variant;
	// const cartData = await getCartData();

	// if (variantID && !cartData?.variantID) {
	// 	redirect('/pricing');
	// }

	return (
		<OnboardingComponent.Main
			searchParams={ {} }
			state={ undefined } />
	);
};

export default OnboardingPage;