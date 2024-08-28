import membershipData from './membership';

const checkoutData = {
	form: {
		title: 'First, lets make <br class="max-lg:hidden"/>sure you <br class="lg:hidden"/>are eligible.',
		description:
      'We need some personal information to ensure Geviti has the resources to serve you and to confirm your eligibility for our services.',
		image: '/images/logo/logo_light.webp',
		statesAvailable: ['AZ', 'CA', 'CO', 'UT', 'WA', 'TX', 'FL', 'GA', 'KS', 'OR', 'NM', 'MO'],
		submitLabel: 'Next Step',
		cancelLabel: 'Cancel',
		homeAddressSectionLabel: 'Home Address',
		personalInfoSectionLabel: 'Personal Information',
	},
	state: {
		waitlistAvailable: {
			title: 'Uh oh. We are at max capacity!',
			titleMobile: 'Uh oh. We are at max#capacity!',
			description:
        'To ensure the best experience for our members, we\'ll add you#to our waitlist and reach out shortly!',
			descriptionMobile:
        'To ensure the best experience for our members,#we\'ll add you to our waitlist and reach out shortly!',
			btnPrimary: {
				type: 'join_waitlist',
				text: 'Join Waitlist',
			},
			btnSecondary: {
				type: 'link',
				href: '/',
				text: 'Back to Homepage',
			},
		},
		waitlistNotAvailable: {
			title: 'Sorry, we aren\'t in your state yet, but#we will be soon.',
			titleMobile: 'Sorry, we aren\'t in your#state yet, but we will be#soon.',
			description: '',
			descriptionMobile: '',
			btnPrimary: {
				type: 'join_waitlist',
				text: 'Join the waitlist',
			},
			btnSecondary: {
				type: 'link',
				href: '/',
				text: 'Back to Homepage',
			},
		},
		successJoinWaitlist: {
			title: 'You have joined waitlist successfully!',
			titleMobile: 'You have joined waitlist#successfully!',
			description: 'We are excited for you to join Geviti and will be reaching out#as soon as there is availability.',
			descriptionMobile:
        'We are excited for you to join Geviti and will be#reaching out as soon as there is availability.',
			btnPrimary: {
				type: 'link',
				href: '/',
				text: 'Back to Homepage',
			},
			btnSecondary: null,
		},
	},
	pricingProductPlan: {
		title: 'Lets start with a full blood panel.',
		description: 'An at-home blood draw must be done in order to get access to the Geviti platform.',
		list: membershipData.pricing.list,
	},
	membershipFrequency: {
		title: 'Select your membership frequency.',
		description:
      'Geviti transcends the usual health and wellness offerings, providing unparalleled value at a lower cost. Our mission is to make longevity-focused care exceptionally accessible.',
		list: [
			'Geviti Platform Access',
			'Mobile App Integration',
			'Smart Device & Wearable Integration',
			'Biannual At-Home Full Panels',
			'Quarterly Doctor Telehealth Visits',
			'Doctor - Monitored Therapeutics',
			'Tailored Smart Supplements',
			'Custom Longevity Protocols',
			'Certified Personal Health Coaching',
			'Wholesale Supplements & Diagnostics',
		],
		frequencyOptions: membershipData.pricing.pricingOptions,
		price: {
			text: 'per month',
			quarterly: 'billed quarterly',
			monthly: 'billed monthly',
		},
		btnSubmitLabel: 'Proceed to Payment',
		btnCancelLabel: 'Cancel',
	},
	paymentState: {
		success: {
			title: 'Your order was placed successfully.',
			titleMobile: 'Your order was placed#successfully.',
			description:
        'Thank you! Shortly you will receive a confirmation email with the order details. To get#started please proceed to the onboarding process.',
			descriptionMobile:
        'Thank you! Shortly you will receive a confirmation#email with the order details. To get started please#proceed to the onboarding process.',
			btnPrimary: {
				type: 'link',
				externalLink: true,
				href: process.env.NEXT_PUBLIC_APP_URL,
				text: 'Lets Begin Onboarding',
			},
			btnSecondary: null,
		},
		error: {
			title: 'Oops, we ran into an issue.',
			titleMobile: 'Oops, we ran into an issue.',
			description:
        'Please try again in 5 minutes. If that doesn’t do the trick, please reach out to#support@gogeviti.com and we will get back to you as quickly as we can.',
			descriptionMobile:
        'Please try again in 5 minutes. If that doesn’t do#the trick, please reach out to support@gogeviti.com#and we will get back to you as quickly as we can.',
			btnPrimary: {
				type: 'router_back',
				text: 'Go Back to Payment',
			},
			btnSecondary: {
				type: 'link',
				href: '/',
				text: 'Cancel Purchase',
			},
		},
	},
};

export default checkoutData;
