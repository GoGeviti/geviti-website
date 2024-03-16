import Image from 'next/image';

import navbarData from '@/constant/data/navbar';

const GevitiLogo = () => {
	return (
		<div className='flex-shrink-0 relative overflow-hidden w-[85px] h-5'>
			<Image
				src={ navbarData.logoLight }
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