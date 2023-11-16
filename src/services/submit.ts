/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

type ResponseType = {
  status: 'OK' | 'ERROR';
  message?: string;
};

export type ContactUsType = {
  full_name: string;
  email: string;
  subject: string;
  message: string;
	isPartner: boolean;
	phone_number?: number;
	company?: string;
	role?: string;
}

export const createContact = async(
	formData: ContactUsType
): Promise<ResponseType> => {
	try {
		const req = await fetch(process.env.BASE_API_URL + '/api/contacts', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...formData,
				subject: parseInt(formData.subject)
			}),
		});
		const data = await req.json();
		if (data?.errors?.length > 0) {
			return { status: 'ERROR', message: data.errors[0].message };
		}
		return { status: 'OK', message: 'Contact created successfully' };
	} catch (err:any) {
		return { status: 'ERROR', message: 'Opps, something went wrong! ' };
	}
};
