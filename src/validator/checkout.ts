import { differenceInYears, isValid } from 'date-fns';
import * as yup from 'yup';

{
	/* eslint-disable @typescript-eslint/no-explicit-any */
}

export const FormCheckoutSchema = yup.object().shape({
	first_name: yup.string().label('First name')
		.required()
		.matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ\/]+$/, 'Please enter valid First name')
		.max(40),
	last_name: yup.string().label('Last name')
		.required()
		.matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ\/]+$/, 'Please enter valid Last name')
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

export const DiscountFormSchema = yup.object().shape({
	name: yup.string().label('Name')
		.required()
		// .matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ\/]+$/, 'Please enter valid Name')
		.max(40),
	email: yup.string().email()
		.required()
		.label('Email'),
	phone_number: yup.string().required()
		.label('Phone number'),
	state: yup.string().required()
		.label('State')
});
