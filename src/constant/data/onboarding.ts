const onboardingData = {
	transitionWelcome: {
		id: 'TRANSITION_WELCOME',
		title: 'Welcome to Geviti!',
		desc: 'Lets start by making sure you are eligible'
	},
	transitionEligibleBloodwork: {
		id: 'TRANSITION_ELIGIBLE_BLOODWORK',
		title: 'You\'re eligible to join Geviti.',
		desc: 'We need to start with a bloodwork panel so we can tailor-make a plan.'
	},
	transitionEligibleSwitch: {
		id: 'TRANSITION_ELIGIBLE_SWITCH',
		title: 'You\'re eligible to join Geviti.',
		desc: 'You need to speak with one of our clinicians to see about switching to Geviti.'
	},
	questionOnHRT: {
		id: 'QUESTION_ALREADY_ON_HRT',
		title: 'Are You Currently Taking Dr. Prescribed Hormone Therapy?',
		options: [
			{
				label: 'Yes',
				nextStep: {
					transition: {
						title: 'Did you know?',
						desc: 'Geviti stays at the cutting edge of hormone therapy.'
					},
					stepID: 'QUESTION_BLOODWORK_DONE'
				}
			},
			{
				label: 'No',
				nextStep: {
					transition: {
						title: 'Thank You.',
						desc: 'The following questions will help us better understand you.'
					},
					stepID: 'QUESTION_HOW_OFTEN_LETHARGIC'
				}
			}
		]
	},
	questionLethargic: {
		id: 'QUESTION_HOW_OFTEN_LETHARGIC',
		title: 'How often are you feeling lethargic, even with sufficient sleep?',
		options: [
			{
				label: 'Everyday',
				nextStep: {
					transition: {
						title: 'You’re not alone.',
						desc: 'Luckily, this can be fixed with right plan.'
					},
					stepID: 'QUESTION_DIFFICULTY_WEIGHT'
				}
			},
			{
				label: 'Half the time',
				nextStep: {
					transition: {
						title: 'You’re not alone.',
						desc: 'Luckily, this can be fixed with right plan.'
					},
					stepID: 'QUESTION_DIFFICULTY_WEIGHT'
				}
			},
			{
				label: 'Hardly ever',
				nextStep: {
					transition: {
						title: 'You’re not alone.',
						desc: 'Luckily, this can be fixed with right plan.'
					},
					stepID: 'QUESTION_DIFFICULTY_WEIGHT'
				}
			},
			{
				label: 'Only occasionally',
				nextStep: {
					transition: {
						title: 'You’re not alone.',
						desc: 'Luckily, this can be fixed with right plan.'
					},
					stepID: 'QUESTION_DIFFICULTY_WEIGHT'
				}
			}
		]
	},
	questionBloodworkDone: {
		id: 'QUESTION_BLOODWORK_DONE',
		title: 'When was the last time you got bloodwork done?',
		options: [
			{
				label: '0-3 months',
				nextStep: {
					transition: {
						title: 'Did you know we do at-home bloodwork?',
						desc: 'We strive to make longevity convenient.'
					},
					stepID: 'QUESTION_INTERESTED_TO_BE_DELIVERED'
				}
			},
			{
				label: '3-6 months',
				nextStep: {
					transition: {
						title: 'Did you know we do at-home bloodwork?',
						desc: 'We strive to make longevity convenient.'
					},
					stepID: 'QUESTION_INTERESTED_TO_BE_DELIVERED'
				}
			},
			{
				label: '6+ months',
				nextStep: {
					transition: {
						title: 'Did you know we do at-home bloodwork?',
						desc: 'We strive to make longevity convenient.'
					},
					stepID: 'QUESTION_INTERESTED_TO_BE_DELIVERED'
				}
			}
		]
	},
	questionWeight: {
		id: 'QUESTION_DIFFICULTY_WEIGHT',
		title: 'Have you noticed a difficulty in keeping unwanted weight off even with exercise?',
		options: [
			{
				label: 'Yes',
				nextStep: {
					transition: {
						title: 'Hormones can play a key role here.',
						desc: 'No worries, Geviti can help.'
					},
					stepID: 'QUESTION_LIBIDO'
				}
			},
			{
				label: 'No',
				nextStep: {
					transition: {
						title: 'Hormones can play a key role here.',
						desc: 'No worries, Geviti can help.'
					},
					stepID: 'QUESTION_LIBIDO'
				}
			},
			{
				label: 'Not Sure',
				nextStep: {
					transition: {
						title: 'Hormones can play a key role here.',
						desc: 'No worries, Geviti can help.'
					},
					stepID: 'QUESTION_LIBIDO'
				}
			}
		]
	},
	questionLibido: {
		id: 'QUESTION_LIBIDO',
		title: 'Have you noticed a decline in your libido, desire to be active, or overall energy levels?',
		options: [
			{
				label: 'Sure have',
				nextStep: {
					stepID: 'QUESTION_GOALS'
				}
			},
			{
				label: 'Maybe slightly',
				nextStep: {
					stepID: 'QUESTION_GOALS'
				}
			},
			{
				label: 'No I have not',
				nextStep: {
					stepID: 'QUESTION_GOALS'
				}
			}
		]
	},
	questionGoals: {
		id: 'QUESTION_GOALS',
		title: 'What goals are you looking to achieve?',
		options: [
			{
				label: 'Have increased daily energy',
				nextStep: {
					stepID: 'FORM_NAME_EMAIL'
				}
			},
			{
				label: 'Maintain optimal hormone levels',
				nextStep: {
					stepID: 'FORM_NAME_EMAIL'
				}
			},
			{
				label: 'Slow the aging process',
				nextStep: {
					stepID: 'FORM_NAME_EMAIL'
				}
			},
			{
				label: 'All of the above',
				nextStep: {
					stepID: 'FORM_NAME_EMAIL'
				}
			}
		]
	},
	questionInterestedToBeDelivered: {
		id: 'QUESTION_INTERESTED_TO_BE_DELIVERED',
		title: 'Interested in your HRT, peptides, or supplements being delivered directly to you each month?',
		options: [
			{
				label: 'Absolutely',
				nextStep: {
					transition: {
						title: 'Geviti makes anti-aging care easy.',
						desc: 'Our pharmacies ship directly and discreetly.'
					},
					stepID: 'QUESTION_SWITH_TO_GEVITI'
				}
			},
			{
				label: 'Maybe',
				nextStep: {
					transition: {
						title: 'Geviti makes anti-aging care easy.',
						desc: 'Our pharmacies ship directly and discreetly.'
					},
					stepID: 'QUESTION_SWITH_TO_GEVITI'
				}
			},
			{
				label: 'Not really',
				nextStep: {
					transition: {
						title: 'Geviti makes anti-aging care easy.',
						desc: 'Our pharmacies ship directly and discreetly.'
					},
					stepID: 'QUESTION_SWITH_TO_GEVITI'
				}
			}
		]
	},
	questionSwitchToGeviti: {
		id: 'QUESTION_SWITH_TO_GEVITI',
		title: 'Want to see about switching to Geviti as your provider? No bloodwork will be required initially.',
		options: [
			{
				label: 'Absolutely, lets do it!',
				nextStep: {
					stepID: 'FORM_NAME_EMAIL',
					eligibleID: 'TRANSITION_ELIGIBLE_SWITCH'
				}
			},
			{
				label: 'Yes, but I want bloodwork done first.',
				nextStep: {
					stepID: 'FORM_NAME_EMAIL'
				}
			},
			{
				label: 'Maybe, lets do bloodwork first.',
				nextStep: {
					stepID: 'FORM_NAME_EMAIL'
				}
			}
		]
	},
	formNameEmail: {
		id: 'FORM_NAME_EMAIL',
		title: 'Almost done! But we need your name first.',
		subtitle: 'Don\'t worry, we take your privacy very seriously.',
		submitLabel: 'Next',
		nextStep: {
			stepID: 'FORM_DETAIL'
		}
	},
	formDetail: {
		id: 'FORM_DETAIL',
		title: 'We need some final information to determine eligibility.',
		subtitle: 'We need this information in order to confirm your eligibility.',
		submitLabel: 'Next',
		agreementStatement: 'I agree to Geviti <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" class="underline">Terms of Service</a> and <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" class="underline">Privacy Policy</a> as well as confirm my selected state is correct.',
		notifFreeTelehealth: {
			title: 'Free doctor telehealth visit applied!',
			subtitle: 'Get peace of mind with a free initial telehealth session.'
		}
	},
	formWaitlist: {
		id: 'CONFIRM_WAITLIST_EMAIL',
		title: 'Should we add you to the waitlist?',
		subtitle: 'We’ll notify you as soon as we have more availability.',
		submitLabel: 'Join Waitlist',
		notif: {
			title: 'You qualify for Geviti, but we’re currently at capacity.',
			subtitle: 'This so we can offer the best service to our current members.'
		}
	},
	pricingPlans: {
		id: 'PRICING_PLANS',
		switch: {
			title: 'You may be able to switch over to Geviti for your therapy needs.',
			subtitle: 'In order to switch to our program, you’ll need a clinical consultation to overview your situation and review your options.',
		},
		bloodwork: {
			title: 'Choose a blood panel.',
			subtitle: 'An a at-home Blood Draw must be done in order to prescribe you this treatment.',
			compareLabel: 'Compare Tested Biomarkers',
			closeCompareLabel: 'Close Biomarker Comparison',
			disclaimerLabel: [
				'Purchasing a blood panel does not guarantee prescription to this product.',
				'You must qualify to be prescribed. <a href="/faq" target="_blank" rel="noopener noreferrer" class="underline text-primary font-medium">Click Here</a> to learn more.'
			],
		},
		consultationTiers: [
			{
				id: 'switch',
				tag: '',
				title: 'Clinical Consultation',
				price: '$139.99',
				priceNote: '+ $99 monthly',
				biomarkers: '',
				notes: '',
				btn: 'Continue',
				features: [
					'1-on-1 Consultation With Doctor',
					'Professional Medical Evaluation',
					'Access to Geviti'
				],
				statement: 'I acknowledge that buying the Clinical Consultation does not guarantee the option to change therapy to Geviti.',
				mostPopular: true,
				image: '/images/onboarding/doctor.png'
			}
		],
		bloodTiers: [
			{
				id: 'essentials',
				tag: 'Most Affordable',
				title: 'Essentials Panel',
				price: '$300',
				priceNote: '+ $99 monthly',
				biomarkers: '39+',
				notes: 'Biomarkers Tested',
				btn: 'Select Plan',
				features: [
					'At-home blood draw',
					'Access To Geviti Platform',
					'Prescription Product Access',
					'Personally Assigned Health Coach',
					'Custom Treatment Plan'
				],
				mostPopular: false,
				image: '/images/onboarding/geviti_blue.png'
			},
			{
				id: 'comprehensive',
				tag: 'Most Popular',
				title: 'Comprehensive Panel',
				price: '$475',
				priceNote: '+ $99 monthly',
				biomarkers: '50+',
				notes: 'Biomarkers Tested',
				btn: 'Select Plan',
				features: [
					'At-home blood draw',
					'Access To Geviti Platform',
					'Prescription Product Access',
					'Personally Assigned Health Coach',
					'Custom Treatment Plan'
				],
				mostPopular: true,
				image: '/images/onboarding/geviti_blue.png'
			},
			{
				id: 'ultimate',
				tag: 'Most In-Depth',
				title: 'Ultimate Men’s Panel',
				price: '$605',
				priceNote: '+ $99 monthly',
				biomarkers: '58+',
				notes: 'Biomarkers Tested',
				btn: 'Select Plan',
				features: [
					'At-home blood draw',
					'Access To Geviti Platform',
					'Prescription Product Access',
					'Personally Assigned Health Coach',
					'Custom Treatment Plan'
				],
				mostPopular: false,
				longTitle: 'Ultimate Men’s Bloodwork Panel',
				image: '/images/onboarding/ultimate.png'
			},
		],
	},
	orderSummary: {
		id: 'ORDER_SUMMARY',
		title: 'Great choice!',
		subtitle: 'You’re almost ready to begin your Geviti journey. Here’s how to get started:',
		steps: [
			'Proceed to checkout, and begin then begin the onboarding process.',
			'Once account is activated, we’ll send you a link to schedule your clinical consultation.',
			'Once your clinical consultation is complete,  you will review options with our doctors.',
			'Finally, if you’re eligible we will switch your therapy to us and mail your plan monthly.'
		],
		cart: {
			title: 'Order Summary',
			totalLabel: 'Total:',
			btnLabel: 'Secure Checkout',
			freeLabel: 'FREE!'
		},
		defaultProducts: [
			{
				name: '1st Month Subscription',
				price: '$99.99',
				free: true,
				image: '/images/onboarding/geviti_blue.png'
			},
			{
				name: 'Telehealth Doctor Visit',
				price: '$99.99',
				free: true,
				image: '/images/onboarding/doctor.png'
			},
		]
	}
};

export default onboardingData;