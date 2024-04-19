import { NextPage, Viewport } from 'next';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import { OnboardingComponent } from '@/components';
import type { Tier } from '@/components/Onboarding/PricingPlans';
import { onboardingData } from '@/constant/data';
import { getCartData } from '@/services/precheckout';

export const viewport: Viewport = {
	themeColor: '#181A1C'
};

const data = onboardingData.pricingPlans;
const pricingPlans = [
	...data.consultationTiers,
	...data.bloodTiersMen,
	...data.bloodTiersWomen,
];

const CartPage: NextPage = async() => {
	const cartData = getCartData();

	if (!cartData?.variantID) {
		redirect('/onboarding');
	}

	const selectedPlan = pricingPlans.find(
		plan => plan.variantID === cartData?.variantID
	) as Tier;

	return (
		<div className='flex flex-col w-full font-Poppins relative min-h-[calc(100svh)] lg:h-screen lg:overflow-hidden bg-primary'>
			<OnboardingComponent.Navbar
				theme='dark'
				progress={ 100 } />
			<div className='lg:px-5 lg:pb-[1.5vh] lg:pt-[1.9vh] flex flex-col h-full w-full'>
				<div className='w-full h-full lg:rounded-[20px] text-center relative'>
					<div className='absolute inset-0 w-full h-full max-lg:hidden'>
						<div className='relative overflow-hidden w-full h-full lg:rounded-[20px]'>
							<Image
								src='/images/onboarding/background_order_summary.png'
								alt=''
								loading='lazy'
								className='object-cover object-top'
								fill
								unoptimized
							/>
						</div>
					</div>
					<OnboardingComponent.OrderSummary
						isAlreadyOnHRT={ cartData?.isAlreadyOnHRT }
						selectedPlan={ selectedPlan }
						withAnimation={ false }
					/>
				</div>
			</div>
		</div>
	);
};

export default CartPage;
