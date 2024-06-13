import { Metadata } from 'next';

import {
	ArticleComponent,
	ContactUsComponent,
	FAQComponent,
} from '@/components';
import { faqData } from '@/constant/data';
import { mergeOpenGraph } from '@/lib/mergeOpenGraph';
import { Faq } from '@/payload/payload-types';
import { getAllFaq, getAllPost } from '@/services/products';

interface GroupedFaq {
  name: string;
  listQna: Faq[];
}

export const metadata: Metadata = {
	title: 'Faqs',
	description: 'Our team is here to help.',
	openGraph: mergeOpenGraph({
		title: 'Faqs',
		description: 'Our team is here to help.',
		image: '/meta/faq.jpg',
	}),
};

const FAQPage = async() => {
	const allPost = await getAllPost(4);
	const faqList = await getAllFaq();

	const groupFaqsByCategory = (faqs: Faq[]): GroupedFaq[] =>  {
		return faqs.reduce((result: GroupedFaq[], faq: Faq) => {
			const existingCategory = result.find(group => group.name === faq.category.title);
	
			if (existingCategory) {
				existingCategory.listQna.push(faq);
			} else {
				result.push({
					name: faq.category.title,
					listQna: [faq],
				});
			}
	
			return result;
		}, []);
	};

	const faqTransform = groupFaqsByCategory(faqList.docs);

	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<ContactUsComponent.Hero hero={ faqData.hero } />
			<FAQComponent.QnA
				title='Topics'
				btnRight='Search Questions'
				qnaData={ faqTransform } />
			<FAQComponent.CompletelyCustom />
			<ArticleComponent.Articles
				list={ allPost.docs }
				btn={ faqData.article.btn }
				btnLink='/blog'
				title={ faqData.article.title }
			/>
		</div>
	);
};

export default FAQPage;
