import { NextPage, Viewport } from 'next';

import { CheckoutComponent } from '@/components';

export const viewport: Viewport = {
	themeColor: '#FFFFFF'
};

const PaymentSuccessPage: NextPage = () => {
	return <CheckoutComponent.PaymentState type='success' />;
};

export default PaymentSuccessPage;
