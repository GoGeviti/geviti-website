'use client';
import React, { useEffect, useState } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { usePathname } from 'next/navigation';

import navbarData from '@/constant/data/navigation';
import clsxm from '@/helpers/clsxm';

import CustomLink from '../../CustomLink';
import { Bars3Icon, ChevronDown } from '../../Icons';

import GevitiLogo from './GevitiLogo';
import MobileNav from './MobileNav';

const transition = {
	type: 'spring',
	mass: 0.5,
	damping: 11.5,
	stiffness: 100,
	restDelta: 0.001,
	restSpeed: 0.001,
};

export const MenuItem = ({
	setActive,
	active,
	item,
	children,
}: {
	setActive: React.Dispatch<React.SetStateAction<string | null>>;
	active: string | null;
	item: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			onMouseEnter={ () => setActive(item) }
			className='relative font-Poppins'
		>
			<motion.span
				transition={ { duration: 0.3 } }
				className={ clsxm(
					'cursor-pointer text-sm font-medium !leading-[21px] inline-flex gap-2 items-center',
					active === item ? 'text-blue-primary' : 'text-grey-50 hover:text-blue-primary'
				) }
			>
				{ item }
				<span>
					<ChevronDown className={
						clsxm(
							'w-4 h-4 ease-out transform duration-200',
							active === item ? 'rotate-180 text-blue-primary' : 'text-grey-50'
						)
					} />
				</span>
			</motion.span>
			{ active !== null && (
				<motion.div
					initial={ { opacity: 0, scale: 0.85, y: 10 } }
					animate={ { opacity: 1, scale: 1, y: 0 } }
					transition={ transition }
				>
					{ active === item && (
						<div className='absolute top-[calc(100%_+_1rem)] pt-3 left-0 transform z-50'>
							<motion.div
								transition={ transition }
								layoutId='active' // layoutId ensures smooth animation
								className='bg-white/10 backdrop-blur-[27px] rounded-[9px] overflow-hidden border border-white/5'
							>
								<motion.div
									layout // layout ensures smooth animation
									className='w-max h-full p-4'
								>
									{ children }
								</motion.div>
							</motion.div>
						</div>
					) }
				</motion.div>
			) }
		</div>
	);
};

export const Menu = ({
	setActive,
	children,
}: {
	setActive: React.Dispatch<React.SetStateAction<string | null>>;
	children: React.ReactNode;
}) => {
	return (
		<nav
			onMouseLeave={ () => setActive(null) }
			className='relative h-[60px] lg:h-[69px] font-Poppins border border-white/5 backdrop-blur-[25px] p-18px lg:pl-[42px] lg:py-3 lg:pr-3 rounded-[100px] bg-white/10 flex items-center space-x-6 xl:space-x-[50px] w-full justify-between'>
			{ children }
		</nav>
	);
};

type NavbarProps = {
	className?: string;
	animationProps?: MotionProps;
};

