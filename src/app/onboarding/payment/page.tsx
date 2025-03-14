import { NextPage } from 'next';

import { getProductMembership } from '@/components/Checkout/api/onboarding';
import StripeCheckout from '@/components/Checkout/StripeCheckout';
import IntroScreen from '@/components/IntroScreen';

type PageProps = {
	searchParams:  Promise<{ [key: string]: string | string[] | undefined }>;
};

const PaymentSuccessPage: NextPage<PageProps> = async props => {
	const searchParams = await props.searchParams;

	const productMembership = await getProductMembership();

	return (
		<IntroScreen type='image'>
			<StripeCheckout
				priceData={ productMembership }
				searchParams={ searchParams } />
		</IntroScreen>
	);
};

export default PaymentSuccessPage;
