export interface ErrorResponse {
  error?: string;
  statusCode?: number;
  message?: string[];
}

export interface TempUserDataParams {
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  email: string;
  phoneNumber: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface TempUser extends TempUserDataParams {
  id: number;
  joinedWaitList: boolean;
  createdAt: string;
  updatedAt: string;
  token: string;
}

export interface TempUserReturnType {
  user: TempUser;
  stateExists: boolean;
}

export interface WaitListParams {
  id: string;
}

export interface InitialOfferingsReturnType {
  id: string;
  name: 'Essentials Diagnostic' | 'Comprehensive Diagnostic' | 'Ultimate Diagnostic';
  billing_frequency: 'One-Time';
  currency: string;
  price: number;
  first_time_payment: number;
  visibility_status: string;
}

export enum BILLING_FREQ {
  MONTHLY = 'Monthly',
  QUARTERLY = 'Quarterly'
}
export interface MembershipOfferingsReturnType {
  id: string;
  name: 'Monthly Subscription' | 'Quarterly Subscription';
  billing_frequency: BILLING_FREQ;
  title: 'Monthly' | 'Quarterly';
  currency: string;
  price: number;
  first_time_payment: number;
  visibility_status: 'visible_to_all' | 'hidden';
}

export interface DiscountParams {
  keyword: string;
  offering_id: string;
  price: string;
}

export enum PROMO_TYPE {
  PERCENT_OFF = 'Percent Off',
  AMOUNT_OFF = 'Amount Off',
}

export interface DiscountReturnType {
  coupon_exist: boolean;
  coupon_details: {
    keyword: string;
    offering_id: string;
    original_price: number;
    discounted_price: number;
    amount_off: number;
    promo_type: PROMO_TYPE ;
  };
}

export interface CheckoutParams {
  user_token: string;
  stripe_token: string;
  product: {
    price: string;
    offering_id: string;
  };
  membership: {
    price: string;
    offering_id: string;
  };
  addons?: {
    price: string;
    offering_id: string;
  };
  coupon: string;
}

export interface CheckoutResponseType {
  billingId: string;
  message: string;
  token: string;
}