const Navbar: React.FC<NavbarProps> = ({ className, animationProps }) => {
	const [active, setActive] = useState<string | null>(null);
	const [openSheet, setOpenSheet] = useState<boolean>(false);
	const [selectedItem, setSelectedItem] = useState<number>(5);

	const pathname = usePathname();

	useEffect(() => {
		const currentIndex = navbarData.menu.findIndex(link => pathname.includes(link.href));
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

	const renderIconMenuList = () => {
		return (
			<>
				{ navbarData.iconsMenu?.map(iconMenu => {
					const Icon = iconMenu.icon;

					return (
						<CustomLink
							aria-label='icon menu list'
							key={ iconMenu.id }
							className='font-Poppins relative rounded-full focus:outline-0 focus:ring-0 focus:border-0 group'
							href={ iconMenu.href }
						>
							<Icon className='w-[17px] h-[17px] text-grey-50 group-hover:text-blue-primary' />
						</CustomLink>
					);
				}) }
			</>
		);
	};

	const renderActionMenuList = () => {
		return (
			<>
				<CustomLink
					href='https://app.gogeviti.com/'
					onClick={ () => handleSelectedItem(4) }
					className={ clsxm(
						'lg:w-[120px] rounded-md px-3 py-2 text-sm font-Poppins hover:font-semibold md:block hidden',
						'text-grey-50 hover:text-blue-primary'
					) }
					aria-label='Dashboard'
				>
					Dashboard
				</CustomLink>
				{ navbarData.actionsMenu?.map(menu => (
					<CustomLink
						href={ menu.href }
						externalLink={ menu.externalLink }
						aria-label={ menu.name }
						key={ menu.name }
					>
						<div className={ clsxm(
							'font-Poppins text-sm !leading-6 font-medium',
							menu.type === 'button'
								? 'text-primary px-6 py-[10.5px] bg-blue-primary rounded-full hover:scale-[1.03] active:scale-100 !duration-200 ease-[cubic-bezier(.15,1.14,.88,.98)]'
								: 'text-grey-50 hover:text-blue-primary'
						) }>
							{ menu.name }
						</div>
					</CustomLink>
				)) }
			</>
		);
	};

	return (
		<header>
			<div className={ clsxm('inset-x-0 top-0 z-50 absolute pt-4 lg:pt-[30px]', className) }>
				<div className='container-center relative w-full'>
					<motion.nav
						variants={ {
							visible: {
								opacity: 1,
								y: 0,
								backdropFilter: 'blur(25px)',
								borderRadius: '100px',
								transition: {
									delay: 3,
									duration: .86,
									ease: [0.455, 0.03, 0.515, 0.955]
								}
							},
							hidden: { opacity: 0, y: -20 },
						} }
						initial='hidden'
						animate='visible'
						{ ...animationProps }
					>
						<nav
							onMouseLeave={ () => setActive(null) }
							className='relative h-[60px] lg:h-[69px] font-Poppins border border-white/5 backdrop-blur-[25px] p-18px lg:pl-[42px] lg:py-3 lg:pr-3 rounded-[100px] bg-white/10 flex items-center space-x-6 xl:space-x-[50px] w-full justify-between'>
							<div className='flex items-center lg:space-x-6 xl:space-x-[50px]'>
								<GevitiLogo />
								<div className='hidden lg:flex items-center space-x-6 xl:space-x-[50px]'>
									{ navbarData.menu.map((menu, menuIdx) => {
										if (menu.items) {
											return (
												<MenuItem
													key={ menu.name }
													setActive={ setActive }
													active={ active }
													item={ menu.name }>
													<div className='flex flex-col space-y-2'>
														{ menu.items.map(menuChild => (
															<CustomLink
																key={ menuChild.name }
																href={ menuChild.href }
																className='text-grey-50 hover:text-blue-primary text-sm !leading-[21px]'
															>{ menuChild.name }</CustomLink>
														)) }
													</div>
												</MenuItem>
											);
										}

										return (
											<CustomLink
												onClick={ () => handleSelectedItem(menuIdx) }
												key={ menu.name }
												href={ menu.href }
												externalLink={ menu.externalLink }
												onMouseEnter={ () => setActive(null) }
												className={ clsxm(
													'text-sm font-medium !leading-[21px]',
													selectedItem === menuIdx ? 'text-blue-primary' : 'text-grey-50 hover:text-blue-primary'
												) }>
												{ menu.name }
											</CustomLink>
										);
									}) }
								</div>
							</div>
							<div className='hidden lg:flex items-center space-x-6'>
								{ renderIconMenuList() }
								{ renderActionMenuList() }
							</div>
							<div className='flex lg:hidden'>
								<button
									className='focus:outline-none focus:border-0 focus:ring-0'
									onClick={ () => {
										setOpenSheet(prevOpen => !prevOpen);
									} }
									aria-label='Toggle Menu'
								>
									<Bars3Icon
										className='block h-6 w-6 text-grey-50'
										aria-hidden='true' />
								</button>
							</div>
						</nav>
					</motion.nav>
				</div>
			</div>

			<MobileNav
				open={ openSheet }
				setOpen={ setOpenSheet } />
		</header>
	);
};

export default Navbar;