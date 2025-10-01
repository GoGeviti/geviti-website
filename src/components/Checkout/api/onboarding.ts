import { AccountInfo, AddressInfo, BillingCheckoutParams, VerifyPhoneNumberParams } from '@/interfaces/precheckout';
import { ProductMembership } from '@/interfaces/product';
import { getCookie, setCookie } from '@/services/cookies';

import {
	AccountInfoResponseType,
	AddressInfoResponseType,
	AddressValidationResponseType,
	AddressValitationParams,
	BillingCheckoutResponseType,
	CheckoutParams,
	CheckoutResponseType,
	CreateSessionParams,
	DiscountReturnType,
	ErrorResponse,
	InitialOfferingsReturnType,
	LoginParams,
	LoginResponseType,
	MembershipOfferingsReturnType,
	PatientProfileResponseType,
	ProductsPriceResponse,
	ProductsResponse,
	ReferralCouponReturnType,
	SkipPaymentResponseType,
	TempUser,
	TempUserDataParams,
	TempUserReturnType,
	ValidateUserStateParams,
	VerifyPhoneNumberResponseType,
	WaitListParams,
} from './types';

const onboardingApiUrl = process.env.NEXT_PUBLIC_ONBOARDING_API_URL || '';
const emrApiUrl = process.env.NEXT_PUBLIC_EMR_API_URL || '';
const token = process.env.NEXT_PUBLIC_ONBOARDING_TOKEN;

const headers = { 'Content-Type': 'application/json' };

export const processResponse = async <T>(res: Response): Promise<T> => {
	if (res.ok) {
		const data = await res.json() as T;
		return data;
	}
	throw await res.json();
}

export const processError = (error: unknown) => {
	const err = error as ErrorResponse;
	return Promise.reject(err?.message?.toString() || 'Something went wrong');
}

const fetchUserToken = () => {
	const user = sessionStorage.getItem('temp_user');
	if (!user) {
		return null;
	}
	const tempUser = JSON.parse(user) as TempUser;
	return tempUser?.token ? tempUser.token : null;
}

export const addTempUser = async(params: TempUserDataParams): Promise<TempUserReturnType> => {
	try {
		const res = await fetch(
			`${onboardingApiUrl}/v2/users/add-temporary-user
    `,
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`,
					...headers,
				},
				cache: 'no-store',
				body: JSON.stringify(params),
			}
		);
		return await processResponse(res);
	} catch (error) {
		return await processError(error);
	}
};

export const joinWaitList = async(params: WaitListParams) => {
	try {
		const userToken = fetchUserToken();
		if (!userToken) throw { message: 'No user found' };

		const res = await fetch(`${onboardingApiUrl}/v2/users/waitlist`, {
			method: 'POST',
			headers: {
				Authorization: `Token ${userToken}`,
				...headers,
			},
			cache: 'no-store',
			body: JSON.stringify(params),
		});
		return await processResponse(res);
	} catch (error) {
		return await processError(error);
	}
};

export const getInitialOfferings = async(): Promise<InitialOfferingsReturnType[]> => {
	try {
		const userToken = fetchUserToken();
		if (!userToken) throw { message: 'No user found' };
		const res = await fetch(`${onboardingApiUrl}/billing/offerings-info?billingType=initial-package`, {
			method: 'GET',
			headers: {
				Authorization: `Token ${userToken}`,
				...headers,
			},
		});
		const data = await processResponse<InitialOfferingsReturnType[]>(res);
		return data.map(it => ({ ...it, price: Number(it.price), first_time_payment: Number(it.first_time_payment) }))
	} catch (error) {
		return await processError(error);
	}
};

export const getMembershipOfferings = async(): Promise<MembershipOfferingsReturnType[]> => {
	try {
		const userToken = fetchUserToken();
		if (!userToken) throw { message: 'No user found' };
		const res = await fetch(
			`${onboardingApiUrl}/billing/offerings-info?billingType=membership
    `,
			{
				method: 'GET',
				headers: {
					Authorization: `Token ${userToken}`,
					...headers,
				},
			}
		);
		const data = await processResponse<MembershipOfferingsReturnType[]>(res);
		return data.map(it => ({ ...it, price: Number(it.price), first_time_payment: Number(it.first_time_payment) }))
	} catch (error) {
		return await processError(error);
	}
};

export const getDiscount = async(code: string, product_id:string): Promise<DiscountReturnType> => {
	try {
		const res = await fetch(
			`${onboardingApiUrl}/coupons/${code}?product_id=${product_id}
    `,
			{
				method: 'GET',
				headers: {
					...headers,
				},
				cache: 'no-store',
			}
		);
		const data = await processResponse<DiscountReturnType>(res);
		return {
			...data
		}
	} catch (error) {
		return await processError(error);
	}
};

export const getReferralDiscount = async(code: string): Promise<ReferralCouponReturnType['coupons'][0] | null> => {
	try {
		const res = await fetch(
			`${onboardingApiUrl}/coupons/referral-coupon/${code}
    `,
			{
				method: 'GET',
				headers: {
					...headers,
				},
				cache: 'no-store',
			}
		);
		const data = await processResponse<ReferralCouponReturnType>(res);
		if (data.coupons.length > 0) {
			return data.coupons[0]
		}
		return null
	} catch (error) {
		return await processError(error);
	}
};

export const checkout = async(params: CheckoutParams): Promise<CheckoutResponseType> => {
	try {
		const userToken = fetchUserToken();
		if (!userToken) throw { message: 'No user found' };
		const res = await fetch(
			`${onboardingApiUrl}/billing/checkout
    `,
			{
				method: 'POST',
				headers: {
					Authorization: `Token ${userToken}`,
					...headers,
				},
				cache: 'no-store',
				body: JSON.stringify(params),
			}
		);
		return await processResponse(res);
	} catch (error) {
		return await processError(error);
	}
};

export const validateAddress = async(params: AddressValitationParams): Promise<AddressValidationResponseType> => {
	try {
		const res = await fetch(
			`https://addressvalidation.googleapis.com/v1:validateAddress?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
			{
				method: 'POST',
				cache: 'no-store',
				body: JSON.stringify(params),
			}
		);
		return await processResponse(res);
	} catch (error) {
		return await processError(error);
	}
}

