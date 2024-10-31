import React from 'react'
import { notFound } from 'next/navigation';

import { Footer, FrequentlyAskedQuestions, RunningLogo } from '@/components'
import Navbar from '@/components/Navbar/Landing';
import { ViewOtherCategories } from '@/components/Solutions';
import { solutionData } from '@/constant/data';
import { navbarDefaultTransition } from '@/constant/data/navbar';
import { Category, Product } from '@/payload/payload-types';
import { getCategories, getProductByCategory } from '@/services/products';

import Description from './Description';
import Hero from './Hero';
import ProductsSlider from './ProductsSlider';

// interface PageProps {
// 	params: {
// 		category: string;
// 	};
// 	searchParams: { [key: string]: string | string[] | undefined };
// 	segment: string;
// }

const ProductCategory = async({ params: { category = '' } }) => {

	// const segments = segment?.split('/') || [];
	// const gender = segments[1]; // 'men' will be at index 1

	let categoryData: {
		singleCategory: Category;
		categories: Category[];
	};
	let productsData: Product[] = [];

	try {
		productsData = await getProductByCategory(category);
	} catch (error) {
		
	}

	try {
		categoryData = await getCategories(category, 'men');
	} catch (error) {
		return notFound();
	}

	if (!categoryData) {
		return notFound();
	}

	return (
		<div className='flex min-h-screen flex-col w-full font-Poppins'>
			<Navbar
				theme='light'
				animationProps={ {
					transition: {
						...navbarDefaultTransition,
						delay: 1.75,
					},
				} }
			/>
			<Hero data={ categoryData.singleCategory }/>
			<Description data={ categoryData.singleCategory.stats }/>
			{
				productsData.length > 0 && (
					<ProductsSlider products={ productsData }/>
				)
			}
			<div className='mt-[42px] lg:mt-[124px]'>
				<RunningLogo />
			</div>
			<ViewOtherCategories data={ categoryData.categories } />
			<FrequentlyAskedQuestions data={ solutionData.faq.data } />
			<Footer landingPage />
		</div>
	)
}

export default ProductCategory