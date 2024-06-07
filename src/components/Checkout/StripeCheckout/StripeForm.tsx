import React, { FC, useMemo, useRef, useState } from 'react';
import {
	CardCvcElement,
	CardExpiryElement,
	CardNumberElement,
} from '@stripe/react-stripe-js';
import { Stripe, StripeElements, StripeError } from '@stripe/stripe-js';
import { toast } from 'sonner';

import { Spinner } from '@/components/Icons/Spinner';
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

const elementStyles = {
	invalid: {
		color: '#EA3F62',
		iconColor: '#EA3F62'
	},
	base: {
		fontSize: '18px',
	},
};
const errorTextStyles = 'text-red-primary text-[10px] mt-1 text-left';

const StripeForm: FC<StripeFormProps> = ({
	stripe,
	elements,
	totalPrice,
	loading,
	handleCheckout,
}) => {
	const [stripeResponseLoading, setStripeResponseLoading] = useState(false);
	const [termsChecked, setTermsChecked] = useState(false);
	const [nameInput, setNameInput] = useState('');
	const [isCardNumberInputComplete, setIsCardNumberInputComplete] = useState(false);
	const [isCardExpiryInputComplete, setIsCardExpiryInputComplete] = useState(false);
	const [isCardCvcInputComplete, setIsCardCvcInputComplete] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const formLoading = useMemo(
		() => stripeResponseLoading || loading,
		[stripeResponseLoading, loading]
	);

	const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormSubmitted(true);
		if (inputRef.current) {
			console.log('inputRef', inputRef.current.value);
		}

		if (!stripe || !elements || !isCardExpiryInputComplete || !isCardCvcInputComplete) {
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
							onChange={ e => setNameInput(e.target.value) }
						/>
						{ formSubmitted && !nameInput && (
							<p className={ errorTextStyles }>Please enter name on card</p>
						) }
					</div>
					<div className='flex flex-col pt-4'>
						<CardNumberElement
							options={ {
								showIcon: true,
								style: elementStyles,
								iconStyle: 'solid',
								disabled: formLoading,
							} }
							className={ inputStyles }
							onChange={ (({ empty }) => {
								setIsCardNumberInputComplete(!empty);
							}) }
						/>
						{ formSubmitted && !isCardNumberInputComplete && (
							<p className={ errorTextStyles }>Please enter card number</p>
						) }
					</div>
					<div className='flex pt-4'>
						<div className='flex flex-col w-full mr-4'>
							<CardExpiryElement
								options={ {
									style: elementStyles,
									disabled: formLoading,
								} }
								className={ clsxm(inputStyles, 'mr-[14px]') }
								onChange={ ({ empty }) => {
									setIsCardExpiryInputComplete(!empty);
								} }
							/>
							{ formSubmitted && !isCardExpiryInputComplete && (
								<p className={ errorTextStyles }>Please enter card expiry date</p>
							) }
						</div>
						<div className='flex flex-col w-full'>
							<CardCvcElement
								options={ {
									style: elementStyles,
									disabled: formLoading,
								} }
								className={ inputStyles }
								onChange={ ({ empty }) => {
									setIsCardCvcInputComplete(!empty);
								} }
							/>
							{ formSubmitted && !isCardCvcInputComplete && (
								<p className={ errorTextStyles }>Please enter card cvc</p>
							) }
						</div>
						
					</div>
					<div className='mt-10 flex items-center gap-x-[10px]'>
						<input
							id='checkout_terms'
							type='checkbox'
							title=''
							className='h-5 w-5 rounded-[1px] text-grey-100 checked:text-blue-primary outline outline-offset-2 outline-2 focus:outline-1 focus:text-blue-primary focus:ring-grey-100 ring-black-secondary border-none ml-1'
							onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setTermsChecked(e.target.checked) }
							disabled={ formLoading }
						/>
						<label
							htmlFor='checkout_terms'
							className='text-xs text-grey-500 font-BRSonoma leading-normal select-none text-left'
						>
							By checking the box, you confirm that you have read, understood, and agree to abide by our Privacy Policy and Terms of Service.
						</label>
					</div>
					<button
						type='submit'
						disabled={ formLoading || !termsChecked }
						className={ `h-[58px] my-10 py-3 px-[42px] text-white rounded-[1000px] ${termsChecked ? 'bg-black' : 'bg-grey-700'}` }
					>
						<div className='flex items-center justify-center'>
							{ stripeResponseLoading ? (
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
