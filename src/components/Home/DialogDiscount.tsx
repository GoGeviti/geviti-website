/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import InputMask from '@mona-health/react-input-mask';
import { FormikProps, useFormik } from 'formik';
import Image from 'next/image';
import { toast } from 'sonner';

import { statesData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { IPrecheckout } from '@/interfaces';
import { createDiscount, updateDiscountWithPhone } from '@/services/checkout';
// import { setCookie } from '@/services/cookies';
import { DiscountFormStep1Schema, DiscountFormStep3Schema } from '@/validator/checkout';

import ButtonCta from '../ButtonCta';
import CustomSelect from '../Checkout/Select';
import TextField from '../Checkout/TextField';
import { Dialog, DialogContent } from '../Dialog';

const options = [
	{
		id: 'options-1',
		value: 'SAySbb',
		label: 'Overall Health Optimization',
	},
	{
		label: 'Peptide Therapies',
		value: 'XUZ2ui',
		id: 'options-2',
	},
	{
		label: 'Weight Management',
		value: 'RENyi4',
		id: 'options-3',
	},
	{
		label: 'Other',
		value: 'RnTM7m',
		id: 'options-4',
	}
]

type DialogDiscountProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void; // eslint-disable-line no-unused-vars
};

const initialValues = {
	name: '',
	email: '',
	state: '',
	phone_number: '',
	options: 'SAySbb',
};

const states = statesData.states.options;

