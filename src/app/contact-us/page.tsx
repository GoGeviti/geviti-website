import { Metadata, NextPage } from 'next';

import { Footer, FrequentlyAskedQuestions, MarketingComponent } from '@/components';
import ContactForm from '@/components/Contact/ContactForm';
import { Benefits, SocialProof } from '@/components/Landing';
import LongevitiPanelComponent from '@/components/LongevitiPanel';
import { faqDataDefault } from '@/constant/data/faq';
import { Slug } from '@/interfaces/marketing';
import { mergeOpenGraph } from '@/lib/mergeOpenGraph';
// import { getAllContactSubjects } from '@/services/products';

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
	// const subjectData = await getAllContactSubjects();

	return (
		<div className='flex min-h-screen flex-col w-full bg-white font-Poppins'>
			<MarketingComponent.Hero slug={ Slug.CONTACT_US } />
			<ContactForm  />
			<Benefits />
			<MarketingComponent.Instagram className='pb-0 lg:pb-0' />
			<div className='lg:py-10'>
				<SocialProof/>
			</div>
			<LongevitiPanelComponent.BannerParallax />
			<FrequentlyAskedQuestions
				className='pt-0 lg:pt-0'
				data={ faqDataDefault } />
			<Footer/>
		</div>
	);
};

export default ContactUsPage;
