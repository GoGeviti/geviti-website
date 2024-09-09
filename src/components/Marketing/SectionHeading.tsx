import React from 'react';
import Link from 'next/link';

type SectionHeadingProps = {
  description: string;
  title: string | React.ReactNode;
  cta: {
    text: string;
    href: string;
  };
};

export const SectionTitle: React.FC<{ title: string | React.ReactNode }> = ({
	title,
}) => {
	return (
		<h2 className='text-primary text-[5.581vw] xs4:text-2xl lg:text-4xl !leading-normal lg:font-medium -tracking-0.04em'>
			{ typeof title === 'string' ? (
				<span dangerouslySetInnerHTML={ { __html: title } } />
			) : (
				title
			) }
		</h2>
	);
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
	title,
	description,
	cta,
}) => {
	return (
		<div className='flex max-lg:flex-col gap-y-6 lg:grid lg:grid-cols-12 w-full'>
			<div className='lg:col-span-5'>
				<SectionTitle title={ title } />
			</div>
			<div className='lg:col-span-7 lg:max-w-[519px] lg:ml-auto'>
				<div className='space-y-18px'>
					<p className='text-grey-primary text-sm font-medium !leading-6'>
						{ description }
					</p>

					<div className='max-sm:w-full flex'>
						<Link
							href={ cta.href }
							className='btn btn-primary flex items-center justify-center max-sm:w-full py-3 px-5 sm:px-16 text-sm font-medium !leading-6'
						>
							{ cta.text }
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionHeading;
