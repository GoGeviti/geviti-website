'use client';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, MotionProps, useAnimation } from 'framer-motion';
import Image from 'next/image';
// import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navbarDefaultTransition } from '@/constant/data/navbar';
import navbarData from '@/constant/data/navigation';
import clsxm from '@/helpers/clsxm';

import CustomLink from '../../CustomLink';
import { ArrowUpRightLink, Bars3Icon, ChevronDown } from '../../Icons';

import GevitiLogo from './GevitiLogo';
import MobileNav from './MobileNav';

// Move constants outside component
const transition = {
	type: 'spring',
	mass: 0.5,
	damping: 11.5,
	stiffness: 100,
	restDelta: 0.001,
	restSpeed: 0.001,
};

const navbarVariants = {
	visible: {
		y: 0,
		opacity: 1,
		backdropFilter: 'blur(25px)',
		borderRadius: '100px',
	},
	hidden: { y: '-100%', opacity: 0 },
};

// Add this with the other constants at the top of the file, after navbarVariants
const navbarAnimationVariants = {
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			y: { type: 'spring', stiffness: 300, damping: 30 },
			opacity: { duration: 0.2 }
		}
	},
	hidden: {
		y: '-100%',
		opacity: 0,
		transition: {
			y: { type: 'spring', stiffness: 300, damping: 30 },
			opacity: { duration: 0.2 }
		}
	}
};

// Memoize MenuItem component
const MenuItem = memo(({
	setActive,
	active,
	href,
	item,
	children,
	theme,
	isScrolled,
	isActiveMenu
}: {
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
  active: string | null;
  item: string;
  href?: string
  isScrolled: boolean;
  isActiveMenu?:boolean
  children?: React.ReactNode;
  theme?: 'light' | 'dark' | 'light-grey';
}) => {
	const handleMouseEnter = useCallback(() => {
		setActive(item);
	}, [setActive, item]);

	const renderSolutionDropdown = () => {
		return (
			<div className='absolute top-[calc(100%_+_1rem)] pt-3 left-0 transform z-50'>
				<motion.div
					transition={ transition }
					layoutId='active'
					className={ clsxm(
						'relative rounded-[20px] overflow-hidden',
						'bg-white/90',
						'backdrop-blur-[30px]', // Using backdrop-filter explicitly
						'border border-grey-100',
						theme === 'light' && 'bg-most-value text-white',
					) }
				>
					<motion.div
						layout
						className='w-max h-full p-[14px] flex gap-[42px] relative z-50'
					>
						<div>
							<p className='text-[10px] font-semibold uppercase tracking-[1.1px] pb-[14px]'>Explore</p>
							<ul className='flex flex-col gap-[14px]'>
								<CustomLink
									prefetch={ true }
									href={ active === 'Men\'s Health' ? '/men' : '/women' }>
									<li className={ clsxm(
										'text-sm flex gap-2 items-center transition-colors duration-200 group cursor-pointer',
										theme === 'light' ? 'text-white' : 'text-primary'
									) }>
										<ArrowUpRightLink className={ clsxm(
											'w-[14px] h-[14px] stroke-primary text-[14px]',
											theme === 'light' ? 'text-white stroke-white' : 'text-primary stroke-primary',
											'transform translate-x-[-10px] opacity-0',
											'group-hover:translate-x-0 group-hover:opacity-100',
											'transition-all duration-200 ease-in-out'
										) } />
										<span>Overview & Benefits</span>
									</li>
								</CustomLink>
								<CustomLink
									prefetch={ true }
									href={ `/longeviti-panel?gender=${active === 'Men\'s Health' ? 'men' : 'women'}` }>
									<li className={ clsxm(
										'text-sm flex gap-2 items-center transition-colors duration-200 group cursor-pointer',
										theme === 'light' ? 'text-white' : 'text-primary'
									) }>
										<ArrowUpRightLink className={ clsxm(
											'w-[14px] h-[14px] stroke-primary text-[14px]',
											theme === 'light' ? 'text-white stroke-white' : 'text-primary stroke-primary',
											'transform translate-x-[-10px] opacity-0',
											'group-hover:translate-x-0 group-hover:opacity-100',
											'transition-all duration-200 ease-in-out'
										) } />

										<span>At-home Bloodwork</span>
									</li>
								</CustomLink>
								<CustomLink href='/longeviti-blend'>
									<li className={ clsxm(
										'text-sm flex gap-2 items-center transition-colors duration-200 group cursor-pointer',
										theme === 'light' ? 'text-white' : 'text-primary'
									) }>
										<ArrowUpRightLink className={ clsxm(
											'w-[14px] h-[14px] stroke-primary text-[14px]',
											theme === 'light' ? 'text-white stroke-white' : 'text-primary stroke-primary',
											'transform translate-x-[-10px] opacity-0',
											'group-hover:translate-x-0 group-hover:opacity-100',
											'transition-all duration-200 ease-in-out'
										) } />
										<span>Custom Supplements</span>
									</li>
								</CustomLink>
							</ul>
						</div>
						<div>
							<p className='text-[10px] font-semibold uppercase tracking-[1.1px] pb-[14px]'>Prescriptions</p>
							{ children }
						</div>
						<div>
							<p className='text-[10px] font-semibold uppercase tracking-[1.1px] pb-[14px]'>Get Started</p>
							<CustomLink
								href='/pricing'
								prefetch={ true }
								className=''>
								<div className='relative group w-[177px] h-[131px] rounded-lg overflow-hidden cursor-pointer'>
									<Image
										src='/images/navbar/navbar_member.png'
										alt='navbar_member'
										fill
										className='object-cover z-20'
									/>
									<div className='absolute inset-0 w-full h-full bg-primary' />
									<div className='absolute h-[100px] z-[21] bottom-0 w-full rounded-b-lg bg-gradient-to-t from-primary to-transparent' />
									<div className='absolute bottom-0 w-full z-30 flex items-center justify-between px-2.5 pb-2.5 h-fit'>
										<span className='text-white text-xs whitespace-nowrap'>Become a member</span>
										<div className='w-6 h-6 flex items-center justify-center rounded-full bg-white'>
											<ArrowUpRightLink className='transform translate-y-0 stroke-primary transition-all duration-200 ease-in-out translate-x-0 group-hover:translate-y-[-1px] group-hover:translate-x-[2px]' />
										</div>
									</div>
								</div>
							</CustomLink>
						</div>
					</motion.div>
				</motion.div>
			</div>
		)
	}

	const renderDropdown = () => {
		return (
			<div className='absolute top-[calc(100%_+_1rem)] pt-3 left-0 transform z-50'>
				<motion.div
					transition={ transition }
					layoutId='active'
					className={ clsxm(
						'relative rounded-[20px] overflow-hidden',
						'bg-white/90',
						'backdrop-blur-[30px]',
						'border border-grey-100',
						theme === 'light' && 'bg-most-value',
					) }
				>
					<motion.div
						layout
						className='w-max h-full p-4 relative z-50'
					>
						{ children }
					</motion.div>
				</motion.div>
			</div>
		)
	}

	return (
		<div
			onMouseEnter={ handleMouseEnter }
			className='relative font-Poppins'>
			<motion.span
				transition={ { duration: 0.3 } }
				className={ clsxm(
					'cursor-pointer text-sm font-medium !leading-[21px] inline-flex gap-2 items-center text-grey-50',
					theme === 'light-grey' && 'text-grey-primary',
					isScrolled && 'text-grey-primary hover:text-primary',
					isActiveMenu && 'text-primary',
					theme === 'light' && 'text-white hover:text-grey-50',
				) }
			>
				{
					href !== '#' ? (
						<CustomLink
							prefetch={ true }
							href={ href ?? '' } >
							{ item }
						</CustomLink>
					) : (
						item
					)
				}
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
						['Men\'s Health', 'Women\'s Health'].includes(active) ? renderSolutionDropdown() : renderDropdown()
					) }
				</motion.div>
			) }
		</div>
	);
});

