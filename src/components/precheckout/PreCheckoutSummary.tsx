import React from 'react';
import styled, { keyframes } from 'styled-components';

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

interface PreCheckoutSummaryProps {
  viewState: ViewState;
  onContinue: (planID: string) => void;
  selectedPlanID: string;
}

const PreCheckoutSummary = (props: PreCheckoutSummaryProps) => {
	return (
		<>
			<Column viewState={ props.viewState }>
				<Title viewState={ props.viewState }>Summary</Title>
				<Subtitle
					viewState={ props.viewState }
					className='font-BRSonoma'>
          An a at-home Blood Draw must be done in order to prescribe you this
          treatment.
				</Subtitle>
			</Column>
		</>
	);
};

export default PreCheckoutSummary;
