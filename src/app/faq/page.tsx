'use client';
import { NextPage } from 'next';

import { ArticleComponent, ContactUsComponent, FAQComponent, Footer } from '@/components';
import { faqData } from '@/constant/data';

const FAQPage: NextPage = () => {

	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<ContactUsComponent.Hero hero={ faqData.hero }/>
			<FAQComponent.QnA/>
			<FAQComponent.CompletelyCustom/>
			<ArticleComponent.Articles
				list={ faqData.article.list }
				btn={ faqData.article.btn }
				title={ faqData.article.title }/>
			<Footer landingPage />
		</div>
	);
};

export default FAQPage;
