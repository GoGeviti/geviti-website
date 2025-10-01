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

export enum InitialOfferingType {
  ESSENTIALS = 'essentials',
  COMPREHENSIVE = 'comprehensive',
  ULTIMATE = 'ultimate',
}
export interface InitialOfferingsReturnType {
  id: string;
  name: string;
  billing_frequency: 'One-Time';
  currency: string;
  price: number;
  first_time_payment: number;
  visibility_status: string;
}

export enum BILLING_FREQ {
  SEMI_ANNUAL = 'Semi Annual',
  ANNUAL = 'Annually'
}
export interface MembershipOfferingsReturnType {
  id: string;
  name: 'Semi Annual Subscription' | 'Annual Subscription';
  billing_frequency: BILLING_FREQ;
  title: 'Semi Annual' | 'Annually';
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
    id: string;
    object: string;
    amount_off: null;
    applies_to: {
      products: string[];
    };
    created: number;
    currency: null;
    duration: string;
    duration_in_months: null;
    livemode: boolean;
    max_redemptions: number;
    name: string;
    percent_off: number;
    redeem_by: null;
    times_redeemed: number;
    valid: boolean;
}

export interface ReferralCouponReturnType {
  coupons: {
    id: number;
    name: string;
    amount: number;
    unit: string;
    default_promo_code: string;
    campaign_id: number;
    campaign_name: string;
  }[];
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

export interface AddressValitationParams {
  address: {
    regionCode: string;
    postalCode: string;
    locality: string;
    administrativeArea: string;
    addressLines: string[];
  };
}

export interface AddressValidationResponseType {
  result: {
    address: {
        addressComponents: {
            componentName: {
                text: string;
            };
            componentType: string;
            confirmationLevel: string;
        }[];
        unconfirmedComponentTypes: string[];
    };
  };
}

export interface ProductsResponse {
  stripeProductId: string;
  defaultPrice: string;
  name: string;
  productType: string;
  description: string;
  productPrices: {
    price: string;
    priceId: string;
    priceType: string;
    billingFrequency: string;
  }[]
}
export interface ProductsPriceResponse {
  id: string;
  object: string;
  active: boolean;
  billing_scheme: string;
  created: number;
  currency: string;
  custom_unit_amount: null;
  livemode: boolean;
  lookup_key: null;
  nickname: null;
  product: string;
  recurring: {
    aggregate_usage: null;
    interval: string;
    interval_count: number;
    meter: null;
    trial_period_days: null;
    usage_type: string;
  };
  tax_behavior: string;
  tiers_mode: null;
  transform_quantity: null;
  type: string;
  unit_amount: number;
  unit_amount_decimal: string;
}

export interface CreateSessionParams {
  user: {
    firstName: string;
    lastName: string;
    dob: Date | null;
    gender: string;
    email: string;
    phoneNumber: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zipCode: string;
  };
  coupon: string;
  referral?: string;
  fp_tid?: string;
  product: {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
    price_id: string;
  }[];
  payment_token?:string
}
export interface ValidateUserStateParams {
  firstName: string;
  lastName: string;
  dob: Date | null;
  gender: string;
  email: string;
  phoneNumber: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
}