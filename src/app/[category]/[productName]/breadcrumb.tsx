import React from 'react';
import Link from 'next/link';

import clsxm from '@/helpers/clsxm';
import { Product } from '@/payload/payload-types';

type BreadcrumbProps = {
	product: Product;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ product }) => {
	const pages = [
		{ name: 'Products', href: '/products', current: false },
		{ name: product?.name, href: `/${ product?.category?.slug }/${ product?.slug }`, current: true },
	];
	return (
		<ol
			role='list'
			className='flex items-center gap-x-3.5 sm:gap-x-4 max-lg:hidden'
		>
			{ pages.map((page, pageIdx) => (
				<li key={ pageIdx }>
					<div className='flex items-center'>
						{ pageIdx > 0 && pageIdx < pages.length && (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
								className='w-[17px] h-[17px] sm:w-5 sm:h-5'
							>
								<path
									d='M5.83333 18.3333L14.1667 1.66663'
									stroke='#919B9F'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						) }
						<Link
							prefetch={ false }
							href={ page.href }
							className={ clsxm(
								'text-xs sm:text-sm font-Poppins font-medium sm:leading-5',
								pageIdx > 0 ? 'ml-3.5 sm:ml-4' : '',
								page.current ? 'text-primary' : 'text-grey-primary'
							) }
							aria-current={ page.current ? 'page' : undefined }
						>
							{ page.name }
						</Link>
					</div>
				</li>
			)) }
		</ol>
	);
};

export default Breadcrumb;
