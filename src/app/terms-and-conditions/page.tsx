import { NextPage } from 'next';

import LongevitiPanelComponent from '@/components/LongevitiPanel';
import Navbar from '@/components/Navbar/Landing';
import longevitiPanelData from '@/constant/data/longevitiPanel';
// import { Navbar } from '@/components';
import { getTermsAndConditions } from '@/services/products';

import TermsClientPage from './page.client';

interface Props {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const bannerDataDefault = longevitiPanelData.banner;

const TermsPage: NextPage<Props> = async({
	searchParams,
}) => {
	const { type } = await searchParams;
	const data = await getTermsAndConditions(type === 'giveaway' ? 2 : 1);
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

				<LongevitiPanelComponent.BannerParallax
					className='lg:max-h-[318px]'
					containerClassName='pb-0 lg:pb-0 mt-[100px] lg:mt-[160px]'
					bannerData={ {
						...bannerDataDefault,
						title: 'Terms and conditions',
						description: 'Last updated: ' + formattedDate,
					} }
					showButton={ false }
				/>
				<div className='my-10 lg:my-[60px] px-4 max-w-screen-lg text-center sm:mx-auto '>
					{ /* <p className='text-start md:text-center text-primary font-Poppins text-4xl -tracking-[1.44px] pt-7 '>{ type === 'giveaway' && 'Giveaway ' } Terms and Conditions</p> */ }
					{ /* <p className='text-start md:text-center text-grey-primary text-sm font-BRSonoma mt-2 mb-[30px]'>Last updated: { formattedDate }</p> */ }
					<TermsClientPage content={ data.content } />
				</div>
			</div>
		</div>
	);
};

export default TermsPage;
