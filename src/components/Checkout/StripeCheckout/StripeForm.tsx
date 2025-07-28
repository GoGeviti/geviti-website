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
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';

import { Dialog, DialogContent } from '@/components/Dialog';
import { Spinner } from '@/components/Icons/Spinner';
import { statesData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { AccountInfo, AddressInfo } from '@/interfaces/precheckout';
import { removeCookie } from '@/services/cookies';
import { createKlaviyoProfile } from '@/services/klaviyo';
import { useCheckoutStore } from '@/store/checkoutStore';
import { AccountInfoSchema, AddressFormSchema, SigninFormSchema } from '@/validator/checkout';

import { login } from '../api/onboarding';
import {
	getPatientProfileAction, postAddAccountInfo, postAddressInfo, postAddToWaitlist, postBillingCheckout, postSkipPayment, postVerifyPhoneNumber
} from '../api/patient';
// import { PatientProfileResponseType } from '../api/types';
import CustomDatePicker from '../DatePicker';
import { ExclamationIcon } from '../Payment/State';
import CustomSelect from '../Select';
import TextField from '../TextField';

import StripePaymentElement from './StripePaymentElement';

type StripeFormProps = {
  handleCheckout: () => void;
	geviti_token?:string

};

const StripeForm: FC<StripeFormProps> = ({
	geviti_token
}) => {

	const searchParams = useSearchParams();
	const productId = searchParams.get('product_id');
	const priceId = searchParams.get('price_id');

	const { checkoutLoading: loading, promoCode: coupon, productMembership: selectedProduct, selectedProductPrice } = useCheckoutStore();

	const router = useRouter();
	const [stripeResponseLoading, setStripeResponseLoading] = useState(false);
	const [statesChecked, setStatesChecked] = useState(false);
	const [sessionSecretS, setSessionSecret] = useState('');
	const [klaviyoRes, setKlaviyoRes] = useState({
		profileId: '',
		listId: ''
	})
	// const [token, setToken] = useState('');
	// const tokenRef = useRef('');
	// const [formSubmitted] = useState(false);
	const [isOpenDialogState, setIsOpenDialogState] = useState(false);
	// const [isOpenDialogConfirmAddress, setIsOpenDialogConfirmAddress] = useState(false);
	const [isOpenDialogNotAvailableState, setIsOpenDialogNotAvailableState] = useState(false);
	// const [isOpenDialogWalkIn, setIsOpenDialogWalkIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [formLoadingSignin, setFormLoadingSignin] = useState(false);
	const [formLoadingAddress, setFormLoadingAddress] = useState(false);
	const [formLoadingAccount, setFormLoadingAccount] = useState(false);
	const [isVerifyPhoneNumberLoading, setIsVerifyPhoneNumberLoading] = useState(false);
	const [referral, setReferral] = useState('')
	// const [isLoadingWaitForProvider, setIsLoadingWaitForProvider] = useState(false);
	const [isRegister, setIsRegister] = useState(false);
	const [nextStep, setNextStep] = useState('');

	// const restrictedStates = ['CA', 'DE', 'FL', 'IL', 'IN', 'LA', 'MA', 'MD', 'MI', 'MN', 'MO', 'MS', 'NC', 'TN', 'TX', 'VA', 'WI'];

	const formLoading = useMemo(
		() => stripeResponseLoading || loading || formLoadingSignin || formLoadingAddress || formLoadingAccount,
		[stripeResponseLoading, loading, formLoadingSignin, formLoadingAddress, formLoadingAccount]
	);

	// const handleWaitForProvider = async() => {
	// 	try {
	// 		setIsLoadingWaitForProvider(true);
	// 		const result = await createKlaviyoProfile({
	// 			data: {
	// 				type: 'profile',
	// 				attributes: {
	// 					firstName: formik.values.firstName,
	// 					lastName: formik.values.lastName,
	// 					location: {
	// 						city: formikAddress.values.city,
	// 						region: formikAddress.values.state,
	// 						address1: formikAddress.values.line1,
	// 						address2: formikAddress.values.line2,
	// 						zip: formikAddress.values.zip,
	// 					},
	// 					email: formik.values.email,
	// 					phoneNumber: formik.values.phone_number,
	// 				}
	// 			}
	// 		}, 'X38cMy');
			
	// 		if (result.status === 'OK') {
	// 			setIsOpenDialogConfirmAddress(false);
	// 			toast.success('Thank you! We\'ll notify you when provider access is available in your state.');
	// 		} else {
	// 			toast.error('Something went wrong. Please try again.');
	// 		}
	// 	} catch (error) {
	// 		toast.error('Something went wrong. Please try again.');
	// 	} finally {
	// 		setIsLoadingWaitForProvider(false);
	// 	}
	// };

	// const validateVitalBloodAndHandleResult = async() => {
	// 	try {
	// 		const vitalBloodAvailability = await validateVitalBlood({
	// 			userAddress: {
	// 				line1: formikAddress.values.line1,
	// 				line2: formikAddress.values.line2,
	// 				city: formikAddress.values.city,
	// 				state: formikAddress.values.state,
	// 				zip: formikAddress.values.zip,
	// 			},
	// 		});

	// 		if (!vitalBloodAvailability.isAddressValid) {
	// 			setStripeResponseLoading(false);
	// 			setIsOpenDialogConfirmAddress(false);
	// 			setIsOpenDialogWalkIn(true);
	// 			return false;
	// 		}
	// 		return true;
	// 	} catch (error: any) {
	// 		setStripeResponseLoading(false);
	// 		if (typeof error === 'string') {
	// 			if (error.includes('This area is not currently serviceable for blood work')) {
	// 				setIsOpenDialogWalkIn(true);
	// 				setIsOpenDialogConfirmAddress(false);
	// 			} else {
	// 				toast.error(error);
	// 			}
	// 		} else {
	// 			toast.error('An error occurred');
	// 		}
	// 		return false;
	// 	}
	// };

	// const handleProceedWithValidation = async() => {
	// 	try {
	// 		setIsLoading(true);
	// 		const isValid = await validateVitalBloodAndHandleResult();
	// 		if (isValid) {
	// 			setIsOpenDialogConfirmAddress(false);
	// 			await proceedWithCheckout();
	// 		}
	// 	} catch (error) {
	// 		toast.error('An error occurred');
	// 	} finally {
	// 		setIsLoading(false);
	// 	}
	// };

	// const formik: FormikProps<IPrecheckout.BillingInfo> = useFormik<IPrecheckout.BillingInfo>({
	// 	validateOnBlur: formSubmitted,
	// 	validateOnChange: formSubmitted,
	// 	validationSchema: FormCheckoutSchema,
	// 	initialValues: {
	// 		firstName: '',
	// 		lastName: '',
	// 		email: '',
	// 		phone_number: '',
	// 		address_1: '',
	// 		address_2: '',
	// 		city: '',
	// 		state: '',
	// 		zip_code: '',
	// 		birthdate: null,
	// 		gender: ''
	// 	},
	// 	enableReinitialize: true,
	// 	onSubmit: async(form: IPrecheckout.BillingInfo) => {
	// 		try {
	// 			// setTokenState('')
	// 			setStripeResponseLoading(true);
	// 			const isValidState = await validateState({
	// 				firstName: form.firstName,
	// 				lastName: form.lastName,
	// 				email: form.email,
	// 				addressLine1: form.address_1,
	// 				addressLine2: form.address_2,
	// 				city: form.city,
	// 				dob: form.birthdate,
	// 				gender: form.gender.toLowerCase(),
	// 				phoneNumber: form.phone_number,
	// 				state: form.state,
	// 				zipCode: form.zip_code
	// 			})

	// 			if (isValidState.token) {
	// 				// setTokenState(isValidState.token);
	// 				tokenRef.current = isValidState.token;
	// 			}
	// 			if (!isValidState.stateExists) {
	// 				setStripeResponseLoading(false);
	// 				return setIsOpenDialogNotAvailableState(true)
	// 			}

	// 			// Check if state is in restricted list
	// 			if (restrictedStates.includes(form.state)) {
	// 				setStripeResponseLoading(false);
	// 				setIsOpenDialogConfirmAddress(true);
	// 				return;
	// 			}

	// 			const isValid = await validateVitalBloodAndHandleResult();
	// 			if (isValid) {
	// 				await proceedWithCheckout();
	// 			}
	// 		} catch (error:any) {
	// 			setStripeResponseLoading(false);
	// 			toast.error('An error occurred');
	// 		}
	// 	},
	// });

	const formikSignin:FormikProps<{
		email:string,
		password:string
	}> = useFormik<{
		email:string,
		password:string
	}>({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: SigninFormSchema,
		onSubmit: async(form: {
			email:string,
			password:string
		}) => {
			try {
				await login({
					email: form.email,
					password: form.password
				})
				setIsRegister(true)
				toast.success('Login successful')
			} catch (error) {
				toast.error(error as string)
			}
			setFormLoadingSignin(false);
		}
	})

	const formikAddress:FormikProps<AddressInfo> = useFormik<AddressInfo>({
		initialValues: {
			line1: '',
			line2: '',
			city: '',
			state: '',
			zip: '',
			country: 'US'
		},
		validationSchema: AddressFormSchema,
		onSubmit: async(form: AddressInfo) => {
			setFormLoadingAddress(true)
			try {
				const formData = { ...form };
				if (!formData.line2) {
					delete formData.line2;
				}
				const res = await postAddressInfo(formData)
				setFormLoadingAddress(false);
				if (res.success) {
					setNextStep('purchase.payment')
				}
				if (!res.isStateValid || res.alreadyOnWaitlist) {
					return setIsOpenDialogNotAvailableState(true)
				}
			} catch (error) {
				// console.log('error')
				const errorMessage = error instanceof Error ? error.message : 'An error occurred'
				setFormLoadingAddress(false);
				toast.error(errorMessage)
			}
			setFormLoadingAddress(false);
		}
	})

	const formikAccontInfo:FormikProps<AccountInfo> = useFormik<AccountInfo>({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			phoneNumber: '',
			dob: null,
			gender: ''
		},
		validationSchema: AccountInfoSchema,
		onSubmit: async(form: AccountInfo) => {
			setFormLoadingAccount(true);
			try {
				const formData = { ...form, gender: form.gender.toLowerCase() };
				if (!formData.password) {
					delete formData.password;
				}
				const res = await postAddAccountInfo(formData)
				setFormLoadingAccount(false);
				setNextStep(res.nextStep)
				toast.success('Account information added successfully')
			} catch (error) {
				const errorMessage = error instanceof Error ? error.message : 'An error occurred'
				setFormLoadingAccount(false);
				toast.error(errorMessage)
			}
			setFormLoadingAccount(false);
		}
	})

	// const handleContinue = async() => {
	// 	setIsOpenDialogWalkIn(false);
	// 	await proceedWithCheckout();
	// };

	// const proceedWithCheckout = async() => {
	// 	try {
	// 		setStripeResponseLoading(true);
	// 		const getFPTid = () => {
	// 			if (typeof window !== 'undefined') {
	// 				return (window as any).FPROM?.data?.tid;
	// 			}
	// 			return undefined;
	// 		};

	// 		const sessionSecret = await createSession({
	// 			header: {
	// 				'Authorization': 'Bearer ' + tokenRef.current,
	// 			},
	// 			body: {
	// 				user: {
	// 					firstName: formik.values.firstName,
	// 					lastName: formik.values.lastName,
	// 					email: formik.values.email,
	// 					addressLine1: formikAddress.values.line1,
	// 					addressLine2: formikAddress.values.line2 ?? '',
	// 					city: formikAddress.values.city,
	// 					dob: formik.values.birthdate,
	// 					gender: formik.values.gender.toLowerCase(),
	// 					phoneNumber: formik.values.phone_number,
	// 					state: formikAddress.values.state,
	// 					zipCode: formikAddress.values.zip
	// 				},
	// 				coupon: coupon,
	// 				referral: referral.length ? referral : undefined,
	// 				fp_tid: getFPTid(),
	// 				product: [{
	// 					productId: selectedProduct?.productId.toString() ?? '',
	// 					productName: selectedProduct?.name ?? '',
	// 					quantity: 1,
	// 					price: Number(selectedProductPrice?.price) ?? 0,
	// 					price_id: selectedProductPrice?.priceId ?? ''
	// 				}],
	// 			}
	// 		});

	// 		const klaviyo = await createKlaviyoProfile({
	// 			data: {
	// 				type: 'profile',
	// 				attributes: {
	// 					firstName: formik.values.firstName,
	// 					lastName: formik.values.lastName,
	// 					location: {
	// 						city: formikAddress.values.city,
	// 						region: formikAddress.values.state,
	// 						address1: formikAddress.values.line1,
	// 						address2: formikAddress.values.line2,
	// 						zip: formikAddress.values.zip,
	// 					},
	// 					email: formik.values.email,
	// 					phoneNumber: formik.values.phone_number,
	// 				}
	// 			}
	// 		}, 'UqUaJC');

	// 		setKlaviyoRes({
	// 			profileId: klaviyo.profileId ?? '',
	// 			listId: klaviyo.listId ?? ''
	// 		});
	// 		// setToken(sessionSecret.token);
	// 		setSessionSecret(sessionSecret.clientSecret);
	// 		setStripeResponseLoading(false);
	// 	} catch (error: any) {
	// 		setStripeResponseLoading(false);
	// 		if (typeof error === 'string') {
	// 			toast.error(error);
	// 		} else {
	// 			toast.error('An error occurred');
	// 		}
	// 	}
	// };

	// const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// 	setFormSubmitted(true);
	// 	formik.handleSubmit();
	// };

	const handleSubmitSignin = async(e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormLoadingSignin(true);
		formikSignin.handleSubmit();
	};

	const onPlaceSelected = (place: any) => {
		const addressComponents = place.address_components;
		const city = addressComponents.find((item:any) => item.types.includes('locality'))?.long_name;
		const state = addressComponents.find((item:any) => item.types.includes('administrative_area_level_1'))?.short_name;
		const zipCode = addressComponents.find((item:any) => item.types.includes('postal_code'))?.long_name;
		const address1 = addressComponents.find((item:any) => item.types.includes('street_number'))?.long_name;
		const address2 = addressComponents.find((item:any) => item.types.includes('route'))?.long_name;

		formikAddress.setFieldValue('city', city ?? '');
		formikAddress.setFieldValue('state', state ?? '');
		formikAddress.setFieldValue('zip', zipCode ?? '');
		formikAddress.setFieldValue('line1', (address1 ? address1  + ' ' : '') + address2);
		formikAddress.setFieldValue('line2', '');
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

	useEffect(() => {
		if (geviti_token) {
			const getPatient = async() => {
				try {
					const getPatientProfileResponse = await getPatientProfileAction();
					if (!getPatientProfileResponse.nextStep.includes('purchase')) {
						removeCookie('geviti_token')
						setIsRegister(false)
						setNextStep('')
						return;
					}
					setNextStep(getPatientProfileResponse.nextStep)
					setIsRegister(true)
					// formikAccontInfo.setFieldValue('firstName', getPatientProfileResponse.firstName)
					// formikAccontInfo.setFieldValue('lastName', getPatientProfileResponse.lastName)
					// formikAccontInfo.setFieldValue('email', getPatientProfileResponse.email)
					// formikAccontInfo.setFieldValue('dob', new Date(getPatientProfileResponse.dob))
					// formikAccontInfo.setFieldValue('gender', getPatientProfileResponse.gender === 'male' ? 'Male' : getPatientProfileResponse.gender === 'female' ? 'Female' : '')

					// formikAccontInfo.setFieldValue('phoneNumber', getPatientProfileResponse.phone)
					// formikAccontInfo.setFieldValue('password', 'P@ssw0rd')
					formikAccontInfo.setValues({
						firstName: getPatientProfileResponse.firstName,
						lastName: getPatientProfileResponse.lastName,
						email: getPatientProfileResponse.email,
						password: 'P@ssw0rd',
						phoneNumber: getPatientProfileResponse.phone,
						dob: new Date(getPatientProfileResponse.dob),
						gender: getPatientProfileResponse.gender === 'male' ? 'Male' : getPatientProfileResponse.gender === 'female' ? 'Female' : ''
					}, false)

					formikAccontInfo.setErrors({})

					// formikAddress.setFieldValue('line1', getPatientProfileResponse.address.line)
					// formikAddress.setFieldValue('city', getPatientProfileResponse.address.city)
					// formikAddress.setFieldValue('state', getPatientProfileResponse.address.state)
					// formikAddress.setFieldValue('zip', getPatientProfileResponse.address.postalCode)

					formikAddress.setValues({
						line1: getPatientProfileResponse.address.line,
						city: getPatientProfileResponse.address.city,
						state: getPatientProfileResponse.address.state,
						zip: getPatientProfileResponse.address.postalCode,
						country: 'US'
					}, false)

				} catch (error) {
					// console.log('error ==> ', error)
				}
			}
			getPatient();
		} else {
			formikAccontInfo.resetForm()
			formikAddress.resetForm()
		}
	}, [geviti_token])

	const onChangeInputRestrictNumber = (key: string, val: string) => {
		const updatedVal = val.replace(/[^\d]/g, '');
		formikAddress.setFieldValue(key, updatedVal);
	};

	const submitOnboardingFlow = () => {
		// setFormLoadingAddress(true);
		if (!geviti_token && isRegister) {
			formikAccontInfo.handleSubmit()
		}
		if (nextStep === 'purchase.account-information') {
			formikAddress.handleSubmit();
		}
	}

	const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_TOKEN_STAGING || '');
	
	const joinWaitlist = async() => {
		setIsLoading(true);
		try {
			await postAddToWaitlist({
				line1: formikAddress.values.line1,
				...(formikAddress.values.line2 && { line2: formikAddress.values.line2 }),
				city: formikAddress.values.city,
				state: formikAddress.values.state,
				zip: formikAddress.values.zip,
				country: 'US'
			})
			setIsLoading(false);
			toast.success('You have been added to the waitlist');
			router.replace('/')
		} catch (error: any) {
			const errorMessage = error instanceof Error ? error.message : 'An error occurred'
			setIsLoading(false);
			toast.error(errorMessage);
		}
	}

	const isFreeProduct = !productId && !priceId;

	const verifyPhoneNumber = async() => {
		setIsVerifyPhoneNumberLoading(true);
		try {
			// Create query params string if both values exist
			const queryParams = selectedProduct?.productId && selectedProductPrice?.priceId
				? `?product_id=${selectedProduct.productId.toString()}&price_id=${selectedProductPrice.priceId}`
				: '';

			const baseUrl = typeof window !== 'undefined'
				? window.location.origin + window.location.pathname
				: 'https://gogeviti.com/pricing/onboarding/payment';

			const redirectUri = baseUrl + queryParams;

			const res = await postVerifyPhoneNumber({
				phoneNumber: formikAccontInfo.values.phoneNumber.replace(/\s/g, ''),
				redirectUri
			})
			setIsVerifyPhoneNumberLoading(false);
			toast.success('Phone number verified successfully');
			if (res.inquiryUrl) {
				// window.open(res.inquiryUrl, '_blank');
				// window.open(res.inquiryUrl);
				window.location.href = res.inquiryUrl
			}
		} catch (error: any) {
			const errorMessage = error instanceof Error ? error.message : 'An error occurred'
			setIsVerifyPhoneNumberLoading(false);
			toast.error(errorMessage);
		}
	}

	useEffect(() => {
		if (typeof window !== 'undefined' && window.rewardful) {
			window.rewardful('ready', function() {
				setReferral(window.Rewardful.referral);
			});
		}
	}, []);
	
	const handleCreateSession = async() => {
		try {
			setStripeResponseLoading(true);
			const getFPTid = () => {
				if (typeof window !== 'undefined') {
					return (window as any).FPROM?.data?.tid;
				}
				return undefined;
			};
			const sessionSecret = await postBillingCheckout({
				'products': [
					{
						'productId': selectedProduct?.productId.toString() ?? '',
						'priceId': selectedProductPrice?.priceId ?? ''
					}
				],
				...(coupon.length && { coupon }),
				...(referral.length && { referral }),
				...(getFPTid() && { fp_tid: getFPTid() })

			})

			const klaviyo = await createKlaviyoProfile({
				data: {
					type: 'profile',
					attributes: {
						firstName: formikAccontInfo.values.firstName,
						lastName: formikAccontInfo.values.lastName,
						location: {
							city: formikAddress.values.city,
							region: formikAddress.values.state,
							address1: formikAddress.values.line1,
							address2: formikAddress.values.line2,
							zip: formikAddress.values.zip,
						},
						email: formikAccontInfo.values.email,
						phoneNumber: formikAccontInfo.values.phoneNumber,
					}
				}
			}, 'UqUaJC');

			setKlaviyoRes({
				profileId: klaviyo.profileId ?? '',
				listId: klaviyo.listId ?? ''
			});
			// setToken(sessionSecret.token);
			setSessionSecret(sessionSecret.clientSecret);
			setStripeResponseLoading(false);
		} catch (error: any) {
			setStripeResponseLoading(false);
			if (error instanceof Error) {
				toast.error(error.message);
			} else if (typeof error === 'string') {
				toast.error(error);
			} else {
				toast.error('An error occurred');
			}
		}
	}

	const handleSkipPayment = async() => {
		try {
			setStripeResponseLoading(true);
			const res = await postSkipPayment();
			if (res.success) {
				router.push(`/onboarding/payment/success?email=${formikAccontInfo.values.email}&token=${geviti_token}&price=${selectedProductPrice?.price}`)
			}
			setStripeResponseLoading(false);
		} catch (error: any) {
			setStripeResponseLoading(false);
			if (error instanceof Error) {
				toast.error(error.message)
			} else if (typeof error === 'string') {
				toast.error(error)
			} else {
				toast.error('An error occurred')
			}
		}
	}

	const renderFormInformation = () => {
		const isDisablePersonalInformation = nextStep === 'purchase.phone-validation' || nextStep === 'purchase.account-information' || nextStep === 'purchase.payment'
		// const isDisablePersonalInformation = false
		return (
			<div
				// onSubmit={ handleSubmit }
				className='flex flex-col justify-center items-center gap-2 w-full lg:mt-14 lg:pt-9'>
				<div className={ clsxm('relative flex flex-col lg:w-[70%]') }>
					<h1 className='text-[28px] font-Poppins'>Personal Information</h1>
					<div className='mt-3 flex flex-col gap-[14px]'>
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5'>
							<TextField
								isLight
								disabled={ isDisablePersonalInformation }
								id='firstName'
								name='firstName'
								placeholder='First Name'
								value={ formikAccontInfo.values.firstName }
								onChange={ formikAccontInfo.handleChange }
								isError={ !!formikAccontInfo.errors.firstName }
								errorMessage={ formikAccontInfo.errors.firstName }
								wrapperClassName='w-full'
								className='h-[54px] lg:h-[63px] lg:text-lg'
							/>
							<TextField
								isLight
								disabled={ isDisablePersonalInformation }
								id='lastName'
								name='lastName'
								placeholder='Last Name'
								value={ formikAccontInfo.values.lastName }
								onChange={ formikAccontInfo.handleChange }
								isError={ !!formikAccontInfo.errors.lastName }
								errorMessage={ formikAccontInfo.errors.lastName }
								wrapperClassName='w-full'
								className='h-[54px] lg:h-[63px] lg:text-lg'
							/>
						</div>
						<CustomDatePicker
							isLight
							disabled={ isDisablePersonalInformation }
							value={ formikAccontInfo.values.dob }
							onSelect={ (date: Date) => formikAccontInfo.setFieldValue('dob', date) }
							isError={ !!formikAccontInfo.errors.dob }
							errorMessage={ formikAccontInfo.errors.dob }
							placeholder='Date of birth MM/DD/YYYY'
						/>
						<TextField
							isLight
							id='email'
							name='email'
							disabled={ isDisablePersonalInformation }
							placeholder='Email'
							autoComplete='new-password'
							value={ formikAccontInfo.values.email }
							onChange={ formikAccontInfo.handleChange }
							isError={ !!formikAccontInfo.errors.email }
							errorMessage={ formikAccontInfo.errors.email }
							wrapperClassName='w-full'
							className='h-[54px] lg:h-[63px] lg:text-lg'
						/>
						<CustomSelect
							isLight
							disabled={ isDisablePersonalInformation }
							placeholder='Sex'
							options={ statesData.gender.options }
							value={ formikAccontInfo.values.gender }
							onChange={ val => formikAccontInfo.setFieldValue('gender', val) }
							isError={ !!formikAccontInfo.errors.gender }
							errorMessage={ formikAccontInfo.errors.gender }
						/>
						<div className='flex flex-col'>
							<div className='flex items-center gap-2'>
								<InputMask
									mask='+1\ 999 999 9999'
									maskPlaceholder={ null }
									placeholder='Phone Number'
									name='phoneNumber'
									autoComplete='new-password'
									onChange={ formikAccontInfo.handleChange }
									disabled={ isDisablePersonalInformation }
									value={ formikAccontInfo.values.phoneNumber }
									className={ clsxm(
										'block w-full h-[54px] lg:h-[63px] border outline-red-600 transform focus:outline-none transition-colors duration-300 rounded-[10px]',
										'focus:border-[#E6E7E7] bg-white placeholder:text-[#AEB1B2] border-[#E6E7E7] text-primary text-xs lg:text-lg font-normal !leading-normal font-Poppins px-6 py-18px',
										!!formikAccontInfo.errors.phoneNumber ? 'ring-1 ring-red-primary focus:ring-1 focus:ring-red-primary' : '!ring-0 focus:!ring-1 !ring-grey-primary',
										'disable:bg-grey-50 disabled:text-grey-primary'
										// nextStep !== 'purchase.phone-validation' && 'bg-grey-50 text-grey-primary'
									) }
								/>
								{ /* <button
									type='button'
									onClick={ () => verifyPhoneNumber() }
									disabled={ nextStep !== 'purchase.phone-validation' || isVerifyPhoneNumberLoading }
									className='h-[58px] py-3 px-5 text-white disabled:bg-black/50 disabled:cursor-not-allowed whitespace-nowrap font-Poppins hover:bg-black/80 rounded-[1000px] bg-black'>{ isVerifyPhoneNumberLoading ? 'Verifying...' : 'Verify phone number' }</button> */ }
							</div>
							{ !!formikAccontInfo.errors.phoneNumber && formikAccontInfo.errors.phoneNumber && (
								<p className='text-red-primary text-[10px] mt-1 text-left'>{ formikAccontInfo.errors.phoneNumber }</p>
							) }
						</div>
						<TextField
							isLight
							id='password'
							name='password'
							type='password'
							autoComplete='new-password'
							placeholder='Password'
							disabled={ !!geviti_token }
							value={ formikAccontInfo.values.password }
							onChange={ formikAccontInfo.handleChange }
							isError={ !!formikAccontInfo.errors.password }
							errorMessage={ formikAccontInfo.errors.password }
							wrapperClassName={ clsxm(
								'w-full',
								geviti_token && 'hidden'
							) }
							className='h-[54px] lg:h-[63px] lg:text-lg'
						/>
						{ /* {
							(nextStep === 'purchase.phone-validation' || nextStep === 'purchase.account-information') && (
							)
						} */ }
					</div>
					{
						(nextStep === 'purchase.account-information' || nextStep === 'purchase.payment') && (
							<>
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
											disabled={ nextStep !== 'purchase.account-information' && nextStep === 'purchase.payment' }
											className={ clsxm(
												'block w-full h-[54px] lg:h-[63px] border-0 outline-red-600 transform focus:outline-none transition-colors duration-300 rounded-[10px]',
												'text-primary bg-white border-[#E6E7E7] border placeholder:text-[#AEB1B2] focus:border-[#E6E7E7] text-xs lg:text-lg font-normal !leading-normal font-Poppins px-6 py-18px',
												!!formikAddress.errors.line1 ? 'ring-1 ring-red-primary focus:ring-1 focus:ring-red-primary' : '!ring-0 focus:!ring-1 !ring-grey-primary',
												'disabled:bg-grey-50 disabled:text-grey-primary'
											) }
											onChange={ (e:any) => formikAddress.setFieldValue('line1', (e.target as HTMLInputElement)?.value) }
											value={ formikAddress.values.line1 }
										/>
										{ !!formikAddress.errors.line1 && formikAddress.errors.line1 && (
											<p className='text-red-primary text-[10px] mt-1 text-left'>{ formikAddress.errors.line1 }</p>
										) }
									</div>
									<TextField
										id='line2'
										name='line2'
										type='text'
										isLight
										disabled={ nextStep !== 'purchase.account-information' && nextStep === 'purchase.payment' }
										placeholder='Address 2'
										value={ formikAddress.values.line2 }
										onChange={ formikAddress.handleChange }
										isError={ !!formikAddress.errors.line2 }
										errorMessage={ formikAddress.errors.line2 }
										className='h-[54px] lg:h-[63px] lg:text-lg'
									/>
									<div className='grid grid-cols-3 gap-[14px]'>
										<TextField
											isLight
											id='city'
											name='city'
											placeholder='City'
											disabled={ nextStep !== 'purchase.account-information' && nextStep === 'purchase.payment' }
											value={ formikAddress.values.city }
											onChange={ formikAddress.handleChange }
											isError={ !!formikAddress.errors.city }
											errorMessage={ formikAddress.errors.city }
											wrapperClassName='w-full'
											className='h-[54px] lg:h-[63px] lg:text-lg'
										/>
										<CustomSelect
											size='default'
											isLight
											placeholder='State'
											disabled={ nextStep !== 'purchase.account-information' && nextStep === 'purchase.payment' }
											options={ statesData.states.options }
											value={ formikAddress.values.state }
											onChange={ val => formikAddress.setFieldValue('state', val) }
											isError={ !!formikAddress.errors.state }
											errorMessage={ formikAddress.errors.state }
										/>
										<TextField
											isLight
											id='zip'
											name='zip'
											type='text'
											inputMode='numeric'
											disabled={ nextStep !== 'purchase.account-information' && nextStep === 'purchase.payment' }
											placeholder='Zip'
											autoComplete='cc-csv'
											value={ formikAddress.values.zip }
											onChange={ e => onChangeInputRestrictNumber('zip', e.target.value) }
											isError={ !!formikAddress.errors.zip }
											errorMessage={ formikAddress.errors.zip }
											className='h-[54px] lg:h-[63px] lg:text-lg'
										/>
									</div>
								</div>
							</>
						)
					}
					<button
						type='button'
						onClick={ () => nextStep === 'purchase.phone-validation' ? verifyPhoneNumber() : submitOnboardingFlow() }
						disabled={ formLoading || isVerifyPhoneNumberLoading }
						className={ clsxm(
							'h-[58px] py-3 px-[42px] text-white font-Poppins rounded-[1000px] my-10 bg-black disabled:bg-grey-700',
							nextStep === 'purchase.payment' && 'hidden'
						) }
					>
						<div className='flex items-center justify-center'>
							{ formLoading || isVerifyPhoneNumberLoading ? (
								<Spinner />
							) : (
								<span>
									{ nextStep === 'purchase.phone-validation' ? 'Verify phone number' : 'Continue' }
								</span>
							) }
						</div>
					</button>
					<button
						type='button'
						onClick={ () => setIsRegister(false) }
						className={ clsxm(
							'text-primary underline text-center mb-5',
							nextStep === 'purchase.payment' && 'mt-5'
						) }>Already have an account? Login</button>
					{
						nextStep === 'purchase.payment' && (
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
									<span className='text-sm text-[#6A6E70] font-Poppins'>I confirm I live in the state mentioned above and recognize that Geviti&apos;s Longeviti Membership is not available in { ' ' }
										<button
											type='button'
											onClick={ () => setIsOpenDialogState(prev => !prev) }
											className='text-primary underline cursor-pointer font-Poppins'>these states.</button>
									</span>
								</p>
							</div>
						)
					}
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
										email={ formikAccontInfo.values.email }
										token={ geviti_token ?? '' }
										// discount={ discount }
										// priceId={ priceId }
										// products={ selectedProduct }
										formAccontInfo={ formikAccontInfo.values }
										formAddress={ formikAddress.values }
										// totalPrice={ totalPrice ?? 0 }
									/>
								</Elements>
							</div>
						</div>
					) }
					{
						(!sessionSecretS && nextStep === 'purchase.payment') && (
							<button
								type='submit'
								disabled={ formLoading || !statesChecked }
								className={ clsxm(
									'h-[58px] py-3 px-[42px] text-white font-Poppins rounded-[1000px] mt-5 mb-10',
									statesChecked ? 'bg-black' : 'bg-grey-700',
								) }
								onClick={ () => isFreeProduct ? handleSkipPayment() : handleCreateSession() }
							>
								<div className='flex items-center justify-center'>
									{ formLoading ? (
										<Spinner />
									) : (
										<span>
											 { isFreeProduct ? 'Get Started' : 'Continue to Payment' }
										</span>
									) }
								</div>
							</button>
						)
					}
				</div>
			</div>
		)
	}

	const renderSigninForm = () => {
		return (
			<form
				onSubmit={ handleSubmitSignin }
				className='flex flex-col justify-center items-center gap-2 w-full lg:mt-14 lg:pt-9'>
				<div className={ clsxm('relative flex flex-col lg:w-[70%]') }>
					<h1 className='text-[28px] font-Poppins'>Login to your account</h1>
					<div className='mt-10 flex flex-col gap-[14px]'>
						<TextField
							isLight
							id='email'
							name='email'
							placeholder='Email'
							value={ formikSignin.values.email }
							onChange={ formikSignin.handleChange }
							isError={ !!formikSignin.errors.email }
							errorMessage={ formikSignin.errors.email }
							wrapperClassName='w-full'
							className='h-[54px] lg:h-[63px] lg:text-lg'
						/>
						<TextField
							isLight
							id='password'
							name='password'
							type='password'
							placeholder='Password'
							value={ formikSignin.values.password }
							onChange={ formikSignin.handleChange }
							isError={ !!formikSignin.errors.password }
							errorMessage={ formikSignin.errors.password }
							wrapperClassName='w-full'
							className='h-[54px] lg:h-[63px] lg:text-lg'
						/>
						<div className='flex items-center justify-end'>
							<button
								type='button'
								onClick={ () => {
									removeCookie('geviti_token');
									setIsRegister(true);
									setNextStep('');
									formikAccontInfo.resetForm()
									formikAddress.resetForm()
									formikAccontInfo.setErrors({})
									formikAddress.setErrors({})
								} }
								className='text-primary underline'>Create an account</button>
						</div>
						<button
							type='submit'
							disabled={ formLoading }
							className={ clsxm(
								'h-[58px] py-3 px-[42px] text-white font-Poppins rounded-[1000px] my-5 bg-black disabled:bg-grey-700',
							) }
						>
							<div className='flex items-center justify-center'>
								{ formLoading ? (
									<Spinner />
								) : (
									<span>
												Login
									</span>
								) }
							</div>
						</button>
					</div>
				</div>
			</form>
		)
	}

	// const setupPayment = () => {

	// }

	return (
		<div>
			{
				isRegister ? renderFormInformation() : (!isRegister && geviti_token) ? renderSigninForm() : renderSigninForm()
			}
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
						<p className='text-grey-400 text-[8.809px] mt-2'>Available in 29 states and expanding across the country. Currently, we are available in: AZ, CA, CO, DE, FL, GA, IL, IN, KS, LA, MA, MD, MI, MN, MO, MS, NC, NH, NM, NV, OH, OR, PA, TN, TX, UT, VA, WA, WI.</p>
						<div className='flex items-center justify-center'>
							<Image
								src='/images/landing/compressed/continent_dots_available_29.svg'
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
					className='w-full lg:max-w-screen-xs p-6 max-w-[calc(100vw-32px)] rounded-[20px]'
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
							aria-label='Join the waitlist'
							onClick={ () => joinWaitlist() }
							disabled={ isLoading }
							className='h-[58px] py-3 px-[42px] text-white rounded-[1000px] mt-11 bg-black'
						>{ isLoading ? 'Loading...' : 'Join the waitlist' }</button>
					</div>
				</DialogContent>
			</Dialog>
			{ /* <Dialog
				open={ isOpenDialogWalkIn }
				modal={ true }
				data-lenis-prevent
				onOpenChange={ setIsOpenDialogWalkIn }
			>
				<DialogContent
					position='default'
					className='w-full lg:max-w-screen-xs p-6 max-w-[calc(100vw-32px)] rounded-[20px]'
					showClose={ false }
				>
					<div className='flex text-center flex-col font-Poppins'>
						<button
							onClick={ () => setIsOpenDialogWalkIn(prev => !prev) }
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
						<p className='text-primary text-2xl mt-11'>Looks like you&apos;re outside our at-home phlebotomy area</p>
						<p className='text-grey-500 text-xs mt-2'>No worries you can still place your order!<br/>While we don&apos;t offer at-home phlebotomy in your area yet, you can conveniently get a walk-in blood draw at one of LabCorp&apos;s over 2,000 locations</p>
						<button
							type='button'
							aria-label='Continue'
							onClick={ () => handleContinue() }
							disabled={ isLoading }
							className='h-[58px] py-3 px-[42px] text-white rounded-[1000px] mt-11 bg-black'
						>{ isLoading ? 'Loading...' : 'Continue' }</button>
					</div>
				</DialogContent>
			</Dialog> */ }
			{ /* <Dialog
				open={ isOpenDialogConfirmAddress }
				modal={ true }
				data-lenis-prevent
				onOpenChange={ setIsOpenDialogConfirmAddress }
			>
				<DialogContent
					position='default'
					className='w-full lg:max-w-screen-sm p-6 max-w-[calc(100vw-32px)] rounded-[20px]'
					showClose={ false }
				>
					<div className='flex text-center flex-col font-Poppins'>
						<button
							onClick={ () => setIsOpenDialogConfirmAddress(prev => !prev) }
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
							<SecuritySuccessIcon/>
						</div>
						<p className='text-primary text-2xl mt-6'>Important info about<br/>your state! </p>
						<p className='text-grey-500 text-xs mt-6 max-w-[422px] mx-auto w-full'>While we&apos;re excited to serve your state, we currently can&apos;t see a medical provider in a clinical capacity (coming very soon). We offer these services today:</p>
						<div className='flex flex-wrap gap-1.5 mx-auto items-center justify-center mt-6'>
							{
								['Bloodwork', 'Health Optimization Plans', 'Wellness Specialist Syncs', 'Speciality Tests', 'Custom Supplements', 'All other Services'].map((item, index) => (
									<span
										key={ index }
										className='text-[#1194E6] text-lg bg-[#F6FCFF] border border-[#D6EDFF] rounded-lg py-2 px-3'>{ item }</span>
								))
							}
						</div>
						<p className='text-center body-extra-small mt-6'>*We&apos;ll have prescriptive authority in your state very soon!</p>
						<button
							type='button'
							aria-label='Continue'
							onClick={ handleProceedWithValidation }
							disabled={ isLoading }
							className='h-[48px] py-3 px-[42px] text-white rounded-[14px] text-sm mt-6 bg-black'
						>{ isLoading ? 'Loading...' : 'I understand! Let\'s proceed!' }</button>
						<button
							type='button'
							aria-label="I'll wait for provider access"
							onClick={ handleWaitForProvider }
							disabled={ isLoadingWaitForProvider }
							className='h-[48px] py-3 px-[42px] text-primary rounded-[14px] text-sm mt-3.5 bg-grey-100'
						>{ isLoadingWaitForProvider ? 'Loading...' : 'I\'ll wait for provider access' }</button>
					</div>
				</DialogContent>
			</Dialog> */ }
		</div>
	);
};

export default StripeForm;
