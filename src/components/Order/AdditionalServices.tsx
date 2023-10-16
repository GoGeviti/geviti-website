'use client';

import React from 'react';

import { IProducts } from '@/interfaces';

import { ArrowNarrowRight, CheckIcon } from '../Icons';

const services = [
	// {
	// 	id: 15,
	// 	name: 'Mobile Blood-draw',
	// 	price: 35.99,
	// 	description: 'Avoid the stress of lab visits with our mobile blood draw service. We\'ll send a trained professional to your home for the collection of samples and ensure their safe delivery to the lab. If unselected, you\'ll have to go into a Labcorp near you.',
	// 	shopify_variant_id: '46434941436194:1',
	// },
	{
		id: 16,
		name: 'Genetic Sequencing Test',
		price: 199.99,
		description: 'Take your health management to the next level with our genetic sequencing test. This non-invasive test uses a simple cheek swab kit you can use at home and provides:<br /><br /><ul class="list-disc list-outside pl-3"><li>Genotype results for 83 million SNPs.</li><li>Genetic risk analysis</li><li>Food sensitivities & nutrient deficiencies</li><li>Ancestry & heritage</li></ul>',
		shopify_variant_id: '46434957033762:1',
	},
];

type AdditionalServicesProps = {
	onClickProduct: (productItem: IProducts.ProductItem) => void; // eslint-disable-line no-unused-vars
	onClickRemoveProduct: (productItem: IProducts.ProductItem) => void; // eslint-disable-line no-unused-vars
	shoppingCarts: IProducts.ProductItem[];
	selectedProduct?: string;
};

const AdditionalServices: React.FC<AdditionalServicesProps> = ({
	onClickProduct,
	onClickRemoveProduct,
	shoppingCarts,
	selectedProduct
}) => {

	const renderButtonAddedToCart = (service: IProducts.ProductItem) => {
		return (
			<button
				aria-label='Added To Cart'
				onClick={ () => onClickRemoveProduct(service) }
				className='btn btn-primary !bg-[#1A1C1E] !px-4 flex items-center justify-center max-sm:w-full gap-1.5 text-grey-secondary'>
				<span className='flex-shrink-0'>
					<CheckIcon className='w-15px h-3.5' />
				</span>
				<span className='text-[13px] lg:text-xs leading-5 font-Poppins font-medium'>Added to Cart</span>
			</button>
		);
	};

	const renderButtonAddToCart = (service: IProducts.ProductItem) => {
		return (
			<button
				aria-label='Added To Cart'
				disabled={ service.id === 15 && selectedProduct === '5' }
				className='btn btn-secondary disabled:bg-grey-secondary/50 disabled:cursor-not-allowed !px-4 flex items-center justify-center gap-1.5 max-sm:w-full'
				onClick={ () => onClickProduct(service) }
			>
				<span className='flex-shrink-0'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='15'
						height='14'
						viewBox='0 0 15 14'
						fill='none'>
						<g clipPath='url(#clip0_742_1612)'>
							<path
								d='M10.1237 5.26577V3.53151C10.1237 2.25445 9.0884 1.21918 7.81133 1.21918C6.53427 1.21918 5.499 2.25445 5.499 3.53151V5.26577M2.9508 6.04732L2.60395 9.74706C2.50533 10.799 2.45602 11.325 2.63057 11.7312C2.78391 12.0881 3.05261 12.3832 3.39362 12.5692C3.78181 12.7809 4.31009 12.7809 5.36664 12.7809H10.256C11.3126 12.7809 11.8409 12.7809 12.229 12.5692C12.5701 12.3832 12.8388 12.0881 12.9921 11.7312C13.1666 11.325 13.1173 10.799 13.0187 9.74706L12.6719 6.04732C12.5886 5.15902 12.5469 4.71487 12.3472 4.37908C12.1712 4.08334 11.9113 3.84663 11.6004 3.69907C11.2475 3.53152 10.8014 3.53152 9.90917 3.53152L5.71349 3.53151C4.8213 3.53151 4.37521 3.53151 4.02223 3.69907C3.71137 3.84663 3.45143 4.08334 3.27549 4.37908C3.07572 4.71487 3.03408 5.15902 2.9508 6.04732Z'
								stroke='#242628'
								strokeWidth='1.15617'
								strokeLinecap='round'
								strokeLinejoin='round' />
						</g>
						<defs>
							<clipPath id='clip0_742_1612'>
								<rect
									width='13.874'
									height='13.874'
									fill='white'
									transform='translate(0.874023 0.0629883)' />
							</clipPath>
						</defs>
					</svg>
				</span>
				<span className='text-[13px] lg:text-xs leading-5 font-Poppins font-medium text-black-secondary'>Add to Cart</span>
			</button>
		);
	};

	const renderButtonAction = (service: IProducts.ProductItem) => {
		const foundService = shoppingCarts.findIndex(product => product.id === service.id);

		if (foundService > -1) {
			return renderButtonAddedToCart(service);
		}

		return renderButtonAddToCart(service);
	};

	const renderServiceList = () => {
		return (
			<div className='mt-[51px]'>
				<div className='flex justify-between gap-2'>
					<p className='text-sm leading-5 text-grey-secondary font-BRSonoma'>Additional Services</p>
					<div className='flex items-center gap-[5px] cursor-pointer lg:hidden'>
						<p className='text-grey-primary text-xs leading-5 font-BRSonoma'>Skip</p>
						<ArrowNarrowRight className='text-grey-primary w-3.5 h-3.5' />
					</div>
				</div>
				<div className='flex flex-col gap-y-3 mt-15px lg:mt-[13px]'>
					{ services.map(service => (
						<div
							key={ service.id }
							className='py-7 lg:py-[25px] px-[27px] rounded-md bg-black-background flex flex-col gap-y-5'
						>
							<div className='flex justify-between gap-3 text-grey-secondary font-Poppins font-medium'>
								<p className='text-sm sm:text-base'>{ service.name }</p>
								<p className='text-base sm:text-lg lg:text-xl text-right'>${ service.price }</p>
							</div>

							{ service.description && (
								<span
									dangerouslySetInnerHTML={ { __html: service.description } }
									className='text-[10px] sm:text-xs text-grey-primary font-BRSonoma leading-[145%] sm:leading-[167%]'
								/>
							) }

							<div>
								{ renderButtonAction(service) }
							</div>
						</div>
					)) }
				</div>
			</div>
		);
	};

	return (
		<div>
			{ renderServiceList() }
		</div>
	);
};

export default AdditionalServices;
