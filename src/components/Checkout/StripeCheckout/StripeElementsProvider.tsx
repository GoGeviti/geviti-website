'use client';

import { FC, useEffect } from 'react';

import { ProductsResponse } from '../api/types';

// import { Elements, ElementsConsumer } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
import StripeForm from './StripeForm';

type BillingFormProps = {
  totalPrice?: number;
  handleCheckout: () => void;
  loading: boolean;
	coupon: string;
	priceId: string | string[] | undefined
	selectedProduct : ProductsResponse[]
};
const StripeElementsProvider: FC<BillingFormProps> = ({
	totalPrice,
	handleCheckout,
	loading,
	coupon,
	selectedProduct,
	priceId
}) => {
	// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_TOKEN_STAGING || 'pk_test_fAj7WlTrG0uc5Z9WHKQDdoTq');

	useEffect(() => {
		setTimeout(() => (document.body.style.pointerEvents = ''), 0);
	}, []);

	return (
		<StripeForm
			totalPrice={ totalPrice }
			handleCheckout={ handleCheckout }
			loading={ loading }
			coupon={ coupon }
			selectedProduct={ selectedProduct }
			priceId={ priceId }
		/>
	);
};

export default StripeElementsProvider;
