import * as yup from 'yup';

export const FormWaitlistSchema = yup.object().shape({
	firstName: yup.string().label('First Name')
		.when(['havePassword'], {
			is: (havePassword: boolean) => havePassword === false,
			then: schema => schema.required().max(40),
			otherwise: schema => schema.notRequired().max(40),
		}),
	lastName: yup.string().label('Last name')
		.when(['havePassword'], {
			is: (havePassword: boolean) => havePassword === false,
			then: schema => schema.required().max(40),
			otherwise: schema => schema.notRequired().max(40),
		}),
	email: yup.string().email()
		.label('Email')
		.when(['havePassword'], {
			is: (havePassword: boolean) => havePassword === false,
			then: schema => schema.required(),
			otherwise: schema => schema.notRequired(),
		}),
	havePassword: yup.boolean().required()
		.label('Have Password'),
	password: yup.string().when(['havePassword'], {
		is: (havePassword: boolean) => havePassword === true,
		then: schema => schema.required().label('Password'),
		otherwise: schema => schema.notRequired().label('Password'),
	}),
});

export type WaitlistFormData = yup.InferType<typeof FormWaitlistSchema>;