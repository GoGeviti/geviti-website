import {
  CheckoutParams,
  CheckoutResponseType,
  DiscountReturnType,
  ErrorResponse,
  InitialOfferingsReturnType,
  MembershipOfferingsReturnType,
  TempUserReturnType,
  TempUserDataParams,
  WaitListParams,
} from "./types";

const onboardingApiUrl = process.env.NEXT_PUBLIC_ONBOARDING_API_URL || "";
const token = process.env.NEXT_PUBLIC_ONBOARDING_TOKEN;

const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };

export const addTempUser = async (params: TempUserDataParams): Promise<TempUserReturnType> => {
  try {
    const res = await fetch(
      `${onboardingApiUrl}/v2/users/add-temporary-user
    `,
      {
        method: "POST",
        headers,
        cache: "no-store",
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
    return Promise.reject(err.message.toString());
  }
};

export const joinWaitList = async (params: WaitListParams) => {
  try {
    const res = await fetch(`${onboardingApiUrl}/v2/users/waitlist`, {
      method: "POST",
      headers,
      cache: "no-store",
      body: JSON.stringify(params),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getInitialOfferings = async (): Promise<InitialOfferingsReturnType[]> => {
  try {
    const res = await fetch(`${onboardingApiUrl}/billing/offerings-info?billingType=initial-package`, {
      method: "GET",
      headers,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getMembershipOfferings = async (): Promise<MembershipOfferingsReturnType[]> => {
  try {
    const res = await fetch(
      `${onboardingApiUrl}/billing/offerings-info?billingType=membership
    `,
      {
        method: "GET",
        headers,
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getDiscount = async (discountCode: string = ""): Promise<DiscountReturnType> => {
  try {
    const res = await fetch(
      `${onboardingApiUrl}/billing/offerings-coupon?keyword=${discountCode}
    `,
      {
        method: "GET",
        headers,
        cache: "no-store",
      }
    );
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    throw await res.json();
  } catch (error) {
    const err = error as ErrorResponse;
    return Promise.reject(err.message);
  }
};

export const checkout = async (params: CheckoutParams): Promise<CheckoutResponseType> => {
  try {
    const res = await fetch(
      `${onboardingApiUrl}/billing/checkout
    `,
      {
        method: "POST",
        headers,
        cache: "no-store",
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
    return Promise.reject(err.message);
  }
};
