export interface FormNameEmailState {
	name: string;
	email: string;
};

export interface FormDetailState {
	state: string;
	gender: string;
	birthdate: Date | null;
}

export interface UserData extends FormNameEmailState, FormDetailState { }

export interface CheckoutData {
	user: UserData;
	variantID?: string;
	isAlreadyOnHRT: boolean;
}