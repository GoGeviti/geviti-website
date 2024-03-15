'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import { footerData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { getNumofCols, screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';

import CustomLink from '../CustomLink';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';

type FooterProps = {
	landingPage?: boolean;
};

const WrapperFooter: React.FC<FooterProps & { children: React.ReactNode; }> = ({ landingPage, children }) => {
	const wrapperClassName = 'pt-6 pb-[106px] lg:pt-12 lg:h-[569px] lg:pb-[310px] bg-white rounded-19px relative overflow-hidden w-full';
	const container = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end end']
	});
	const y = useTransform(scrollYProgress, [0, 1], [-569, 0]);

	if (!landingPage) {
		return (
			<div className={ wrapperClassName }>
				{ children }
			</div>
		);
	}

	return (
		<>
			<motion.div
				ref={ container }
				style={ { y } }
				className={ clsxm(wrapperClassName, 'max-lg:hidden') }>
				{ children }
			</motion.div>
			<div className={ clsxm(wrapperClassName, 'lg:hidden') }>
				{ children }
			</div>
		</>
	);
};

const Footer: React.FC<FooterProps> = ({ landingPage }) => {
	const [email, setEmail] = useState<string>('');
	const [openDisclaimer, setOpenDisclaimer] = useState<boolean>(false);

	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.lg;

	const handleMouseEnterDisclaimer = () => {
		setOpenDisclaimer(true);
	};

	const handleMouseLeaveDisclaimer = () => {
		setOpenDisclaimer(false);
	};

	const renderMenuList = () => {
		const menuList = footerData.list;

		return (
			<>
				{ menuList.map(item => (
					<div
						key={ `child-${ item.title }` }
						className='flex flex-col gap-y-9px'
					>
						<p className='text-base font-medium mb-18px text-primary'>{ item.title }</p>

						{ item.menu.map(childItem => (
							<CustomLink
								aria-label={ childItem.name }
								key={ childItem.name }
								href={ childItem.href }
								externalLink={ childItem.externalLink }
								className='text-grey-primary text-xs !leading-[18px] font-medium font-Poppins'
							>
								{ childItem.name }
							</CustomLink>
						)) }
					</div>
				)) }
			</>
		);
	};
	const renderMenuListContent = () => {
		const menuList = footerData.list;
		const gridColList = getNumofCols(menuList?.length);

		return (
			<div>
				<div className={ clsxm('grid gap-y-7 gap-x-[53px] max-lg:hidden', gridColList) }>
					{ renderMenuList() }
				</div>

				{ landingPage && (
					<div className='flex flex-col lg:hidden gap-y-[41px]'>
						{ renderMenuList() }
					</div>
				) }

				<div className='mt-12 lg:mt-[15px] relative z-10 flex w-full'>
					<Popover
						open={ openDisclaimer }
						onOpenChange={ setOpenDisclaimer }>
						<PopoverTrigger
							onClick={ e => e.preventDefault() }
							className='flex max-sm:w-full focus:ring-0 focus:outline-none focus:border-none'
						>
							<span
								className={ clsxm(
									'text-sm !leading-[21px] font-Poppins underline',
									openDisclaimer ? 'text-grey-400 sm:text-primary' : 'text-primary'
								) }
								onMouseEnter={ handleMouseEnterDisclaimer }
								onMouseLeave={ handleMouseLeaveDisclaimer }
								onClick={ () => setOpenDisclaimer(!openDisclaimer) }
							>
								{ footerData.disclaimer.label }
							</span>
						</PopoverTrigger>
						<PopoverContent
							onMouseEnter={ handleMouseEnterDisclaimer }
							onMouseLeave={ handleMouseLeaveDisclaimer }
							{ ...isMobile
								? {
									side: 'top',
									align: 'start',
									sideOffset: 20
								}
								: {
									sideOffset: 15,
									alignOffset: 17,
									side: 'bottom',
									align: 'end'
								} }
							className='border border-grey-100 shadow-[0px_4px_18px_rgba(0,0,0,0.15)] backdrop-blur-[40px] rounded-2xl bg-white/30 px-[15px] py-6 sm:px-6 w-[var(--radix-popover-trigger-width)] md:w-full md:max-w-2xl'
						>
							<span
								dangerouslySetInnerHTML={ { __html: footerData.disclaimer.content } }
								className='text-[10px] sm:text-xs !leading-5 text-grey-600 font-medium font-Poppins flex flex-col gap-y-2.5' />
						</PopoverContent>
					</Popover>
				</div>
			</div>
		);
	};

	return (
		<div className='pb-[66px] lg:pb-6 px-4 lg:px-3 max-lg:pt-2.5 overflow-hidden font-Poppins'>
			<WrapperFooter landingPage={ landingPage }>
				<div className='container-center'>
					<div className='flex gap-[39px] max-lg:flex-col lg:justify-between w-full'>
						<div className='flex flex-col'>
							<CustomLink
								aria-label='footer logo'
								href='/'>
								<div className='relative overflow-hidden w-[69.98px] sm:w-[85px] h-[16.47px] sm:h-5'>
									<Image
										alt='logo'
										src={ footerData.logo }
										fill
										loading='lazy'
										className='object-contain'
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									/>
								</div>
							</CustomLink>

							<div className='mt-18px sm:mt-[26px] max-sm:max-w-[330px]'>
								<p className='text-xs max-sm:!leading-[19px] sm:text-sm font-medium'>{ footerData.content }</p>
							</div>

							<div className='mt-5 sm:mt-[26px]'>
								<input
									type='email'
									value={ email }
									onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value) }
									placeholder='Email*'
									className='!border-b !border-[#C4C4C4] w-full sm:w-[447px] focus:!border-primary py-[11px] sm:py-15px pr-5 !pl-0 bg-transparent placeholder:text-primary text-primary text-xs sm:text-sm font-medium border-0 focus:border-0 focus:ring-0 focus:outline-0'
								/>
							</div>

							<div className='mt-[34px] sm:mt-[65px] flex flex-wrap items-center max-sm:justify-between gap-2 sm:gap-[23px]'>
								{ footerData.socialMedia.map(item => (
									<CustomLink
										key={ item.alt }
										href={ item.url }
										externalLink
										aria-label={ item.alt }
									>
										<div className='relative overflow-hidden w-[40.79px] sm:w-5 h-[40.79px] sm:h-5'>
											<Image
												src={ item.image }
												alt={ item.alt }
												sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
												fill
												loading='lazy'
											/>
										</div>
									</CustomLink>
								)) }
							</div>
						</div>

						{ renderMenuListContent() }
					</div>
				</div>

				<div className='absolute bottom-0 lg:-bottom-[5%] inset-x-0 z-0'>
					<div className='relative overflow-hidden w-full h-full'>
						<Image
							src={ footerData.image }
							alt='flexible'
							loading='lazy'
							width={ 1327.38 }
							height={ 335.04 }
							className='w-full'
						/>
					</div>
				</div>
			</WrapperFooter>
		</div>
	);
};

export default Footer;