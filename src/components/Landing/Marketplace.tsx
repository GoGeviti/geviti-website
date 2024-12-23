/* eslint-disable no-unused-vars */
'use client'
import React from 'react'
import { motion, MotionStyle } from 'framer-motion'
import Image from 'next/image'

import clsxm from '@/helpers/clsxm'
import { screens } from '@/helpers/style'
import { useWindowDimensions } from '@/hooks'

import ButtonCta from '../ButtonCta'
import CustomLink from '../CustomLink'

const cards = [
	{
		title: 'Compounded medications',
		desc: 'Made in the USA in an FDA approved facility. Meticulously tested for purity and potency.',
		image: '/images/landing/card-01.png',
		list: [
			'Hormone Therapy',
			'Medical Weight-loss',
			'Peptide Therapy',
			'Lifestyle Medications',
			// 'Custom Supplements',
			// 'Speciality Testing',
			// 'Partner Products'
		],
		isComingSoon: false,
		link: '',
		mobileOrder: 1,
	},
	{
		title: 'Mobile Stem Cell Therapy',
		desc: 'The most powerful tool to boost regeneration, reduce inflammation, improve energy, and support anti-aging.',
		image: '/images/landing/card-03.png',
		list: [],
		isComingSoon: true,
		link: '',
		mobileOrder: 4,
	},
	{
		title: 'At-home Health Screening',
		desc: 'Access cutting edge testing to gather critical insights into your overall health status.',
		image: '/images/landing/card-02.png',
		list: [
			'Longeviti Panel',
			'DUTCH Complete',
			'GI Map',
			'Metabolomix Nutritional Test',
		],
		isComingSoon: false,
		link: '',
		mobileOrder: 2,
	},
	{
		title: 'Custom Supplements',
		desc: 'Data-driven custom packs based upon your bloodwork results, goals, and lifestyle. No guesswork, only results.',
		image: '/images/landing/card-04.png',
		list: [],
		link: '/longeviti-blend',
		isComingSoon: false,
		mobileOrder: 3,
	},
]

type CardType  = typeof cards[0] & {
	cardOpen : string,
	setCardOpen (key:string) : void,
	className?: string,
	style?: MotionStyle,
	transition?: any
}

const Card = ({
	list,
	desc,
	title,
	image,
	cardOpen,
	className,
	style,
	setCardOpen,
	transition,
	isComingSoon,
	link
}: CardType) => {
	return (
		<motion.div
			initial={ { opacity: 0, y: 50 } }
			whileInView={ { opacity: 1, y: 0 } }
			viewport={ { once: true } }
			transition={ transition }
			style={ style }
			className={ clsxm(
				'	bg-[#f5f6f6]/50 border w-full max-lg:!transform-none lg:max-w-[386px] rounded-[20px] p-3.5 backdrop-blur-[10px] flex items-start gap-6 border-grey-100',
				'lg:absolute',
				cardOpen === title ? 'z-20' : 'z-10',
				className
			) }>
			<div className='flex flex-col'>
				<div className='w-[92px] overflow-hidden flex-shrink-0 h-[92px] border flex rounded-2xl items-center justify-center '>
					<Image
						width={ 92 }
						height={ 92 }
						quality={ 100 }
						alt='products'
						src={ image }
					/>
				</div>
				{
					isComingSoon && (
						<span className='body-extra-small text-[#00A0EA] mt-1 text-center'>Coming soon</span>
					)
				}
			</div>
			<div>
				<h5 className='body-small leading-none font-semibold text-primary uppercase'>{ title }</h5>
				<p className='body-extra-small text-primary mt-2' >{ desc }</p>
				<ul className={ clsxm(
					'list-disc text-grey-600 body-small list-inside',
					'overflow-hidden transition-all duration-300',
					cardOpen === title ? 'max-h-[300px] mt-2 opacity-100' : 'max-h-0 opacity-0 mt-0'
				) }>
					{
						list.map((e, i) => {
							return (
								<li
									className=''
									key={ i } >{ e }</li>
							)
						})
					}
				</ul>
				{
					link && (
						<CustomLink
							href={ link }
							className='underline text-sm font-semibold mt-2'
						>Learn more</CustomLink>
					)
				}
				{
					list.length > 0 && (
						<button
							className='underline text-sm font-semibold mt-2'
							onClick={ () => cardOpen === title ? setCardOpen('') : setCardOpen(title) }>
							{ cardOpen === title ? 'See less' : 'See full list' }
						</button>
					)
				}
			</div>
		</motion.div>
	)
}

const Marketplace = () => {
	const [cardOpen, setCardOpen] = React.useState('')

	const windowDimensions = useWindowDimensions();
	const isMobile = windowDimensions.width < screens.md;

	return (
		<div className='px-3 py-3.5 lg:py-6'>
			<div className='bg-white rounded-[20px] overflow-hidden'>
				<div className='text-center flex flex-col items-center max-lg:px-4 justify-center mx-auto max-w-[730px] pt-7 lg:pt-[66px]'>
					<h4 className='text-[28px] lg:h3 text-primary lg:whitespace-nowrap'>Step into the only marketplace for longevity</h4>
					<p className='mt-3 body-small'>We connect members with at-home specialty testing, precision medications, customized supplements, and proactive care, empowering them to live optimized.</p>
					<div className=' w-full lg:w-fit mt-10 relative z-10'>
						<ButtonCta
							className='w-full'>
							<span className='max-lg:hidden'>Sign Up</span>
							<span className='lg:hidden'>Marketplace</span>
						</ButtonCta>
					</div>
				</div>
				<div className='relative'>
					<div
						className='w-full h-[160px] absolute left-0 right-0 bottom-0 bg-red-400'
						style={ {
							background: 'linear-gradient(0deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)'
						} }
					/>

					{ /* Floating cards */ }
					<div className='relative max-lg:px-4 max-lg:flex max-lg:gap-3.5 max-lg:mt-6 max-lg:flex-col z-10'>
						{ [...cards]
							.sort((a, b) => isMobile ? a.mobileOrder - b.mobileOrder : 0)
							.map((card, index) => (
								<Card
									key={ card.title }
									{ ...card }
									cardOpen={ cardOpen }
									setCardOpen={ setCardOpen }
									className={ [
										'top-[140px] left-[50px]',
										'top-[100px] right-[50px]',
										'top-[440px] left-[100px]',
										'top-[390px] right-[100px]'
									][index] }
									transition={ { delay: index * 0.2 } }
								/>
							)) }
					</div>

					<Image
						alt='phone'
						quality={ 100 }
						src='/images/landing/marketplace-phone.webp'
						width={ 1213 }
						height={ 690 }
						className='object-contain max-lg:hidden object-bottom mx-auto w-full -mt-20 h-[690px]'
					/>
					<Image
						alt='phone'
						quality={ 100 }
						src='/images/landing/marketplace-phone-mobile.png'
						width={ 784 }
						height={ 524 }
						className='object-contain lg:hidden object-right mx-auto w-full h-[524px]'
					/>
				</div>
			</div>
		</div>
	)
}

export default Marketplace