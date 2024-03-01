import React from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';
import Image from 'next/image';

import questionCircle from '@/assets/question-tooltip-circle.svg';
import clsxm from '@/helpers/clsxm';

import 'react-popper-tooltip/dist/styles.css';

interface QuestionTooltipProps {
	text: string;
	className?: string;
	tooltipClassName?: string;
	icon?: React.ReactNode;
}

const QuestionTooltip = (props: QuestionTooltipProps) => {
	const {
		getArrowProps,
		getTooltipProps,
		setTooltipRef,
		setTriggerRef,
		visible,
	} = usePopperTooltip({ placement: 'top' });

	return (
		<>
			<div
				ref={ setTriggerRef }
				className='flex items-center w-[16px] h-[16px] justify-center'>
				{ props.icon
					? props.icon
					: (
						<Image
							src={ questionCircle }
							alt='Question tooltip'
							width={ 16 }
							height={ 16 }
							className='w-[16px] h-[16px] object-contain'
						/>
					) }
			</div>
			{ visible && (
				<div
					ref={ setTooltipRef }
					{ ...getTooltipProps({
						className:
							clsxm(
								'tooltip-container !border-none max-w-[350px] whitespace-normal text-center text-sm !bg-[#A3E0FF] !rounded-md !p-[10px] !shadow-none !border-none',
								props.className
							),
					}) }
				>
					<div
						{ ...getArrowProps({
							className: clsxm(
								'tooltip-arrow after:!border-t-[#A3E0FF]',
								props.tooltipClassName
							),
						}) }
					/>
					{ props.text }
				</div>
			) }
		</>
	);
};

export default QuestionTooltip;
