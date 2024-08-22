export interface FormNameEmailState {
  first_name: string;
  last_name: string;
  email: string;
}

export interface FormDetailState {
  state: string;
  gender: string;
  birthdate: Date | null;
}

export interface AnswerListQuestionnaire {
  stepID: string;
  question: string;
  answer: string;
}

export interface UserData extends FormNameEmailState, FormDetailState {}
export interface UserDetailData extends FormNameEmailState, FormDetailState {
  phone_number: string;
  city: string;
  zip_code: string;
  address_1: string;
  address_2: string;
  id?: number;
}

export interface CheckoutData {
  user: UserData;
  variantID?: string;
  isAlreadyOnHRT: boolean;
  flowFormSteps?: string[];
  eligibleID?: string;
  answerQuestionnaires?: AnswerListQuestionnaire[];
}

export interface DiscountData {
  name  : string;
  state: string;
  email: string;
  phone_number: string;
}

export interface BillingInfo {
  full_name: string;
  city: string;
  zip_code: string;
  address_1: string;
  address_2: string;
  email: string;
  state: string;
  birthdate: Date | null;
  gender: string;
  phone_number: string;
}