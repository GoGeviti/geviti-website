'use client';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import cartIcon from '@/assets/mobile-nav/cart.svg';
import dashboardIcon from '@/assets/mobile-nav/dashboard.svg';
import navbarData from '@/constant/data/navigation';
import clsxm from '@/helpers/clsxm';

import { Bars3Icon } from '../../Icons';

import GevitiLogo from './GevitiLogo';

const menuVars = {
	initial: {
		scaleY: 0,
	},
	animate: {
		scaleY: 1,
		transition: {
			duration: 0.5,
			ease: [0.12, 0, 0.39, 0],
		},
	},
	exit: {
		scaleY: 0,
		transition: {
			delay: 0.5,
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1],
		},
	},
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
};

const mobileLinkVarsOpacity = {
	initial: {
		opacity: 0,
		transition: {
			duration: 0.5,
			ease: [0.37, 0, 0.63, 1],
		},
	},
	open: {
		opacity: 100,
		transition: {
			ease: [0, 0.55, 0.45, 1],
			duration: 0.7,
		},
	},
};

type MobileNavProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav: React.FC<MobileNavProps> = ({
	open,
	setOpen
}) => {
	const pathname = usePathname();
	const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : 'unset';

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [open]);

	const toggleMenu = () => {
		setOpen(prevOpen => !prevOpen);
		setExpandedIdx(null);
	};

	const menuList = [
		{
			name: 'Home',
			href: '/',
			items: []
		},
		...navbarData.menu
	];

	return (
		<AnimatePresence>
			{ open && (
				<motion.div
					variants={ menuVars }
					initial='initial'
					animate='animate'
					exit='exit'
					className='max-h-[calc(100dvh)] h-screen w-full z-[9999] fixed top-0 left-0 origin-top bg-primary p-[34px]'
				>
					<div className='flex h-full flex-col'>
						<div className='flex justify-between mb-[34px]'>
							<GevitiLogo />
							<Bars3Icon
								className='w-6 h-6 text-grey-50'
								onClick={ toggleMenu } />
						</div>
						<motion.div
							variants={ containerVars }
							initial='initial'
							animate='open'
							exit='initial'
							className='flex flex-col h-full font-Poppins gap-4 justify-between'
						>
							<div className='flex flex-col h-full gap-4'>
								{ menuList.map((link, index) => {
									return (
										<div
											key={ index }
											className='overflow-hidden'>
											<motion.div
												variants={ mobileLinkVars }
												className={ clsxm(
													'text-[20px]',
													pathname === link.href ? 'text-grey-50' : 'text-grey-primary'
												) }
											>
												{ link.items?.length
													? (
														<>
															<p onClick={ () => {
																if (expandedIdx === index) setExpandedIdx(null);
																else setExpandedIdx(index);
															} }>{ link.name }</p>

															{ expandedIdx === index && (
																<div className='flex flex-col gap-y-2 pl-4 pt-2 animate-fadeIn duration-200 transform transition-all'>
																	{ link.items.map(item => (
																		<Link
																			href={ item.href }
																			key={ item.name }
																			className={ clsxm(
																				'text-[20px]',
																				pathname === item.href ? 'text-grey-50' : 'text-grey-primary'
																			) }
																		>{ item.name }</Link>
																	)) }
																</div>
															) }
														</>
													)
													: (
														<Link href={ link.href }>{ link.name }</Link>
													) }
											</motion.div>
										</div>
									);
								}) }
							</div>

							<div className='border-t border-[#2D2F31] pt-5 mt-5 -mx-4'>
								<div className='px-4'>
									<motion.div variants={ mobileLinkVarsOpacity }>
										<Link
											href='/cart'
											className='flex items-center gap-2.5 mb-5'>
											<Image
												src={ cartIcon }
												height={ 25 }
												width={ 25 }
												alt='' />
											<span className='font-Poppins text-white text-[20px] tracking-tight'>
                        Cart
											</span>
										</Link>
									</motion.div>
									<motion.div variants={ mobileLinkVarsOpacity }>
										<Link
											href='/'
											className='flex items-center gap-2.5'>
											<Image
												src={ dashboardIcon }
												height={ 25 }
												width={ 25 }
												alt='' />
											<span className='font-Poppins text-white text-[20px] tracking-tight'>
                        Dashboard
											</span>
										</Link>
									</motion.div>
								</div>
							</div>
						</motion.div>
					</div>
				</motion.div>
			) }
		</AnimatePresence>
	);
};

export default MobileNav;