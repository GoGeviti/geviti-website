'use client';

import { FC } from 'react';
import { Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import StripeForm from './StripeForm';

type BillingFormProps = {
  totalPrice?: number;
  handleCheckout: (token: string) => void;
  loading: boolean;
};
const StripeElementsProvider: FC<BillingFormProps> = ({
	totalPrice,
	handleCheckout,
	loading,
}) => {
	const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_TOKEN_STAGING || 'pk_test_fAj7WlTrG0uc5Z9WHKQDdoTq');

	return (
		<Elements stripe={ stripePromise }>
			<ElementsConsumer>
				{ ({ stripe, elements }) => (
					<StripeForm
						stripe={ stripe }
						elements={ elements }
						totalPrice={ totalPrice }
						handleCheckout={ handleCheckout }
						loading={ loading }
					/>
				) }
			</ElementsConsumer>
		</Elements>
	);
};

export default StripeElementsProvider;
