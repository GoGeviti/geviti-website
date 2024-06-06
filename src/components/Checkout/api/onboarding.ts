import {
	CheckoutParams,
	CheckoutResponseType,
	DiscountParams,
	DiscountReturnType,
	ErrorResponse,
	InitialOfferingsReturnType,
	MembershipOfferingsReturnType,
	TempUserDataParams,
	TempUserReturnType,
	WaitListParams,
} from './types';

const onboardingApiUrl = process.env.NEXT_PUBLIC_ONBOARDING_API_URL || '';
const token = process.env.NEXT_PUBLIC_ONBOARDING_TOKEN;

const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };

export const addTempUser = async(params: TempUserDataParams): Promise<TempUserReturnType> => {
	try {
		const res = await fetch(
			`${onboardingApiUrl}/v2/users/add-temporary-user
    `,
			{
				method: 'POST',
				headers,
				cache: 'no-store',
				body: JSON.stringify(params),
			}
		);
		if (res.ok) {
			const data = await res.json();
			return data;
		}
		throw await res.json();
	} catch (error) {
		const err = error as ErrorResponse;
		return Promise.reject(err?.message?.toString() || 'Something went wrong');
	}
};

export const joinWaitList = async(params: WaitListParams) => {
	try {
		const res = await fetch(`${onboardingApiUrl}/v2/users/waitlist`, {
			method: 'POST',
			headers,
			cache: 'no-store',
			body: JSON.stringify(params),
		});
		const data = await res.json();
		return data;
	} catch (error) {
		return Promise.reject(error);
	}
};

const processResponse = async <T>(res: Response): Promise<T> => {
	if (res.ok) {
		const data = await res.json() as T;
		return data;
	}
	throw await res.json();
}

export const getInitialOfferings = async(): Promise<InitialOfferingsReturnType[]> => {
	try {
		const res = await fetch(`${onboardingApiUrl}/billing/offerings-info?billingType=initial-package`, {
			method: 'GET',
			headers,
		});
		const data = await processResponse<InitialOfferingsReturnType[]>(res);
		return data.map(it => ({ ...it, price: Number(it.price), first_time_payment: Number(it.first_time_payment) }))
	} catch (error) {
		return Promise.reject(error);
	}
};

export const getMembershipOfferings = async(): Promise<MembershipOfferingsReturnType[]> => {
	try {
		const res = await fetch(
			`${onboardingApiUrl}/billing/offerings-info?billingType=membership
    `,
			{
				method: 'GET',
				headers,
			}
		);
		const data = await processResponse<MembershipOfferingsReturnType[]>(res);
		return data.map(it => ({ ...it, price: Number(it.price), first_time_payment: Number(it.first_time_payment) }))
	} catch (error) {
		return Promise.reject(error);
	}
};

export const getDiscount = async(params: DiscountParams): Promise<DiscountReturnType> => {
	try {
		const res = await fetch(
			`${onboardingApiUrl}/billing/offerings-coupon?keyword=${params.keyword}&offering_id=${params.offering_id}&price=${params.price}
    `,
			{
				method: 'GET',
				headers,
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
		const err = error as ErrorResponse;
		return Promise.reject(err.message);
	}
};

export const checkout = async(params: CheckoutParams): Promise<CheckoutResponseType> => {
	try {
		const res = await fetch(
			`${onboardingApiUrl}/billing/checkout
    `,
			{
				method: 'POST',
				headers,
				cache: 'no-store',
				body: JSON.stringify(params),
			}
		);
		return processResponse(res);
	} catch (error) {
		const err = error as ErrorResponse;
		return Promise.reject(err.message);
	}
};
