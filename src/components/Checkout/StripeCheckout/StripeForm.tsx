/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
	FC, useEffect, useMemo, useRef, useState
} from 'react';
import  Autocomplete from 'react-google-autocomplete';
import InputMask from '@mona-health/react-input-mask';
import {
	EmbeddedCheckout,
	EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { FormikProps, useFormik } from 'formik';
import { toast } from 'sonner';

import { Spinner } from '@/components/Icons/Spinner';
import { statesData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { IPrecheckout } from '@/interfaces';
import { FormCheckoutSchema } from '@/validator/checkout';

import { createSession, validateState } from '../api/onboarding';
import { ProductsResponse } from '../api/types';
import CustomDatePicker from '../DatePicker';
import PrivacyPolicyStatement from '../PrivacyPolicyStatement';
import CustomSelect from '../Select';
import TextField from '../TextField';

type StripeFormProps = {
  // stripe: Stripe | null;
  totalPrice?: number;
  handleCheckout: (token: string) => void;
  loading: boolean;
	coupon : string;
	priceId: string | string[] | undefined
	selectedProduct : ProductsResponse[]
};

const initialValues = {
	full_name: '',
	email: '',
	state: '',
	address_1: '',
	address_2: '',
	city: '',
	zip_code: '',
	birthdate: null,
	gender: '',
	phone_number: '',
};

const StripeForm: FC<StripeFormProps> = ({
	// elements,
	totalPrice,
	loading,
	coupon,
	selectedProduct,
	priceId
}) => {
	const [stripeResponseLoading, setStripeResponseLoading] = useState(false);
	const [termsChecked, setTermsChecked] = useState(false);
	const [statesChecked, setStatesChecked] = useState(false);
	const [sessionSecretS, setSessionSecret] = useState('');
	// const [emailInput, setEmailInput] = useState('');
	// const [isCardNumberInputComplete, setIsCardNumberInputComplete] = useState(false);
	// const [isCardExpiryInputComplete, setIsCardExpiryInputComplete] = useState(false);
	// const [isCardCvcInputComplete, setIsCardCvcInputComplete] = useState(false);
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
			// console.log(form)
			// if (!stripe || !elements || !isCardExpiryInputComplete || !isCardCvcInputComplete) {
			// 	return;
			// }
			// const cardNumberElement = elements.getElement(CardNumberElement);
			
			try {
				setStripeResponseLoading(true);
				const isValidState = await validateState({
					firstName: form.full_name,
					lastName: '',
					email: form.email,
					addressLine1: form.address_1,
					addressLine2: form.address_2,
					city: form.city,
					dob: form.birthdate,
					gender: form.gender.toLowerCase(),
					phoneNumber: form.phone_number,
					state: form.state,
					zipCode: form.zip_code
				})
				if (!isValidState.stateExists) {
					throw 'State not available right now. Please try again later.';
				}
				const sessionSecret = await createSession({
					user: {
						firstName: form.full_name,
						lastName: '',
						email: form.email,
						addressLine1: form.address_1,
						addressLine2: form.address_2,
						city: form.city,
						dob: form.birthdate,
						gender: form.gender,
						phoneNumber: form.phone_number,
						state: form.state,
						zipCode: form.zip_code
					},
					coupon: coupon,
					product: selectedProduct.map(product => {
						return {
							productId: product.stripeProductId,
							productName: product.name,
							quantity: 1,
							price: product.productType === 'one_time' ? Number(product.productPrices.find(e => e.priceId === product.defaultPrice)?.price) : Number(product.productPrices.find(e => e.priceId === priceId)?.price),
							price_id: priceId?.toString() ?? ''
						}
					})
				})
				setSessionSecret(sessionSecret.clientSecret);
				setStripeResponseLoading(false);
			} catch (error:any) {
				setStripeResponseLoading(false);
				if (typeof error === 'string') {
					toast.error(error);
				} else {
					toast.error('An error occurred');
				}
			}
		},
	});

	const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
		
		e.preventDefault();
		setFormSubmitted(true);
		formik.handleSubmit();
	};

	const onPlaceSelected = (place: any) => {
		const addressComponents = place.address_components;
		const city = addressComponents.find((item:any) => item.types.includes('locality'))?.long_name;
		const state = addressComponents.find((item:any) => item.types.includes('administrative_area_level_1'))?.short_name;
		const zipCode = addressComponents.find((item:any) => item.types.includes('postal_code'))?.long_name;
		const address1 = addressComponents.find((item:any) => item.types.includes('street_number'))?.long_name;
		const address2 = addressComponents.find((item:any) => item.types.includes('route'))?.long_name;

		formik.setFieldValue('city', city ?? '');
		formik.setFieldValue('state', state ?? '');
		formik.setFieldValue('zip_code', zipCode ?? '');
		formik.setFieldValue('address_1', address1 + ' ' + address2 ?? '');
		formik.setFieldValue('address_2', '');
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

	const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_TOKEN_STAGING || 'pk_test_fAj7WlTrG0uc5Z9WHKQDdoTq');

	return (
		<form
			onSubmit={ handleSubmit }>
			<div className='flex flex-col justify-center items-center gap-2 w-full lg:mt-14 lg:pt-9'>
				<div className={ clsxm('relative flex flex-col lg:w-[70%]') }>
					<h1 className='text-[28px]'>Personal Information</h1>
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
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5'>
							<CustomDatePicker
								isLight
								value={ formik.values.birthdate }
								onSelect={ (date: Date) => formik.setFieldValue('birthdate', date) }
								isError={ !!formik.errors.birthdate }
								errorMessage={ formik.errors.birthdate }
								placeholder='Date of birth MM/DD/YYYY'
							/>
							<CustomSelect
								isLight
								placeholder='Sex'
								options={ statesData.gender.options }
								value={ formik.values.gender }
								onChange={ val => formik.setFieldValue('gender', val) }
								isError={ !!formik.errors.gender }
								errorMessage={ formik.errors.gender }
							/>
						</div>
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5'>
							<TextField
								isLight
								id='email'
								name='email'
								placeholder='Email'
								value={ formik.values.email }
								onChange={ formik.handleChange }
								isError={ !!formik.errors.email }
								errorMessage={ formik.errors.email }
								wrapperClassName='w-full'
								className='h-[54px] lg:h-[63px] lg:text-lg'
							/>
							<div className='flex flex-col'>
								<InputMask
									mask='+1\ 999 999 9999'
									maskPlaceholder={ null }
									placeholder='Phone Number'
									name='phone_number'
									onChange={ formik.handleChange }
									value={ formik.values.phone_number }
									className={ clsxm(
										'block w-full h-[54px] lg:h-[63px] border outline-red-600 transform focus:outline-none transition-colors duration-300 rounded-[10px]',
										'focus:border-[#E6E7E7] bg-white placeholder:text-[#AEB1B2] border-[#E6E7E7] text-primary text-xs lg:text-lg font-normal !leading-normal font-Poppins px-6 py-18px',
										!!formik.errors.phone_number ? 'ring-1 ring-red-primary focus:ring-1 focus:ring-red-primary' : '!ring-0 focus:!ring-1 !ring-grey-primary',
									) }
								/>
								{ !!formik.errors.phone_number && formik.errors.phone_number && (
									<p className='text-red-primary text-[10px] mt-1 text-left'>{ formik.errors.phone_number }</p>
								) }
							</div>
						</div>
					</div>
					<h4 className='text-sm mt-6'>Home Address</h4>
					<div className='mt-3 flex flex-col gap-[14px]'>
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
								placeholder='Address 1'
								className={ clsxm(
									'block w-full h-[54px] lg:h-[63px] border-0 outline-red-600 transform focus:outline-none transition-colors duration-300 rounded-[10px]',
									'text-primary bg-white border-[#E6E7E7] border placeholder:text-[#AEB1B2] focus:border-[#E6E7E7] text-xs lg:text-lg font-normal !leading-normal font-Poppins px-6 py-18px',
									!!formik.errors.address_1 ? 'ring-1 ring-red-primary focus:ring-1 focus:ring-red-primary' : '!ring-0 focus:!ring-1 !ring-grey-primary',
								) }
								onChange={ (e:any) => formik.setFieldValue('address_1', (e.target as HTMLInputElement)?.value) }
								value={ formik.values.address_1 }
							/>
							{ !!formik.errors.address_1 && formik.errors.address_1 && (
								<p className='text-red-primary text-[10px] mt-1 text-left'>{ formik.errors.address_1 }</p>
							) }
						</div>
						<TextField
							id='address_2'
							name='address_2'
							type='text'
							isLight
							placeholder='Address 2'
							value={ formik.values.address_2 }
							onChange={ formik.handleChange }
							isError={ !!formik.errors.address_2 }
							errorMessage={ formik.errors.address_2 }
							className='h-[54px] lg:h-[63px] lg:text-lg'
						/>
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
					</div>
					{ sessionSecretS && (
						<div className='pb-6'>
							<h1 className='text-[28px] mt-6'>Payment Details</h1>
							{ /* <h4 className='text-sm mt-6 mb-3'>Email</h4>
						<div className=''>
							<input
								type='email'
								name='email'
								placeholder='Email'
								className={ clsxm(
									inputStyles,
									(formSubmitted && !emailInput) ? 'ring-1 ring-red-primary focus:ring-1 focus:ring-red-primary' : '!ring-0 focus:!ring-1 !ring-grey-primary'
								)  }
								autoComplete='off'
								disabled={ formLoading }
								onChange={ e => setEmailInput(e.target.value) }
							/>
							{ formSubmitted && !emailInput && (
								<p className={ errorTextStyles }>Please enter your email</p>
							) }
						</div>
						<h4 className='text-sm mt-6 mb-3'>Card Information</h4>
						<div className=''>
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
						
						</div> */ }
							<div id='checkout'>
								<EmbeddedCheckoutProvider
									stripe={ stripePromise }
									options={ {
										clientSecret: sessionSecretS,
									} }
								>
									<EmbeddedCheckout />
								</EmbeddedCheckoutProvider>
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
						</div>
					) }
					{
						!sessionSecretS && (
							<button
								type='submit'
								disabled={ formLoading || !statesChecked }
								className={ `h-[58px] my-10 py-3 px-[42px] text-white rounded-[1000px] ${(statesChecked) ? 'bg-black' : 'bg-grey-700'}` }
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
						)
					}
				</div>
			</div>
		</form>
	);
};

export default StripeForm;
