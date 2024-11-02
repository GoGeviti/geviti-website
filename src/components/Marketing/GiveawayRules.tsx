'use client'
import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import InputMask from '@mona-health/react-input-mask'
import { FormikProps, useFormik } from 'formik'
import { toast } from 'sonner'

import { statesData } from '@/constant/data'
import clsxm from '@/helpers/clsxm'
import { IPrecheckout } from '@/interfaces'
import { submitGiveaway } from '@/services/checkout'
import { GiveawayFormSchema } from '@/validator/checkout'

import ButtonCta from '../ButtonCta'
import CustomDatePicker from '../Checkout/DatePicker'
import PrivacyPolicyStatement from '../Checkout/PrivacyPolicyStatement'
import CustomSelect from '../Checkout/Select'
import TextField from '../Checkout/TextField'
import { TickCircle } from '../Icons'

const rules = [
	{
		title: 'Rule 1',
		description: 'To enter, participants must enter their information, and follow us on <a className=\'underline\' href=\'https://www.instagram.com/gogeviti/\' target=\'_blank\' rel=\'noopener noreferrer\'>Instagram</a>.'
	},
	{
		title: 'Rule 2',
		description: 'You must be over 18 years old and reside in a state where we operate.'
	},
	{
		title: 'Rule 3',
		description: 'Each participant may enter one time only.'
	},
	{
		title: 'Rule 4',
		description: 'The giveaway starts on November 3rd and ends on November 20th.'
	},
]

const initialValues = {
	name: '',
	email: '',
	state: '',
	phone_number: '',
	birthdate: null
};

type GiveAwayFormType = IPrecheckout.DiscountData&{
  birthdate: Date | null;
}

const GiveawayRules = () => {

	const [enableValidation, setEnableValidation] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState(false);
	const [termsChecked, setTermsChecked] = useState(false)

	const formik: FormikProps<GiveAwayFormType> =
    useFormik<GiveAwayFormType>({
    	validateOnBlur: enableValidation,
    	validateOnChange: enableValidation,
    	validationSchema: GiveawayFormSchema,
    	initialValues: initialValues,
    	enableReinitialize: true,
    	onSubmit: async(form: GiveAwayFormType) => {
    		try {
    			setIsLoading(true);
    			const result = await submitGiveaway({
    				...form,
    			});
    			setIsLoading(false);
    			if (result.status === 'OK') {
    				toast.success(
    					'Thank you! You should receive the discount code in your inbox shortly.'
    				);
    			} else {
    				throw new Error(result.message || 'An unexpected error occurred');
    			}
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

	return (
		<div className='lg:px-3 max-lg:mt-6'>
			<div className='container-center grid grid-cols-1 gap-5 lg:grid-cols-2'>
				<div className='flex flex-col max-lg:order-2 max-lg:text-center  gap-[42px] lg:gap-[59px]'>
					<h3 className='font-medium text-primary text-2xl md:text-[32px] lg:text-4xl'>Giveaway<br/><span className='text-grey-primary'>rules and benefits</span></h3>
					<div className='flex flex-col gap-6 max-w-[395px]'>
						{
							rules.map((rule, index) => (
								<div
									key={ index }
									className='flex gap-3 items-start'>
								    <TickCircle className='flex-shrink-0 h-[18px] w-[18px] text-[#4AADF6]' />
									<div className='flex text-left flex-col gap-1'>
										<h4 className='font-medium text-primary leading-none text-lg'>{ rule.title }</h4>
										<p
											className='text-primary text-sm'
											dangerouslySetInnerHTML={ { __html: rule.description } } />
									</div>
								</div>
							))
						}
					</div>
				</div>
				<div className='bg-blue-alice max-lg:order-1 max-w-[604px] ml-auto border w-full border-blue-primary rounded-[20px] px-3 py-[42px] lg:p-[42px]'>
					<form onSubmit={ onSubmitForm }>
						<p className='text-primary text-sm'>Personal information</p>
						<div className='flex flex-col gap-4 lg:gap-6 mt-4'>
							<TextField
								isLight
								id='name'
								name='name'
								placeholder='Full Name'
								value={ formik.values.name }
								onChange={ formik.handleChange }
								isError={ !!formik.errors.name }
								errorMessage={ formik.errors.name }
								wrapperClassName='w-full'
								className='lg:!h-[63px] lg:!text-lg'
							/>
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
								className='lg:!h-[63px] lg:!text-lg'
							/>
							<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6'>
								<div className='lg:col-span-2'>
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
												'h-auto lg:h-[63px] py-4 pl-4 border focus:border-[#E6E7E7] pr-[10px] bg-white placeholder:text-[#AEB1B2] text-primary text-xs lg:text-lg w-full border-[#E6E7E7]'
											) }
										/>
										{ !!formik.errors.phone_number && formik.errors.phone_number && (
											<p className='text-red-primary text-[10px] mt-1 text-left'>
												{ formik.errors.phone_number }
											</p>
										) }
					        </div>
								</div>
								<CustomSelect
									placeholder='State'
									isLight
									options={ statesData.states.options }
									value={ formik.values.state }
									onChange={ val => formik.setFieldValue('state', val) }
									isError={ !!formik.errors.state }
									errorMessage={ formik.errors.state }
								/>
							</div>
							<div>
								<p className='text-primary text-sm mb-4'>	Date of birth </p>
								<CustomDatePicker
									isLight
									value={ formik.values.birthdate }
									onSelect={ (date: Date) => formik.setFieldValue('birthdate', date) }
									isError={ !!formik.errors.birthdate }
									errorMessage={ formik.errors.birthdate }
									placeholder='MM/DD/YYYY'
								/>
							</div>
						</div>
						<div className='mt-6 flex flex-col gap-6 lg:gap-[42px]'>
							<div className='flex items-start gap-x-[22px]'>
								<input
									id='checkout_terms'
									type='checkbox'
									title=''
									className='h-5 w-5 mt-2.5 rounded-[1px] text-grey-100 checked:text-primary outline outline-offset-2 outline-2 focus:outline-1 focus:text-primary focus:ring-grey-100 ring-black-secondary border-none ml-1'
									onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setTermsChecked(e.target.checked) }
								/>
								<label
									htmlFor='checkout_terms'
								>
									<PrivacyPolicyStatement giveaway />
								</label>
							</div>
							<ButtonCta
								hideArrow={ true }
								type='submit'
								disabled={ isLoading || !termsChecked }
								aria-label='Submit your entry'
								text={ isLoading ? 'Loading...' : 'Submit your entry' }
								theme='primary'
								size='small'
								className='w-full mx-auto font-medium h-[60px] text-lg'
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default GiveawayRules