const checkoutData = {
	form: {
		title: 'First, lets make <br class="max-lg:hidden"/>sure you <br class="lg:hidden"/>are eligible.',
		description: 'We need some personal information to ensure Geviti has the resources to serve you and to confirm your eligibility for our services.',
		image: '/images/logo/logo_light.webp',
		statesAvailable: [
			'AZ', 'CA', 'CO', 'UT', 'WA', 'TX', 'FL', 'GA', 'KS', 'OR', 'NM'
		],
		submitLabel: 'Next Step',
		cancelLabel: 'Cancel',
		homeAddressSectionLabel: 'Home Address',
		personalInfoSectionLabel: 'Personal Information'
	},
	state: {
		waitlistAvailable: {
			title: 'Uh oh. We are at max capacity!',
			titleMobile: 'Uh oh. We are at max#capacity!',
			description: 'To ensure the best experience for our members, we\'ll add you#to our waitlist and reach out shortly!',
			descriptionMobile: 'To ensure the best experience for our members,#we\'ll add you to our waitlist and reach out shortly!',
			btnPrimary: {
				type: 'join_waitlist',
				text: 'Join Waitlist'
			},
			btnSecondary: {
				type: 'link',
				href: '/',
				text: 'Back to Homepage'
			},
		},
		waitlistNotAvailable: {
			title: 'Sorry, we aren\'t in your state yet, but#we will be soon.',
			titleMobile: 'Sorry, we aren\'t in your#state yet, but we will be#soon.',
			description: '',
			descriptionMobile: '',
			btnPrimary: {
				type: 'join_waitlist',
				text: 'Join the waitlist'
			},
			btnSecondary: {
				type: 'link',
				href: '/',
				text: 'Back to Homepage'
			},
		},
		successJoinWaitlist: {
			title: 'You have joined waitlist successfully!',
			titleMobile: 'You have joined waitlist#successfully!',
			description: 'We are excited for you to join Geviti and will be reaching out#as soon as there is availability.',
			descriptionMobile: 'We are excited for you to join Geviti and will be#reaching out as soon as there is availability.',
			btnPrimary: {
				type: 'link',
				href: '/',
				text: 'Back to Homepage'
			},
			btnSecondary: null,
		}
	}
};

export default checkoutData;