import Image from 'next/image';

import navbarData from '@/constant/data/navbar';

type GevitiLogoProps = {
	theme?: 'light' | 'dark';
};

const GevitiLogo: React.FC<GevitiLogoProps> = ({ theme }) => {
	return (
		<div className='flex-shrink-0 relative overflow-hidden w-[85px] h-5'>
			<Image
				src={ theme === 'light' ? navbarData.logoLight : navbarData.logoLight }
				alt='logo'
				fill
				priority
				className='object-contain'
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
			/>
		</div>
	);
};

export default GevitiLogo;
