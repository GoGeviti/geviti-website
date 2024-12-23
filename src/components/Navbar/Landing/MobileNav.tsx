'use client';
import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
// import Image from 'next/image';
// import Image from 'next/image';
// import Link from 'next/link';
import { usePathname } from 'next/navigation';

import CustomLink from '@/components/CustomLink';
// import cartIcon from '@/assets/mobile-nav/cart.svg';
// import dashboardIcon from '@/assets/mobile-nav/dashboard.svg';
import { ArrowNarrowLeft, ArrowUpRightLink, ShoppingBagIcon } from '@/components/Icons';
import navbarData from '@/constant/data/navigation';
import clsxm from '@/helpers/clsxm';

// import { Bars3Icon } from '../../Icons';
import GevitiLogo from './GevitiLogo';

const menuVars = {
	initial: {
		x: '100%',
	},
	animate: {
		x: 0,
		transition: {
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1]
		}
	},
	exit: {
		x: '100%',
		transition: {
			duration: 0.4,
			ease: [0.22, 0, 0.36, 0],
			delay: 0.3
		}
	}
};
const containerVars = {
	initial: {
		transition: {
			staggerChildren: 0.09,
			staggerDirection: -1,
		},
	},
	open: {
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.09,
			staggerDirection: 1,
		},
	},
};

const subMenuContainerVars = {
	initial: {
		transition: {
			staggerChildren: 0.09,
			staggerDirection: 1,
		},
	},
	open: {
		transition: {
			staggerChildren: 0.09,
			staggerDirection: 1,
		},
	},
	exit: {
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
			when: 'afterChildren',
		},
	},
};

const mobileLinkVars = {
	initial: {
		y: '30vh',
		transition: {
			duration: 0.5,
			ease: [0.37, 0, 0.63, 1],
		},
	},
	open: {
		y: 0,
		transition: {
			ease: [0, 0.55, 0.45, 1],
			duration: 0.7,
		},
	},
	exit: {
		y: '30vh',
		transition: {
			duration: 0.3,
			ease: [0.37, 0, 0.63, 1],
		},
	},
};

type MobileNavProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
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

