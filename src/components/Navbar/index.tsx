'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import ResourcesDropdown from '@/components/Navbar/ResourcesDropdown';
import { navbarData } from '@/constant/data';
import clsxm from '@/helpers/clsxm';
import { screens } from '@/helpers/style';
import { useWindowDimensions } from '@/hooks';

import CustomLink from '../CustomLink';
import { Bars3Icon } from '../Icons';

import MobileNav from './MobileNav';

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
	withBgWhite?: boolean;
	isWithnavbarData?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({
	className,
	theme = 'dark',
	iconsMenu = navbarData.iconsMenu,
	actionsMenu = navbarData.actionsMenu,
	isWithnavbarData = true,
	withBgWhite = false,
}) => {
	const pathname = usePathname();
	const router = useRouter();
	const windowDimensions = useWindowDimensions();

	const [openSheet, setOpenSheet] = useState<boolean>(false);
	const [selectedItem, setSelectedItem] = useState<number>(5);

	useEffect(() => {
		const currentIndex = navbarData.menu.findIndex(link =>
			pathname.includes(link.href)
		);
		if (currentIndex !== -1) {
			setSelectedItem(currentIndex);
		} else if (pathname === '/') {
			setSelectedItem(4);
		} else {
			setSelectedItem(5);
		}
	}, [pathname]);

	const handleSelectedItem = (id: number) => {
		setSelectedItem(id);
	};

	const renderMenuList = () => {
		return (
			<>
				{ navbarData.menu.map((link, id) => {
					if (link.items) {
						return (
							<ResourcesDropdown
								key={ link.name }
								menuName={ link.name }
								items={ link.items }
								theme={ theme }
							/>
						);
					}

					return (
						<CustomLink
							key={ link.name }
							onClick={ () => handleSelectedItem(id) }
							href={ link.href }
							externalLink={ link.externalLink }
							className={ clsxm(
								'rounded-md px-3 py-2 text-sm font-Poppins',
								theme === 'dark'
									? 'text-grey-secondary hover:text-white'
									: 'text-primary',
								isWithnavbarData ? 'block' : 'hidden',
								selectedItem === id
									? 'font-semibold'
									: '!font-medium hover:font-semibold'
							) }
							aria-label={ link.name }
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
							aria-label='icon menu list'
							type='button'
							key={ iconMenu.id }
							className='relative rounded-full focus:outline-0 focus:ring-0 focus:border-0'
							onClick={ () => {
								if (iconMenu.href) {
									router.push(iconMenu.href);
								}
							} }
						>
							<Icon
								className={ clsxm(
									'w-[17px] h-[17px]',
									theme === 'dark' ? 'text-grey-secondary' : 'text-primary'
								) }
							/>
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
					<CustomLink
						href={ menu.href }
						externalLink={ menu.externalLink }
						aria-label={ menu.name }
						key={ menu.name }
					>
						<div
							className={ clsxm(
								'btn font-Poppins text-sm font-medium hover:scale-[1.03] active:scale-100 !duration-200 ease-[cubic-bezier(.15,1.14,.88,.98)] hover:!translate-y-0',
								theme === 'dark'
									? 'btn-secondary'
									: 'btn-primary !text-grey-background'
							) }
						>
							{ menu.name }
						</div>
					</CustomLink>
				)) }
			</>
		);
	};
	const isMobile = windowDimensions.width < screens.lg;

	const renderLogo = () => {
		const src =
			isMobile && withBgWhite
				? navbarData.logoDark
				: theme === 'dark'
					? navbarData.logoLight
					: navbarData.logoDark;

		return (
			<CustomLink
				href='/'
				className='focus:outline-0 focus:ring-0 focus:border-0'
				aria-label='Logo'
			>
				<div className='flex-shrink-0 relative overflow-hidden w-[85px] h-5'>
					<Image
						src={ openSheet ? navbarData.logoLight : src }
						alt='logo'
						fill
						priority={ true }
						className='object-contain'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					/>
				</div>
			</CustomLink>
		);
	};

	return (
		<>
			<header
				className={ clsxm(
					'inset-x-0 top-0 z-50 absolute pt-11px lg:pt-6',
					withBgWhite && !isMobile && 'max-lg:bg-white',
					className
				) }
			>
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
							<div className='flex items-center space-x-25px'>
								<div className='flex items-center gap-x-25px'>
									{ renderIconMenuList() }
								</div>
								<CustomLink
									href='https://app.gogeviti.com/'
									onClick={ () => handleSelectedItem(4) }
									className={ clsxm(
										'lg:w-[120px] rounded-md px-3 py-2 text-sm font-Poppins hover:font-semibold md:block hidden',
										theme === 'dark'
											? 'text-grey-secondary hover:text-white'
											: 'text-primary',
										isWithnavbarData ? 'block' : 'hidden',
										selectedItem === 4 ? 'font-medium' : 'font-medium'
									) }
									aria-label='Dashboard'
								>
									Dashboard
								</CustomLink>
								<div className='relative'>
									<div>{ renderActionMenuList() }</div>
								</div>
							</div>
						</div>
						<div className='flex lg:hidden'>
							<button
								className={ clsxm(
									'focus:outline-none focus:border-0 focus:ring-0',
									theme === 'dark' ? 'text-grey-secondary' : 'text-primary',
									withBgWhite && 'text-primary',
									openSheet && 'text-grey-secondary'
								) }
								onClick={ () => {
									setOpenSheet(prevOpen => !prevOpen);
									document.body.style.overflow = openSheet ? 'unset' : 'hidden';
								} }
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

			<MobileNav
				isOpen={ openSheet }
				onClose={ () => setOpenSheet(false) } />
		</>
	);
};

export default Navbar;
