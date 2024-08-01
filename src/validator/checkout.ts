// import { differenceInYears, isValid } from 'date-fns';
import * as yup from 'yup';

{
	/* eslint-disable @typescript-eslint/no-explicit-any */
}

export const FormCheckoutSchema = yup.object().shape({
	full_name: yup.string().label('Name')
		.required()
		.matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ\/]+$/, 'Please enter valid Name')
		.max(40),
	email: yup.string().email()
		.required()
		.label('Email'),
	address: yup.string()
		.required()
		.label('Address'),
	city: yup.string().required()
		.label('City'),
	zip_code: yup.string().required()
		.label('Zip code'),
	state: yup.string().required()
		.label('State')
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
