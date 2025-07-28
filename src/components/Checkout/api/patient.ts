'use server';

import { AccountInfo, AddressInfo, BillingCheckoutParams, VerifyPhoneNumberParams } from '@/interfaces/precheckout';

import {
	addAccountInfo, addAddressInfo, addToWaitlist, getPatientProfile, getStripeSessionSecret, verifyPhoneNumber
} from './onboarding';

export async function getPatientProfileAction() {
	return await getPatientProfile()
}

export async function postAddressInfo(params: AddressInfo) {
	return await addAddressInfo(params);
}

export async function postAddToWaitlist(params: AddressInfo) {
	return await addToWaitlist(params);
}

export async function postAddAccountInfo(params: AccountInfo) {
	return await addAccountInfo(params);
}

export async function postVerifyPhoneNumber(params: VerifyPhoneNumberParams) {
	return await verifyPhoneNumber(params);
}
export async function postBillingCheckout(params: BillingCheckoutParams) {
	return await getStripeSessionSecret(params);
}