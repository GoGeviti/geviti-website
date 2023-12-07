import React from 'react';
import styled, { keyframes } from 'styled-components';

import PricingCard from '@/components/precheckout/PricingCard';
import { ViewState } from '@/components/precheckout/WelcomeTransition';

const Column = styled.div<{ viewState: ViewState }>`
  position: absolute;
  left: 50%;
  top: 50px;
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
  width: 570px;
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
  margin-bottom: 40px;
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
		name: '1-on-1 Consultation With Doctor',
		description: 'Description text goes here.',
	},
	{
		name: 'Professional Medical Evaluation',
		description: 'Description text goes here.',
	},
	{
		name: 'Access to Geviti',
		description: 'Description text goes here.',
	},
];

interface PreCheckoutSwitchPricingTableProps {
  viewState: ViewState;
  onContinue: () => void;
}

const PreCheckoutSwitchPricingTable = (
	props: PreCheckoutSwitchPricingTableProps,
) => {
	return (
		<>
			<Column viewState={ props.viewState }>
				<Title viewState={ props.viewState }>
          You may be able to switch over to Geviti for your therapy needs.
				</Title>
				<Subtitle
					viewState={ props.viewState }
					className='font-BRSonoma'>
          In order to switch to our program, you’ll need a clinical consultation
          to overview your situation and review your options.
				</Subtitle>
				<PricingTableRow viewState={ props.viewState }>
					<div />
					<PricingCard
						name='Clinical Consultation'
						priceUpfront='$139.99'
						priceMonthly='$99'
						features={ commonFeatures }
						onChoose={ props.onContinue }
						isHovered
						isSwitchCard
						isInView={ props.viewState === ViewState.IN_PROGRESS }
					/>
					<div />
				</PricingTableRow>
			</Column>
		</>
	);
};

export default PreCheckoutSwitchPricingTable;
