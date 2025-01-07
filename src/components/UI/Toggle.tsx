'use client'

import React, { useState } from 'react'

import clsxm from '@/helpers/clsxm'

interface ToggleProps {
  label: string
  initialState?: boolean
  onChange?: (isChecked: boolean) => void
  name?: string
}

const Toggle: React.FC<ToggleProps> = ({ label, initialState = false, onChange, name }) => {
	const [isChecked, setIsChecked] = useState(initialState)

	const handleToggle = () => {
		const newState = !isChecked
		setIsChecked(newState)
		if (onChange) {
			onChange(newState)
		}
	}

	return (
		<label className='flex items-center cursor-pointer'>
			<div className='relative'>
				<input
					type='checkbox'
					className='sr-only'
					checked={ isChecked }
					onChange={ handleToggle }
					name={ name }
				/>
				<div
					className={ `block w-[48px] h-6 border rounded-full transition-colors duration-300 ease-in-out ${
						isChecked ? 'border-primary' : 'border-grey-primary'
					}` }
				 />
				<div
					className={ `absolute left-[3px] top-[3px] w-[18px] h-[18px] rounded-full transition-all duration-300 ease-in-out transform ${
						isChecked ? 'translate-x-[24px] bg-primary' : 'translate-x-0 bg-grey-primary'
					}` }
				/>
			</div>
			<div className={ clsxm('ml-5 text-sm', isChecked ? 'text-primary' : 'text-grey-primary') }>{ label }</div>
		</label>
	)
}

export default Toggle
