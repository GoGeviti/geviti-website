/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
'use client';
import React, { useState } from 'react';
import {
	AiFillCheckCircle,
	AiFillCloseCircle,
} from 'react-icons/ai';
import { toast } from 'sonner';

import clsxm from '@/helpers/clsxm';
import { ContactSubject } from '@/payload/payload-types';
import { createContact } from '@/services/submit';

import {
	Select, SelectContent, SelectGroup, SelectItem, SelectSeparator, SelectTrigger, SelectValue
} from '../Select';

interface FormProps {
  isPartner?: boolean;
  subject: ContactSubject[];
}

const renderInput = (label: string, placeholder: string, value: any, action: (newValue: any) => void, type:string, required:boolean) => {
	return (
		<div
			className='flex flex-col items-start'>
			<p className='text-xs font-BRSonoma text-primary'>{ label }</p>
			<input
				type={ type }
				value={ value }
				required={ required }
				onChange={ (e: React.ChangeEvent<HTMLInputElement>) => action(e.target.value) }
				placeholder={ placeholder }
				className='w-full bg-white rounded-[10px] text-primary leading-5 text-xs font-medium font-Poppins border-0 focus:border-0 focus:ring-0 focus:outline-0 placeholder:text-grey-primary py-3 mt-[5px]'
			/>
		</div>
	);
};

const renderTextArea = (label: string, placeholder: string, value: any, action: (newValue: any) => void, required:boolean) => {
	return (
		<div
			className='flex flex-col items-start'>
			<p className='text-xs font-BRSonoma text-primary'>{ label }</p>
			<textarea
				value={ value }
				required={ required }
				onChange={ (e: React.ChangeEvent<HTMLTextAreaElement>) => action(e.target.value) }
				placeholder={ placeholder }
				className='w-full bg-white rounded-[10px] bg-transparent text-primary leading-5 text-xs font-medium font-Poppins border-0 focus:border-0 focus:ring-0 focus:outline-0 placeholder:text-grey-primary py-3 mt-[5px] h-[184px]'
			/>
		</div>
	);
};

const Form: React.FC<FormProps> = ({
	isPartner = false,
	subject
}) => {
	const [state, setState] = useState<string>('');
	const [firstName, setFirstName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [phone, setPhone] = useState<number>();
	const [company, setCompany] = useState<string>('');
	const [role, setRole] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = {
			full_name: firstName,
			email,
			message,
			subject: state,
			phone_number: phone,
			company,
			role,
			isPartner: isPartner
		};

		setLoading(true);
		const { status, message: messageResponse } = await createContact(data);
		if (status === 'OK') {
			toast.success(messageResponse, {
				icon: <AiFillCheckCircle className='h-5 w-5 text-primary' />,
			});
		} else {
			toast.error(messageResponse, {
				icon: <AiFillCloseCircle className='h-5 w-5 text-danger' />,
			});
		}
		setLoading(false);
	};

	return (
		<form
			onSubmit={ e => handleSubmit(e) }
			className='lg:px-3 overflow-hidden'>
			<div className='w-full h-full lg:rounded-[19px] pt-[30px] lg:pt-[70px] overflow-hidden'>
				<div className='max-md:container-center text-center sm:mx-auto flex flex-col gap-2 !max-w-sm md:!max-w-[360px]'>
					{ renderInput('First Name*', 'John Doe', firstName, setFirstName, 'text', true) }
					{ renderInput('Email Address*', 'Enter Email Address', email, setEmail, 'email', true) }
					{
						isPartner &&
						<div>
							{ renderInput('Phone*', 'Enter Phone Number', phone, setPhone, 'tel', true) }
						</div>
					}
					<div className='grid grid-cols-2 gap-2'>
						{
							isPartner &&
             <div>
             	{ renderInput('Company*', 'Enter Company', company, setCompany, 'text', true) }
             </div>
						}
						{
							isPartner &&
             <div>
             	{ renderInput('Role*', 'Enter Role', role, setRole, 'text', true) }
             </div>
						}
					</div>
					{
						subject &&
							<div className='flex flex-col space-y-[5px] items-start w-full'>
								<p className='text-xs font-BRSonoma text-primary'>Select Subject?*</p>
								<Select
									value={ state }
									onValueChange={ e => setState(e)  }
									required>
									<SelectTrigger
										aria-label={ state }
										className={
											clsxm(
												'w-full bg-white text-xs font-Poppins font-medium rounded-[10px] text-primary flex justify-between items-center py-3 px-4',
												state !== '' ? 'text-primary' : 'text-grey-primary'
											)
										}>
										<SelectValue>{ subject.find(e => e.id.toString() === state.toString())?.title ?? 'Select Subject' }</SelectValue>
									</SelectTrigger>
									<SelectContent className=' bg-grey-secondary text-xs font-BRSonoma text-primary z-10 rounded-[10px] border'>
										<SelectGroup className='overflow-x-hidden text-start'>
											{ subject.map((option, optionIdx) => (
												<div
													key={ optionIdx }>
													<SelectItem
														key={ optionIdx }
														value={ option.id.toString() }
														className='data-[state=unchecked]:font-medium cursor-pointer data-[state=checked]:font-semibold text-primary data-[highlighted]:bg-white py-3 px-4'
													>{ option.title }</SelectItem>
													{ optionIdx < subject.length - 1 && (
														<SelectSeparator />
													) }
												</div>
											)) }
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
					}
					{ renderTextArea('Message*', 'Enter your message here...', message, setMessage, true) }
					<div className='flex justify-end mt-6'>
						<button
							disabled={ loading }
							className='btn-cta-landing w-full md:!px-12 btn-primary group text-center'
						>
							<span className='text-btn-cta-landing text-center w-full'>
							Submit
							</span>
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default Form;