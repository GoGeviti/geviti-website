import * as yup from 'yup';

export const FormNameEmailSchema = yup.object().shape({
	name: yup.string()
		.required()
		.label('Name'),
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
});