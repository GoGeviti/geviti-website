import { NextPage } from 'next';

import { getProductMembership } from '@/components/Checkout/api/onboarding';
import StripeCheckout from '@/components/Checkout/StripeCheckout';
import IntroScreen from '@/components/IntroScreen';

type PageProps = {
	searchParams:  Promise<{ [key: string]: string | string[] | undefined }>;
};

const PaymentSuccessPage: NextPage<PageProps> = async props => {
	const searchParams = await props.searchParams;

	let productMembership = undefined;
	try {
		productMembership = await getProductMembership();
	} catch (error) {
		// Failed to fetch product membership, continue rendering without it
	}

	return (
		<IntroScreen type='image'>
			<StripeCheckout
				priceData={ productMembership }
				searchParams={ searchParams } />
		</IntroScreen>
	);
};

export default PaymentSuccessPage;
