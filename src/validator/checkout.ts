import { differenceInYears } from 'date-fns';
import * as yup from 'yup';

{ /* eslint-disable @typescript-eslint/no-explicit-any */ }

export const FormCheckoutSchema = yup.object().shape({
	name: yup.string()
		.required()
		.label('Full name'),
	email: yup.string().email()
		.required()
		.label('Email'),
	phone_number: yup.string()
		.required()
		.label('Phone number'),
	address_1: yup.string(),
	address_2: yup.string(),
	city: yup.string().required()
		.label('City'),
	zip_code: yup.string().required()
		.label('Zip code'),
	state: yup.string()
		.required()
		.label('State'),
	gender: yup.string()
		.required()
		.label('Gender'),
	birthdate: yup.date()
		.required()
		.label('Date of birth')
		.test('birthdate', 'Must be 18 years or older', (value: any) => {
			return differenceInYears(new Date(), new Date(value)) >= 18; ;
		}),
});