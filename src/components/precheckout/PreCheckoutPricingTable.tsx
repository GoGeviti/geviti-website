import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { ChevronRight } from '@/components/Icons';
import BiomarkerCompareModal from '@/components/precheckout/BiomarkerCompareModal';
import PricingCard from '@/components/precheckout/PricingCard';
import { ViewState } from '@/components/precheckout/WelcomeTransition';

const Column = styled.div<{ viewState: ViewState }>`
  position: absolute;
  left: 50%;
  top: 70px;
  height: 100%;

  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: ${props => (props.viewState === ViewState.IN_PROGRESS ? 1 : 0)};
`;

const Title = styled.h1<{ viewState: ViewState }>`
  font-size: 36px;
  letter-spacing: -1.44px;
  color: #181a1c;
  margin-bottom: 8px;
  width: 430px;
  text-align: center;

  animation: ${props =>
		props.viewState === ViewState.IN_PROGRESS && moveFromRight}
    0.5s cubic-bezier(0.21, 1.04, 0.58, 1.15);
  animation-fill-mode: forwards;

  transform: translateX(100vw);
`;

const Subtitle = styled.p<{ viewState: ViewState }>`
  font-size: 14px;
  color: #919b9f;
  width: 430px;
  margin-bottom: 24px;
  text-align: center;

  animation: ${props =>
		props.viewState === ViewState.IN_PROGRESS && moveFromRight}
    0.5s cubic-bezier(0.21, 1.04, 0.58, 1.15);
  animation-fill-mode: forwards;
  animation-delay: 0.08s;

  transform: translateX(100vw);
`;

const moveFromRight = keyframes`
  from {
	transform: translateX(100vw);
  }
  to {
	transform: translateX(0);
  }
`;

const ExpandTablesRow = styled.div<{ viewState: ViewState }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 34px;
  gap: 4px;

  span {
    color: #181a1c;
    font-size: 14px;
    font-weight: 600;
  }

  animation: ${props =>
		props.viewState === ViewState.IN_PROGRESS && moveFromRight}
    0.5s cubic-bezier(0.21, 1.04, 0.58, 1.15);
  animation-fill-mode: forwards;
  animation-delay: 0.12s;

  transform: translateX(100vw);
`;

const PricingTableRow = styled.div<{ viewState: ViewState }>`
  display: flex;
  align-items: center;

  animation: ${props =>
		props.viewState === ViewState.IN_PROGRESS && moveFromRight}
    0.5s cubic-bezier(0.21, 1.04, 0.58, 1.15);
  animation-fill-mode: forwards;
  animation-delay: 0.16s;

  transform: translateX(100vw);
`;

const commonFeatures = [
	{
		name: 'At-home blood draw',
		description: 'Description text goes here.',
	},
	{
		name: 'Access To Geviti Platform',
		description: 'Description text goes here.',
	},
	{
		name: 'Prescription Product Access',
		description: 'Description text goes here.',
	},
	{
		name: 'Personally Assigned Health Coach',
		description: 'Description text goes here.',
	},
	{
		name: 'Custom Treatment Plan',
		description: 'Description text goes here.',
	},
];

interface PreCheckoutPricingTableProps {
  viewState: ViewState;
  onContinue: (planID: string) => void;
}

const PreCheckoutPricingTable = (props: PreCheckoutPricingTableProps) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [hoveredPlan, setHoveredPlan] = useState('');

	return (
		<>
			<BiomarkerCompareModal
				isOpen={ isExpanded }
				onClose={ () => setIsExpanded(false) }
			/>
			<Column viewState={ props.viewState }>
				<Title viewState={ props.viewState }>Choose a blood panel</Title>
				<Subtitle
					viewState={ props.viewState }
					className='font-BRSonoma'>
          An a at-home Blood Draw must be done in order to prescribe you this
          treatment.
				</Subtitle>
				<ExpandTablesRow
					onClick={ () => setIsExpanded(true) }
					viewState={ props.viewState }
				>
					<span>Compare Tested Biomarkers</span>
					<ChevronRight />
				</ExpandTablesRow>
				<PricingTableRow viewState={ props.viewState }>
					<PricingCard
						name='Essentials Panel'
						priceUpfront='$300'
						priceMonthly='$99'
						features={ commonFeatures }
						biomarkersTested='39+'
						pillText='Most Affordable'
						onChoose={ () => props.onContinue('essentials') }
						isHovered={ hoveredPlan === 'essentials' }
						onHover={ () => setHoveredPlan('essentials') }
						onStopHover={ () => setHoveredPlan('') }
						isInView={ props.viewState === ViewState.IN_PROGRESS }
					/>
					<PricingCard
						name='Comprehensive Panel'
						priceUpfront='$475'
						priceMonthly='$99'
						features={ commonFeatures }
						biomarkersTested='50+'
						pillText='Recommended'
						onChoose={ () => props.onContinue('comprehensive') }
						isHovered={ hoveredPlan === 'comprehensive' || !hoveredPlan }
						onHover={ () => setHoveredPlan('comprehensive') }
						onStopHover={ () => setHoveredPlan('') }
						isInView={ props.viewState === ViewState.IN_PROGRESS }
					/>
					<PricingCard
						name={ 'Ultimate Men\'s Panel' }
						priceUpfront='$605'
						priceMonthly='$99'
						features={ commonFeatures }
						biomarkersTested='58+'
						pillText='Most In-Depth'
						onChoose={ () => props.onContinue('ultimate') }
						isHovered={ hoveredPlan === 'ultimate' }
						onHover={ () => setHoveredPlan('ultimate') }
						onStopHover={ () => setHoveredPlan('') }
						isInView={ props.viewState === ViewState.IN_PROGRESS }
					/>
				</PricingTableRow>
			</Column>
		</>
	);
};

export default PreCheckoutPricingTable;
