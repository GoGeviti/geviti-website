/* eslint-disable no-unused-vars */
'use client';
import React, { useState } from 'react';
import {
	Select, SelectContent, SelectGroup, SelectIcon, SelectItem, SelectSeparator, SelectTrigger, SelectValue
} from '@radix-ui/react-select';

import { ChevronDown } from '../Icons';
import WrapperAnimation from '../WrapperAnimation';

interface FormProps {
  initialFirstName: string;
  initialEmail: string;
  initialPhone?: string | null;
  initialMessage: string;
  initialCompany?: string | null;
  initialRole?: string | null;
  onUpdateFirstName: (value: string) => void;
  onUpdateEmail: (value: string) => void;
  onUpdatePhone?: (value: string) => void| null;
  onUpdateMessage: (value: string) => void;
  onUpdateCompany?: (value: string) => void| null;
  onUpdateRole?: (value: string) => void| null;
  subject: { value: string; label: string }[];
}

const Form: React.FC<FormProps> = ({
	initialFirstName,
	initialEmail,
	initialPhone,
	initialMessage,
	initialCompany,
	initialRole,
	onUpdateFirstName,
	onUpdateEmail,
	onUpdatePhone,
	onUpdateMessage,
	onUpdateCompany,
	onUpdateRole,
	subject
}) => {
	const [state, setState] = useState<string>('');

	const renderInput = (label: string, placeholder: string, value: any, action: (newValue: any) => void, type:string) => {
		return (
			<WrapperAnimation
				data-aos='zoom'
				className='flex flex-col items-start'>
				<p className='text-xs font-BRSonoma text-primary'>{ label }</p>
				<input
					type={ type }
					value={ value }
					onChange={ (e: React.ChangeEvent<HTMLInputElement>) => action(e.target.value) }
					placeholder={ placeholder }
					className='w-full bg-white rounded-[10px] text-primary leading-5 text-xs font-medium font-Poppins border-0 focus:border-0 focus:ring-0 focus:outline-0 placeholder:text-grey-primary py-3 mt-[5px]'
				/>
			</WrapperAnimation>
		);
	};
	
	const renderTextArea = (label: string, placeholder: string, value: any, action: (newValue: any) => void) => {
		return (
			<div
				className='flex flex-col items-start'>
				<p className='text-xs font-BRSonoma text-primary'>{ label }</p>
				<textarea
					value={ value }
					onChange={ (e: React.ChangeEvent<HTMLTextAreaElement>) => action(e.target.value) }
					placeholder={ placeholder }
					className='w-full bg-white rounded-[10px] bg-transparent text-primary leading-5 text-xs font-medium font-Poppins border-0 focus:border-0 focus:ring-0 focus:outline-0 placeholder:text-grey-primary py-3 mt-[5px] h-[184px]'
				/>
			</div>
		);
	};
	
	const renderSelectState = (data:any) => {
		const selectOptions: { value: string; label: string }[] = data;

		return (
			<WrapperAnimation
				data-aos='zoom'
				className='w-full'
			>
				<Select
					value={ state }
					onValueChange={ setState  }
				>
					<SelectTrigger
						aria-label={ state }
						className='w-full bg-white text-xs font-Poppins font-medium rounded-[10px] text-primary flex justify-between items-center py-3 px-4'>
						<SelectValue>{ state || data[0].label }</SelectValue>
						<SelectIcon >
							<ChevronDown />
						</SelectIcon>
					</SelectTrigger>
					<SelectContent className=' bg-grey-secondary text-xs font-BRSonoma text-primary z-10 rounded-[10px] border'>
						<SelectGroup className='overflow-x-hidden text-start'>
							{ selectOptions.map((option, optionIdx) => (
								<div
									key={ optionIdx }>
									<SelectItem
										value={ option.label }
										className='data-[state=unchecked]:font-medium data-[state=checked]:font-semibold text-primary data-[highlighted]:bg-white py-3 px-4'
									>{ option.label }</SelectItem>
									{ optionIdx < selectOptions.length - 1 && (
										<SelectSeparator />
									) }
								</div>
							)) }
							<SelectSeparator />
						</SelectGroup>
					</SelectContent>
				</Select>
			</WrapperAnimation>
		);
	};
	return (
		<div className='lg:px-3 lg:py-15px overflow-hidden'>
			<div className='w-full h-full lg:rounded-[19px] pt-[30px] lg:pt-[70px] overflow-hidden'>
				<div className='max-md:container-center text-center sm:mx-auto flex flex-col gap-2 !max-w-sm md:!max-w-[360px]'>
					{ renderInput('First Name*', 'John Doe', initialFirstName, onUpdateFirstName, 'text') }
					{ renderInput('Email Address*', 'Enter Email Address', initialEmail, onUpdateEmail, 'email') }
					{
						onUpdatePhone &&
						<div>
							{ renderInput('Phone*', 'Enter Phone Number', initialPhone, onUpdatePhone, 'number') }
						</div>
					}
					<div className='grid grid-cols-2 gap-2'>
						{
							onUpdateCompany &&
             <div>
             	{ renderInput('Company*', 'Enter Company', initialCompany, onUpdateCompany, 'text') }
             </div>
						}
						{
							onUpdateRole &&
             <div>
             	{ renderInput('Role*', 'Enter Role', initialRole, onUpdateRole, 'text') }
             </div>
						}
					</div>
					{
						subject &&
							<div className='flex flex-col space-y-[5px] items-start w-full'>
								<p className='text-xs font-BRSonoma text-primary'>Select Subject?*</p>
								{ renderSelectState(subject) }
							</div>
					}
					{ renderTextArea('Message*', 'Enter your message here...', initialMessage, onUpdateMessage) }
					<div className='flex justify-end mt-6'>
						<div
							className='btn-cta-landing w-full md:!px-12 btn-primary group text-center'
						>
							<span className='text-btn-cta-landing text-center w-full'>
							Submit
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Form;