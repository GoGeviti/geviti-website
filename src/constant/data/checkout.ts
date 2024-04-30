const checkoutData = {
	form: {
		title: 'First, lets make <br class="max-lg:hidden"/>sure you <br class="lg:hidden"/>are eligible.',
		description: 'Lorem ipsum dolor sit amet consectetur. Feugiat quam nisl diam pulvinar rutrum elit placerat posuere neque.',
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
			title: 'We are full, but you’re on the waitlist!',
			titleMobile: 'We are full, but you’re on#the waitlist!',
			description: 'To ensure the greatest experience can be offered to our#members, we added you to the waitlist. We’ll reach out soon!',
			descriptionMobile: 'To ensure the greatest experience can be offered#to our members, we added you to the waitlist. We’ll#reach out soon!',
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
			description: 'Lorem ipsum dolor sit amet consectetur. Velit lectus sem#eleifend sed nibh.',
			descriptionMobile: 'Lorem ipsum dolor sit amet consectetur. Velit lectus sem#eleifend sed nibh.',
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