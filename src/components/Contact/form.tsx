/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
'use client';
import React, { useState } from 'react';

import clsxm from '@/helpers/clsxm';

import { CheckCircleBlue, CheckDisable } from '../Icons';
import Navbar from '../Navbar';

interface FormProps {
  initialFirstName: string;
  initialLastName: string;
  initialEmail: string;
  initialPhone: string;
  initialMessage: string;
  initialCompany?: string | null;
  initialRole?: string | null;
  onUpdateFirstName: (value: string) => void;
  onUpdateLastName: (value: string) => void;
  onUpdateEmail: (value: string) => void;
  onUpdatePhone: (value: string) => void;
  onUpdateMessage: (value: string) => void;
  onUpdateCompany?: (value: string) => void| null;
  onUpdateRole?: (value: string) => void| null;
  subject: string[];
}

const Form: React.FC<FormProps> = ({
	initialFirstName,
	initialLastName,
	initialEmail,
	initialPhone,
	initialMessage,
	initialCompany,
	initialRole,
	onUpdateFirstName,
	onUpdateLastName,
	onUpdateEmail,
	onUpdatePhone,
	onUpdateMessage,
	onUpdateCompany,
	onUpdateRole,
	subject
}) => {
	const [subjectState, setSubjectState] = useState(subject.map(() => false));

	const handleToggleSubject = (index:number) => {
		const newSubjectState = subjectState.map((state, i) => (i === index ? !state : false));
		setSubjectState(newSubjectState);
	};
  
	return (
		<div className='lg:px-3 lg:py-15px overflow-hidden'>
			<Navbar theme='light'/>
			<div className='bg-white w-full h-full lg:rounded-[19px] max-md:pb-[63px] max-md:pt-[22px] md:py-[100px] relative overflow-hidden'>
				<div className='max-md:container-center text-center sm:mx-auto flex flex-col space-y-[25px] md:space-y-[42px] !max-w-sm md:!max-w-2xl'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 w-full'>
						{ renderInput('First Name*', '', initialFirstName, onUpdateFirstName, 'text') }
						{ renderInput('Last Name*', '', initialLastName, onUpdateLastName, 'text') }
						{ renderInput('Email*', '', initialEmail, onUpdateEmail, 'email') }
						{
							onUpdateCompany &&
             <div>
             	{ renderInput('Company*', '', initialCompany, onUpdateCompany, 'text') }
             </div>
						}
						{
							onUpdateRole &&
             <div>
             	{ renderInput('Role*', '', initialRole, onUpdateRole, 'text') }
             </div>
						}
						{ renderInput('Phone*', '', initialPhone, onUpdatePhone, 'number') }
					</div>
					{
						subject &&
					<div className='flex flex-col space-y-[15px] items-start'>
						<p className='font-Poppins text-sm md:text-base font-semibold leading-5'>Select Subject?*</p>
						<div className='grid grid-cols-2 md:grid-cols-4 justify-between w-full items-start mb-[42px] gap-[14px]'>
							{
								subject.map((item, index) => (
									renderCheckbox(item, subjectState[index], () => handleToggleSubject(index))
								))
							}
						</div>
					</div>
					}
					{ renderInput('Message*', 'Write your message..', initialMessage, onUpdateMessage, 'text') }
					<div className='flex justify-end mt-6 md:mt-30px'>
						<div
							className='btn-cta-landing !rounded-[5px] max-md:!w-full md:!px-12 btn-primary group text-center'
						>
							<span className='text-btn-cta-landing text-center w-full'>
							Send Message
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const renderInput = (label: string, placeholder: string, value: any, action: (newValue: any) => void, type:string) => {
	const isValueEmpty = !value;
	return (
		<div className='flex flex-col items-start'>
			<p className={ clsxm('text-[#8D8D8D] text-xs sm:text-sm font-medium font-BRSonoma leading-5', isValueEmpty ? 'text-[#8D8D8D]' : 'text-primary') }>{ label }</p>
			<input
				type={ type }
				value={ value }
				onChange={ (e: React.ChangeEvent<HTMLInputElement>) => action(e.target.value) }
				placeholder={ placeholder }
				className='!border-b !border-[#C4C4C4] w-full focus:!border-primary h-[35px] bg-transparent text-primary leading-5 text-sm font-medium font-BRSonoma border-0 focus:border-0 focus:ring-0 focus:outline-0 placeholder:text-[#8D8D8D]'
			/>
		</div>
	);
};
const renderCheckbox = (label: string, checked: boolean, onToggle: (newValue: boolean)  => void) => {
	return (
		<div
			className='flex items-center space-x-[9px]'
			onClick={ () => onToggle(!checked) }>
			{ checked ?
				<CheckCircleBlue className='w-4 md:w-[18px] h-4 md:h-[18px]' /> :
				<CheckDisable className='w-[13px] md:w-[15.275px] h-[13px] md:h-[15.275px]' /> }
			<label
				className='Label font-Poppins text-xs md:text-sm font-medium leading-5'
				htmlFor='c1'>
				{ label }
			</label>
		</div>
	);
};

export default Form;