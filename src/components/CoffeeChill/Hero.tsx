import Image from 'next/image';
import Link from 'next/link';

import coffeeChillData from '@/constant/data/coffeeChill';

import ButtonCta from '../ButtonCta';
import PopupReview from '../PopupReview';

const Hero: React.FC = () => {
	return (
		<div className='w-full container-center pt-[133px] pb-[25px]'>
			<div className='flex max-lg:flex-col items-center gap-[31px] lg:pr-[60px]'>
				<div className='mx-auto max-w-[624px] lg:mx-0 lg:shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left w-full'>
					<div
						style={ {
							boxShadow:
                '0px 96px 27px 0px rgba(184, 184, 184, 0.00), 0px 61px 25px 0px rgba(184, 184, 184, 0.01), 0px 34px 21px 0px rgba(184, 184, 184, 0.05), 0px 15px 15px 0px rgba(184, 184, 184, 0.09), 0px 4px 8px 0px rgba(184, 184, 184, 0.10)',
						} }
						className='w-fit rounded-[20px] overflow-hidden'
					>
						<PopupReview wrapperClassName='border border-grey-50 w-fit' />
					</div>
					<h1 className='mt-[42px] h5 lg:h2 max-xs3:text-[6vw] max-w-[331px] lg:max-w-[624px] w-full -tracking-0.04em'>
						{ coffeeChillData.hero.title }
					</h1>
					<p className='mt-3.5 lg:mt-6 text-grey-400 text-[13px]/5 max-w-[283px] sm:max-w-[475px]'>
						{ coffeeChillData.hero.description }
					</p>
					<div className='flex max-sm:flex-col items-center sm:items-end gap-[41px]'>
						<ButtonCta
							href='/pricing'
							className='mt-[42px] w-full sm:w-fit'>
              Join Geviti
						</ButtonCta>

						<div className='flex flex-col gap-y-4 pb-1'>
							<p className='body-small text-primary'>
                Questions about our membership?
							</p>
							<Link
								href='https://calendly.com/naomitabot-gogeviti/geviti-discovery-call'
								target='_blank'
								rel='noreferrer'
								className='text-lg/6 font-medium text-primary underline'
							>
                Schedule A Call
							</Link>
						</div>
					</div>
				</div>

				<div className='w-full flex relative'>
					<Image
						src='/images/coffee-chill/hero.webp'
						alt='CoffeeAndChill'
						width={ 1683 }
						height={ 1815 }
						className='w-full h-auto'
					/>

					<div className='absolute -top-6 lg:-top-[17px] -right-4 lg:-right-6'>
						<Image
							src='/images/coffee-chill/quotes.webp'
							alt='CoffeeAndChill'
							width={ 476 }
							height={ 424 }
							className='w-[119px] h-auto'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
