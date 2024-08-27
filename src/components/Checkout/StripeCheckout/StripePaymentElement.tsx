'use client'
import React, { useState } from 'react'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { toast } from 'sonner'

import { Spinner } from '@/components/Icons/Spinner'
import clsxm from '@/helpers/clsxm'

type StripePaymentElementProps = {
  totalPrice: number
}

const StripePaymentElement:React.FC<StripePaymentElementProps> = ({
	totalPrice,
}) => {

	const [formLoading, setFormLoading] = useState(false)

	const stripe = useStripe();
	const elements = useElements();

	const handleCheckout = async() => {
		setFormLoading(true);
		if (!stripe || !elements) {
			toast.error('Stripe is not available right now. Please try again later.');
			return
		}

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: `${window.location.protocol}//${window.location.host}/onboarding/payment/success`,
			},
		});
		setFormLoading(false);
		if (error.type === 'card_error' || error.type === 'validation_error' || error.type === 'invalid_request_error') {
			toast.error(error.message);
		} else {
			toast.error('An unexpected error occurred.');
		}
	}

	return (
		<div>
			<PaymentElement
				id='payment-element'
				options={ {
					layout: 'tabs',
				} } />
			<button
				type='submit'
				disabled={ formLoading }
				onClick={ () => handleCheckout() }
				className={ clsxm(
					'h-[58px] py-3 px-[42px] text-white rounded-[1000px] w-full bg-black mt-5 mb-10',
				) }
			>
				<div className='flex items-center justify-center'>
					{ formLoading ? (
						<Spinner />
					) : (
						<span>
							{ `Pay Securely $${ totalPrice }` }
						</span>
					) }
				</div>
			</button>
		</div>
	)
}

export default StripePaymentElement