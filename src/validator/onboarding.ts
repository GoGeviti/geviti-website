import { differenceInYears } from 'date-fns';
import * as yup from 'yup';

{ /* eslint-disable @typescript-eslint/no-explicit-any */ }

export const FormNameEmailSchema = yup.object().shape({
	name: yup.string()
		.required()
		.label('Full Name'),
	email: yup.string().email()
		.required()
		.label('Email')
});

export const FormDetailSchema = yup.object().shape({
	state: yup.string()
		.required()
		.label('State'),
	gender: yup.string()
		.required()
		.label('Biological Sex'),
	birthdate: yup.date()
		.required()
		.label('Birthday')
		.test('birthdate', 'Must be 18 years or older', (value: any) => {
			return differenceInYears(new Date(), new Date(value)) >= 18; ;
		}),
});

export const MergedFormSchema = FormNameEmailSchema.concat(FormDetailSchema);