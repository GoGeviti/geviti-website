import { NextPage } from 'next';

import { getProductMemberhsip } from '@/components/Checkout/api/onboarding';
import StripeCheckout from '@/components/Checkout/StripeCheckout';
import IntroScreen from '@/components/IntroScreen';

type PageProps = {
	searchParams:  Promise<{ [key: string]: string | string[] | undefined }>;
};

const PaymentSuccessPage: NextPage<PageProps> = async props => {
	const searchParams = await props.searchParams;
	// const productId = searchParams?.product_id;
	// const priceId = searchParams?.price_id;

	const productMembership = await getProductMemberhsip();

	return (
		<IntroScreen type='image'>
			<StripeCheckout
				priceData={ productMembership }
				searchParams={ searchParams } />
		</IntroScreen>
	);
};

export default PaymentSuccessPage;
