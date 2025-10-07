'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import longevitiPanelData from '@/constant/data/longevitiPanel';
import clsxm from '@/helpers/clsxm';

const analyzedData = longevitiPanelData.analyzed;

const Analyzed: React.FC = () => {
	const searchParams = useSearchParams();
	const gender = searchParams.get('gender');

	const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<number>(1);

	useEffect(() => {
		setSelectedCategoryIdx(gender === 'women' ? 2 : 1);
	}, [gender]);

	const [openIdx, setOpenIdx] = useState<number>(-1);

	const renderButtonSwitch = () => {
		return (
			<div className='relative w-full rounded-[100px] h-[49px] px-1.5 bg-grey-50'>
				<div className='relative flex items-center justify-center w-full h-full gap-3.5'>
					{ analyzedData.categories.map(opt => {
						const selected = selectedCategoryIdx === opt.id;

						return (
							<button
								key={ `opt-${opt.id}` }
								onClick={ () => setSelectedCategoryIdx(opt.id) }
								className={ clsxm(
									selected
										? 'text-white font-medium'
										: 'text-grey-400 font-normal',
									'transition-colors px-3.5 h-[34px] sm:h-[37px] rounded-[100px] relative inline-flex items-center justify-center'
								) }
							>
								<span className='relative z-10 text-xs sm:text-sm !leading-normal'>
									{ opt.title }
								</span>

								{ selected && (
									<motion.span
										layoutId='longeviti-panel-analyzed'
										transition={ { type: 'spring', duration: 0.75 } }
										className='absolute inset-0 z-0 bg-primary rounded-[100px]'
									/>
								) }
							</button>
						);
					}) }
				</div>
			</div>
		);
	};

	return (
		<div className='container-center w-full flex flex-col gap-y-[42px] lg:gap-y-16'>
			<div className='max-w-[659px] mx-auto flex flex-col items-center text-center'>
				<h2 className='text-2xl sm:text-3xl lg:text-4xl !leading-normal -tracking-0.04em sm:font-medium text-primary font-VictorSerif italic font-medium'>
					{ analyzedData.title }
				</h2>
				<p className='mt-[23px] lg:mt-3.5 text-grey-primary text-xs sm:text-sm !leading-5'>
					{ analyzedData.description }
				</p>
			</div>
			<div className='flex justify-center'>
				<div>{ renderButtonSwitch() }</div>
			</div>
			<AnimatePresence mode='wait'>
				<motion.div
					key={ `longevitiPanel-analyzed-list-${selectedCategoryIdx}` }
					initial={ { y: 10, opacity: 0 } }
					animate={ { y: 0, opacity: 1 } }
					exit={ { y: -10, opacity: 0 } }
					transition={ { duration: 0.375, ease: 'easeInOut' } }
				>
					<div className='w-full flex flex-col gap-y-3.5 lg:gap-y-6'>
						{ analyzedData.categories.find(e => e.id === selectedCategoryIdx)?.data.map((item, itemIdx) => (
							<Accordion
								key={ item.title }
								index={ itemIdx }
								openIdx={ openIdx }
								setOpenIdx={ setOpenIdx }
								{ ...item }
							/>
						)) }
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default Analyzed;

type AccordionProps = (typeof analyzedData.categories[0]['data'])[0] & {
  index: number;
  openIdx: number;
  setOpenIdx: React.Dispatch<React.SetStateAction<number>>;
};

const Accordion: React.FC<AccordionProps> = ({
	title,
	image,
	list,
	index,
	openIdx,
	setOpenIdx,
}) => {
	const isOpen = index === openIdx;

	const toggleAccordion = (idx: number) => {
		if (openIdx === idx) setOpenIdx(-1);
		else setOpenIdx(idx);
	};

	const renderList = () => {
		return (
			<ul className='flex flex-wrap gap-3.5'>
				{ list.map((item: string, itemIdx: number) => {
					return (
						<li
							key={ itemIdx }
							className='text-primary font-medium -tracking-0.04em backdrop-blur-[25px] flex text-lg border bg-[#F2FAFF] py-3.5 px-6 rounded-xl lg:rounded-full border-[#C8EAFF] items-center select-none'
						>
							{ item }
						</li>
					);
				}) }
			</ul>
		);
	};

	return (
		<div
			onClick={ () => toggleAccordion(index) }
			className='relative rounded-[14px] overflow-hidden cursor-pointer'
		>
			<motion.div
				initial={ false }
				animate={ {
					borderColor: isOpen ? '#e6e7e7' : '#F5F6F6',
					background: isOpen ? '#FFFFFF' : '#FCFCFC',
				} }
				className='relative w-full border rounded-[14px] py-[31px] px-4 lg:px-6'
			>
				<div className='flex items-center justify-between gap-[42px]'>
					<div className='flex items-center gap-3.5 lg:gap-6'>
						<Image
							src={ image }
							alt={ title }
							width={ 46 }
							height={ 46 }
							className='w-[46px] h-[46px] flex-shrink-0'
						/>

						<h5 className='text-lg lg:text-2xl !leading-normal max-lg:font-medium -tracking-0.04em text-primary'>
							{ title }
						</h5>
					</div>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='w-6 h-6 text-grey-200 flex-shrink-0'
					>
						<path
							d='M12 22.7471C6.07 22.7471 1.25 17.9271 1.25 11.9971C1.25 6.06707 6.07 1.24707 12 1.24707C17.93 1.24707 22.75 6.06707 22.75 11.9971C22.75 17.9271 17.93 22.7471 12 22.7471ZM12 2.74707C6.9 2.74707 2.75 6.89707 2.75 11.9971C2.75 17.0971 6.9 21.2471 12 21.2471C17.1 21.2471 21.25 17.0971 21.25 11.9971C21.25 6.89707 17.1 2.74707 12 2.74707Z'
							fill='currentColor'
						/>
						<path
							d='M16 12.7471H8C7.59 12.7471 7.25 12.4071 7.25 11.9971C7.25 11.5871 7.59 11.2471 8 11.2471H16C16.41 11.2471 16.75 11.5871 16.75 11.9971C16.75 12.4071 16.41 12.7471 16 12.7471Z'
							fill='currentColor'
						/>
						<motion.path
							initial={ false }
							animate={ {
								opacity: isOpen ? 0 : 1,
							} }
							d='M12 16.7471C11.59 16.7471 11.25 16.4071 11.25 15.9971V7.99707C11.25 7.58707 11.59 7.24707 12 7.24707C12.41 7.24707 12.75 7.58707 12.75 7.99707V15.9971C12.75 16.4071 12.41 16.7471 12 16.7471Z'
							fill='currentColor'
						/>
					</svg>
				</div>
				<AnimatePresence mode='wait'>
					{ isOpen && (
						<motion.div
							key={ `longeviti-panel-analyzed-${title}` }
							initial={ { y: -30, opacity: 0, height: 0 } }
							animate={ { y: 0, opacity: 1, height: 'fit-content' } }
							exit={ { y: -30, opacity: 0, height: 0 } }
							transition={ { duration: 0.5, ease: 'easeInOut' } }
						>
							<div className='pt-[42px]'>{ renderList() }</div>
						</motion.div>
					) }
				</AnimatePresence>
			</motion.div>
		</div>
	);
};
