import { Box, Mail, Smile, Water } from '@/components/Icons';

const howItWorksData = {
	hero: {
		preTitle: 'HOW IT WORKS',
		title: '<p>It’s never been easier to get the <br/> healthcare you deserve.</p>',
		titleMobile: '<p>It’s never been easier to get the healthcare you deserve.</p>',
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
			title: '<p>Testosterone <br/>Therapy</p>',
			titleMobile: '<p>Testosterone Therapy</p>',
			desc: 'Explore Geviti\'s essentials for optimized testosterone levels. Click to get optimized.',
			btn: 'Get Started'
		},
		{
			image: '/images/howitworks/product-2.webp',
			className: 'bg-product-2',
			title: '<p>Menopausal <br/>Treatments</p>',
			titleMobile: '<p>Menopausal Treatments</p>',
			desc: 'Prioritize well-being with Geviti\'s hormonal balance solutions. Get started today.',
			btn: 'Get Started'
		},
		{
			image: '/images/howitworks/product-3.webp',
			className: 'bg-product-3',
			title: '<p>Anti-aging <br/>Care</p>',
			titleMobile: '<p>Anti-aging Care</p>',
			desc: 'Achieve well-rounded wellness with Geviti\'s anti-aging products. Click for personalized care.',
			btn: 'Get Started'
		},
		{
			image: '/images/howitworks/product-4.webp',
			className: 'bg-product-4',
			title: '<p>At-home Health <br/>Screening</p>',
			titleMobile: '<p>At-home Bloodwork</p>',
			desc: 'Take charge of your health with Geviti\'s deep-dive bloodwork panels at-home.',
			btn: 'Get Started'
		},
	],
	comprehensive: {
		preTitle: 'Care based off of biomarkers',
		title: 'Comprehensive Blood panels',
		desc: '<p>An a at-home blood draw must be done in order to to enter <br/>the Geviti platform.</p>',
		descMobile: '<p>An a at-home blood draw must be done in order to to enter the Geviti platform.</p>',
		list: [
			{
				tag: 'Most Affordable',
				title: 'Essentials Panel',
				price: '$299',
				priceNote: '+ $99 monthly',
				notes: '39 Biomarkers Tested',
				btn: 'Get Started',
				list: [
					'At-home blood draw',
					'Access To Geviti Platform',
					'Perscription Product Access',
					'Personally Assigned Health Coach',
					'Custom Treatment Plan'
				]
			},
			{
				tag: 'Most Popular',
				title: 'Comprehensive Panel',
				price: '$469',
				priceNote: '+ $99 monthly',
				notes: '50 Biomarkers Tested',
				btn: 'Get Started',
				list: [
					'At-home blood draw',
					'Access To Geviti Platform',
					'Perscription Product Access',
					'Personally Assigned Health Coach',
					'Custom Treatment Plan'
				]
			},
			{
				tag: 'Most In-Depth',
				title: 'Ultimate Panel',
				price: '$499',
				priceNote: '+ $99 monthly',
				notes: '58 Biomarkers Tested',
				btn: 'Get Started',
				list: [
					'At-home blood draw',
					'Access To Geviti Platform',
					'Perscription Product Access',
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
			href: '/'
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
				questions: 'What states are we in?',
				answer: 'As of now, we are only in Arizona. We plan on being in each state by the end of 2024. Be sure to opt-in to our progress so we can notify you if we don’t currently support your state.'
			},
			{
				questions: 'How much is the membership?',
				answer: 'As of now, we are only in Arizona. We plan on being in each state by the end of 2024. Be sure to opt-in to our progress so we can notify you if we don’t currently support your state.'
			},
			{
				questions: 'What is your cancellation policy?',
				answer: 'As of now, we are only in Arizona. We plan on being in each state by the end of 2024. Be sure to opt-in to our progress so we can notify you if we don’t currently support your state.'
			},
			{
				questions: 'Do I only need one Geviti membership?',
				answer: 'As of now, we are only in Arizona. We plan on being in each state by the end of 2024. Be sure to opt-in to our progress so we can notify you if we don’t currently support your state.'
			},
			{
				questions: 'What does the membership include?',
				answer: 'As of now, we are only in Arizona. We plan on being in each state by the end of 2024. Be sure to opt-in to our progress so we can notify you if we don’t currently support your state.'
			},
			{
				questions: 'Does a blood panel guarantee treatment?',
				answer: 'As of now, we are only in Arizona. We plan on being in each state by the end of 2024. Be sure to opt-in to our progress so we can notify you if we don’t currently support your state.'
			},
		]
	}
};
export default howItWorksData;