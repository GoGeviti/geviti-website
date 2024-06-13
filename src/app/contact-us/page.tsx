import { NextPage } from 'next';

import { ContactUsComponent } from '@/components';
import SEO from '@/components/Seo';
import { contactUsData } from '@/constant/data';
import { getAllContactSubjects } from '@/services/products';

const ContactUsPage: NextPage = async() => {

	const subjectData = await getAllContactSubjects();
  
	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<SEO
				title='Contact Us'
				description='Any questions or remarks? Just write us a message.'
				og_images='/meta/contact.jpg'
				canonical='/contact-us'
			/>
			<ContactUsComponent.Hero hero={ contactUsData.hero }/>
			<ContactUsComponent.Form
				subject={ subjectData.docs }
			/>
		</div>
	);
};

export default ContactUsPage;
