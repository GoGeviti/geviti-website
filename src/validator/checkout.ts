import { differenceInYears, isValid } from 'date-fns';
import * as yup from 'yup';

{
	/* eslint-disable @typescript-eslint/no-explicit-any */
}

export const FormCheckoutSchema = yup.object().shape({
	firstName: yup.string().label('First Name')
		.required()
		.max(40),
	lastName: yup.string().label('Last name')
		.required()
		.max(40),
	email: yup.string().email()
		.required()
		.label('Email'),
	phone_number: yup.string().required()
		.label('Phone number'),
	address_1: yup.string().label('Address')
		.required(),
	address_2: yup.string(),
	city: yup.string().required()
		.label('City'),
	zip_code: yup.string().required()
		.label('Zip code'),
	state: yup.string().required()
		.label('State'),
	gender: yup.string().required()
		.label('Sex'),
	birthdate: yup
		.date()
		.required()
		.label('Date of birth')
		.test('birthdate', 'Enter a valid date', value => isValid(value))
		.test('birthdate', 'Must be 18 years or older', value => differenceInYears(new Date(), new Date(value)) >= 18),
});

// Create step-specific schemas
export const DiscountFormStep1Schema = yup.object().shape({
	name: yup.string().label('Name')
		.required()
		.max(40),
	email: yup.string().email()
		.required()
		.label('Email'),
	state: yup.string().required()
		.label('State'),
});

export const DiscountFormStep3Schema = yup.object().shape({
	phone_number: yup.string().required()
		.label('Phone number'),
});

// Keep the complete schema for final validation if needed
export const DiscountFormSchema = yup.object().shape({
	name: yup.string().label('Name')
		.required()
		.max(40),
	email: yup.string().email()
		.required()
		.label('Email'),
	phone_number: yup.string().required()
		.label('Phone number'),
	state: yup.string().required()
		.label('State'),
	options: yup.string().required()
		.label('Options'),
});

export const GiveawayFormSchema = yup.object().shape({
	name: yup.string().label('Name')
		.required()
		.max(40),
	email: yup.string().email()
		.required()
		.label('Email'),
	phone_number: yup.string().required()
		.label('Phone number'),
	state: yup.string().required()
		.label('State'),
	birthdate: yup
		.date()
		.required()
		.label('Date of birth')
		.test('birthdate', 'Enter a valid date', value => isValid(value))
		.test('birthdate', 'Must be 18 years or older', value => differenceInYears(new Date(), new Date(value)) >= 18),
});

export const ContactFormSchema = yup.object().shape({
	full_name: yup.string().label('Full Name')
		.required()
		.max(40),
	email: yup.string().email()
		.required()
		.label('Email'),
	phone_number: yup.number().required()
		.label('Phone number'),
	message: yup.string().required()
		.label('Message'),
	state: yup.string().required()
		.label('State'),
});

export const SigninFormSchema = yup.object().shape({
	email: yup.string().email()
		.required()
		.label('Email'),
	password: yup.string().required()
		.label('Password'),
});

export const AddressFormSchema = yup.object().shape({
	line1: yup.string().label('Address')
		.required(),
	line2: yup.string(),
	city: yup.string().required()
		.label('City'),
	zip: yup.string().required()
		.label('Zip code'),
	state: yup.string().required()
		.label('State'),
});

export const AccountInfoSchema = yup.object().shape({
	firstName: yup.string().label('First Name')
		.required()
		.max(40),
	lastName: yup.string().label('Last name')
		.required()
		.max(40),
	email: yup.string().email()
		.required()
		.label('Email'),
	phoneNumber: yup.string().required()
		.label('Phone number'),
	gender: yup.string().required()
		.label('Sex'),
	dob: yup
		.date()
		.required()
		.label('Date of birth')
		.test('birthdate', 'Enter a valid date', value => isValid(value))
		.test('birthdate', 'Must be 18 years or older', value => differenceInYears(new Date(), new Date(value)) >= 18),
	password: yup.string()
		.required('Password is required')
		.min(8, 'Password must be at least 8 characters')
		.matches(/[a-z]/, 'Password must contain at least one lowercase letter')
		.matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
		.matches(/\d/, 'Password must contain at least one number')
		.matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
		.label('Password'),
});
