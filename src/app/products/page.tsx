import { NextPage } from 'next';

import { ArrowNarrowDown } from '@/components/Icons';
import getPayloadClient from '@/payload/payloadClient';

import CategorySheet from './categorySheet';
import ProductFilter from './filter';
import ProductList from './list';
import PageTitle from './PageTitle';
import ProductSearchInput from './search';

const ProductsPage: NextPage = async() => {

	const payload  = await getPayloadClient();
	const products = await payload.find({
		collection: 'products',
		depth: 1,
		pagination: false,
	});
	const benefits = await payload.find({
		collection: 'benefits',
		depth: 1,
		pagination: false,
	});
	const categories = await payload.find({
		collection: 'categories',
		depth: 1,
		pagination: false,
	});

	return (
		<>
			<div className='py-[88px] lg:py-[152px]'>
				<div className='container-center'>
					<div className='lg:hidden flex flex-col items-center text-center gap-y-[35px] mb-[49px] w-full max-w-md mx-auto'>
						<PageTitle/>
						<ProductSearchInput/>
					</div>

					<div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
						<form className='hidden lg:block'>
							<PageTitle/>

							<div className='mt-[46px] sticky top-10 max-h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden no-scrollbar'>
								<div className='mb-7'>
									<ProductSearchInput/>
								</div>
								<div className='border-b border-blue-3 pb-3 flex items-center gap-[7px]'>
									<p className='font-Poppins text-sm font-medium leading-8 -tracking-0.04em'>Filters</p>
									<ArrowNarrowDown className='w-[13px] h-[13px] text-primary' />
								</div>
								<ProductFilter
									benefits={ benefits.docs }
									categories={ categories.docs }/>
							</div>
						</form>

						<div className='lg:col-span-3'>
							<ProductList products={ products.docs }/>
						</div>
					</div>
				</div>
			</div>

			<CategorySheet
				benefits={ benefits.docs }
				categories={ categories.docs } />
		</>
	);
};

export default ProductsPage;
