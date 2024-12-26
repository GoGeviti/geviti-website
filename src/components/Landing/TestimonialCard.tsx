import Image from 'next/image'

import clsxm from '@/helpers/clsxm'

import { QuoteBlue } from '../Icons'

export interface TestimonialCardProps {
  text: string
  author: {
    name: string
    title: string
    image: string
  },
	imageClassName?: string
	contentClassName?: string
	quoteClassName?: string
}

export function TestimonialCard({ text, author, imageClassName, contentClassName, quoteClassName }: TestimonialCardProps) {
	
	return (
		<div className='testimonial-card bg-[#FAFAFA] flex flex-col lg:flex-row items-end gap-6 relative px-5 py-[30px] rounded-[20px]'>
			<div className={ clsxm('h-[302px] overflow-hidden flex-shrink-0 w-full lg:w-[277px] rounded-xl flex items-center justify-center', imageClassName) }>
				<Image
					width={ 277 }
					height={ 302 }
					className='w-full h-full object-top object-cover'
					alt='person'
					quality={ 100 }
					src={ author.image }
				/>
			</div>
			<div className='lg:hidden self-start'>
				<QuoteBlue/>
			</div>
			<div className={ clsxm('flex flex-col', contentClassName) }>
				<h6 className='h5 text-primary'>{ text }</h6>
				<p className='mt-4 text-lg text-primary'>{ author.name }</p>
				<p className='text-lg text-grey-primary mt-1'>{ author.title }</p>
			</div>
			<div className={ clsxm('max-lg:hidden absolute top-5 right-5', quoteClassName) }>
				<QuoteBlue/>
			</div>
		</div>
	)
}