import { NextPage } from 'next';
import { notFound } from 'next/navigation';

import {
	CustomLink,
	HomeComponent,
	LandingComponent,
	Navbar,
	ProductsComponent,
} from '@/components';
import { AlertSquareIcon } from '@/components/Icons';
import { getProductById } from '@/services/products';

// import { productsData } from '@/constant/data';
// import getPayloadClient from '@/payload/payloadClient';
import Breadcrumb from './breadcrumb';
import ProductFaq from './productFaq';

type ProductDetailPageProps = { params: { id: string } };

const ProductDetailPage: NextPage<ProductDetailPageProps> = async({
	params,
}) => {
	const id = params.id;
	const product = await getProductById(id);

	if (!product) {
		notFound();
	}

	return (
		<>
			<div className='relative overflow-hidden bg-[#CFD8DB]'>
				<Navbar theme='light' />
				<div className='pt-24 lg:pt-[172px] lg:pb-[95px] container-center flex flex-col max-lg:items-center'>
					<Breadcrumb product={ product } />

					<div className='flex max-lg:flex-col lg:grid lg:grid-cols-2 gap-10 pt-[27px] lg:pt-12 w-full'>
						<div className='w-full max-lg:pb-1'>
							<ProductsComponent.SliderProducts
								images={ product.images.map(e => e.image.url ?? '') ?? [] }
							/>
						</div>
						<div className='flex flex-col w-full lg:max-w-md lg:mx-auto'>
							{ product?.category && (
								<p className='uppercase text-grey-primary font-BRSonoma font-semibold text-[10px] sm:text-sm leading-[21px] sm:leading-6 tracking-0.11em'>
									{ product?.category.title }
								</p>
							) }
							<div className='flex flex-col gap-y-[26px] lg:gap-y-[42px] mt-[7px] lg:mt-[17px]'>
								<div className='flex items-center justify-between text-primary'>
									<h1 className='text-3xl lg:text-4xl -tracking-0.04em font-Poppins leading-[124%] lg:leading-[121%]'>
										{ product?.name }
									</h1>
									<div className='flex flex-col items-center'>
										<p className='flex gap-2 text-xl lg:text-2xl md:font-semibold leading-[77%] lg:leading-[75%] font-Poppins'>
											${ product?.price }{ ' ' }
											<span className='hidden md:block text-base text-grey-primary font-medium'>
												monthly
											</span>
										</p>
										<p className='text-[13px] font-medium leading-[77%] lg:leading-[75%] font-Poppins hidden md:block whitespace-nowrap'>
											with Geviti membership
										</p>
									</div>
								</div>

								<div className='flex flex-col gap-1.5 sm:gap-2.5'>
									{ product?.bloodTest && (
										<div className='flex gap-5px text-primary'>
											<AlertSquareIcon className='w-15px h-15px sm:w-18px sm:h-18px flex-shrink-0' />

											<p className='text-xs sm:text-sm font-Poppins leading-5 sm:leading-[18px] font-medium'>
												Products available based on blood test results
											</p>
										</div>
									) }

									{ product?.description && (
										<p className='text-[10px] sm:text-xs font-BRSonoma text-primary leading-[17px] sm:leading-5'>
											{ product?.description }
										</p>
									) }
								</div>

								<div className='flex flex-col-reverse lg:flex-col gap-y-[26px] lg:gap-y-[42px]'>
									<ProductFaq product={ product } />

									<CustomLink
										href='/get-started'
										className='btn btn-primary w-full text-xs sm:text-sm font-medium font-Poppins leading-[21px] sm:leading-[26px] py-2.5 sm:py-[13px]'
										aria-label='Purchase'
									>
										Get Started
									</CustomLink>
								</div>
							</div>
						</div>
					</div>
					{ /* <p className='text-start w-full font-Poppins text-[6px] md:text-[10px] font-medium pt-7 lg:pt-20 mb-7 lg:mb-10'>
						*Product images are for display purposes; actual items from US-based
						pharmacies may vary.
					</p> */ }
				</div>
			</div>

			<div className='pt-9 lg:pt-[121px] pb-[32px] lg:pb-[51px]'>
				<LandingComponent.Steps />
			</div>
			<div className='pt-9 lg:pt-[121px] pb-[32px] lg:pb-[51px]'>
				<HomeComponent.LearnMore withBg />
			</div>
			<div className='pt-9 lg:pt-[121px] pb-[32px] lg:pb-[51px]'>
				<HomeComponent.Products />
			</div>
		</>
	);
};

export default ProductDetailPage;
