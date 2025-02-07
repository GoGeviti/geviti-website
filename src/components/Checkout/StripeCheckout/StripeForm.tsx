/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
	FC, useEffect, useMemo, useRef, useState
} from 'react';
import Autocomplete from 'react-google-autocomplete';
import InputMask from '@mona-health/react-input-mask';
import { Elements, } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { FormikProps, useFormik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { Dialog, DialogContent } from '@/components/Dialog';
import { Spinner } from '@/components/Icons/Spinner';
import { statesData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { IPrecheckout } from '@/interfaces';
import { createKlaviyoProfile } from '@/services/klaviyo';
import { useCheckoutStore } from '@/store/checkoutStore';
import { FormCheckoutSchema } from '@/validator/checkout';

import { createSession, joinWaitListV2, validateState, validateVitalBlood } from '../api/onboarding';
// import { DiscountReturnType, ProductsResponse } from '../api/types';
import CustomDatePicker from '../DatePicker';
import { ExclamationIcon } from '../Payment/State';
import CustomSelect from '../Select';
import TextField from '../TextField';

import StripePaymentElement from './StripePaymentElement';

type StripeFormProps = {
  // stripe: Stripe | null;
//   totalPrice?: number;
  handleCheckout: () => void;
//   loading: boolean;
// 	coupon : string;
// 	priceId: string | string[] | undefined
// 	selectedProduct : ProductsResponse[];
// 	discount:DiscountReturnType | null;
};

const initialValues = {
	firstName: '',
	lastName: '',
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
	// totalPrice,
	// loading,
	// coupon,
	// selectedProduct,
	// priceId,
	// discount
}) => {

	const { checkoutLoading: loading, promoCode: coupon, productMembership: selectedProduct, selectedProductPrice } = useCheckoutStore();

	const router = useRouter();
	const [stripeResponseLoading, setStripeResponseLoading] = useState(false);
	const [statesChecked, setStatesChecked] = useState(false);
	const [sessionSecretS, setSessionSecret] = useState('');
	const [klaviyoRes, setKlaviyoRes] = useState({
		profileId: '',
		listId: ''
	})
	const [token, setToken] = useState('');
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [isOpenDialogState, setIsOpenDialogState] = useState(false);
	const [isOpenDialogNotAvailableState, setIsOpenDialogNotAvailableState] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [referral, setReferral] = useState('')

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
			try {
				setStripeResponseLoading(true);
				const isValidState = await validateState({
					firstName: form.firstName,
					lastName: form.lastName,
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
					setStripeResponseLoading(false);
					return setIsOpenDialogNotAvailableState(true)
				}

				          // Validate vital bloodwork availability
				const vitalBloodAvailability = await validateVitalBlood({
					userAddress: {
						line1: form.address_1,
						line2: form.address_2,
						city: form.city,
						state: form.state,
						zip: form.zip_code,
					},
				});

				if (!vitalBloodAvailability.isAddressValid) {
					setStripeResponseLoading(false);
					toast.error(
						vitalBloodAvailability.message ||
						'Vital bloodwork is not available in your area'
					);
					return;
				}

				const getFPTid = () => {
					if (typeof window !== 'undefined') {
						return (window as any).FPROM?.data?.tid;
					}
					return undefined;
				};

				const sessionSecret = await createSession({
					header: {
						'Authorization': 'Bearer ' + isValidState.token,
					},
					body: {
						user: {
							firstName: form.firstName,
							lastName: form.lastName,
							email: form.email,
							addressLine1: form.address_1,
							addressLine2: form.address_2,
							city: form.city,
							dob: form.birthdate,
							gender: form.gender.toLowerCase(),
							phoneNumber: form.phone_number,
							state: form.state,
							zipCode: form.zip_code
						},
						coupon: coupon,
						referral: referral.length ? referral : undefined,
						fp_tid: getFPTid(),
						product: [{
							productId: selectedProduct?.productId.toString() ?? '',
							productName: selectedProduct?.productName ?? '',
							quantity: 1,
							price: selectedProductPrice?.price ?? 0,
							price_id: selectedProductPrice?.priceId ?? ''
						}],
						// payment_token: isValidState.token
					}
				})
				const klaviyo = await createKlaviyoProfile({
					data: {
						type: 'profile',
						attributes: {
							firstName: form.firstName,
							lastName: form.lastName,
							location: {
								city: form.city,
								region: form.state,
								address1: form.address_1,
								address2: form.address_2,
								zip: form.zip_code,
							},
							email: form.email,
							phoneNumber: form.phone_number,
						}
					}
				}, 'UqUaJC')
				setKlaviyoRes({
					profileId: klaviyo.profileId ?? '',
					listId: klaviyo.listId ?? ''
				})
				setToken(sessionSecret.token);
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
		formik.setFieldValue('address_1', (address1 ? address1  + ' ' : '') + address2);
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

	const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_TOKEN_STAGING || '');
	
	const joinWaitlist = async() => {
		setIsLoading(true);
		const res = await joinWaitListV2({
			firstName: formik.values.firstName,
			lastName: formik.values.lastName,
			email: formik.values.email,
			addressLine1: formik.values.address_1,
			addressLine2: formik.values.address_2,
			city: formik.values.city,
			dob: formik.values.birthdate,
			gender: formik.values.gender.toLowerCase(),
			phoneNumber: formik.values.phone_number,
			state: formik.values.state,
			zipCode: formik.values.zip_code
		})
		setIsLoading(false);
		if (res) {
			toast.success('You have been added to the waitlist');
			router.replace('/')
		} else {
			toast.error('An error occurred');
		}
	}

	useEffect(() => {
		if (typeof window !== 'undefined' && window.rewardful) {
			window.rewardful('ready', function() {
				setReferral(window.Rewardful.referral);
			});
		}
	}, []);

	return (
		<form
			onSubmit={ handleSubmit }>
			<div className='flex flex-col justify-center items-center gap-2 w-full lg:mt-14 lg:pt-9'>
				<div className={ clsxm('relative flex flex-col lg:w-[70%]') }>
					<h1 className='text-[28px] font-Poppins'>Personal Information</h1>
					<div className='mt-3 flex flex-col gap-[14px]'>
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5'>
							<TextField
								isLight
								id='firstName'
								name='firstName'
								placeholder='First Name'
								value={ formik.values.firstName }
								onChange={ formik.handleChange }
								isError={ !!formik.errors.firstName }
								errorMessage={ formik.errors.firstName }
								wrapperClassName='w-full'
								className='h-[54px] lg:h-[63px] lg:text-lg'
							/>
							<TextField
								isLight
								id='lastName'
								name='lastName'
								placeholder='Last Name'
								value={ formik.values.lastName }
								onChange={ formik.handleChange }
								isError={ !!formik.errors.lastName }
								errorMessage={ formik.errors.lastName }
								wrapperClassName='w-full'
								className='h-[54px] lg:h-[63px] lg:text-lg'
							/>
						</div>
						<CustomDatePicker
							isLight
							value={ formik.values.birthdate }
							onSelect={ (date: Date) => formik.setFieldValue('birthdate', date) }
							isError={ !!formik.errors.birthdate }
							errorMessage={ formik.errors.birthdate }
							placeholder='Date of birth MM/DD/YYYY'
						/>
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
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5'>
							<CustomSelect
								isLight
								placeholder='Sex'
								options={ statesData.gender.options }
								value={ formik.values.gender }
								onChange={ val => formik.setFieldValue('gender', val) }
								isError={ !!formik.errors.gender }
								errorMessage={ formik.errors.gender }
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
						<div className='flex flex-col relative'>
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
								className='h-5 w-5 mt-2.5 cursor-pointer rounded-[1px] text-grey-100 checked:text-primary outline outline-offset-2 outline-2 focus:outline-1 focus:text-primary focus:ring-grey-100 ring-black-secondary border-none ml-1'
								onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setStatesChecked(e.target.checked) }
								disabled={ formLoading }
							/>
							<p>
								<span className='text-sm text-[#6A6E70] font-Poppins'>I confirm I live in the state mentioned above and recognize that Geviti’s Longeviti Membership is not available in { ' ' }
									<button
										type='button'
										onClick={ () => setIsOpenDialogState(prev => !prev) }
										className='text-primary underline cursor-pointer font-Poppins'>these states.</button>
								</span>
							</p>
						</div>
					</div>
					{ sessionSecretS && (
						<div className='pb-6'>
							<h1 className='text-[28px] mt-6 mb-3'>Payment Details</h1>
							<div id='checkout'>
								<Elements
									stripe={ stripePromise }
									options={ {
										clientSecret: sessionSecretS,
										appearance: {
											variables: {
												fontFamily: 'Poppins',
											},
										},
										fonts: [{
											cssSrc: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap',
										}],
									} }
								>
									<StripePaymentElement
										klaviyoRes={ klaviyoRes }
										// coupon={ coupon }
										statesChecked={ statesChecked }
										email={ formik.values.email }
										token={ token }
										// discount={ discount }
										// priceId={ priceId }
										// products={ selectedProduct }
										form={ formik.values }
										// totalPrice={ totalPrice ?? 0 }
									/>
								</Elements>
							</div>
							
						</div>
					) }
					{
						!sessionSecretS && (
							<button
								type='submit'
								disabled={ formLoading || !statesChecked }
								className={ clsxm(
									'h-[58px] py-3 px-[42px] text-white font-Poppins rounded-[1000px] my-10',
									statesChecked ? 'bg-black' : 'bg-grey-700',
								) }
							>
								<div className='flex items-center justify-center'>
									{ formLoading ? (
										<Spinner />
									) : (
										<span>
												Continue to Payment
										</span>
									) }
								</div>
							</button>
						)
					}
					
				</div>
			</div>
			<Dialog
				open={ isOpenDialogState }
				modal={ true }
				data-lenis-prevent
				onOpenChange={ setIsOpenDialogState }
			>
				<DialogContent
					position='default'
					className='w-full lg:max-w-[367px] p-6 max-w-[calc(100vw-32px)] rounded-[20px]'
					showClose={ false }
				>
					<div className='flex text-center flex-col font-Poppins'>
						<button
							onClick={ () => setIsOpenDialogState(prev => !prev) }
							className='p-[10px] self-end rounded-full border border-[#E6E7E7]'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='14'
								height='14'
								viewBox='0 0 14 14'
								fill='none'>
								<path
									d='M10.5 11.5L2.5 3.50001C2.22666 3.22667 2.22666 2.77334 2.5 2.5C2.77333 2.22667 3.22667 2.22667 3.5 2.5L11.5 10.5C11.7734 10.7734 11.7734 11.2267 11.5 11.5C11.2267 11.7734 10.7734 11.7734 10.5 11.5Z'
									fill='#919B9F'/>
								<path
									d='M2.49997 11.5C2.22664 11.2267 2.22664 10.7734 2.49997 10.5L10.5 2.5C10.7733 2.22667 11.2267 2.22667 11.5 2.5C11.7733 2.77334 11.7733 3.22667 11.5 3.50001L3.49997 11.5C3.22664 11.7734 2.77331 11.7734 2.49997 11.5Z'
									fill='#919B9F'/>
							</svg>
						</button>
						<p className='text-grey-primary uppercase text-[8.809px] font-semibold tracking-[0.969px] mt-3'>What states do we support?</p>
						<p className='text-primary text-lg '>Care that goes where you go.</p>
						<p className='text-grey-400 text-[8.809px] mt-2'>Available in 29 states and expanding across the country. Currently we are not available in: AL, AK, AR, CT, HI, ID, IA, KY, ME, MT, ND, NE, NJ, NY, OK, RI, SC, SD, VT, WV, WY.</p>
						<div className='flex items-center justify-center'>
							<Image
								src='/images/landing/compressed/continent_dots_29.svg'
								alt='state'
								className='mt-11'
								width={ 319 }
								height={ 319 }
							/>
						</div>
					</div>
				</DialogContent>
			</Dialog>
			<Dialog
				open={ isOpenDialogNotAvailableState }
				modal={ true }
				data-lenis-prevent
				onOpenChange={ setIsOpenDialogNotAvailableState }
			>
				<DialogContent
					position='default'
					className='w-full lg:max-w-[367px] p-6 max-w-[calc(100vw-32px)] rounded-[20px]'
					showClose={ false }
				>
					<div className='flex text-center flex-col font-Poppins'>
						<button
							onClick={ () => setIsOpenDialogNotAvailableState(prev => !prev) }
							className='p-[10px] self-end rounded-full border border-[#E6E7E7]'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='14'
								height='14'
								viewBox='0 0 14 14'
								fill='none'>
								<path
									d='M10.5 11.5L2.5 3.50001C2.22666 3.22667 2.22666 2.77334 2.5 2.5C2.77333 2.22667 3.22667 2.22667 3.5 2.5L11.5 10.5C11.7734 10.7734 11.7734 11.2267 11.5 11.5C11.2267 11.7734 10.7734 11.7734 10.5 11.5Z'
									fill='#919B9F'/>
								<path
									d='M2.49997 11.5C2.22664 11.2267 2.22664 10.7734 2.49997 10.5L10.5 2.5C10.7733 2.22667 11.2267 2.22667 11.5 2.5C11.7733 2.77334 11.7733 3.22667 11.5 3.50001L3.49997 11.5C3.22664 11.7734 2.77331 11.7734 2.49997 11.5Z'
									fill='#919B9F'/>
							</svg>
						</button>
						<div className='flex items-center justify-center'>
							<ExclamationIcon/>
						</div>
						<p className='text-primary text-2xl mt-11'>Due to influx of demand, Geviti is not yet available in your state.</p>
						<p className='text-grey-500 text-xs mt-2'>We plan to be live in all 50 states shortly. Join our waitlist to be one of the first notified!</p>
						<button
							type='button'
							aria-label='Get Your Discount'
							onClick={ () => joinWaitlist() }
							disabled={ isLoading }
							className='h-[58px] py-3 px-[42px] text-white rounded-[1000px] mt-11 bg-black'
						>{ isLoading ? 'Loading...' : 'Join the waitlist' }</button>
					</div>
				</DialogContent>
			</Dialog>
		</form>
	);
};

export default StripeForm;