const MobileNav: React.FC<MobileNavProps> = ({
	open,
	setOpen,
	menuList: menuListProps = navbarData.menu,
}) => {
	const pathname = usePathname();
	const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
	const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);
	const [isClosing, setIsClosing] = useState(false);

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : 'unset';

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [open]);

	const toggleMenu = () => {
		if (open) {
			// Trigger exit animation when closing
			setIsClosing(true);
			const timer = setTimeout(() => {
				setOpen(false);
				setExpandedIdx(null);
				setSubMenuOpen(false);
				setIsClosing(false);
			}, 100);
			return () => clearTimeout(timer);
		} else {
			setOpen(true);
			setExpandedIdx(null);
			setSubMenuOpen(false);
		}
	};

	const openSubMenu = (index: number) => {
		setExpandedIdx(index);
		setSubMenuOpen(true);
	};

	const closeSubMenu = () => {
		setIsClosing(true);
		const timer = setTimeout(() => {
			setExpandedIdx(null);
			setSubMenuOpen(false);
			setIsClosing(false);
		}, 500);

		return () => clearTimeout(timer);
	};

	const menuList = [
		{
			name: 'Home',
			href: '/',
			items: [],
		},
		...menuListProps,
	];

	return (
		<AnimatePresence>
			{ open && (
				<motion.div
					variants={ menuVars }
					initial='initial'
					animate='animate'
					exit='exit'
					className='max-h-[calc(100dvh)] h-screen w-full z-[1000] fixed top-0 left-0 origin-top bg-primary  px-4 py-[34px]'
				>
					<div className='flex h-full flex-col'>
						<div className='flex flex-col gap-10 mb-[34px]'>
							<div className='flex justify-between'>
								<CustomLink href='/'>
									<GevitiLogo />
								</CustomLink>
								<IoClose
									className='w-6 h-6 text-grey-50'
									onClick={ toggleMenu }
								/>
							</div>
							
						</div>
						<motion.div
							variants={ containerVars }
							initial='initial'
							animate='open'
							exit='initial'
							className='flex flex-col h-full font-Poppins gap-4 justify-between relative overflow-hidden'
						>
							<AnimatePresence>
								<motion.div
									key='main-menu'
									initial={ false }
									animate={ { x: subMenuOpen ? '-100%' : 0 } }
									transition={ {
										duration: 0.4,
										ease: [0.22, 1, 0.36, 1],
									} }
									className='flex flex-col h-full gap-6 w-full absolute'
								>
									<a
										href={ process.env.NEXT_PUBLIC_APP_URL ?? '/' }
										className='flex items-center justify-center text-white py-3 px-6 rounded-xl text-sm gap-2 bg-grey-950 border-[0.5px] border-grey-primary-light/60'
									>
										<ShoppingBagIcon/>
										<span className=''>
													Dashboard
										</span>
									</a>
									<CustomLink
										href='/pricing'
										prefetch={ true }
										className=''>
										<div className='relative border-[0.5px] border-white/60 group w-full h-[154px] bg-member-mobile rounded-lg overflow-hidden cursor-pointer'>
											<Image
												src='/images/navbar/navbar_member.png'
												alt='navbar_member'
												fill
												className='object-contain object-right z-20'
											/>
											<div className='absolute bottom-0 w-full z-30 flex items-center justify-between px-2.5 pb-2.5 h-fit'>
												<span className='h5 text-grey-100'>Become<br/>a member</span>
												<div className='w-6 h-6 flex items-center justify-center rounded-full bg-white'>
													<ArrowUpRightLink className='transform translate-y-0 stroke-primary transition-all duration-200 ease-in-out translate-x-0 group-hover:translate-y-[-1px] group-hover:translate-x-[2px]' />
												</div>
											</div>
										</div>
									</CustomLink>
									<div className='flex flex-col h-full gap-4'>
										<span className='text-[10px] uppercase tracking-[1.1px] text-grey-300'>main menu</span>
										{ menuList.map((link, index) => {
											return (
												<div
													key={ index }
													className='overflow-hidden'>
													<motion.div
														variants={ mobileLinkVars }
														className={ clsxm(
															'h6',
															pathname === link.href
																? 'text-grey-50'
																: 'text-grey-primary'
														) }
													>
														{ link.items?.length ? (
															<p
																onClick={ () => openSubMenu(index) }
															>
																{ link.name }
															</p>
														) : (
															<CustomLink href={ link.href }>{ link.name }</CustomLink>
														) }
													</motion.div>
												</div>
											);
										}) }
									</div>
								</motion.div>

								{ subMenuOpen && (
									<motion.div
										key='sub-menu'
										initial={ { x: '100%' } }
										animate={ { x: 0 } }
										exit={ { x: '100%' } }
										transition={ {
											duration: 0.4,
											ease: [0.22, 1, 0.36, 1],
										} }
										className='flex flex-col h-full gap-4 w-full absolute'
									>
										<div className='flex flex-col gap-3 mb-2'>
											<div className='flex items-center gap-4'>
												<button
													onClick={ closeSubMenu }
													className='flex items-center w-full justify-center text-white py-3 px-6 rounded-xl text-sm gap-2 bg-grey-950 border-[0.5px] border-grey-primary-light/60'
												>
													<ArrowNarrowLeft/>
													<span className=''>
															Back
													</span>
												</button>
												<CustomLink
													href='/pricing'
													className='flex items-center w-full justify-center text-white py-3 px-6 rounded-xl text-sm gap-2 bg-grey-950 border-[0.5px] border-grey-primary-light/60'
												>
													<span className=''>
													Get Started
													</span>
												</CustomLink>
											</div>
											<span className='text-blue-primary uppercase font-semibold tracking-[1.76px] mt-10'>
												{ expandedIdx !== null && menuList[expandedIdx]?.name }
											</span>
										</div>
										<AnimatePresence mode='wait'>
											{ !isClosing && (
												<motion.div
													initial='initial'
													animate='open'
													exit='exit'
													variants={ subMenuContainerVars }
													className='flex flex-col gap-4'
												>
													{
														['Men\'s Health', 'Women\'s Health'].includes(menuList[expandedIdx ?? 0]?.name) && (
															<>
																<span className='text-[10px] uppercase tracking-[1.1px] text-grey-300'>Explore</span>
																<div className='flex flex-col gap-4'>
																	<CustomLink
																		href={ expandedIdx !== null && menuList[expandedIdx]?.name === 'Men\'s Health' ? '/solution/men' : '/solution/women' }
																		className={ clsxm(
																			'h6',
																			pathname === (expandedIdx !== null && menuList[expandedIdx]?.name === 'Men\'s Health' ? '/solution/men' : '/solution/women')
																				? 'text-grey-50'
																				: 'text-grey-primary'
																		) }
																	>
																		Overview & Benefits
																	</CustomLink>
																	<CustomLink
																		href={ `/longeviti-panel?gender=${expandedIdx !== null && menuList[expandedIdx]?.name === 'Men\'s Health' ? 'men' : 'women'}` }
																		className={ clsxm(
																			'h6',
																			pathname === '/longeviti-panel'
																				? 'text-grey-50'
																				: 'text-grey-primary'
																		) }
																	>
																		At-home Bloodwork
																	</CustomLink>
																	<CustomLink
																		href={ '/longeviti-blend' }
																		className={ clsxm(
																			'h6 mb-8',
																			pathname === '/longeviti-blend'
																				? 'text-grey-50'
																				: 'text-grey-primary'
																		) }
																	>
																		Custom Supplements
																	</CustomLink>
																</div>
																<span className='text-[10px] uppercase tracking-[1.1px] text-grey-300'>Prescriptions</span>
															</>
														)
													}

													{ expandedIdx !== null && menuList[expandedIdx]?.items?.map(item => (
														<div
															key={ item.name }
															className='overflow-hidden'>
															<motion.div variants={ mobileLinkVars }>
																<CustomLink
																	href={ item.href }
																	className={ clsxm(
																		'h6',
																		pathname === item.href
																			? 'text-grey-50'
																			: 'text-grey-primary'
																	) }
																>
																	{ item.name }
																</CustomLink>
															</motion.div>
														</div>
													)) }
												</motion.div>
											) }
										</AnimatePresence>
									</motion.div>
								) }
							</AnimatePresence>

							{ /* <div className='border-t border-[#2D2F31] pt-5 mt-5 -mx-4'>
								<div className='px-4'>
									<motion.div variants={ mobileLinkVarsOpacity }>
										<CustomLink
											href={ process.env.NEXT_PUBLIC_APP_URL ?? '/' }
											className='flex items-center gap-2.5'
										>
											<Image
												src={ dashboardIcon }
												height={ 25 }
												width={ 25 }
												alt=''
											/>
											<span className='font-Poppins text-white text-[20px] tracking-tight'>
                        Dashboard
											</span>
										</CustomLink>
									</motion.div>
								</div>
							</div> */ }
						</motion.div>
					</div>
				</motion.div>
			) }
		</AnimatePresence>
	);
};

export default MobileNav;