import { NextPage } from 'next';

import StripeCheckout from '@/components/Checkout/StripeCheckout';
import IntroScreen from '@/components/IntroScreen';

type PageProps = {
	searchParams:  Promise<{ [key: string]: string | string[] | undefined }>;
};

const PaymentSuccessPage: NextPage<PageProps> = async props => {
	const searchParams = await props.searchParams;
	return (
		<IntroScreen type='image'>
			<StripeCheckout searchParams={ searchParams } />
		</IntroScreen>
	);
};

export default PaymentSuccessPage;
