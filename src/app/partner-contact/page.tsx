// import { useState } from 'react';
import { NextPage } from 'next';

import { ContactUsComponent } from '@/components';
import { contactUsData } from '@/constant/data';
import { getAllContactSubjects } from '@/services/products';

const hero = contactUsData.heroInvest;
const InvestInquiryPage: NextPage = async() => {
	const subjectData = await getAllContactSubjects();
	
	return (
		<div className='flex min-h-screen flex-col w-full'>
			<ContactUsComponent.Hero
				hero={ hero }
				isPartner/>
			<ContactUsComponent.Form
				isPartner
				subject={ subjectData.docs }
			/>
		</div>
	);
};

export default InvestInquiryPage;
