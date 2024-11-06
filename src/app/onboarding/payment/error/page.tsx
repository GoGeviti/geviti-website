import { NextPage, Viewport } from 'next';

import { CheckoutComponent } from '@/components';

export const viewport: Viewport = {
	themeColor: '#FFFFFF'
};

type PageProps = {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const PaymentErrorPage: NextPage<PageProps> = async props => {
  	const searchParams = await props.searchParams;
  	return <CheckoutComponent.PaymentState
		searchParams={ searchParams }
		type='error' />;
};

export default PaymentErrorPage;
