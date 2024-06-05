import React, { FC, useMemo, useState } from 'react';
import {
	CardCvcElement,
	CardExpiryElement,
	CardNumberElement,
} from '@stripe/react-stripe-js';
import { Stripe, StripeElements, StripeError } from '@stripe/stripe-js';
import { toast } from 'sonner';

import Checkbox from '@/components/Onboarding/Checkbox';
import clsxm from '@/helpers/clsxm';

type StripeFormProps = {
  stripe: Stripe | null;
  elements: StripeElements | null;
  totalPrice?: number;
  handleCheckout: (token: string) => void;
  loading: boolean;
};
const inputStyles = clsxm(
	'block w-full h-[54px] lg:h-[63px] border-[1px] border-grey-100 transform transition-colors duration-300 rounded-[10px]',
	'text-black bg-whitetext-xs lg:text-lg font-normal !leading-normal font-Poppins placeholder:text-grey-500 px-6 py-18px',
	'placeholder-grey-300'
);
const StripeForm: FC<StripeFormProps> = ({
	stripe,
	elements,
	totalPrice,
	loading,
	handleCheckout,
}) => {
	const [stripeResponseLoading, setStripeResponseLoading] = useState(false);
	const [termsChecked, setTermsChecked] = useState(false);

	const formLoading = useMemo(
		() => stripeResponseLoading || loading,
		[stripeResponseLoading, loading]
	);

	const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const cardNumberElement = elements.getElement(CardNumberElement);

		try {
			setStripeResponseLoading(true);
			const { token } = await stripe.createToken(cardNumberElement!);
			setStripeResponseLoading(false);
			if (token) {
				handleCheckout(token.id);
			}
		} catch (error) {
			const err = error as StripeError;
			setStripeResponseLoading(false);
			toast.error(err.message);
		}
	};

	const fontStyle = {
		base: {
			fontSize: '18px',
		},
	};
	return (
		<form onSubmit={ handleSubmit }>
			<div className='flex flex-col justify-center items-center gap-2 w-full lg:mt-14 lg:pt-9'>
				<div className={ clsxm('relative flex flex-col w-[90%] lg:w-[70%]') }>
					<h1 className='text-2xl pt-12'>Payment Details</h1>
					<h4 className='text-sm mt-6'>Card Information</h4>
					<div className='pt-4'>
						<input
							type='text'
							name='name_on_card'
							placeholder='Name on card'
							className={ inputStyles }
							autoComplete='off'
							disabled={ formLoading }
						/>
					</div>
					<div className='pt-4'>
						<CardNumberElement
							options={ {
								showIcon: true,
								style: fontStyle,
								disabled: formLoading,
							} }
							className={ inputStyles }
						/>
					</div>
					<div className='flex pt-4'>
						<CardExpiryElement
							options={ {
								style: fontStyle,
								disabled: formLoading,
							} }
							className={ clsxm(inputStyles, 'mr-[14px]') }
						/>
						<CardCvcElement
							options={ {
								style: fontStyle,
								disabled: formLoading,
							} }
							className={ inputStyles }
						/>
					</div>
					<div className='mt-10'>
						<Checkbox
							className='w-[14px] h-[14px] lg:w-2.5 lg:h-2.5 2xl:w-[14px] 2xl:h-[14px] text-blue-primary outline-primary'
							labelClassName='text-sm text-grey-500 ml-2'
							label={
								'By checking the box, you confirm that you have read, understood, and agree to abide by our Privacy Policy and Terms of Service.'
							}
							onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setTermsChecked(e.target.checked) }
							disabled={ formLoading }
						/>
					</div>
					<button
						type='submit'
						disabled={ formLoading || !termsChecked }
						className={ `h-[58px] my-10 py-3 px-[42px] text-white rounded-[1000px] ${termsChecked ? 'bg-black' : 'bg-grey-700'}` }
					>
						<div className='flex items-center justify-center'>
							{ formLoading ? (
								<Spinner />
							) : (
								<span>
									Pay Securely ${ totalPrice }
								</span>
							) }

						</div>
					</button>
				</div>
			</div>
		</form>
	);
};

export default StripeForm;

function Spinner() {
	return (
		<svg
			aria-hidden='true'
			className='w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
			viewBox='0 0 100 101'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
				fill='currentColor'/>
			<path
				d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
				fill='currentFill'/>
		</svg>)
	
}
