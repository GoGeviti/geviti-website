import React from 'react';

import clsxm from '@/helpers/clsxm';

import { ArrowNarrowLeft, ArrowNarrowRight } from '../Icons';

type ArrowButtonsProps = {
  disabledPrev?: boolean;
  disabledNext?: boolean;
  onClickPrev?: () => void;
  onClickNext?: () => void;
	className?:string
};

const ArrowButtons: React.FC<ArrowButtonsProps> = ({
	disabledNext,
	disabledPrev,
	onClickNext,
	onClickPrev,
	className
}) => {
	const renderArrowButton = () => {
		const buttonClassName =
      'rounded-full w-[34px] h-[34px] border-[0.7px] hover:bg-grey-primary-light flex items-center justify-center text-primary border-primary disabled:text-grey-primary disabled:border-grey-primary';

		return (
			<div className={
				clsxm(
					'flex items-center gap-3.5 max-sm:hidden',
					className
				)
			}>
				<button
					className={ buttonClassName }
					onClick={ onClickPrev }
					disabled={ disabledPrev }
				>
					<ArrowNarrowLeft className='flex-shrink-0' />
				</button>
				<button
					className={ buttonClassName }
					onClick={ onClickNext }
					disabled={ disabledNext }
				>
					<ArrowNarrowRight className='flex-shrink-0' />
				</button>
			</div>
		);
	};

	return renderArrowButton();
};

export default ArrowButtons;
