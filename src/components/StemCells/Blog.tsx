'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

import SectionTitle from './SectionTitle';

const BlogCarousel = dynamic(() => import('./BlogCarousel'));

const Blog = () => {
	return (
		<div className='font-Poppins pb-[100px] lg:pb-[361px]'>
			<div className='container-center w-full'>
				<motion.div
					initial='hidden'
					whileInView='show'
					viewport={ { amount: 0.5, once: true } }
					exit='exit'
					variants={ {
						show: {
							transition: { staggerChildren: 0.06 },
						},
						exit: {
							transition: { staggerChildren: 0.06, staggerDirection: -1 },
						},
					} }
					className='mx-auto max-w-[737px] text-left sm:text-center'
				>
					<div className='max-lg:hidden'>
						<SectionTitle>
              Read more{ ' ' }
							<span className='italic font-normal'>science research</span> about
						</SectionTitle>
						<SectionTitle>stem cell therapy.</SectionTitle>
					</div>
					<div className='lg:hidden'>
						<SectionTitle>
              Read more <span className='italic font-normal'>science </span>
						</SectionTitle>
						<SectionTitle>
							<span className='italic font-normal'>research</span> about stem
              cell
						</SectionTitle>
						<SectionTitle>therapy.</SectionTitle>
					</div>
				</motion.div>
			</div>
			<div className='mt-[45px] lg:mt-[116px]'>
				<BlogCarousel />
			</div>
		</div>
	);
};

export default Blog;
