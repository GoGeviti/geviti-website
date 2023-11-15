import { NextPage } from 'next';

import { ContactUsComponent } from '@/components';
import { contactUsData } from '@/constant/data';
import { getAllContactSubjects } from '@/services/products';

const ContactUsPage: NextPage = async() => {

	const subjectData = await getAllContactSubjects();
  
	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<ContactUsComponent.Hero hero={ contactUsData.hero }/>
			<ContactUsComponent.Form
				subject={ subjectData.docs }
			/>
		</div>
	);
};

export default ContactUsPage;
