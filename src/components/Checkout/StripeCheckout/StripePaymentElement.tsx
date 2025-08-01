'use client'
import React, { useState } from 'react'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { toast } from 'sonner'

import { Spinner } from '@/components/Icons/Spinner'
import clsxm from '@/helpers/clsxm'
import { AccountInfo, AddressInfo } from '@/interfaces/precheckout'
// import { IPrecheckout } from '@/interfaces'
import { deleteKlaviyoProfileFromList } from '@/services/klaviyo'
import { useCheckoutStore } from '@/store/checkoutStore'

// import { DiscountReturnType, ProductsResponse } from '../api/types'
import PrivacyPolicyStatement from '../PrivacyPolicyStatement'

type StripePaymentElementProps = {
	// totalPrice: number;
	email : string;
	token : string;
	// coupon : string;
	statesChecked: boolean;
	// products: ProductsResponse[];
	// priceId: string | string[] | undefined;
	// discount:DiscountReturnType | null;
	// form: IPrecheckout.BillingInfo,
	klaviyoRes? : {
		profileId?: string;
		listId?: string;
	}
	formAddress: AddressInfo
	formAccontInfo: AccountInfo
}

const StripePaymentElement:React.FC<StripePaymentElementProps> = ({
	// totalPrice,
	email,
	token,
	statesChecked,
	// coupon,
	// products,
	// priceId,
	// discount,
	// form,
	klaviyoRes,
	formAddress,
	formAccontInfo,
}) => {

	const { discount, promoCode: coupon, totalPrice, productMembership, selectedProductPrice } = useCheckoutStore();

	const [formLoading, setFormLoading] = useState(false)
	const [termsChecked, setTermsChecked] = useState(false)

	const stripe = useStripe();
	const elements = useElements();

	const handleCheckout = async() => {
		setFormLoading(true);
		if (!stripe || !elements) {
			toast.error('Stripe is not available right now. Please try again later.');
			return;
		}

		const { error, paymentIntent } = await stripe.confirmPayment({
			elements,
			redirect: 'if_required', // Disable automatic redirect
			confirmParams: {
				return_url: `${window.location.protocol}//${window.location.host}/onboarding/payment/success?email=${email}&token=${token}&price=${totalPrice}`,
			},
		});

		if (error) {
			setFormLoading(false);
			if (error.type === 'card_error' || error.type === 'validation_error' || error.type === 'invalid_request_error') {
				toast.error(error.message);
			} else {
				toast.error('An unexpected error occurred.');
			}
			return;
		}

		// Payment successful
		if (paymentIntent && paymentIntent.status === 'succeeded') {
			// Push to dataLayer first
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({ ecommerce: null });
			window.dataLayer.push({
				event: 'purchase',
				user_data: {
					user_id: '',
					email: formAccontInfo.email,
					phone_number: formAccontInfo.phoneNumber,
					address: {
						first_name: formAccontInfo.firstName,
						last_name: formAccontInfo.lastName,
						street: formAddress.line1,
						city: formAddress.city,
						region: formAddress.state,
						region_code: formAddress.state,
						postal_code: formAddress.zip,
						country: 'us',
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
					items: [
						{
							item_id: productMembership?.productId.toString() ?? '',
							item_name: productMembership?.productName ?? '',
							affiliation: 'GoGeveti',
							coupon: coupon || '',
							currency: 'USD',
							index: '0',
							discount: discount?.amount_off ?? 0,
							item_brand: '',
							item_category: '',
							item_category2: '',
							item_variant: selectedProductPrice?.billingFrequency,
							price: Number(selectedProductPrice?.price),
							quantity: 1
						}
					]
				}
			});

			// Fire Magellan Purchase event
			if (typeof window !== 'undefined' && window.MAI) {
				window.MAI.emit('purchase', totalPrice, 'USD', token,
					{
						quantity: 1,
						discountCode: coupon || undefined,
						isNewCustomer: true,
						lineItems: [
							{
								quantity: 1,
								productId: productMembership?.productId.toString() ?? '',
								productName: productMembership?.productName ?? '',
								productType: 'membership',
								productVendor: 'GoGeveti',
								variantId: selectedProductPrice?.priceId ?? '',
								variantName: selectedProductPrice?.billingFrequency ?? ''
							}
						]
					}
				);
			}

			if (typeof window !== 'undefined' && window.vbpx) {
				window.vbpx('event', 'purchase', { 'price_usd': totalPrice });
			}

			try {
				// Wait for Klaviyo operation to complete
				await deleteKlaviyoProfileFromList(klaviyoRes?.profileId ?? '', klaviyoRes?.listId ?? '');
        
				// After both dataLayer push and Klaviyo deletion are complete, redirect
				window.location.href = `${window.location.protocol}//${window.location.host}/onboarding/payment/success?email=${email}&token=${token}&price=${totalPrice}`;
			} catch (errorKlaviyo:any) {
				console.error('Error deleting Klaviyo profile:', errorKlaviyo);
				// Still redirect even if Klaviyo deletion fails
				window.location.href = `${window.location.protocol}//${window.location.host}/onboarding/payment/success?email=${email}&token=${token}&price=${totalPrice}`;
			}
		}

		setFormLoading(false);
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
					className='h-5 w-5 mt-2.5 cursor-pointer rounded-[1px] text-grey-100 checked:text-primary outline outline-offset-2 outline-2 focus:outline-1 focus:text-primary focus:ring-grey-100 ring-black-secondary border-none ml-1'
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