MenuItem.displayName = 'MenuItem';

// Memoize ActionMenuList
const ActionMenuList = memo(({ theme, isScrolled }: NavbarProps) => {
	return (
		<>
			<CustomLink
				href={ process.env.NEXT_PUBLIC_APP_URL ?? '/' }
				// onClick={ () => handleSelectedItem(4) }
				className={ clsxm(
					'lg:w-[120px] rounded-md px-3 py-2 text-sm font-Poppins font-medium md:block hidden',
					'text-grey-50',
					theme === 'light-grey' && 'text-grey-primary',
					isScrolled && 'text-grey-primary hover:text-primary',
					theme === 'light' && 'text-white hover:text-grey-50',
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
});

ActionMenuList.displayName = 'ActionMenuList';

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
  isScrolled?: boolean
};

const Navbar: React.FC<NavbarProps> = ({
	className,
	theme,
	menuList = navbarData.menu,
}) => {
	const [active, setActive] = useState<string | null>(null);
	const [openSheet, setOpenSheet] = useState<boolean>(false);
	const [overflow, setOverflow] = useState<string>('hidden');
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();
	const controls = useAnimation();

	// Optimize scroll handler
	const controlNavbar = useCallback(() => {
		if (typeof window === 'undefined') return;
		
		const currentScrollY = window.scrollY;
		const scrollDifference = currentScrollY - lastScrollY;
		
		// Show navbar when:
		// 1. At the top of the page (currentScrollY <= 10)
		// 2. Scrolling up (scrollDifference < 0)
		// Hide navbar when:
		// 1. Scrolling down (scrollDifference > 0)
		// 2. Not at the top of the page
		if (currentScrollY <= 10) {
			setIsVisible(true);
		} else if (scrollDifference > 0) {
			setIsVisible(false);
		} else if (scrollDifference < 0) {
			setIsVisible(true);
		}
		
		setLastScrollY(currentScrollY);
		setIsScrolled(currentScrollY > 200);
	}, [lastScrollY]);

	// Add debouncing to smooth out rapid scroll events
	useEffect(() => {
		if (typeof window === 'undefined') return;

		let timeoutId: NodeJS.Timeout;
		
		const debouncedControlNavbar = () => {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(controlNavbar, 16); // Reduced debounce time for smoother response
		};

		window.addEventListener('scroll', debouncedControlNavbar);
		return () => {
			window.removeEventListener('scroll', debouncedControlNavbar);
			clearTimeout(timeoutId);
		};
	}, [controlNavbar]);

	useEffect(() => {
		controls.start(isVisible ? 'visible' : 'hidden');
	}, [isVisible, controls]);

	const handleMenuClose = useCallback(() => {
		setActive(null);
	}, []);

	const handleSheetToggle = useCallback(() => {
		setOpenSheet(prev => !prev);
	}, []);

	// Memoize navigation items rendering
	const renderNavigationItems = useCallback(() => {
		return menuList.map(menu => {
			if (menu.items) {
				const isActive = isScrolled && (pathname === menu.href || pathname.startsWith(`${menu.href}/`));
				return (
					<MenuItem
						key={ menu.name }
						setActive={ setActive }
						href={ menu.href }
						active={ active }
						item={ menu.name }
						theme={ theme }
						isScrolled={ isScrolled }
						isActiveMenu={ isActive }
					>
						<div className='flex flex-col gap-[14px]'>
							{ menu.items.map(menuChild => (
								<CustomLink
									key={ menuChild.name }
									href={ menuChild.href }
									className={ clsxm(
										'text-primary text-sm !leading-[21px]',
										theme === 'light-grey' && 'text-grey-primary',
										// isScrolled && 'text-grey-primary hover:text-primary',
										isScrolled && pathname === menuChild.href && 'text-primary',
										theme === 'light' && 'text-white',
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
					key={ menu.name }
					href={ menu.href }
					externalLink={ menu.externalLink }
					onMouseEnter={ handleMenuClose }
					className={ clsxm(
						'text-sm font-medium !leading-[21px] text-grey-50',
						theme === 'light-grey' && 'text-grey-primary',
						isScrolled && 'text-grey-primary hover:text-primary',
						isScrolled && pathname.includes(menu.href) && 'text-primary',
						theme === 'light' && 'text-white hover:text-grey-50',
					) }
				>
					{ menu.name }
				</CustomLink>
			);
		});
	}, [menuList, isScrolled, pathname, active, theme, handleMenuClose]);

	return (
		<header>
			<AnimatePresence>
				{ isVisible && (
					<motion.div
						className={ clsxm(
							'inset-x-0 top-0 z-50 fixed pt-4 lg:pt-[30px]',
							className
						) }
						initial='hidden'
						animate={ controls }
						exit='hidden'
						variants={ navbarAnimationVariants }
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
								// { ...animationProps }
							>
								<nav
									onMouseLeave={ handleMenuClose }
									className={ clsxm(
										'relative overflow-visible transition-all duration-300 visible h-[60px] lg:h-[69px] font-Poppins p-18px lg:pl-[42px] lg:py-3 lg:pr-3 rounded-[100px] flex items-center space-x-5 xl:space-x-[50px] w-full justify-between',
										isScrolled ? 'bg-grey-50 backdrop-blur-none' : 'bg-white/10',
										theme === 'light' && 'bg-most-value'
									) }
								>
									<div className='flex items-center lg:space-x-5 xl:space-x-[50px]'>
										<CustomLink
											href='/'
											prefetch={ true }
											className='focus:ring-0 focus:outline-none'>
											<GevitiLogo
												isScrolled={ isScrolled }
												theme={ theme } />
										</CustomLink>
										<div className='hidden lg:flex items-center space-x-5 xl:space-x-[50px]'>
											{ renderNavigationItems() }
										</div>
									</div>
									<div className='hidden lg:flex items-center space-x-5'>
										{ /* { renderIconMenuList() } */ }
										<ActionMenuList
											isScrolled={ isScrolled }
											theme={ theme } />
									</div>
									<div className='flex lg:hidden'>
										<button
											className='focus:outline-none focus:border-0 focus:ring-0'
											onClick={ handleSheetToggle }
											aria-label='Toggle Menu'
										>
											<Bars3Icon
												className={ clsxm(
													'block h-6 w-6 text-grey-50',
													isScrolled && 'text-primary',
													theme === 'light' && 'text-white hover:text-grey-50',
												) }
												aria-hidden='true'
											/>
										</button>
									</div>
								</nav>
							</motion.div>
						</div>
					</motion.div>
				) }
			</AnimatePresence>

			<MobileNav
				open={ openSheet }
				setOpen={ setOpenSheet }
				menuList={ menuList } />
		</header>
	);
};

export default memo(Navbar);
