import { NextPage } from 'next';

import { CheckoutComponent } from '@/components';

const OnboardingPage: NextPage = async() => {
	return (
		<CheckoutComponent.Main />
	);
};

export default OnboardingPage;
