'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import membershipdata from '@/constant/data/membership';

import { ChevronDown, FeMaleIcon, InfoBlue, MaleIcon } from '../Icons';
const biomakers = membershipdata.biomakers;

const BioMakersSection = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [tab, setTab] = useState('tab1');
	const [biomakerType, setBiomakerType] = useState('Male');
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='bg-white mx-3 rounded-[19px] my-6 py-8 sm:py-14'>
			<div className=' container-center '>
				<button
					onClick={ toggleDropdown }
					className=' flex w-full sm:w-auto text-primary justify-between sm:justify-start font-medium items-center font-Poppins text-[14px] sm:text-[28px] gap-3'
				>
					<span>Compare Tested Biomarkers</span>
					<span className={ `${ isOpen && 'rotate-180 duration-300' }` }>
						<ChevronDown />
					</span>
				</button>
				{ !isOpen && (
					<p className='text-[12px] sm:text-lg font-Poppins text-[#AEB1B2]'>
						Click to expand
					</p>
				) }

				{ isOpen && (
					<motion.div
						initial={ { opacity: 0, y: -40 } }
						animate={ { opacity: 1, y: 0 } }
						transition={ { duration: 0.5 } }
						className='  '
					>
						<div className=' my-11 max-sm:hidden sm:flex justify-center items-center bg-[#F5F6F6] w-fit   gap-[14px] p-[6px] rounded-[100px]'>
							<button
								onClick={ () => setBiomakerType('Male') }
								className={ `${ biomakerType === 'Male'
									? 'bg-primary text-white font-medium'
									: 'text-grey-400 font-normal'
								} cursor-pointer duration-300 flex items-center py-[10px] px-[24px] font-Poppins rounded-full gap-[6px]` }
							>
								<MaleIcon /> Male Biomarkers
							</button>
							<button
								onClick={ () => setBiomakerType('Female') }
								className={ `${ biomakerType === 'Female'
									? 'bg-primary text-white font-medium'
									: 'text-grey-400 font-normal'
								} cursor-pointer duration-300 flex items-center py-[10px] px-[24px] font-Poppins rounded-full gap-[6px]` }
							>
								<FeMaleIcon /> Female Biomarkers
							</button>
						</div>

						{ /* tabs */ }
						<div className='max-sm:hidden sm:flex mb-11 gap=6 md:gap-20'>
							<p
								onClick={ () => setTab('tab1') }
								className={ `cursor-pointer ${ tab === 'tab1' &&
									'!text-primary font-medium after:!opacity-100'
								} after:absolute after:opacity-0  relative after:w-full after:h-[2px] after:bottom-0 after:bg-blue-1 after:left-0 font-Poppins text-lg text-grey-primary` }
							>
								Essential Health Check
							</p>
							<p
								onClick={ () => setTab('tab2') }
								className={ `cursor-pointer ${ tab === 'tab2' &&
									'!text-primary font-medium after:!opacity-100'
								} after:absolute after:opacity-0  relative after:w-full after:h-[2px] after:bottom-0 after:bg-blue-1 after:left-0 font-Poppins text-lg text-grey-primary` }
							>
								Comprehensive Health Dive
							</p>
							<p
								onClick={ () => setTab('tab3') }
								className={ `cursor-pointer ${ tab === 'tab3' &&
									'!text-primary font-medium after:!opacity-100'
								} after:absolute after:opacity-0  relative after:w-full after:h-[2px] after:bottom-0 after:bg-blue-1 after:left-0 font-Poppins text-lg text-grey-primary` }
							>
								Ultimate Health Assessment
							</p>
						</div>
						<ul className='py-10 sm:py-2 flex gap-6 flex-wrap'>
							{ biomakers.data.map((option, index) => (
								<li
									key={ index }
									className=' hover:opacity-70 font-Poppins text-primary duration-300 flex gap-2 text-sm border bg-[#F2FAFF] py-2 px-[14px] rounded-full border-[#C8EAFF] items-center cursor-pointer'
								>
									{ option }
									<InfoBlue />
								</li>
							)) }
						</ul>
					</motion.div>
				) }
			</div>
		</div>
	);
};

export default BioMakersSection;