export const getAllProducts = async() : Promise<ProductsResponse[]> => {
	try {
		const res = await fetch(
			`${onboardingApiUrl}/products`,
			{
				method: 'GET',
				headers: {
					...headers,
				}
			}
		);
		const data = await processResponse<ProductsResponse[]>(res);
		return data
	} catch (error) {
		return await processError(error);
	}
}

export const getProductMembership = async() : Promise<ProductMembership> => {
	try {
		// TODO: Mock response for getProductMembership
		const mockResponse: ProductMembership = {
			productId: 1,
			productName: 'Geviti Membership',
			productType: 'subscription',
			productDescription: 'Access to premium features and benefits',
			defaultPriceId: 'price_1234567890',
			defaultAmount: '1',
			defaultInterval: 'mo',
			defaultIntervalCount: 1,
			productPrices: [
				{
					productPriceId: 1,
					nickname: 'Geviti Lite',
					price: 399,
					priceId: '1',
					priceType: 'recurring',
					billingFrequency: 'Semi Annual',
					interval: 'semi annual',
					intervalCount: 1,
					isCurrentPrice: true,
					isHidden: false,
					isLegacy: false,
					isDefault: true,
				},
				{
					productPriceId: 2,
					nickname: 'Geviti Lite',
					price: 678.3,
					priceId: '2',
					priceType: 'recurring',
					billingFrequency: 'Annual',
					interval: 'annual',
					intervalCount: 1,
					isCurrentPrice: false,
					isHidden: false,
					isLegacy: false,
					isDefault: false,
				},
				{
					productPriceId: 3,
					nickname: 'Geviti Plus',
					price: 779.95,
					priceId: '3',
					priceType: 'recurring',
					billingFrequency: 'Semi Annual',
					interval: 'semi annual',
					intervalCount: 1,
					isCurrentPrice: true,
					isHidden: false,
					isLegacy: false,
					isDefault: false,
				},
				{
					productPriceId: 4,
					nickname: 'Geviti Plus',
					price: 1324.99,
					priceId: '4',
					priceType: 'recurring',
					billingFrequency: 'Annual',
					interval: 'annual',
					intervalCount: 1,
					isCurrentPrice: false,
					isHidden: false,
					isLegacy: false,
					isDefault: false,
				},
				{
					productPriceId: 5,
					nickname: 'Geviti Premium',
					price: 899,
					priceId: '5',
					priceType: 'recurring',
					billingFrequency: 'Semi Annual',
					interval: 'semi annual',
					intervalCount: 1,
					isCurrentPrice: true,
					isHidden: false,
					isLegacy: false,
					isDefault: false,
				},
				{
					productPriceId: 6,
					nickname: 'Geviti Premium',
					price: 1528.30,
					priceId: '6',
					priceType: 'recurring',
					billingFrequency: 'Annual',
					interval: 'annual',
					intervalCount: 1,
					isCurrentPrice: false,
					isHidden: false,
					isLegacy: false,
					isDefault: false,
				}
			]
		}

		// Filter out hidden prices as in the original commented code
		return {
			...mockResponse,
			productPrices: mockResponse.productPrices.filter(it => !it.isHidden)
		};
	} catch (error) {
		return await processError(error);
	}
}

