'use client';

import { FC, useEffect } from 'react';

import StripeForm from './StripeForm';

type BillingFormProps = {
	handleCheckout: () => void;
	geviti_token?:string
};
const StripeElementsProvider: FC<BillingFormProps> = ({
	handleCheckout,
	geviti_token
}) => {
	useEffect(() => {
		setTimeout(() => (document.body.style.pointerEvents = ''), 0);
	}, []);

	return (
		<StripeForm
			geviti_token={ geviti_token }
			handleCheckout={ handleCheckout }
		/>
	);
};

export default StripeElementsProvider;
