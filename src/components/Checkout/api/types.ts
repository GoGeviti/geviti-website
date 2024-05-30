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

export interface TemUserReturnType extends TempUserDataParams {
  id: number;
  joinedWaitList: boolean;
  createdAt: string;
  updatedAt: string;
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
  currency: string;
  price: string;
  first_time_payment: string;
  visibility_status: "visible_to_all" | "hidden";
}
