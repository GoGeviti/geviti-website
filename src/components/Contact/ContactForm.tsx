'use client'
import React, { useState } from 'react'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import InputMask from '@mona-health/react-input-mask'
import { FormikProps, useFormik } from 'formik'
import Image from 'next/image'
import { toast } from 'sonner'

import clsxm from '@/helpers/clsxm'
import { ContactSubject } from '@/payload/payload-types'
import { ContactUsType, createContact, sendSlackNotification } from '@/services/submit'
import { ContactFormSchema } from '@/validator/checkout'

import ButtonCta from '../ButtonCta'
import CustomSelect from '../Checkout/Select'
import TextField from '../Checkout/TextField'

const initialValues = {
	full_name: '',
	email: '',
	phone_number: undefined,
	message: '',
	subject: '',
	isPartner: false,
};

const ContactForm = ({
	subject,
}: {
	subject: ContactSubject[]
}) => {

	const [enableValidation, setEnableValidation] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState(false);

	const formik: FormikProps<ContactUsType> =
    useFormik<ContactUsType>({
    	validateOnBlur: enableValidation,
    	validateOnChange: enableValidation,
    	validationSchema: ContactFormSchema,
    	initialValues: initialValues,
    	enableReinitialize: true,
    	onSubmit: async(form: ContactUsType) => {
    		setIsLoading(true);
    		const { status, message: messageResponse } = await createContact(form);
    		if (status === 'OK') {
    			await sendSlackNotification({ ...form, subject: subject.find(sub => sub.id.toString() === form.subject.toString())?.title });
    			toast.success(messageResponse, {
    				icon: <AiFillCheckCircle className='h-5 w-5 text-green-alert' />,
    			});
    		} else {
    			toast.error(messageResponse, {
    				icon: <AiFillCloseCircle className='h-5 w-5 text-danger' />,
    			});
    		}
    		setIsLoading(false);
    	},
    });

	const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setEnableValidation(true);
		formik.handleSubmit();
	};
	return (
		<div className='px-3 max-lg:mt-6 2xl:max-w-[1360px] mx-auto w-full'>
			<div className='flex flex-col-reverse lg:flex-row gap-7'>
				<div
					style={ {
						background: 'linear-gradient(190deg, #A7DAFF 7.44%, #3DA3ED 97.69%)'
					} }
					className='w-full h-[648px] lg:h-[824px] lg:px-[42px] p-3.5 lg:py-11 relative self-stretch flex-grow lg:max-w-[590px] rounded-2xl overflow-hidden'>
					<Image
						src='/images/contact/logo-vector.png'
						alt='logo-vector'
						width={ 590 }
						height={ 824 }
						className='w-full h-[60%] lg:h-full max-lg:hidden object-left-top absolute bottom-0 lg:top-0 left-0 object-contain'
					/>
					<Image
						src='/images/contact/logo-vector-mobile.png'
						alt='logo-vector'
						width={ 590 }
						height={ 824 }
						className='w-full h-[73%] lg:h-full lg:hidden object-left-top absolute bottom-0 lg:top-0 left-0 object-cover'
					/>
					<Image
						src='/images/landing/compressed/phone.webp'
						alt='phone'
						quality={ 100 }
						width={ 590 }
						height={ 824 }
						className='w-full h-[68%] lg:h-[82%] absolute bottom-0 right-0 object-right-bottom object-cover'
					/>
					<div className='relative flex flex-col z-10'>
						<h3 className='text-2xl lg:text-[36px] lg:font-medium text-primary'>Download your Geviti<br/>app today</h3>
						<div className='lg:self-end max-lg:mt-6'>
							<h5 className='uppercase max-lg:text-[10px] font-semibold tracking-[1.71px]'>available in</h5>
							<div className='flex flex-row lg:flex-col gap-2 mt-3'>
								<a href={ process.env.NEXT_PUBLIC_APPLE_STORE_URL }>
									<Image
										src='/images/appstore.jpg'
										alt='app-store'
										width={ 169 }
										height={ 50 }
										className='rounded-lg max-lg:w-full overflow-hidden'
									/>
								</a>
								<a href={ process.env.NEXT_PUBLIC_PLAY_STORE_URL }>
									<Image
										src='/images/playstore.jpg'
										alt='play-store'
										width={ 169 }
										height={ 50 }
										className='rounded-lg max-lg:w-full overflow-hidden'
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='bg-blue-alice max-lg:order-1 ml-auto border w-full border-blue-primary rounded-[20px] px-3 py-[42px] lg:p-[42px]'>
					<form onSubmit={ onSubmitForm }>
						<h3 className='h3'>Contact Us</h3>
						<p className='text-primary text-sm mt-11'>Personal information</p>
						<div className='flex flex-col gap-4 lg:gap-6 mt-4'>
							<TextField
								isLight
								id='name'
								name='full_name'
								placeholder='Full Name'
								value={ formik.values.full_name }
								onChange={ formik.handleChange }
								isError={ !!formik.errors.full_name }
								errorMessage={ formik.errors.full_name }
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
							<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6'>
								<div className=''>
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
									placeholder='Subject'
									isLight
									options={ subject.map(sub => ({ label: sub.title, value: sub.id.toString() })) }
									value={ formik.values.subject }
									onChange={ val => formik.setFieldValue('subject', val) }
									isError={ !!formik.errors.subject }
									errorMessage={ formik.errors.subject }
								/>
							</div>
							<div
								className='flex flex-col items-start'>
								<p className='text-xs text-primary'>Message</p>
								<textarea
									name='message'
									value={ formik.values.message }
									onChange={ formik.handleChange }
									placeholder='Message'
									className={ clsxm(
										'w-full !bg-white rounded-[10px] bg-transparent text-primary leading-5 text-xs font-medium font-Poppins border-0 focus:border-0 focus:ring-0 focus:outline-0 placeholder:text-grey-primary py-3 mt-[5px] h-[184px]',
										!!formik.errors.message && formik.errors.message && 'ring-1 ring-red-primary focus:ring-1 focus:ring-red-primary',
									) }
								/>
								{ !!formik.errors.message && formik.errors.message && (
									<p className='text-red-primary text-[10px] mt-1 text-left'>
										{ formik.errors.message }
									</p>
								) }
							</div>
						</div>
						<div className='mt-6 flex flex-col gap-6 lg:gap-[42px]'>
							<ButtonCta
								hideArrow={ true }
								type='submit'
								disabled={ isLoading }
								aria-label='Submit your entry'
								text={ isLoading ? 'Loading...' : 'Send' }
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

export default ContactForm
