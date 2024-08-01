/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
	FC, useEffect, useMemo, useRef, useState
} from 'react';
import  Autocomplete from 'react-google-autocomplete';
import {
	CardCvcElement,
	CardExpiryElement,
	CardNumberElement,
} from '@stripe/react-stripe-js';
import { Stripe, StripeElements, StripeError } from '@stripe/stripe-js';
import { FormikProps, useFormik } from 'formik';
import { toast } from 'sonner';

import { Spinner } from '@/components/Icons/Spinner';
import { statesData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { IPrecheckout } from '@/interfaces';
import { FormCheckoutSchema } from '@/validator/checkout';

import PrivacyPolicyStatement from '../PrivacyPolicyStatement';
import CustomSelect from '../Select';
import TextField from '../TextField';

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
	'placeholder:text-[#AEB1B2] focus:border-[#E6E7E7]'
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

const initialValues = {
	full_name: '',
	email: '',
	state: '',
	address: '',
	city: '',
	zip_code: '',
};

const StripeForm: FC<StripeFormProps> = ({
	stripe,
	elements,
	totalPrice,
	loading,
	handleCheckout,
}) => {
	const [stripeResponseLoading, setStripeResponseLoading] = useState(false);
	const [termsChecked, setTermsChecked] = useState(false);
	const [statesChecked, setStatesChecked] = useState(false);
	const [nameInput, setNameInput] = useState('');
	const [isCardNumberInputComplete, setIsCardNumberInputComplete] = useState(false);
	const [isCardExpiryInputComplete, setIsCardExpiryInputComplete] = useState(false);
	const [isCardCvcInputComplete, setIsCardCvcInputComplete] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(false);

	const formLoading = useMemo(
		() => stripeResponseLoading || loading,
		[stripeResponseLoading, loading]
	);

	const formik: FormikProps<IPrecheckout.BillingInfo> = useFormik<IPrecheckout.BillingInfo>({
		validateOnBlur: formSubmitted,
		validateOnChange: formSubmitted,
		validationSchema: FormCheckoutSchema,
		initialValues: initialValues,
		enableReinitialize: true,
		onSubmit: async(form: IPrecheckout.BillingInfo) => {
			console.log(form)
			if (!stripe || !elements || !isCardExpiryInputComplete || !isCardCvcInputComplete) {
				return;
			}
			const cardNumberElement = elements.getElement(CardNumberElement);
			
			try {
				setStripeResponseLoading(true);
				const tokenResult = await stripe.createToken(cardNumberElement!);
				setStripeResponseLoading(false);
				if (tokenResult?.error) {
					throw tokenResult.error;
				}
				handleCheckout(tokenResult.token.id);
			} catch (error) {
				const err = error as StripeError;
				setStripeResponseLoading(false);
				toast.error(err.message);
			}
		},
	});

	const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormSubmitted(true);
		formik.handleSubmit();
	};

	const onPlaceSelected = (place: any) => {
		// const address = place.formatted_address;
		const addressComponents = place.address_components;
		const city = addressComponents.find((item:any) => item.types.includes('locality'))?.long_name;
		const state = addressComponents.find((item:any) => item.types.includes('administrative_area_level_1'))?.short_name;
		const zipCode = addressComponents.find((item:any) => item.types.includes('postal_code'))?.long_name;
		const address1 = addressComponents.find((item:any) => item.types.includes('street_number'))?.long_name;
		const address2 = addressComponents.find((item:any) => item.types.includes('route'))?.long_name;

		formik.setFieldValue('city', city ?? '');
		formik.setFieldValue('state', state ?? '');
		formik.setFieldValue('zip_code', zipCode ?? '');
		formik.setFieldValue('address', address1 + ' ' + address2);
	}
	const addressRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (addressRef.current) {
			const observer = new MutationObserver(mutationsList => {
				for (const mutation of mutationsList) {
					if (mutation.type === 'attributes' && mutation.attributeName === 'autocomplete') {
						if (addressRef?.current?.getAttribute('autocomplete') !== 'cc-csv') {
							addressRef?.current?.setAttribute('autocomplete', 'cc-csv');
						}
					}
				}
			});
	
			observer.observe(addressRef.current, { attributes: true });
	
			// Clean up the observer on component unmount
			return () => observer.disconnect();
		}
	}, [addressRef])

	const onChangeInputRestrictNumber = (key: string, val: string) => {
		const updatedVal = val.replace(/[^\d]/g, '');
		formik.setFieldValue(key, updatedVal);
	};

	return (
		<form onSubmit={ handleSubmit }>
			<div className='flex flex-col justify-center items-center gap-2 w-full lg:mt-14 lg:pt-9'>
				<div className={ clsxm('relative flex flex-col lg:w-[70%]') }>
					<h1 className='text-[28px]'>Billing info</h1>
					<h4 className='text-sm mt-6 mb-3'>Email</h4>
					<TextField
						isLight
						id='email'
						name='email'
						placeholder='Your Email'
						value={ formik.values.email }
						onChange={ formik.handleChange }
						isError={ !!formik.errors.email }
						errorMessage={ formik.errors.email }
						wrapperClassName='w-full'
						className='h-[54px] lg:h-[63px] lg:text-lg'
					/>
					<h4 className='text-sm mt-6'>Billing Address</h4>
					<div className='mt-3 flex flex-col gap-[14px]'>
						<TextField
							isLight
							id='full_name'
							name='full_name'
							placeholder='Name'
							value={ formik.values.full_name }
							onChange={ formik.handleChange }
							isError={ !!formik.errors.full_name }
							errorMessage={ formik.errors.full_name }
							wrapperClassName='w-full'
							className='h-[54px] lg:h-[63px] lg:text-lg'
						/>
						<div className='flex flex-col'>
							<Autocomplete
								apiKey={ process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }
								onPlaceSelected={ onPlaceSelected }
								options={ {
									types: ['address'],
									componentRestrictions: { country: 'us' }
								} }
								ref={ addressRef }
								id='address'
								placeholder='Address'
								className={ clsxm(
									'block w-full h-[54px] lg:h-[63px] border-0 outline-red-600 transform focus:outline-none transition-colors duration-300 rounded-[10px]',
									'text-primary bg-white border-[#E6E7E7] border placeholder:text-[#AEB1B2] focus:border-[#E6E7E7] text-xs lg:text-lg font-normal !leading-normal font-Poppins px-6 py-18px',
									!!formik.errors.address ? 'ring-1 ring-red-primary focus:ring-1 focus:ring-red-primary' : '!ring-0 focus:!ring-1 !ring-grey-primary',
								) }
								onChange={ (e:any) => formik.setFieldValue('address', (e.target as HTMLInputElement)?.value) }
								value={ formik.values.address }
							/>
							{ !!formik.errors.address && formik.errors.address && (
								<p className='text-red-primary text-[10px] mt-1 text-left'>{ formik.errors.address }</p>
							) }
						</div>
						<div className='grid grid-cols-3 gap-[14px]'>
							<TextField
								isLight
								id='city'
								name='city'
								placeholder='City'
								value={ formik.values.city }
								onChange={ formik.handleChange }
								isError={ !!formik.errors.city }
								errorMessage={ formik.errors.city }
								wrapperClassName='w-full'
								className='h-[54px] lg:h-[63px] lg:text-lg'
							/>
							<TextField
								isLight
								id='zip_code'
								name='zip_code'
								type='text'
								inputMode='numeric'
								placeholder='Zip'
								autoComplete='cc-csv'
								value={ formik.values.zip_code }
								onChange={ e => onChangeInputRestrictNumber('zip_code', e.target.value) }
								isError={ !!formik.errors.zip_code }
								errorMessage={ formik.errors.zip_code }
								className='h-[54px] lg:h-[63px] lg:text-lg'
							/>
							<CustomSelect
								size='default'
								isLight
								placeholder='State'
								options={ statesData.states.options }
								value={ formik.values.state }
								onChange={ val => formik.setFieldValue('state', val) }
								isError={ !!formik.errors.state }
								errorMessage={ formik.errors.state }
							/>
						</div>
					</div>
					<h4 className='text-sm mt-6'>Card Information</h4>
					<div className='pt-4'>
						<input
							type='text'
							name='name_on_card'
							placeholder='Name on card'
							className={ clsxm(
								inputStyles,
								(formSubmitted && !nameInput) ? 'ring-1 ring-red-primary focus:ring-1 focus:ring-red-primary' : '!ring-0 focus:!ring-1 !ring-grey-primary'
							)  }
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
							className={ clsxm(
								inputStyles,
								(formSubmitted && !isCardNumberInputComplete) ? 'ring-1 ring-red-primary focus:ring-1 focus:ring-red-primary' : '!ring-0 focus:!ring-1 !ring-grey-primary'
							) }
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
								className={ clsxm(
									inputStyles,
									'mr-[14px]',
									(formSubmitted && !isCardExpiryInputComplete) ? 'ring-1 ring-red-primary focus:ring-1 focus:ring-red-primary' : '!ring-0 focus:!ring-1 !ring-grey-primary'
								) }
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
								className={ clsxm(
									inputStyles,
									(formSubmitted && !isCardCvcInputComplete) ? 'ring-1 ring-red-primary focus:ring-1 focus:ring-red-primary' : '!ring-0 focus:!ring-1 !ring-grey-primary'
								) }
								onChange={ ({ empty }) => {
									setIsCardCvcInputComplete(!empty);
								} }
							/>
							{ formSubmitted && !isCardCvcInputComplete && (
								<p className={ errorTextStyles }>Please enter card cvc</p>
							) }
						</div>
						
					</div>
					<div className='mt-6 flex items-start gap-x-[22px]'>
						<input
							id='checkout_state'
							type='checkbox'
							title=''
							className='h-5 w-5 mt-2.5 rounded-[1px] text-grey-100 checked:text-primary outline outline-offset-2 outline-2 focus:outline-1 focus:text-primary focus:ring-grey-100 ring-black-secondary border-none ml-1'
							onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setStatesChecked(e.target.checked) }
							disabled={ formLoading }
						/>
						<label
							htmlFor='checkout_state'
						>
							<p className='text-sm text-[#6A6E70] font-Poppins'>I confirm I live in the state mentioned above and recognize that Geviti’s Premium Tier membership is only available in <span className='text-primary underline cursor-pointer'>these states.</span></p>
						</label>
					</div>
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
						disabled={ formLoading || !termsChecked || !statesChecked }
						className={ `h-[58px] my-10 py-3 px-[42px] text-white rounded-[1000px] ${(termsChecked && statesChecked) ? 'bg-black' : 'bg-grey-700'}` }
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
