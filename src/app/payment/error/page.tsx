import { NextPage, Viewport } from 'next';

import { CheckoutComponent } from '@/components';

export const viewport: Viewport = {
	themeColor: '#FFFFFF'
};

const PaymentErrorPage: NextPage = () => {
	return <CheckoutComponent.PaymentState type='error' />;
};

export default PaymentErrorPage;
