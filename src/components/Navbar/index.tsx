'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { navbarData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import CustomLink from '../CustomLink';
import { Bars3Icon } from '../Icons';
import { Sheet, SheetContent } from '../Sheet';

type NavbarProps = { position?: 'fixed' | 'absolute'; };

const Navbar: React.FC<NavbarProps> = ({ position = 'fixed' }) => {
	const pathname = usePathname();
	const router = useRouter();

	const [openSheet, setOpenSheet] = useState<boolean>(false);

	const renderMenuList = () => {
		return (
			<>
				{ navbarData.menu.map(link => {
					const isActive = pathname === link.href;

					return (
						<CustomLink
							key={ link.name }
							href={ link.href }
							externalLink={ link.externalLink }
							className={ clsxm(
								'rounded-md font-BRSonoma px-3 py-2 text-sm font-medium text-grey-secondary hover:text-white',
								isActive ? 'bg-black-background' : 'hover:bg-black-background/90'
							) }
						>
							{ link.name }
						</CustomLink>
					);
				}) }
			</>
		);
	};

	const renderIconMenuList = () => {
		return (
			<>
				{ navbarData.iconsMenu.map(iconMenu => {
					return (
						<button
							type='button'
							key={ iconMenu.id }
							className='relative rounded-full hover:bg-black-background/90 p-1 focus:outline-0 focus:ring-0 focus:border-0'
							onClick={ () => {
								if (iconMenu.href) {
									router.push(iconMenu.href);
								}
							} }
						>
							<div className='relative overflow-hidden w-[17px] h-[17px]'>
								<Image
									src={ iconMenu.src }
									alt=''
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									fill
								/>
							</div>
						</button>
					);
				}) }
			</>
		);
	};

	const renderActionMenuList = () => {
		return (
			<>
				{ navbarData.actionsMenu.map(menu => (
					<button
						className='btn btn-secondary font-Poppins text-sm font-medium leading-6'
						key={ menu.name }
					>
						{ menu.name }
					</button>
				)) }
			</>
		);
	};

	const renderLogo = () => {
		return (
			<CustomLink href='/'>
				<div className='flex-shrink-0 relative overflow-hidden w-[85px] h-5'>
					<Image
						src={ navbarData.logo }
						alt=''
						fill
						className='object-contain'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					/>
				</div>
			</CustomLink>
		);
	};

	const renderSheet = () => {
		return (
			<Sheet
				open={ openSheet }
				onOpenChange={ setOpenSheet }
			>
				<SheetContent className='bg-primary text-white'>
					<div className='mt-8 mb-5'>
						{ renderLogo() }
					</div>

					<div className='flex flex-col divide-y divide-white'>
						<div className='flex flex-col gap-4 -mx-3 pb-5'>
							{ renderMenuList() }
						</div>

						<div>
							<div className='flex gap-4 pt-4'>
								{ renderIconMenuList() }
							</div>

							<div className='mt-10 flex flex-col justify-center'>
								{ renderActionMenuList() }
							</div>
						</div>
					</div>
				</SheetContent>
			</Sheet>
		);
	};

	return (
		<>
			<header className={ clsxm(
				'inset-x-0 top-0 z-50',
				position === 'fixed' ? 'fixed bg-primary shadow-sm' : 'absolute'
			) }>
				<nav className='w-full container-center'>
					<div className='flex h-60px lg:h-20 items-center justify-between'>
						<div className='flex items-center'>
							{ renderLogo() }
							<div className='hidden lg:ml-10 lg:block'>
								<div className='flex items-center gap-x-5'>
									{ renderMenuList() }
								</div>
							</div>
						</div>
						<div className='hidden lg:ml-6 lg:block'>
							<div className='flex items-center'>
								<div className='flex items-center gap-x-25px'>
									{ renderIconMenuList() }
								</div>

								<div className='relative ml-8'>
									<div>
										{ renderActionMenuList() }
									</div>
								</div>
							</div>
						</div>
						<div className='-mr-2 flex lg:hidden'>
							<button
								className='relative inline-flex items-center justify-center rounded-md p-2 text-grey-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
								onClick={ () => setOpenSheet(prevOpen => !prevOpen) }
							>
								<span className='absolute -inset-0.5' />
								<Bars3Icon
									className='block h-6 w-6'
									aria-hidden='true' />
							</button>
						</div>
					</div>
				</nav>
			</header>

			{ renderSheet() }
		</>
	);
};

export default Navbar;
