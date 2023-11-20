import { NextPage } from 'next';
import { notFound } from 'next/navigation';

import {
	ArticleComponent,
	CustomLink,
	HomeComponent,
	LandingComponent,
	Navbar,
	ProductsComponent,
} from '@/components';
import { AlertSquareIcon, ClockIcon } from '@/components/Icons';
import { getAllPost, getProductById } from '@/services/products';

import Breadcrumb from './breadcrumb';
import ProductFaq from './productFaq';

type ProductDetailPageProps = { params: { id: string } };

const ProductDetailPage: NextPage<ProductDetailPageProps> = async({
	params,
}) => {
	const id = params.id;
	const product = await getProductById(id);
	const allPost = await getAllPost(4);

	if (!product) {
		notFound();
	}

	return (
		<>
			<div className=' max-lg:overflow-hidden bg-[#CFD8DB]'>
				<Navbar theme='light' />
				<div className='pt-24 lg:pt-[172px] pb-4 sm:pb-[95px] container-center  max-lg:flex  max-lg:flex-col max-lg:items-center'>
					<Breadcrumb product={ product } />
					<div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:pt-12'>
						<div>
							<div className='w-full sticky top-10 max-lg:pb-1 overflow-y-auto overflow-x-hidden no-scrollbar'>
								<ProductsComponent.SliderProducts
									images={ product.images.map(e => e.image.url ?? '') ?? [] }
								/>
							</div>
						</div>

						<div className='flex flex-col gap-9 w-full lg:max-w-md lg:mx-auto'>
							<div className='flex flex-col lg:gap-2 relative'>
								<p className='uppercase text-grey-primary font-BRSonoma font-semibold text-[14px] sm:text-sm leading-[21px] sm:leading-6 tracking-0.11em'>
									{ product.category.title }
								</p>
								<h1 className='text-[36px] lg:text-4xl -tracking-0.04em font-Poppins leading-[124%] lg:leading-[121%]'>
									{ product.name }
								</h1>
								{ product?.fdaApproved && (
									<span className='text-[12px] mt-[6px] bg-[#A3E0FF] rounded-full w-fit text-primary font-Poppins font-semibold py-[2px] px-[8px]'>
                    					FDA approved
									</span>
								) }
							</div>
							<div className='flex flex-col gap-2 sm:gap-[9px] text-primary'>
								<p className='font-Poppins text-primary text-2xl  font-semibold w-fit leading-[18px] pb-[9px] border-b border-[#B8C6CC]'>
                  ${ product?.price }{ ' ' }
									<span className='text-grey-primary font-medium text-base'>
                    per month
									</span>
								</p>
								{
									product.price_membership.map((e, i) => (
										<p
											key={ i }
											className='text-primary/[0.60] text-[14px] font-medium leading-6 sm:text-sm font-Poppins'>
											{ e.title }
										</p>
									))
								}
							</div>
							<div className='p-[17.75px] lg:p-[25px] bg-primary/[0.03] rounded-lg flex flex-col gap-[30px] lg:gap-10'>
								{ product?.laedTime && (
									<div className='flex flex-col gap-2 lg:gap-[10px]'>
										<div className='flex gap-[8px] text-primary'>
											<div className='flex items-center justify-center'>
												<ClockIcon className='w-15px h-15px sm:w-18px sm:h-18px flex-shrink-0' />
											</div>
											<p className='text-[14px] sm:text-sm font-Poppins leading-5 sm:leading-[18px] font-medium'>
												{ product?.laedTime.title }
											</p>
										</div>
										<p className='text-[12px] font-BRSonoma text-primary/60 leading-[17px] sm:leading-5'>
											{ product?.laedTime.description }
										</p>
									</div>
								) }
								{ product?.bloodTest && (
									<div className='flex flex-col gap-2 lg:gap-[10px]'>
										<div className='flex gap-7px text-primary'>
											<div className='flex items-center justify-center'>
												<AlertSquareIcon className='w-15px h-15px sm:w-18px sm:h-18px flex-shrink-0' />
											</div>
											<p className='text-[14px] sm:text-sm font-Poppins leading-5 sm:leading-[18px] font-medium'>
												Available based on blood test results
											</p>
										</div>
										<p className='text-[12px] font-BRSonoma text-primary/60 leading-[17px] sm:leading-5'>
											{ product?.description }
										</p>
									</div>
								) }
							</div>
							<div className='flex flex-col gap-y-[36px]'>
								<ProductFaq product={ product } />

								<CustomLink
									href='/get-started'
									className='btn btn-primary w-full text-[14px] sm:text-sm font-medium font-Poppins leading-[21px] sm:leading-[26px] py-3 sm:py-[13px]'
									aria-label='Purchase'
								>
                  Get Started
								</CustomLink>
							</div>
						</div>
					</div>
				</div>
			</div>

			<LandingComponent.Steps />
			{ /* <HomeComponent.LearnMore withBg /> */ }
			<ArticleComponent.Articles
				list={ allPost.docs }
				btnLink='/blog'
				btn='View All'
				title='Learn More'
				preTitle='RESEARCH'
			/>
			<div className='py-[70px] lg:py-[95px]'>
				<HomeComponent.Products />
			</div>
		</>
	);
};

export default ProductDetailPage;
