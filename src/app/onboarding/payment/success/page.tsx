import { NextPage, Viewport } from 'next';

import { CheckoutComponent } from '@/components';

export const viewport: Viewport = {
	themeColor: '#FFFFFF'
};

type PageProps = {
	searchParams: { [key: string]: string | string[] | undefined; };
};

const PaymentSuccessPage: NextPage<PageProps> = async({ searchParams }) => {
	return <CheckoutComponent.PaymentState
		searchParams={ searchParams }
		type='success' />;
};

export default PaymentSuccessPage;
