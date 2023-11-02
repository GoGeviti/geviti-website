import { NextPage } from 'next';
import { notFound } from 'next/navigation';

import {
	CustomLink,
	HomeComponent,
	LandingComponent,
	Navbar,
	ProductsComponent,
} from '@/components';
import { AlertSquareIcon, ClockIcon } from '@/components/Icons';
// import { AlertSquareIcon } from '@/components/Icons';
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
				<div className='pt-24 lg:pt-[172px] pb-4 sm:pb-[95px] container-center flex flex-col max-lg:items-center'>
					<Breadcrumb product={ product } />

					<div className='flex max-lg:flex-col lg:grid lg:grid-cols-2 gap-10 lg:pt-12 w-full'>
						<div className='w-full max-lg:pb-1'>
							<ProductsComponent.SliderProducts
								images={ product.images.map(e => e.image.url ?? '') ?? [] }
							/>
						</div>
						<div className='flex flex-col gap-9 w-full lg:max-w-md lg:mx-auto'>
							<div className='flex flex-col lg:gap-2'>
								<p className='uppercase text-grey-primary font-BRSonoma font-semibold text-[10px] sm:text-sm leading-[21px] sm:leading-6 tracking-0.11em'>
									{ product.category.title }
								</p>
								<h1 className='text-3xl lg:text-4xl -tracking-0.04em font-Poppins leading-[124%] lg:leading-[121%]'>
									{ product.name }
								</h1>
							</div>
							<div className='flex flex-col gap-2 sm:gap-[9px] text-primary'>
								<p className='font-Poppins text-primary text-2xl  font-semibold w-fit leading-[18px] pb-[9px] border-b border-[#B8C6CC]'>
									${ product?.price }{ ' ' }
									<span className='text-grey-primary font-medium text-base'>
										per month
									</span>
								</p>
								<p className='text-primary/[0.60] text-xs font-medium leading-6 sm:text-sm font-Poppins'>
									$99/m Geviti Membership
								</p>
								<p className='text-primary/[0.60] text-xs font-medium leading-6 sm:text-sm font-Poppins'>
									$99/m Product Name
								</p>
							</div>
							<div className='p-[17.75px] lg:p-[25px] bg-primary/[0.03] rounded-lg flex flex-col gap-[30px] lg:gap-10'>
								<div className='flex flex-col gap-2 lg:gap-[10px]'>
									<div className='flex gap-5px text-primary'>
										<div className='flex items-center justify-center'>
											<ClockIcon className='w-15px h-15px sm:w-18px sm:h-18px flex-shrink-0' />
										</div>
										<p className='text-xs sm:text-sm font-Poppins leading-5 sm:leading-[18px] font-medium'>
											5-7 Day Lead Time
										</p>
									</div>
									<p className='text-xs font-BRSonoma text-primary/60 leading-[17px] sm:leading-5'>
										{ product?.description }
									</p>
								</div>
								{ product?.bloodTest && (
									<div className='flex flex-col gap-2 lg:gap-[10px]'>
										<div className='flex gap-5px text-primary'>
											<div className='flex items-center justify-center'>
												<AlertSquareIcon className='w-15px h-15px sm:w-18px sm:h-18px flex-shrink-0' />
											</div>
											<p className='text-xs sm:text-sm font-Poppins leading-5 sm:leading-[18px] font-medium'>
												Products available based on blood test results
											</p>
										</div>
										<p className='text-xs font-BRSonoma text-primary/60 leading-[17px] sm:leading-5'>
											{ product?.description }
										</p>
									</div>
								) }
							</div>
							<div className='flex flex-col gap-y-[36px]'>
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
