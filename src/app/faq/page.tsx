import {
	ArticleComponent,
	ContactUsComponent,
	FAQComponent,
} from '@/components';
import { faqData } from '@/constant/data';
import { getAllPost } from '@/services/products';

const FAQPage = async() => {
	const allPost = await getAllPost(3);

	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<ContactUsComponent.Hero hero={ faqData.hero } />
			<FAQComponent.QnA />
			<FAQComponent.CompletelyCustom />
			<ArticleComponent.Articles
				list={ allPost.docs }
				btn={ faqData.article.btn }
				title={ faqData.article.title }
			/>
		</div>
	);
};

export default FAQPage;