const DialogDiscount: React.FC<DialogDiscountProps> = ({
	open,
	onOpenChange,
}) => {
	const [enableValidation, setEnableValidation] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState(false);
	const [selectedOption, setSelectedOption] = useState(initialValues.options);
	const [currentStep, setCurrentStep] = useState<number>(1);
	const [profileId, setProfileId] = useState<string>('');

	const handleOptionChange = (option: string) => {
		setSelectedOption(option);
		formik.setFieldValue('options', option);
	}

	// Get validation schema based on current step
	const getValidationSchema = () => {
		switch (currentStep) {
			case 1:
				return DiscountFormStep1Schema;
			case 3:
				return DiscountFormStep3Schema;
			default:
				return null; // No validation for step 2
		}
	};

	const formik: FormikProps<IPrecheckout.DiscountData> =
    useFormik<IPrecheckout.DiscountData>({
    	validateOnBlur: enableValidation,
    	validateOnChange: enableValidation,
    	validationSchema: getValidationSchema(),
    	initialValues: initialValues,
    	enableReinitialize: true,
    	onSubmit: async(form: IPrecheckout.DiscountData) => {
    		try {
    			setIsLoading(true);
    			
    			if (currentStep === 1) {
    					setCurrentStep(2);
    					setIsLoading(false);
    					return;
    			} else if (currentStep === 2) {
    				// Submit data to Klaviyo after step 2
    				const result = await createDiscount({
    					...form,
    				});
    				
    				if (result.status === 'OK' && result.profileId) {
    					setProfileId(result.profileId);
    					setCurrentStep(3);
    					setIsLoading(false);
    					return;
    				} else {
    					throw new Error(result.message || 'An unexpected error occurred');
    				}
    			} else if (currentStep === 3) {
    				// Update profile with phone number in step 3
    				if (form.phone_number) {
    					const result = await updateDiscountWithPhone({
    						profileId,
    						phone_number: form.phone_number
    					});
    					
    					if (result.status === 'OK') {
    						toast.success(
    							'Thank you! You should receive the discount code in your inbox shortly.'
    						);
    						onOpenChange && onOpenChange(false);
    					} else {
    						throw new Error(result.message || 'An unexpected error occurred');
    					}
    				} else {
    					// Skip step 3
    					toast.success(
    						'Thank you! You should receive the discount code in your inbox shortly.'
    					);
    					onOpenChange && onOpenChange(false);
    				}
    			}
    			
    			setIsLoading(false);
    		} catch (error: any) {
    			setIsLoading(false);
    			toast.error(error?.message as string, {
    				icon: <AiFillCloseCircle className='h-5 w-5 text-danger' />,
    			});
    		}
    	},
    });

	const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setEnableValidation(true);
		formik.handleSubmit();
	};
	
	// const handleSkipStep3 = () => {
	// 	toast.success(
	// 		'Thank you! You should receive the discount code in your inbox shortly.'
	// 	);
	// 	onOpenChange && onOpenChange(false);
	// };

	const renderContentStep1 = () => {
		return (
			<div className='font-Poppins'>
				<div className='flex flex-col gap-2'>
					<h4 className='text-center text-[28px] capitalize text-primary'>
					Get access to the 5 critical biomarkers for longevity
					</h4>
					<p className='text-center text-xs text-[#6A6E70]'>
					See what biomarkers are often overlooked by the traditional<br className='max-lg:hidden'/> medical system.
					</p>
				</div>
				<form
					onSubmit={ onSubmitForm }
					className='flex flex-col gap-6 mt-6'>
					<div className='flex flex-col lg:flex-row items-center gap-3'>
						<TextField
							isLight
							id='name'
							name='name'
							placeholder='Name'
							value={ formik.values.name }
							onChange={ formik.handleChange }
							isError={ !!formik.errors.name }
							errorMessage={ formik.errors.name }
							wrapperClassName='w-full'
						/>
						<div className='w-full'>
							<CustomSelect
								size='small'
								placeholder='State'
								options={ states }
								value={ formik.values.state }
								onChange={ val => formik.setFieldValue('state', val) }
								isError={ !!formik.errors.state }
								errorMessage={ formik.errors.state }
							/>
						</div>
					</div>
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
					/>
					<ButtonCta
						type='submit'
						aria-label='Proceed To Step 2'
						text={ isLoading ? 'Loading...' : 'Proceed To Step 2' }
						theme='primary'
						size='small'
						className='w-full lg:w-fit pl-[42px] pr-[60px] mx-auto h-[42px] text-xs'
					/>
				</form>
			</div>
		);
	};

	const renderContentStep2 = () => {
		return (
			<div className='font-Poppins'>
				<div className='flex flex-col gap-2'>
					<h4 className='text-center text-[28px] capitalize text-primary'>
					What brings you to geviti?
					</h4>
					<p className='text-center text-xs text-[#6A6E70]'>
					At Geviti everything is personalized based on you as the individual. This helps us understand how you plan on utilizing our services.
					</p>
				</div>
				<form
					onSubmit={ onSubmitForm }
					className='flex flex-col gap-6 mt-6'>
					<div className='my-3 max-w-[323px] w-full mx-auto'>
						{
							options.map(e => {
								return (
									<div
										key={ e.id }
										onClick={ () => handleOptionChange(e.value) }
										className='flex cursor-pointer items-center justify-between py-2.5'
									>
										<label
											htmlFor={ e.id }
											className='cursor-pointer'
										>
											{ e.label }
										</label>
										<div
											className={ `h-[18px] w-[18px] rounded-full border flex items-center justify-center cursor-pointer ${
												selectedOption === e.value ? 'border-primary' : 'border-grey-primary'
											}` }
										>
											{ selectedOption === e.value && <div className='h-3 w-3 bg-primary rounded-full' /> }
										</div>
									</div>
								)
							})
						}
					</div>
					<ButtonCta
						type='submit'
						aria-label='Get Your PDF'
						text={ isLoading ? 'Loading...' : 'Get Your PDF' }
						theme='primary'
						size='small'
						className='w-full lg:w-fit pl-[42px] pr-[60px] mx-auto h-[42px] text-xs'
					/>
				</form>
			</div>
		)
	}

	const renderContentStep3 = () => {
		return (
			<div className='font-Poppins'>
				<div className='flex flex-col gap-2'>
					<h4 className='text-center text-[28px] capitalize text-primary'>
					Get 10% off your first three months with geviti
					</h4>
					<p className='text-center text-xs text-[#6A6E70]'>
					Sign up for our SMS updates and get 10% off your first three months! By building a comprehensive picture of your health, we can tailor wellness plans & products specifically to you.
					</p>
				</div>
				<form
					onSubmit={ onSubmitForm }
					className='flex flex-col gap-6 mt-6'>
					<div className='flex flex-col'>
						<InputMask
							mask='+1\ 999 999 9999'
							maskPlaceholder={ null }
							placeholder='Phone Number'
							name='phone_number'
							onChange={ formik.handleChange }
							value={ formik.values.phone_number }
							className={ clsxm(
								'block w-full  border- outline-red-600 transform focus:outline-none transition-colors duration-300 rounded-[10px]',
								'text-primary bg-white text-xs font-normal !leading-normal font-Poppins placeholder:text-grey-500 px-6 py-18px',
								!!formik.errors.phone_number
									? 'ring-1 ring-red-primary focus:ring-1 focus:ring-red-primary'
									: '!ring-0 focus:!ring-1 !ring-grey-primary',
								'h-auto lg:h-auto py-4 pl-4 border focus:border-[#E6E7E7] pr-[10px] bg-white placeholder:text-[#AEB1B2] text-primary text-xs lg:text-xs w-full border-[#E6E7E7]'
							) }
						/>
						{ !!formik.errors.phone_number && formik.errors.phone_number && (
							<p className='text-red-primary text-[10px] mt-1 text-left'>
								{ formik.errors.phone_number }
							</p>
						) }
					</div>
					<div className='flex flex-row justify-between gap-2 w-full lg:max-w-[320px] mx-auto'>
						<ButtonCta
							type='submit'
							aria-label='Get 10% Off'
							text={ isLoading ? 'Loading...' : 'Get 10% Off' }
							theme='primary'
							size='small'
							className='w-full lg:w-fit pl-[42px] pr-[60px] mx-auto h-[42px] text-xs'
						 />
					</div>
				</form>
			</div>
		)
	}

	const renderActiveContent = () => {
		switch (currentStep) {
			case 1:
				return renderContentStep1();
			case 2:
				return renderContentStep2();
			case 3:
				return renderContentStep3();
			default:
				return renderContentStep1();
		}
	}

	useEffect(() => {
		if (open) {
			setEnableValidation(false);
			setCurrentStep(1);
			formik.resetForm();
		}
	}, [open]);

	const renderDialog = () => {
		return (
			<Dialog
				open={ open }
				modal={ true }
				onOpenChange={ () => onOpenChange && onOpenChange(true) }
			>
				<DialogContent
					position='bottom-left'
					className='max-w-[518px] bg-white rounded-[20px] overflow-y-auto shadow-[3px_6px_24px_0px_rgba(0,0,0,0.25)]'
				>
					<div className='flex flex-col'>
						<div className='relative w-full md:h-[199px]'>
							<button
								onClick={ () => onOpenChange && onOpenChange(false) }
								className='absolute top-6 right-6 z-10'
							>
								<svg
									width='14'
									height='14'
									viewBox='0 0 14 14'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M10.5 11.5L2.5 3.50001C2.22666 3.22667 2.22666 2.77334 2.5 2.5C2.77333 2.22667 3.22667 2.22667 3.5 2.5L11.5 10.5C11.7734 10.7734 11.7734 11.2267 11.5 11.5C11.2267 11.7734 10.7734 11.7734 10.5 11.5Z'
										fill='#919B9F'
									/>
									<path
										d='M2.49997 11.5C2.22664 11.2267 2.22664 10.7734 2.49997 10.5L10.5 2.5C10.7733 2.22667 11.2267 2.22667 11.5 2.5C11.7733 2.77334 11.7733 3.22667 11.5 3.50001L3.49997 11.5C3.22664 11.7734 2.77331 11.7734 2.49997 11.5Z'
										fill='#919B9F'
									/>
								</svg>
							</button>
							<Image
								fill
								priority
								quality={ 100 }
								alt='discount'
								className='w-full h-full object-cover max-md:hidden'
								src='/images/home/discount.webp'
							/>
						</div>
						<div className='p-6 flex flex-col gap-6 min-h-[378px]'>{ renderActiveContent() }</div>
					</div>
				</DialogContent>
			</Dialog>
		);
	};

	return renderDialog();
};

export default DialogDiscount;
