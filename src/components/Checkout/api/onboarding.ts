import {
	AddressValidationResponseType,
	AddressValitationParams,
	CheckoutParams,
	CheckoutResponseType,
	DiscountParams,
	DiscountReturnType,
	ErrorResponse,
	InitialOfferingsReturnType,
	MembershipOfferingsReturnType,
	TempUser,
	TempUserDataParams,
	TempUserReturnType,
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

export const getDiscount = async(params: DiscountParams): Promise<DiscountReturnType> => {
	try {
		const userToken = fetchUserToken();
		if (!userToken) throw { message: 'No user found' };

		const res = await fetch(
			`${onboardingApiUrl}/billing/offerings-coupon?keyword=${params.keyword}&offering_id=${params.offering_id}&price=${params.price}
    `,
			{
				method: 'GET',
				headers: {
					Authorization: `Token ${userToken}`,
					...headers,
				},
				cache: 'no-store',
			}
		);
		const data = await processResponse<DiscountReturnType>(res);
		return {
			...data,
			coupon_details: {
				...data.coupon_details,
				discounted_price: Number(data.coupon_details.discounted_price),
				amount_off: Number(data.coupon_details.amount_off),
				original_price: Number(data.coupon_details.original_price),
			}
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
