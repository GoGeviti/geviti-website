'use client'
import React, { useState } from 'react'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { toast } from 'sonner'

import { Spinner } from '@/components/Icons/Spinner'
import clsxm from '@/helpers/clsxm'
import { IPrecheckout } from '@/interfaces'

import { DiscountReturnType, ProductsResponse } from '../api/types'
import PrivacyPolicyStatement from '../PrivacyPolicyStatement'

type StripePaymentElementProps = {
  totalPrice: number;
	email : string;
	token : string;
	coupon : string;
	statesChecked: boolean;
	products: ProductsResponse[];
	priceId: string | string[] | undefined;
	discount:DiscountReturnType | null;
	form: IPrecheckout.BillingInfo
}

const StripePaymentElement:React.FC<StripePaymentElementProps> = ({
	totalPrice,
	email,
	token,
	statesChecked,
	coupon,
	products,
	priceId,
	discount,
	form
}) => {

	const [formLoading, setFormLoading] = useState(false)
	const [termsChecked, setTermsChecked] = useState(false)

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
				return_url: `${window.location.protocol}//${window.location.host}/onboarding/payment/success?email=${email}&token=${token}&price=${totalPrice}`,
			},
		});
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({ ecommerce: null });
		window.dataLayer.push({
			event: 'purchase',
			user_data: {
				user_id: '',
				email: form.email,
				phone_number: form.phone_number, // E.164 format
				address: {
					first_name: form.firstName,
					last_name: form.lastName,
					street: form.address_1,
					city: form.city,
					region: form.state,
					region_code: form.state,
					postal_code: form.zip_code,
					country: 'us', // Use 2-letter country codes, per the ISO 3166-1 alpha-2 standard.
				}
			},
			ecommerce: {
				transaction_id: token,
				affiliation: 'GoGeveti',
				value: totalPrice,
				tax: 0,
				shipping: 0,
				currency: 'USD',
				coupon: '',
				items: products.map(product => {
					return {
						item_id: product.stripeProductId,
						item_name: product.name,
						affiliation: 'GoGeveti',
						coupon: coupon || '',
						currency: 'USD',
						index: '0',
						discount: discount?.amount_off ?? 0,
						item_brand: '',
						item_category: '',
						item_category2: '',
						item_variant: product.productPrices.find(e => e.priceId === priceId)?.billingFrequency,
						price: Number(product.productPrices.find(e => e.priceId === priceId)?.price),
						quantity: 1
					}
				})
			}
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
			<div className='mt-[14px] flex items-start gap-x-[22px]'>
				<input
					id='checkout_terms'
					type='checkbox'
					title=''
					className='h-5 w-5 mt-2.5 rounded-[1px] text-grey-100 checked:text-primary outline outline-offset-2 outline-2 focus:outline-1 focus:text-primary focus:ring-grey-100 ring-black-secondary border-none ml-1'
					onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setTermsChecked(e.target.checked) }
					disabled={ formLoading }
				/>
				<label
					htmlFor='checkout_terms'
				>
					<PrivacyPolicyStatement checkout /> { ' ' }
				</label>
			</div>
			<button
				type='submit'
				disabled={ formLoading || !statesChecked || !termsChecked }
				onClick={ () => handleCheckout() }
				className={ clsxm(
					'h-[58px] py-3 px-[42px] text-white rounded-[1000px] w-full mt-5 mb-10',
					(statesChecked && termsChecked) ? 'bg-black' : 'bg-grey-700',
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