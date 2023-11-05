'use client';
import { useState } from 'react';
import { NextPage } from 'next';

import { ContactUsComponent } from '@/components';
import { contactUsData } from '@/constant/data';

const hero = contactUsData.heroInvest;
const InvestInquiryPage: NextPage = () => {
	const [firstName, setFirstName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [company, setCompany] = useState<string>('');
	const [role, setRole] = useState<string>('');
	
	return (
		<div className='flex min-h-screen flex-col w-full'>
			<ContactUsComponent.Hero
				hero={ hero }
				isPartner/>
			<ContactUsComponent.Form
				initialFirstName={ firstName }
				initialEmail={ email }
				initialPhone={ phone }
				initialMessage= { message }
				initialCompany= { company }
				initialRole= { role }
				onUpdateFirstName={ setFirstName }
				onUpdateEmail={ setEmail }
				onUpdatePhone={ setPhone }
				onUpdateMessage={ setMessage }
				onUpdateCompany={ setCompany }
				onUpdateRole={ setRole }
				subject={ contactUsData.form.subject }/>
		</div>
	);
};

export default InvestInquiryPage;
