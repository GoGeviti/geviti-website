export interface ErrorResponse {
  error: string;
  statusCode: number;
  message: string[];
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

export interface TemUser extends TempUserDataParams {
  id: number;
  joinedWaitList: boolean;
  createdAt: string;
  updatedAt: string;
  token: string;
}

export interface TempUserReturnType {
  user: TemUser;
  stateExists: boolean;
}

export interface WaitListParams {
  id: string;
}

export interface InitialOfferingsReturnType {
  id: string;
  name: "Essentials Diagnostic" | "Comprehensive Diagnostic" | "Ultimate Diagnostic";
  billing_frequency: "One-Time";
  currency: string;
  price: string;
  first_time_payment: null;
  visibility_status: string;
}

export interface MembershipOfferingsReturnType {
  id: string;
  name: "Monthly Subscription" | "Quarterly Subscription";
  billing_frequency: "Monthly" | "Quarterly";
  title: "Monthly" | "Quarterly";
  currency: string;
  price: string;
  first_time_payment: string;
  visibility_status: "visible_to_all" | "hidden";
}

export interface DiscountParams {
  keyword: string;
  offering_id: string;
  price: string;
}
export interface DiscountReturnType {
  coupon_exist: boolean;
  coupon_details: {
    keyword: string;
    offering_id: string;
    original_price: string;
    discounted_price: string;
    promo_type: string;
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
  addons: {
    price: string;
    offering_id: string;
  };
  coupon: string;
}

export interface CheckoutResponseType {
  status: string;
  transaction_id: string;
  message: string;
}
