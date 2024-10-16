'use client';
import React, { useState } from 'react';
import { motion, MotionProps } from 'framer-motion';
import Link from 'next/link';

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

export const navbarVariants = {
	visible: {
		y: 0,
		opacity: 1,
		backdropFilter: 'blur(25px)',
		borderRadius: '100px',
	},
	hidden: { y: '-100%', opacity: 0 },
};

export const navbarDefaultTransition = {
	delay: 2,
	duration: 1,
	ease: 'easeInOut',
};

export const MenuItem = ({
	setActive,
	active,
	item,
	children,
	theme,
}: {
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  theme?: 'light' | 'dark' | 'light-grey';
}) => {
	return (
		<div
			onMouseEnter={ () => setActive(item) }
			className='relative font-Poppins'>
			<motion.span
				transition={ { duration: 0.3 } }
				className={ clsxm(
					'cursor-pointer text-sm font-medium !leading-[21px] inline-flex gap-2 items-center text-grey-50',
					theme === 'light' && 'text-white',
					theme === 'light-grey' && 'text-grey-primary'
				) }
			>
				{ item }
				<span>
					<ChevronDown
						className={ clsxm(
							'w-4 h-4 ease-out transform duration-200',
							active === item && 'rotate-180'
						) }
					/>
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
								className={ clsxm(
									'bg-white/10 backdrop-blur-[27px] border border-white/5 rounded-[9px] overflow-hidden relative',
									theme === 'light' && 'bg-most-value'
								) }
							>
								<div className='absolute inset-0 w-full h-full bg-white/10 border border-white/5 backdrop-blur-[27px]' />
								<motion.div
									layout // layout ensures smooth animation
									className='w-max h-full p-4 relative z-50'
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

type NavbarProps = {
  className?: string;
  animationProps?: MotionProps;
  theme?: 'light' | 'dark' | 'light-grey';
  menuList?: {
    name: string;
    href: string;
    externalLink?: boolean;
    items?: {
      name: string;
      href: string;
      externalLink?: boolean;
    }[];
  }[];
};

const ActionMenuList = ({ theme }: NavbarProps) => {
	return (
		<>
			<CustomLink
				href={ process.env.NEXT_PUBLIC_APP_URL ?? '/' }
				// onClick={ () => handleSelectedItem(4) }
				className={ clsxm(
					'lg:w-[120px] rounded-md px-3 py-2 text-sm font-Poppins font-medium md:block hidden',
					'text-grey-50',
					theme === 'light' && 'text-white',
					theme === 'light-grey' && 'text-grey-primary'
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
					className='flex-shrink-0'
				>
					<div
						className={ clsxm(
							'font-Poppins text-sm !leading-6 font-medium',
							menu.type === 'button'
								? 'text-primary px-6 py-[10.5px] bg-blue-primary rounded-full hover:scale-[1.03] active:scale-100 !duration-200 ease-slide-in'
								: 'text-grey-50'
						) }
					>
						{ menu.name }
					</div>
				</CustomLink>
			)) }
		</>
	);
};

const Navbar: React.FC<NavbarProps> = ({
	className,
	animationProps,
	theme,
	menuList = navbarData.menu,
}) => {
	const [active, setActive] = useState<string | null>(null);
	const [openSheet, setOpenSheet] = useState<boolean>(false);
	const [overflow, setOverflow] = useState<string>('hidden');

	return (
		<header>
			<div
				className={ clsxm(
					'inset-x-0 top-0 z-50 absolute pt-4 lg:pt-[30px]',
					className
				) }
			>
				<div
					className='container-center w-full'
					style={ { overflow } }>
					<motion.div
						variants={ navbarVariants }
						initial='hidden'
						animate='visible'
						className='inline-block w-full border border-white/5 rounded-full'
						transition={ navbarDefaultTransition }
						onAnimationComplete={ () => setOverflow('') }
						{ ...animationProps }
					>
						<nav
							onMouseLeave={ () => setActive(null) }
							className={ clsxm(
								'relative overflow-visible visible h-[60px] lg:h-[69px] font-Poppins backdrop-blur-[25px] p-18px lg:pl-[42px] lg:py-3 lg:pr-3 rounded-[100px] bg-white/10 flex items-center space-x-5 xl:space-x-[50px] w-full justify-between',
								theme === 'light' && 'bg-most-value'
							) }
						>
							<div className='flex items-center lg:space-x-5 xl:space-x-[50px]'>
								<Link
									href='/'
									className='focus:ring-0 focus:outline-none'>
									<GevitiLogo theme={ theme } />
								</Link>
								<div className='hidden lg:flex items-center space-x-5 xl:space-x-[50px]'>
									{ menuList.map(menu => {
										if (menu.items) {
											return (
												<MenuItem
													key={ menu.name }
													setActive={ setActive }
													active={ active }
													item={ menu.name }
													theme={ theme }
												>
													<div className='flex flex-col space-y-2'>
														{ menu.items.map(menuChild => (
															<CustomLink
																key={ menuChild.name }
																href={ menuChild.href }
																className={ clsxm(
																	'text-grey-50 text-sm !leading-[21px]',
																	theme === 'light' && 'text-white',
																	theme === 'light-grey' && 'text-grey-primary'
																) }
															>
																{ menuChild.name }
															</CustomLink>
														)) }
													</div>
												</MenuItem>
											);
										}

										return (
											<CustomLink
												// onClick={ () => handleSelectedItem(menuIdx) }
												key={ menu.name }
												href={ menu.href }
												externalLink={ menu.externalLink }
												onMouseEnter={ () => setActive(null) }
												className={ clsxm(
													'text-sm font-medium !leading-[21px] text-grey-50',
													theme === 'light' && 'text-white',
													theme === 'light-grey' && 'text-grey-primary'
												) }
											>
												{ menu.name }
											</CustomLink>
										);
									}) }
								</div>
							</div>
							<div className='hidden lg:flex items-center space-x-5'>
								{ /* { renderIconMenuList() } */ }
								<ActionMenuList theme={ theme } />
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
										className={ clsxm(
											'block h-6 w-6 text-grey-50',
											theme === 'light' && 'text-white'
										) }
										aria-hidden='true'
									/>
								</button>
							</div>
						</nav>
					</motion.div>
				</div>
			</div>

			<MobileNav
				open={ openSheet }
				setOpen={ setOpenSheet }
				menuList={ menuList } />
		</header>
	);
};

export default Navbar;
