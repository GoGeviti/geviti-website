import { NextPage } from 'next';

import { getPatientProfile, getProductMembership } from '@/components/Checkout/api/onboarding';
import StripeCheckout from '@/components/Checkout/StripeCheckout';
import IntroScreen from '@/components/IntroScreen';
import { getCookie, setCookie } from '@/services/cookies';

type PageProps = {
	searchParams:  Promise<{ [key: string]: string | string[] | undefined }>;
};

const PaymentSuccessPage: NextPage<PageProps> = async props => {
	const searchParams = await props.searchParams;

	const productMembership = await getProductMembership();
	const geviti_token = await getCookie('geviti_token');
	const params_geviti_token = searchParams.geviti_token

	let token = ''

	if (params_geviti_token && typeof params_geviti_token === 'string') {
		await setCookie({ key: 'geviti_token', value: params_geviti_token });
		try {
			const patientProfile = await getPatientProfile();
			if (patientProfile.medplumPatientId) {
				token = params_geviti_token;
			}
		} catch (error) {
			token = ''
		}
	} else if (geviti_token) {
		try {
			const patientProfile = await getPatientProfile();
			if (patientProfile.medplumPatientId) {
				token = geviti_token
			}
		} catch (error) {
			token = ''
		}
	}

	return (
		<IntroScreen type='image'>
			<StripeCheckout
				priceData={ productMembership }
				searchParams={ searchParams }
				geviti_token={ token }
			/>
		</IntroScreen>
	);
};

export default PaymentSuccessPage;