export const getProductsPrice = async(id:string) : Promise<ProductsPriceResponse[]> => {
	try {
		const res = await fetch(
			`${onboardingApiUrl}/products/${id}`,
			{
				method: 'GET',
				headers: {
					...headers,
				},
				cache: 'no-store',
			}
		);
		const data = await processResponse<ProductsPriceResponse[]>(res);
		return data
	} catch (error) {
		return await processError(error);
	}
}

export const createSession = async({
	header,
	body,
}: {
	header : {[key:string]:string},
	body : CreateSessionParams
}): Promise<{clientSecret:string, token:string}> => {
	try {
		const res = await fetch(
			`${onboardingApiUrl}/v2/billing/checkout/`,
			{
				method: 'POST',
				headers: {
					...header,
					...headers,
				},
				body: JSON.stringify(body),
			}
		);
		const data = await processResponse<{clientSecret:string, token:string}>(res);
		return data
	} catch (error) {
		return await processError(error);
	}
}

export const getResetPasswordToken = async(email:string, tokenPayload:string): Promise<{restKey:string}> => {
	try {
		const res = await fetch(
			`${onboardingApiUrl}/users/onboard`,
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${tokenPayload}`,
					...headers,
				},
				body: JSON.stringify({ email: email }),
			}
		);
		const data = await processResponse<{restKey:string}>(res);
		return data
	} catch (error) {
		return await processError(error);
	}
}

export const validateState = async(params: ValidateUserStateParams): Promise<{stateExists:boolean, token:string}> => {
	try {
		const res = await fetch(
			`${onboardingApiUrl}/users/validate/state`,
			{
				method: 'POST',
				headers: {
					...headers,
				},
				body: JSON.stringify(params),
			}
		);
		const data = await processResponse<{stateExists:boolean, token:string}>(res);
		return data
	} catch (error) {
		return await processError(error);
	}
}

export const joinWaitListV2 = async(params: ValidateUserStateParams, tokenState:string) => {
	try {
		const res = await fetch(
			`${onboardingApiUrl}/v3/users/waitlist`,
			{
				method: 'POST',
				headers: {
					...headers,
					Authorization: `Bearer ${tokenState}`,
				},
				body: JSON.stringify(params),
			}
		);
		if (res.ok) {
			return true
		} else {
			return false
		}
	} catch (error) {
		return await processError(error);
	}
}

interface VitalBloodAddressParams {
	userAddress: {
		line1: string;
		line2?: string;
		city: string;
		state: string;
		zip: string;
	}
}

interface VitalBloodResponse {
	isAddressValid: boolean;
	message?: string;
}

export const validateVitalBlood = async(params: VitalBloodAddressParams): Promise<VitalBloodResponse> => {
	try {
		const queryParams = new URLSearchParams({
			'userAddress[line1]': params.userAddress.line1,
			'userAddress[line2]': params.userAddress.line2 || '',
			'userAddress[city]': params.userAddress.city,
			'userAddress[state]': params.userAddress.state,
			'userAddress[zip]': params.userAddress.zip
		});

		const res = await fetch(
			`${onboardingApiUrl}/vital-bloodwork/address/info?${queryParams}`,
			{
				method: 'GET',
				headers: {
					...headers,
				},
			}
		);
		return await processResponse(res);
	} catch (error) {
		return await processError(error);
	}
}

export const login = async(params: LoginParams): Promise<LoginResponseType> => {
	try {
		const res = await fetch(
			`${emrApiUrl}/v1/users/login`,
			{
				method: 'POST',
				headers: {
					...headers,
				},
				body: JSON.stringify(params),
			}
		);
		const data = await processResponse<LoginResponseType>(res);
		if (data.token) {
			await setCookie({ key: 'geviti_token', value: data.token });
		}
		return data;
	} catch (error) {
		return await processError(error);
	}
}

export const addAddressInfo = async(params: AddressInfo): Promise<AddressInfoResponseType> => {
	try {
		const geviti_token = await getCookie('geviti_token')
		const res = await fetch(
			`${emrApiUrl}/v1/users/address-info`,
			{
				method: 'POST',
				headers: {
					...headers,
					Cookie: `geviti_token=${geviti_token ?? ''}`,
				},
				body: JSON.stringify(params),
			}
		);
		return await processResponse(res);
	} catch (error) {
		return await processError(error);
	}
}

export const addToWaitlist = async(params: AddressInfo): Promise<AddressInfoResponseType> => {
	try {
		const geviti_token = await getCookie('geviti_token')
		const res = await fetch(
			`${emrApiUrl}/v1/users/waitlist`,
			{
				method: 'POST',
				headers: {
					...headers,
					Cookie: `geviti_token=${geviti_token ?? ''}`,
				},
				body: JSON.stringify(params),
			}
		);
		return await processResponse(res);
	} catch (error) {
		return await processError(error);
	}
}

export const verifyPhoneNumber = async(params:VerifyPhoneNumberParams): Promise<VerifyPhoneNumberResponseType> => {
	try {
		const geviti_token = await getCookie('geviti_token')
		const res = await fetch(
			`${emrApiUrl}/v1/identify-verification`,
			{
				method: 'POST',
				headers: {
					...headers,
					Cookie: `geviti_token=${geviti_token ?? ''}`,
				},
				body: JSON.stringify({
					'redirectUri': params.redirectUri,
					'verificationType': 'phone',
					'prefillFields': {
						'phone-number': params.phoneNumber
					}
				}
				),
			}
		);
		// console.log('res ==> ', res)
		return await processResponse(res);
	} catch (error) {
		return await processError(error);
	}
}

export const addAccountInfo = async(params: AccountInfo): Promise<AccountInfoResponseType> => {
	try {
		const geviti_token = await getCookie('geviti_token')
		const res = await fetch(
			`${emrApiUrl}/v1/users/account-info`,
			{
				method: 'POST',
				headers: {
					...headers,
					...(geviti_token && { Cookie: `geviti_token=${geviti_token ?? ''}` }),
				},
				body: JSON.stringify({
					...params,
					dob: params.dob ? new Date(params.dob).toISOString()
						.split('T')[0] : null
				}),
			}
		);
		const data = await processResponse<AccountInfoResponseType>(res);
		if (data.token) {
			await setCookie({ key: 'geviti_token', value: data.token });
		}
		return data
	} catch (error) {
		return await processError(error);
	}
}

export const getStripeSessionSecret = async(params: BillingCheckoutParams): Promise<BillingCheckoutResponseType> => {
	try {
		const geviti_token = await getCookie('geviti_token')
		const res = await fetch(
			`${emrApiUrl}/v1/billing/checkout`,
			{
				method: 'POST',
				headers: {
					...headers,
					Cookie: `geviti_token=${geviti_token ?? ''}`
				},
				body: JSON.stringify({
					...params
				}),
			}
		);
		const data = await processResponse<BillingCheckoutResponseType>(res);
		return data
	} catch (error) {
		return await processError(error);
	}
}

export const getPatientProfile = async(): Promise<PatientProfileResponseType> => {
	try {
		const geviti_token = await getCookie('geviti_token')
		const res = await fetch(
			`${emrApiUrl}/v1/patients/me/profile`,
			{
				method: 'GET',
				headers: {
					...headers,
					Cookie: `geviti_token=${geviti_token ?? ''}`,
				},
			}
		);
		const data = await processResponse<PatientProfileResponseType>(res);
		return data
	} catch (error) {
		return await processError(error);
	}
}

export const skipPayment = async(): Promise<SkipPaymentResponseType> => {
	try {
		const geviti_token = await getCookie('geviti_token')
		const res = await fetch(
			`${emrApiUrl}/v1/billing/skip-purchase`,
			{
				method: 'POST',
				headers: {
					...headers,
					Cookie: `geviti_token=${geviti_token ?? ''}`,
				},
				body: JSON.stringify({})
			}
		);
		const data = await processResponse<SkipPaymentResponseType>(res);
		return data
	} catch (error) {
		return await processError(error);
	}
}