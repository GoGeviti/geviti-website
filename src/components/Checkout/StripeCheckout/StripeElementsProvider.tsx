'use client';

import { FC, useEffect } from 'react';

import StripeForm from './StripeForm';

type BillingFormProps = {
	handleCheckout: () => void;
};
const StripeElementsProvider: FC<BillingFormProps> = ({
	handleCheckout,
}) => {
	useEffect(() => {
		setTimeout(() => (document.body.style.pointerEvents = ''), 0);
	}, []);

	return (
		<StripeForm
			handleCheckout={ handleCheckout }
		/>
	);
};

export default StripeElementsProvider;
