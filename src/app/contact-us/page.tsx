import { Metadata, NextPage } from 'next';

import { ContactUsComponent } from '@/components';
import { contactUsData } from '@/constant/data';
import { mergeOpenGraph } from '@/lib/mergeOpenGraph';
import { getAllContactSubjects } from '@/services/products';

export const metadata: Metadata = {
	title: 'Contact Us',
	description: 'Any questions or remarks? Just write us a message.',
	openGraph: mergeOpenGraph({
		title: 'Contact Us',
		description: 'Any questions or remarks? Just write us a message.',
		image: '/meta/contact.jpg',
	}),
};

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
