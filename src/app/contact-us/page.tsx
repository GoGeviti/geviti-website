'use client';
import { useState } from 'react';
import { NextPage } from 'next';

import { ContactUsComponent } from '@/components';
import { contactUsData } from '@/constant/data';

const ContactUsPage: NextPage = () => {
	const [firstName, setFirstName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] = useState<string>('');
  
	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<ContactUsComponent.Hero hero={ contactUsData.hero }/>
			<ContactUsComponent.Form
				initialFirstName={ firstName }
				initialEmail={ email }
				initialMessage= { message }
				onUpdateFirstName={ setFirstName }
				onUpdateEmail={ setEmail }
				onUpdateMessage={ setMessage }
				subject={ contactUsData.form.subject }/>
		</div>
	);
};

export default ContactUsPage;
