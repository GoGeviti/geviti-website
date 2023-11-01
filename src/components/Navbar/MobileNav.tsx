import Image from 'next/image';
import Link from 'next/link';

import cartIcon from '@/assets/mobile-nav/cart.svg';
import dashboardIcon from '@/assets/mobile-nav/dashboard.svg';
import navigationData from '@/constant/data/navbar';

interface MobileNavProps {
	isOpen: boolean;
	onClose: () => void;
}

const MobileNav = (props: MobileNavProps) => {
	if (!props.isOpen) return null;

	return (
		<div
			onClick={ props.onClose }
			className='fixed top-0 left-0 animate-fadeIn bg-[#181A1C] flex flex-col px-[16px] pt-[100px] pb-[23px] z-10 min-h-screen w-screen'
		>
			<Link
				href='/'
				className='text-white text-[25px] font-Poppins tracking-tight mb-25px'
			>
				Home
			</Link>
			{ navigationData.menu.map(item => (
				<Link
					href={ item.href }
					target={ item.externalLink ? '_blank' : '_self' }
					rel='noopener noreferrer'
					key={ item.name }
					className='text-white text-[25px] font-Poppins tracking-tight opacity-30 mb-25px'
				>
					{ item.name }
				</Link>
			)) }
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
