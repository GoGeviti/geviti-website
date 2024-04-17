import { Footer } from '@/components';
import { RunningLogo } from '@/components/Landing';
import FrequentlyAskedQues from '@/components/MemberShip/FrequentlyAskedQues';
import BloodworkPanel from '@/components/Solutions/BloodworkPanel';
import EasyOnlineCare from '@/components/Solutions/easy-online-care/EasyOnlineCare';
import Hero from '@/components/Solutions/Hero';
import Investment from '@/components/Solutions/Investment';
import OptimizedYourSelf from '@/components/Solutions/OptimizedYourSelf';
import WellnessPro from '@/components/Solutions/WellnessPro';
import landingData from '@/constant/data/solution';

const Solutions = () => {
	
	return (
		<>
			<div className='bg-[#F2F2F2]'>
				<Hero
					image='/images/solution_media/solution-bg.webp'
					imageMobile='/images/solution_media/solution-mobile-bg.webp'
				/>
				<RunningLogo />
				<WellnessPro />
				<EasyOnlineCare treatmentmens={ landingData.treatmentmens } />
				<BloodworkPanel />
				<OptimizedYourSelf bgimgyourself='/images/solution_media/running-man.webp' />
				<FrequentlyAskedQues />
				<div className='flex flex-col gap-y-3.5'>
					<Investment
						bgimagemobile='/images/solution_media/investment-bg-mobile.webp'
						bgimagedesktop='/images/solution_media/investment-bg.webp'
					/>
					<Footer landingPage />
				</div>
			</div>
		</>
	);
};

export default Solutions;
