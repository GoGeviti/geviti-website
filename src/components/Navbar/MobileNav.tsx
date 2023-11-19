import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import cartIcon from '@/assets/mobile-nav/cart.svg';
import dashboardIcon from '@/assets/mobile-nav/dashboard.svg';
import navigationData from '@/constant/data/navbar';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = (props: MobileNavProps) => {
	if (!props.isOpen) return null;

	const pathname = usePathname();

	useEffect(() => {
		document.body.style.overflow = props.isOpen ? 'hidden' : 'unset';

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [props.isOpen]);

	return (
		<div
			onClick={ () => {
				props.onClose();
				document.body.style.overflow = 'unset';
			} }
			className='max-h-[calc(100dvh)] h-screen fixed top-0 left-0 animate-fadeIn bg-[#181A1C] flex flex-col px-[16px] pt-[100px] pb-[23px] z-10 w-screen'
		>
			<Link
				href='/'
				className={ `text-white text-[25px] font-Poppins tracking-tight mb-25px opacity-${
					pathname === '/' ? '100' : '30'
				}` }
			>
        Home
			</Link>
			{ navigationData.menu.map(item => (
				<Link
					href={ item.href }
					target={ item.externalLink ? '_blank' : '_self' }
					rel='noopener noreferrer'
					key={ item.name }
					className={ `text-white text-[25px] font-Poppins tracking-tight opacity-${
						pathname === item.href ? '100' : '30'
					} mb-25px` }
				>
					{ item.name }
				</Link>
			)) }
			<Link
				href='/blog'
				rel='noopener noreferrer'
				className={ `text-white text-[25px] font-Poppins tracking-tight opacity-${
					pathname === '/blog' ? '100' : '30'
				} mb-25px` }
			>
        Blog
			</Link>
			<Link
				href='/blog'
				rel='noopener noreferrer'
				className={ `text-white text-[25px] font-Poppins tracking-tight opacity-${
					pathname === '/blog' ? '100' : '30'
				} mb-25px` }
			>
        FAQ
			</Link>
			<Link
				href='/contact-us'
				rel='noopener noreferrer'
				className={ `text-white text-[25px] font-Poppins tracking-tight opacity-${
					pathname === '/blog' ? '100' : '30'
				} mb-25px` }
			>
        Help Center
			</Link>
			<div className='bg-[#2D2F31] h-[1px] -mx-[16px] mb-[30px] mt-auto' />
			<a
				className='flex items-center gap-[10px] mb-[22px]'
				href='/orders'>
				<Image
					src={ cartIcon }
					height={ 25 }
					width={ 25 }
					alt='' />
				<span className='font-Poppins text-white text-[20px] tracking-tight'>
          Cart
				</span>
			</a>
			<a
				className='flex items-center gap-[10px]'
				href='/'>
				<Image
					src={ dashboardIcon }
					height={ 25 }
					width={ 25 }
					alt='' />
				<span className='font-Poppins text-white text-[20px] tracking-tight'>
          Dashboard
				</span>
			</a>
		</div>
	);
};

export default MobileNav;
