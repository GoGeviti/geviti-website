import { ProductMembership } from '@/interfaces/product';

import {
	AddressValidationResponseType,
	AddressValitationParams,
	CheckoutParams,
	CheckoutResponseType,
	CreateSessionParams,
	DiscountReturnType,
	ErrorResponse,
	InitialOfferingsReturnType,
	MembershipOfferingsReturnType,
	ProductsPriceResponse,
	ProductsResponse,
	TempUser,
	TempUserDataParams,
	TempUserReturnType,
	ValidateUserStateParams,
	WaitListParams,
} from './types';

const onboardingApiUrl = process.env.NEXT_PUBLIC_ONBOARDING_API_URL || '';
const token = process.env.NEXT_PUBLIC_ONBOARDING_TOKEN;

const headers = { 'Content-Type': 'application/json' };

const processResponse = async <T>(res: Response): Promise<T> => {
	if (res.ok) {
		const data = await res.json() as T;
		return data;
	}
	throw await res.json();
}

const processError = (error: unknown) => {
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
		const res = await fetch(
			`${onboardingApiUrl}/products/membership`,
			{
				method: 'GET',
				headers: {
					...headers,
				}
			}
		);
		const data = await processResponse<ProductMembership>(res);
		return {
			...data,
			productPrices: data.productPrices.filter(it => !it.isHidden)
		}
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

export const joinWaitListV2 = async(params: ValidateUserStateParams) => {
	try {
		const res = await fetch(
			`${onboardingApiUrl}/v3/users/waitlist`,
			{
				method: 'POST',
				headers: {
					...headers,
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
