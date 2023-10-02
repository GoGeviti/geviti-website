'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import { navbarData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';

import CustomLink from '../CustomLink';
import { Bars3Icon } from '../Icons';
import { Sheet, SheetContent } from '../Sheet';

type NavbarProps = {
	className?: string;
	theme?: 'light' | 'dark';
	iconsMenu?: {
		id: string;
		href: string;
		icon: (props?: React.SVGProps<SVGSVGElement>) => React.JSX.Element; // eslint-disable-line no-unused-vars
	}[];
	actionsMenu?: {
		name: string;
		href: string;
		externalLink?: boolean;
	}[];
};

const Navbar: React.FC<NavbarProps> = ({
	className,
	theme = 'dark',
	iconsMenu = navbarData.iconsMenu,
	actionsMenu = navbarData.actionsMenu
}) => {
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
								'rounded-md px-3 py-2 text-sm',
								isActive ? 'font-BRSonoma font-medium' : 'font-Poppins font-medium',
								theme === 'dark' ? 'text-grey-secondary hover:text-white' : 'text-primary'
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
				{ iconsMenu?.map(iconMenu => {
					const Icon = iconMenu.icon;

					return (
						<button
							aria-label='Action'
							type='button'
							key={ iconMenu.id }
							className='relative rounded-full focus:outline-0 focus:ring-0 focus:border-0'
							onClick={ () => {
								if (iconMenu.href) {
									router.push(iconMenu.href);
								}
							} }
						>
							<Icon className={ clsxm('w-[17px] h-[17px]', theme === 'dark' ? 'text-grey-secondary' : 'text-primary') } />
						</button>
					);
				}) }
			</>
		);
	};

	const renderActionMenuList = () => {
		return (
			<>
				{ actionsMenu?.map(menu => (
					<button
						aria-label='Action'
						className={ clsxm(
							'btn font-Poppins text-sm font-medium leading-6',
							theme === 'dark' ? 'btn-secondary' : 'btn-primary !text-grey-background'
						) }
						key={ menu.name }
					>
						{ menu.name }
					</button>
				)) }
			</>
		);
	};

	const renderLogo = () => {
		const src = theme === 'dark' ? navbarData.logoLight : navbarData.logoDark;

		return (
			<CustomLink
				href='/'
				className='focus:outline-0 focus:ring-0 focus:border-0'>
				<div className='flex-shrink-0 relative overflow-hidden w-[85px] h-5'>
					<Image
						src={ src }
						alt='logo'
						fill
						priority
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
				<SheetContent className={ theme === 'dark' ? 'bg-primary text-white' : 'bg-grey-secondary text-primary' }>
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
				'inset-x-0 top-0 z-50 absolute pt-11px lg:pt-6',
				className
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
						<div className='flex lg:hidden'>
							<button
								className={ clsxm('focus:outline-none focus:border-0 focus:ring-0', theme === 'dark' ? 'text-grey-secondary' : 'text-primary') }
								onClick={ () => setOpenSheet(prevOpen => !prevOpen) }
								aria-label='Toggle Menu'
							>
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
