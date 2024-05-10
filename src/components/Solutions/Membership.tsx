import React from 'react';

import { solutionData } from '@/constant/data';

import ButtonCta from '../ButtonCta';
import InfiniteMovingFeatures from '../InfiniteMovingFeatures';

const membershipData = solutionData.membership;

const Membership: React.FC = () => {
	const renderTitleDesc = (item: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
		return (
			<div className='px-4 flex flex-col lg:items-center lg:text-center'>
				<p className='text-pretitle text-grey-primary'>{ item.preTitle }</p>
				<div className='my-2.5 lg:mt-0 lg:mb-3'>
					<h3 className='!leading-[133%] text-[6.4vw] xxs2:text-2xl sm:text-3xl lg:text-4xl lg:!leading-normal -tracking-0.04em text-primary'>
						<span dangerouslySetInnerHTML={ { __html: item.title } } />
					</h3>
				</div>

				<p className='text-xs sm:text-sm !leading-5 text-grey-400'>
					<span dangerouslySetInnerHTML={ { __html: item.description } } />
				</p>
			</div>
		);
	};

	const renderBtnCtaMobile = (props: { href: string; text: string; }) => {
		return (
			<div className='px-4 flex justify-center max-sm:w-full lg:hidden'>
				<ButtonCta
					href={ props.href }
					text={ props.text }
					className='max-sm:w-full'
				/>
			</div>
		);
	};

	return (
		<div className='lg:px-3 py-6 font-Poppins'>
			<div className='bg-white rounded-19px py-[46px] lg:pt-[42px] lg:pb-0'>
				{ renderTitleDesc(membershipData) }
				<div className='max-lg:hidden mt-[42px] px-2 flex justify-center'>
					<ButtonCta
						href={ membershipData.btnCta.href }
						text={ membershipData.btnCta.text }
						aria-label={ membershipData.btnCta.text }
					/>
				</div>
				<div className='overflow-x-hidden relative pt-[60px] lg:pt-[92px] pb-[45px] lg:pb-16'>
					<InfiniteMovingFeatures
						list={ membershipData.list }
					/>
				</div>
				{ renderBtnCtaMobile(membershipData.btnCtaMobile) }
			</div>
		</div>
	);
};

export default Membership;