const onboardingData = {
	transitionWelcome: {
		id: 'TRANSITION_WELCOME',
		title: 'Welcome to Geviti!',
		desc: 'Let’s start by making sure you are eligible.'
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
	transitionNotEligible: {
		id: 'TRANSITION_NOT_ELIGIBLE',
		title: 'Good news and bad news!',
		desc: '<span>You qualify for Geviti, but we aren’t taking new members at the moment.</span><span class="mt-5 sm:mt-10 block">This is to ensure we can offer the highest quality service to our current members.</span>'
	},
	questionOnHRT: {
		id: 'QUESTION_ALREADY_ON_HRT',
		title: 'Are you currently taking doctor prescribed hormone therapy?',
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
						title: 'Thank you!',
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
						desc: 'Luckily, this can be fixed with the right plan.'
					},
					stepID: 'QUESTION_DIFFICULTY_WEIGHT'
				}
			},
			{
				label: 'Half the time',
				nextStep: {
					transition: {
						title: 'You’re not alone.',
						desc: 'Luckily, this can be fixed with the right plan.'
					},
					stepID: 'QUESTION_DIFFICULTY_WEIGHT'
				}
			},
			{
				label: 'Hardly ever',
				nextStep: {
					transition: {
						title: 'You’re not alone.',
						desc: 'Luckily, this can be fixed with the right plan.'
					},
					stepID: 'QUESTION_DIFFICULTY_WEIGHT'
				}
			},
			{
				label: 'Only occasionally',
				nextStep: {
					transition: {
						title: 'You’re not alone.',
						desc: 'Luckily, this can be fixed with the right plan.'
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
		},
		nextStep: {
			transition: {
				title: 'You have successfully joined the waitlist.',
				desc: 'Geviti will reach out to let you know when you are selected.',
				type: 'success',
				cta: {
					title: 'Return to Home Page',
					href: '/'
				}
			},
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
				variantID: '46553678643490',
				id: 'switch',
				tag: '',
				title: 'Clinical Consultation',
				price: '$299',
				priceNote: '+ $99 monthly',
				biomarkers: '',
				notes: '',
				btn: 'Continue',
				features: [
					'1-on-1 Consultation With Doctor',
					'Professional Medical Evaluation',
					'Access to Geviti'
				],
				tooltips: [
					'Telehealth Clinician Visit - During a 15-30 minute initial consultation with one of our qualified clinicians, we’ll identify the next best steps for you on your journey towards longevity and vitality.',
					'Discounted Bloodwork - If we determine that gaining deeper insight into your health status is necessary by examining your blood biomarkers, you will be eligible for a discount on our bloodwork packages, rather than paying the full price listed on our site.',
					'Access to Geviti - Your subscription to Geviti, which comes with a $99 monthly fee, will begin billing 30 days after signup. You are free to cancel anytime. Through Geviti, you’ll have enhanced access to a clinical team committed to your longevity and well-being, as well as a wide range of cutting-edge pharmaceuticals and nutraceuticals delivered directly to you.'
				],
				statement: 'I acknowledge that buying the Clinical Consultation does not guarantee the option to change therapy to Geviti.',
				mostPopular: true,
				image: '/images/onboarding/doctor.png'
			}
		],
		bloodTiersMen: [
			{
				variantID: '47242220634402',
				id: 'essentials',
				tag: 'Most Affordable',
				title: 'Essentials Panel',
				price: '$299',
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
				tooltips: [
					'Experience convenient, personalized healthcare from the comfort of your home or any location of your choice. Our mobile phlebotomy service ensures that a professional team comes to you for blood drawing, making the process as comfortable and stress-free as possible.',
					'As a member of the Geviti platform, you gain exclusive access to a dedicated clinical team, advanced anti-aging therapies, concierge-level care, wholesale supplements from renowned brands, and much more. This comprehensive approach ensures a personalized and cutting-edge healthcare experience.',
					'A thorough blood panel serves as your gateway to the Geviti platform, enabling us to design a personalized plan that may encompass various anti-aging therapies, meticulously crafted at our associated compound pharmacies.',
					'Geviti offers personalized concierge care, featuring qualified professionals dedicated to educating and guiding you towards a path of enhanced longevity.',
					'After collecting your bloodwork and additional health data through our post-purchase onboarding process, we create a custom-tailored plan designed specifically for your needs.'
				],
				mostPopular: false,
				image: '/images/onboarding/bloodwork.png'
			},
			{
				variantID: '47242217521442',
				id: 'comprehensive',
				tag: 'Most Popular',
				title: 'Comprehensive Panel',
				price: '$469',
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
				tooltips: [
					'Experience convenient, personalized healthcare from the comfort of your home or any location of your choice. Our mobile phlebotomy service ensures that a professional team comes to you for blood drawing, making the process as comfortable and stress-free as possible.',
					'As a member of the Geviti platform, you gain exclusive access to a dedicated clinical team, advanced anti-aging therapies, concierge-level care, wholesale supplements from renowned brands, and much more. This comprehensive approach ensures a personalized and cutting-edge healthcare experience.',
					'A thorough blood panel serves as your gateway to the Geviti platform, enabling us to design a personalized plan that may encompass various anti-aging therapies, meticulously crafted at our associated compound pharmacies.',
					'Geviti offers personalized concierge care, featuring qualified professionals dedicated to educating and guiding you towards a path of enhanced longevity.',
					'After collecting your bloodwork and additional health data through our post-purchase onboarding process, we create a custom-tailored plan designed specifically for your needs.'
				],
				mostPopular: true,
				image: '/images/onboarding/bloodwork.png'
			},
			{
				variantID: '47242224140578',
				id: 'ultimateMen',
				tag: 'Most In-Depth',
				title: 'Ultimate Men’s Panel',
				price: '$599',
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
				tooltips: [
					'Experience convenient, personalized healthcare from the comfort of your home or any location of your choice. Our mobile phlebotomy service ensures that a professional team comes to you for blood drawing, making the process as comfortable and stress-free as possible.',
					'As a member of the Geviti platform, you gain exclusive access to a dedicated clinical team, advanced anti-aging therapies, concierge-level care, wholesale supplements from renowned brands, and much more. This comprehensive approach ensures a personalized and cutting-edge healthcare experience.',
					'A thorough blood panel serves as your gateway to the Geviti platform, enabling us to design a personalized plan that may encompass various anti-aging therapies, meticulously crafted at our associated compound pharmacies.',
					'Geviti offers personalized concierge care, featuring qualified professionals dedicated to educating and guiding you towards a path of enhanced longevity.',
					'After collecting your bloodwork and additional health data through our post-purchase onboarding process, we create a custom-tailored plan designed specifically for your needs.'
				],
				mostPopular: false,
				longTitle: 'Ultimate Men’s Bloodwork Panel',
				image: '/images/onboarding/bloodwork.png'
			},
		],
		bloodTiersWomen: [
			{
				variantID: '47242220667170',
				id: 'essentials',
				tag: 'Most Affordable',
				title: 'Essentials Panel',
				price: '$299',
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
				tooltips: [
					'Experience convenient, personalized healthcare from the comfort of your home or any location of your choice. Our mobile phlebotomy service ensures that a professional team comes to you for blood drawing, making the process as comfortable and stress-free as possible.',
					'As a member of the Geviti platform, you gain exclusive access to a dedicated clinical team, advanced anti-aging therapies, concierge-level care, wholesale supplements from renowned brands, and much more. This comprehensive approach ensures a personalized and cutting-edge healthcare experience.',
					'A thorough blood panel serves as your gateway to the Geviti platform, enabling us to design a personalized plan that may encompass various anti-aging therapies, meticulously crafted at our associated compound pharmacies.',
					'Geviti offers personalized concierge care, featuring qualified professionals dedicated to educating and guiding you towards a path of enhanced longevity.',
					'After collecting your bloodwork and additional health data through our post-purchase onboarding process, we create a custom-tailored plan designed specifically for your needs.'
				],
				mostPopular: false,
				image: '/images/onboarding/bloodwork.png'
			},
			{
				variantID: '47242217554210',
				id: 'comprehensive',
				tag: 'Most Popular',
				title: 'Comprehensive Panel',
				price: '$469',
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
				tooltips: [
					'Experience convenient, personalized healthcare from the comfort of your home or any location of your choice. Our mobile phlebotomy service ensures that a professional team comes to you for blood drawing, making the process as comfortable and stress-free as possible.',
					'As a member of the Geviti platform, you gain exclusive access to a dedicated clinical team, advanced anti-aging therapies, concierge-level care, wholesale supplements from renowned brands, and much more. This comprehensive approach ensures a personalized and cutting-edge healthcare experience.',
					'A thorough blood panel serves as your gateway to the Geviti platform, enabling us to design a personalized plan that may encompass various anti-aging therapies, meticulously crafted at our associated compound pharmacies.',
					'Geviti offers personalized concierge care, featuring qualified professionals dedicated to educating and guiding you towards a path of enhanced longevity.',
					'After collecting your bloodwork and additional health data through our post-purchase onboarding process, we create a custom-tailored plan designed specifically for your needs.'
				],
				mostPopular: true,
				image: '/images/onboarding/bloodwork.png'
			},
			{
				variantID: '47242224173346',
				id: 'ultimateFemale',
				tag: 'Most In-Depth',
				title: 'Ultimate Women’s Panel',
				price: '$599',
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
				tooltips: [
					'Experience convenient, personalized healthcare from the comfort of your home or any location of your choice. Our mobile phlebotomy service ensures that a professional team comes to you for blood drawing, making the process as comfortable and stress-free as possible.',
					'As a member of the Geviti platform, you gain exclusive access to a dedicated clinical team, advanced anti-aging therapies, concierge-level care, wholesale supplements from renowned brands, and much more. This comprehensive approach ensures a personalized and cutting-edge healthcare experience.',
					'A thorough blood panel serves as your gateway to the Geviti platform, enabling us to design a personalized plan that may encompass various anti-aging therapies, meticulously crafted at our associated compound pharmacies.',
					'Geviti offers personalized concierge care, featuring qualified professionals dedicated to educating and guiding you towards a path of enhanced longevity.',
					'After collecting your bloodwork and additional health data through our post-purchase onboarding process, we create a custom-tailored plan designed specifically for your needs.'
				],
				mostPopular: false,
				longTitle: 'Ultimate Women’s Bloodwork Panel',
				image: '/images/onboarding/bloodwork.png'
			},
		],
	},
	orderSummary: {
		id: 'ORDER_SUMMARY',
		title: 'Great choice!',
		subtitle: 'You’re almost ready to begin your Geviti journey. Here’s how to get started:',
		steps: [
			'Proceed to checkout. Once completed, check your email to begin the onboarding process.',
			'Once account is activated, we’ll send you a link to schedule your bloodwork or clinical consultation.',
			'Once this step is complete, you will review your options with our qualified medical team.',
			'Finally, we will ship your custom tailored treatment to your home monthly. '
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