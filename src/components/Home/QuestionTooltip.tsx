import React from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';

import 'react-popper-tooltip/dist/styles.css';

const HelpIcons = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='17'
		height='16'
		viewBox='0 0 17 16'
		fill='none'>
		<g clipPath='url(#clip0_823_744)'>
			<path
				d='M6.18516 5.99998C6.3419 5.55442 6.65126 5.17872 7.05847 4.9394C7.46567 4.70009 7.94443 4.61261 8.40995 4.69245C8.87547 4.7723 9.29771 5.01433 9.60188 5.37567C9.90606 5.737 10.0725 6.19433 10.0718 6.66665C10.0718 7.99998 8.07183 8.66665 8.07183 8.66665M8.12516 11.3333H8.13183M14.7918 7.99998C14.7918 11.6819 11.8071 14.6666 8.12516 14.6666C4.44326 14.6666 1.4585 11.6819 1.4585 7.99998C1.4585 4.31808 4.44326 1.33331 8.12516 1.33331C11.8071 1.33331 14.7918 4.31808 14.7918 7.99998Z'
				stroke='#919B9F'
				strokeWidth='1.33333'
				strokeLinecap='round'
				strokeLinejoin='round'/>
		</g>
		<defs>
			<clipPath id='clip0_823_744'>
				<rect
					width='16'
					height='16'
					fill='white'
					transform='translate(0.125)'/>
			</clipPath>
		</defs>
	</svg>
);

interface QuestionTooltipProps {
  text: string;
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
			<div ref={ setTriggerRef }>
				<HelpIcons />
			</div>
			{ visible && (
				<div
					ref={ setTooltipRef }
					{ ...getTooltipProps({ className: 'tooltip-container max-w-[350px] whitespace-normal text-center text-[14px] !bg-[#A3E0FF] !rounded-md !p-[10px] !shadow-none !border-none' }) }
				>
					<div { ...getArrowProps({ className: 'tooltip-arrow after:!border-t-[#A3E0FF]' }) } />
					{ props.text }
				</div>
			) }
		</>
	);
};

export default QuestionTooltip;
