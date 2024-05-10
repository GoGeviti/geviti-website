import { NextPage } from 'next';

import { CheckoutComponent } from '@/components';
import IntroScreen from '@/components/IntroScreen';

const OnboardingPage: NextPage = async() => {
	return (
		<IntroScreen type='image'>
			<CheckoutComponent.Main />
		</IntroScreen>
	);
};

export default OnboardingPage;
