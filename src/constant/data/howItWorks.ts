import { Box, Mail, Smile, Water } from '@/components/Icons';

const howItWorksData = {
	hero: {
		preTitle: 'HOW IT WORKS',
		title: '<p>It’s never been easier to get the <br class="max-md:hidden"/> healthcare you deserve.</p>',
		btnCtaList: [
			{
				href: '/get-started',
				externalLink: false,
				text: 'Get Started',
			},
			{
				href: '/products',
				externalLink: false,
				text: 'See Products',
			},
		],
		mainKeys: [
			{
				image: Box,
				text: '<p>Select your<br/> bloodwork panel.</p>'
			},
			{
				image: Water,
				text: '<p>Do at-home <br/> blood test.</p>'
			},
			{
				image: Smile,
				text: '<p>Video call<br/> your clinician.</p>'
			},
			{
				image: Mail,
				text: '<p>Get treatment in<br/> the mail.</p>'
			},
		],
		video: '/videos/application_safari.mp4'
	},
	product: [
		{
			image: '/images/howitworks/product-1.webp',
			className: 'bg-product-1',
			title: '<p>Testosterone <br class="max-md:hidden"/>Therapy</p>',
			desc: 'Explore Geviti\'s essentials for optimized testosterone levels. Click to get optimized.',
			btn: 'Get Started'
		},
		{
			image: '/images/howitworks/product-2.webp',
			className: 'bg-product-2',
			title: '<p>Menopausal <br class="max-md:hidden"/>Treatments</p>',
			desc: 'Prioritize well-being with Geviti\'s hormonal balance solutions. Get started today.',
			btn: 'Get Started'
		},
		{
			image: '/images/howitworks/product-3.webp',
			className: 'bg-product-3',
			title: '<p>Anti-aging <br class="max-md:hidden"/>Care</p>',
			desc: 'Achieve well-rounded wellness with Geviti\'s anti-aging products. Click for personalized care.',
			btn: 'Get Started'
		},
		{
			image: '/images/howitworks/product-4.webp',
			className: 'bg-product-4',
			title: '<p>At-home Health <br class="max-md:hidden"/>Screening</p>',
			desc: 'Take charge of your health with Geviti\'s deep-dive bloodwork panels at-home.',
			btn: 'Get Started'
		},
	],
	comprehensive: {
		preTitle: 'Care based off of biomarkers',
		title: 'Comprehensive Blood panels',
		desc: '<p>An a at-home blood draw must be done in order to to enter <br class="max-lg:hidden"/>the Geviti platform.</p>',
		list: [
			{
				tag: 'Most Affordable',
				title: 'Essentials Panel',
				price: '$299',
				priceNote: '+ $89 monthly',
				biomarkers: '38+',
				notes: 'Biomarkers Tested',
				btn: 'Get Started',
				list: [
					'At-home blood draw',
					'Access To Geviti Platform',
					'Prescription Product Access',
					'Personally Assigned Health Coach',
					'Custom Treatment Plan'
				]
			},
			{
				tag: 'Most Popular',
				title: 'Comprehensive Panel',
				price: '$469',
				priceNote: '+ $89 monthly',
				biomarkers: '50+',
				notes: 'Biomarkers Tested',
				btn: 'Get Started',
				list: [
					'At-home blood draw',
					'Access To Geviti Platform',
					'Prescription Product Access',
					'Personally Assigned Health Coach',
					'Custom Treatment Plan'
				]
			},
			{
				tag: 'Most In-Depth',
				title: 'Ultimate Panel',
				price: '$599',
				priceNote: '+ $89 monthly',
				biomarkers: '58+',
				notes: 'Biomarkers Tested',
				btn: 'Get Started',
				list: [
					'At-home blood draw',
					'Access To Geviti Platform',
					'Prescription Product Access',
					'Personally Assigned Health Coach',
					'Custom Treatment Plan'
				]
			},
		],
	},
	cta: {
		title: 'Already on hormone therapy?',
		subtitle: 'A bloodwork package may or may not be required to switch over to Geviti as your online HRT and peptide therapy provider. But lets find out!',
		btnCta: {
			title: 'Let’s find out',
			href: '/precheckout'
		}

	},
	quality: {
		preTitle: 'Tailor-made longevity',
		image: '/images/howitworks/quality.png',
		title: 'Why Choose Geviti?',
		list: [
			'Because why leave home for better care?',
			'Everything is streamlined and made easy.',
			'Geviti makes cutting edge care available.',
			'Optimizing hormones doesn’t have to be hard!',
		],
		btnCtaList: [
			{
				href: '/get-started',
				externalLink: false,
				text: 'Start Now',
			},
			{
				href: '/products',
				externalLink: false,
				text: 'See Products',
			},
		],
	},
	faq: {
		preTitle: 'Have some questions?',
		title: 'Frequently asked questions',
		list: [
			{
				questions: 'What states does Geviti currently support?',
				answer: 'As of now, we are only in Arizona. We plan on being in each state by the end of 2024. Be sure to opt-in to our progress so we can notify you if we don’t currently support your state.'
			},
			{
				questions: 'How much is a membership for Geviti?',
				answer: 'A membership is $99 monthly for full-access to the Geviti platform. Your membership gives you direct access to your assigned health specialist and so much more.'
			},
			{
				questions: 'What is your cancellation policy?',
				answer: 'You can cancel whenever you\'d like. If for whatever reason Geviti is not a fit for you, you can cancel your membership at any given time.'
			},
			{
				questions: 'Does the membership include cost of pharmaceuticals or supplements?',
				answer: 'No! Access to the Geviti platform is $99 monthly. Any supplements or pharmaceuticals prescribed to you are an additional cost.'
			},
			{
				questions: 'What does the membership include?',
				answer: 'Members of Geviti are given direct access to an assigned clinician within the Geviti platform. Prescription products are made available based on the judgement of the assigned clinician based on the results of one\'s blood-draw and other health data. Moreover, 24/7 health metric tracking paired with innovative AI is available within our IOS app with smart-device integration capabilities. Our platform allows better data driven care, and so much more.'
			},
			{
				questions: 'Does a blood panel guarantee treatment?',
				answer: 'No. Getting your bloodwork done, establishing baseline biomarkers, and staying on top of your health is made accessible through the Geviti platform, but our bloodwork and membership plans do not guarantee specific therapies will be applicable or prescribed.'
			},
		]
	}
};
export default howItWorksData;