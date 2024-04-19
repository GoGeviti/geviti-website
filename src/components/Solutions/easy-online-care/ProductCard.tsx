import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { ArrowNarrowRight } from '@/components/Icons'

interface Product {
  id: number
  name: string
  description: string
  price: string
  imageSrc: string
}

interface ProductCardProps {
  product: Product
}

const ProductCard = (props: ProductCardProps) => {
	const { name, description, price, imageSrc } = props.product

	return (
		<>
			<Link
				href={ '/' }
				passHref
				className='group snap-start hover:shadow-[0px_4px_24px_rgba(0,0,0,0.15)] transition-shadow duration-200 ease-in cursor-pointer relative flex flex-col overflow-hidden bg-grey-secondary flex-none w-[287px] px-3 pt-3 pb-[21px] rounded-19px'
			>
				<div className='relative overflow-hidden rounded-2xl bg-[#EAEAEA] w-full h-[221px] pt-6 flex items-center justify-center'>
					<Image
						src={ imageSrc }
						alt={ name }
						className='object-cover object-center mt-6'
						width={ 120 }
						height={ 120 }
						unoptimized
					/>
				</div>
				<div className='flex flex-1 flex-col space-y-1 pt-[23px] px-[13px]'>
					<h3 className='text-lg font-medium text-primary leading-[141%] -tracking-0.04em whitespace-normal'>
						{ name }
					</h3>
					<p className='text-sm text-grey-primary whitespace-normal mt-[9px]'>
						{ description }
					</p>
					<div className='flex flex-1 flex-col justify-end text-primary pt-5'>
						<div className='flex items-center gap-9px'>
							<h3 className='text-sm leading-[130.385%] text-primary font-Poppins'>
                As low as
							</h3>
							<div className='text-xs leading-[152%] bg-blue-1 rounded-full py-1 px-1.5 flex items-center gap-1 flex-shrink-0'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='13'
									height='14'
									viewBox='0 0 13 14'
									fill='none'
									className='flex-shrink-0'
								>
									<circle
										cx='6.38889'
										cy='6.95243'
										r='6.38889'
										fill='#181A1C'
									/>
									<path
										d='M6.58204 7.12628V8.40728H7.77054L7.64171 8.53443C7.01408 9.15109 6.15 9.06288 5.98347 9.03904C4.86646 8.87931 4.22626 8.12041 4.22626 6.95622C4.22626 5.62912 5.05106 4.83763 6.43436 4.83763C6.92767 4.83763 7.46026 4.89962 7.88287 5.17775C8.0604 5.29457 8.21593 5.45112 8.31333 5.64343C8.41781 5.84845 8.4453 6.09957 8.4453 6.32764H9.93072C9.93072 6.14009 9.92758 5.94937 9.89695 5.76422C9.81368 5.25801 9.52697 4.79154 9.16798 4.43633C8.82785 4.09939 8.40995 3.84748 7.96613 3.67821C7.47832 3.49147 6.95595 3.40326 6.43436 3.40326C4.28517 3.40326 2.83981 4.83048 2.83981 6.95622C2.83981 7.51805 2.93329 8.03299 3.11632 8.48595C3.28756 8.90872 3.54914 9.29254 3.87278 9.59213C4.18698 9.88616 4.56561 10.1142 4.99686 10.27C5.53337 10.4639 6.10994 10.5346 6.66059 10.4758C7.27173 10.4106 7.83338 10.204 8.28191 9.87662C8.36518 9.81623 8.44766 9.75106 8.52307 9.68113L8.64482 9.57147V10.502H9.93858V7.12628H6.58126H6.58204Z'
										fill='#A3E0FF'
									/>
								</svg>

								<p>{ price }</p>
							</div>
						</div>
					</div>
				</div>
				<div className='absolute right-[11px] bottom-[21px]'>
					<div className='w-[46px] h-[46px] border border-grey-100 max-lg:border-primary group-hover:border-primary max-lg:bg-primary group-hover:bg-primary relative rounded-full transition-all duration-200 ease-in'>
						<ArrowNarrowRight className='text-gray-100 max-lg:text-blue-primary group-hover:text-blue-primary w-6 h-6 absolute-center flex-shrink-0 -rotate-45 transition-all duration-200 ease-in' />
					</div>
				</div>
			</Link>
		</>
	)
}

export default ProductCard
