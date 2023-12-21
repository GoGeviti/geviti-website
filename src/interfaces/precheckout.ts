export interface FormNameEmailState {
	name: string;
	email: string;
};

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

export interface UserData extends FormNameEmailState, FormDetailState { }

export interface CheckoutData {
	user: UserData;
	variantID?: string;
	isAlreadyOnHRT: boolean;
	flowFormSteps?: string[];
	eligibleID?: string;
	answerQuestionnaires?: AnswerListQuestionnaire[];
}