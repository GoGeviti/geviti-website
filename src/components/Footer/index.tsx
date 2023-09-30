'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { footerData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { getNumofCols } from '@/helpers/style';

import CustomLink from '../CustomLink';

type FooterProps = {
	landingPage?: boolean;
};

const Footer: React.FC<FooterProps> = ({ landingPage }) => {
	const [email, setEmail] = useState<string>('');

	const renderMenuList = () => {
		const menuList = footerData.list;

		return (
			<>
				{ menuList.map(item => (
					<div
						key={ `child-${ item.title }` }
						className='flex flex-col gap-y-9px'
					>
						<p className='text-base font-medium font-BRSonoma mb-18px text-primary'>{ item.title }</p>

						{ item.menu.map(childItem => (
							<CustomLink
								key={ childItem.name }
								href={ childItem.href }
								externalLink={ childItem.externalLink }
								className='text-grey-primary text-xs font-medium font-BRSonoma'
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
			<>
				<div className={ clsxm('grid gap-y-7 gap-x-20 max-lg:hidden lg:col-span-2', gridColList) }>
					{ renderMenuList() }
				</div>

				{ landingPage && (
					<div className='flex flex-col lg:hidden mt-[53px] gap-y-[53px]'>
						{ renderMenuList() }
					</div>
				) }
			</>
		);
	};

	return (
		<div className='pt-[45px] pb-[42px] lg:pt-[92px] lg:pb-[109px]'>
			<div className='container-center'>
				<div className='lg:grid lg:grid-cols-5'>
					<div className='flex flex-col lg:col-span-3'>
						<CustomLink href='/'>
							<div className='relative overflow-hidden w-[85px] h-5'>
								<Image
									alt='logo'
									src={ footerData.logo }
									fill
									className='object-contain'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								/>
							</div>
						</CustomLink>

						<div className='mt-7 max-sm:max-w-[330px]'>
							<p className='font-BRSonoma text-sm font-medium'>{ footerData.content }</p>
						</div>

						<div className='mt-3.5 sm:mt-18px'>
							<input
								type='email'
								value={ email }
								onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value) }
								placeholder='Email*'
								className='!border-b !border-[#C4C4C4] w-full sm:w-[447px] focus:!border-primary py-3 sm:py-15px pr-5 !pl-0 bg-transparent placeholder:text-primary text-primary text-xs sm:text-sm font-medium font-BRSonoma border-0 focus:border-0 focus:ring-0 focus:outline-0'
							/>
						</div>

						<div className='mt-[34px] sm:mt-[54px] flex items-center gap-[23px]'>
							{ footerData.socialMedia.map(item => (
								<CustomLink
									key={ item.alt }
									href={ item.url }
									externalLink
								>
									<div className='relative overflow-hidden w-4 sm:w-5 h-4 sm:h-5'>
										<Image
											src={ item.image }
											alt={ item.alt }
											sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
											fill
										/>
									</div>
								</CustomLink>
							)) }
						</div>
						<div className='mt-7 hidden md:block'>
							<p className='font-BRSonoma text-sm font-medium'>{ footerData.bottomContent }</p>
						</div>
					</div>

					{ renderMenuListContent() }
				</div>
			</div>
		</div>
	);
};

export default Footer;