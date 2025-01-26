'use client';

import React, { useState } from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import Image from 'next/image';
import { toast } from 'sonner';

import { footerData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { getNumofCols, screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';
import { createEmailSubscription } from '@/services/subscription';

import CustomLink from '../CustomLink';
import { ArrowEmail } from '../Icons';
import LegitScriptSeal from '../LegitScriptSeal';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';

type FooterProps = {
  landingPage?: boolean;
  theme?: 'dark' | 'light';
};

const FooterContent: React.FC<FooterProps> = ({
	landingPage,
	theme = 'light',
}) => {
	const [email, setEmail] = useState<string>('');
	const [openDisclaimer, setOpenDisclaimer] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.lg;

	const onSubmitSubscription = async(e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		const { status, message: messageResponse } = await createEmailSubscription(
			email
		);
		if (status === 'OK') {
			setLoading(false);
			toast.success(messageResponse, {
				icon: <AiFillCheckCircle className='h-5 w-5 text-green-alert' />,
			});
			setEmail('');
		} else {
			toast.error(messageResponse, {
				icon: <AiFillCloseCircle className='h-5 w-5 text-danger' />,
			});
		}
		setLoading(false);
	};

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
						key={ `child-${item.title}` }
						className='flex flex-col gap-y-9px'>
						<p
							className={ clsxm('text-base font-medium mb-18px', {
								['text-primary']: theme === 'light',
								['text-white']: theme === 'dark',
							}) }
						>
							{ item.title }
						</p>

						{ item.menu.map(childItem => (
							<CustomLink
								aria-label={ childItem.name }
								key={ childItem.name }
								href={ childItem.href }
								externalLink={ childItem.externalLink }
								className={ clsxm(
									'text-xs !leading-[18px] font-medium font-Poppins',
									{
										['text-grey-primary']: theme === 'light',
										['text-grey-primary sm:text-white']: theme === 'dark',
									}
								) }
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
			<div className='flex items-end gap-14'>
				{ theme === 'light' && <LegitScriptSeal /> }
				<div>
					<div
						className={ clsxm(
							'grid gap-y-7 gap-x-[53px] max-lg:hidden',
							gridColList
						) }
					>
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
										{
											[openDisclaimer
												? 'text-grey-400 sm:text-primary'
												: 'text-primary']: theme === 'light',
											['text-white']: theme === 'dark',
										}
									) }
									{ ...(isMobile
										? {
											onClick: () => setOpenDisclaimer(!openDisclaimer),
										}
										: {
											onMouseEnter: handleMouseEnterDisclaimer,
											onMouseLeave: handleMouseLeaveDisclaimer,
										}) }
								>
									{ footerData.disclaimer.label }
								</span>
							</PopoverTrigger>
							<PopoverContent
								{ ...(isMobile
									? {
										side: 'top',
										align: 'end',
										sideOffset: 20,
									}
									: {
										sideOffset: 15,
										alignOffset: 17,
										side: 'bottom',
										align: 'end',
										onMouseEnter: handleMouseEnterDisclaimer,
										onMouseLeave: handleMouseLeaveDisclaimer,
									}) }
								className={ clsxm(
									'border border-grey-100 shadow-[0px_4px_18px_rgba(0,0,0,0.15)] backdrop-blur-[40px] rounded-2xl px-[15px] py-6 sm:px-6 max-w-[70vw] md:w-full md:max-w-2xl',
									{
										['bg-white/30']: theme === 'light',
										['bg-midnight-blue/30']: theme === 'dark',
									}
								) }
							>
								<span
									dangerouslySetInnerHTML={ {
										__html: footerData.disclaimer.content,
									} }
									className={ clsxm(
										'text-[10px] sm:text-xs !leading-5 font-medium font-Poppins flex flex-col gap-y-2.5',
										{
											['text-grey-600']: theme === 'light',
											['text-white']: theme === 'dark',
										}
									) }
								/>
							</PopoverContent>
						</Popover>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className='container-center'>
			<div className='flex gap-[39px] max-lg:flex-col lg:justify-between w-full'>
				<div className='flex flex-col'>
					<CustomLink
						aria-label='footer logo'
						href='/'>
						<div className='relative overflow-hidden w-[69.98px] sm:w-[85px] h-[16.47px] sm:h-5'>
							<Image
								alt='logo'
								src={
									theme === 'light' ? footerData.logoDark : footerData.logoLight
								}
								fill
								loading='lazy'
								className='object-contain'
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							/>
						</div>
					</CustomLink>

					<div className='mt-18px sm:mt-[26px] max-sm:max-w-[330px]'>
						<p
							className={ clsxm(
								'text-xs max-sm:!leading-[19px] sm:text-sm font-medium',
								{
									['text-primary']: theme === 'light',
									['text-white']: theme === 'dark',
								}
							) }
						>
							{ footerData.content }
						</p>
					</div>

					<form
						onSubmit={ onSubmitSubscription }
						className='mt-5 sm:mt-[26px] flex items-center relative'
					>
						<input
							type='email'
							value={ email }
							onChange={ (e: React.ChangeEvent<HTMLInputElement>) =>
								setEmail(e.target.value) }
							placeholder='Email*'
							className={ clsxm(
								'!border-b w-full sm:w-[447px] py-[11px] sm:py-15px pr-8 !pl-0 bg-transparent text-xs sm:text-sm font-medium border-0 focus:border-0 focus:ring-0 focus:outline-0',
								{
									['placeholder:text-primary text-primary !border-[#C4C4C4] focus:!border-primary']:
                    theme === 'light',
									['placeholder:text-white text-white !border-[#C4C4C4] sm:!border-white focus:!border-white']:
                    theme === 'dark',
								}
							) }
							required
						/>
						{ theme === 'light' && (
							<button
								disabled={ loading }
								type='submit'
								className='focus:outline-none focus:ring-0 absolute right-0'
								aria-label='submit-subscription'
							>
								<ArrowEmail />
							</button>
						) }
					</form>

					<div className='mt-[34px] sm:mt-[65px] flex flex-wrap items-center gap-[23px]'>
						{ (theme === 'light'
							? footerData.socialMedia
							: footerData.socialMediaLight
						).map(item => (
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
	);
};

export default FooterContent;
