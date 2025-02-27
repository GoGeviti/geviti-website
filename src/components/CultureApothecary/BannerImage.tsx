import Image from 'next/image';

const BannerImage: React.FC = () => {
	return (
		<div className='w-full relative overflow-hidden aspect-[375/361] sm:aspect-[1433/811]'>
			<Image
				src='/images/cultureapothecary/faq-background.webp'
				fill
				className='w-full object-cover'
				sizes='100vw'
				alt=''
				quality={ 100 }
			/>
		</div>
	);
};

export default BannerImage;
