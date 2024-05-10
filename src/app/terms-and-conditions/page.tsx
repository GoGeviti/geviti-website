import { NextPage } from 'next';

import Navbar from '@/components/Navbar/Landing';
// import { Navbar } from '@/components';
import { getTermsAndConditions } from '@/services/products';

import TermsClientPage from './page.client';

const TermsPage: NextPage = async() => {
	const data = await getTermsAndConditions();
	const date = new Date(data.updatedAt);
	const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
	return (
		<div className='flex flex-col w-full bg-grey-background'>
			<div className='lg:px-3 overflow-hidden'>
				{ /* <Navbar
					theme='light'
					withBgWhite
					className='max-md:!pt-0' /> */ }
				<Navbar
					theme='light'
					animationProps={ { variants: { hidden: { y: 0, opacity: 1 }, visible: { y: 0, opacity: 1 } } } } />

				<div className='my-[60px] md:my-[166px] container-center text-center sm:mx-auto '>
					<p className='text-start md:text-center text-primary font-Poppins text-4xl -tracking-[1.44px] pt-7 '>Terms and Conditions</p>
					<p className='text-start md:text-center text-grey-primary text-sm font-BRSonoma mt-2 mb-[30px]'>Last updated: { formattedDate }</p>
					<TermsClientPage content={ data.content } />
				</div>
			</div>
		</div>
	);
};

export default TermsPage;
