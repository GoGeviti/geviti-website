import {
	ArticleComponent,
	ContactUsComponent,
	FAQComponent,
} from '@/components';
import { faqData } from '@/constant/data';
import { Faq } from '@/payload/payload-types';
import { getAllFaq, getAllPost } from '@/services/products';

const FAQPage = async() => {
	const allPost = await getAllPost();
	const faqList = await getAllFaq();

	function transformFaq(postDataArray:Faq[]) {
		return {
			title: 'Topics',
			btnRight: 'Search Questions',
			tab: [
				...postDataArray.map((item:Faq) => {
					const categoryPosts = postDataArray.filter(
						post => post.category.title && post.category?.title.includes(item.category?.title as string)
					);
					return {
						name: item.category?.title as string,
						listQna: categoryPosts.map((post:Faq) => ({
							questions: post.title,
							answer: post.description,
						})),
					};
				}),
			],
		};
	}

	const faqTransform = transformFaq(faqList.docs);

	return (
		<div className='flex min-h-screen flex-col w-full bg-grey-background'>
			<ContactUsComponent.Hero hero={ faqData.hero } />
			<FAQComponent.QnA qnaData={ faqTransform } />
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
