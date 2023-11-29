import React from 'react';
import styled from 'styled-components';

import { ViewState } from '@/components/precheckout/WelcomeTransition';

const Column = styled.div<{ viewState: ViewState }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: black;
  color: white;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: ${props => (props.viewState === ViewState.IN_PROGRESS ? 1 : 0)};
  opacity: ${props => (props.viewState === ViewState.IN_PROGRESS ? 1 : 0)};

  transition: 0.3s opacity ease-out;
`;

interface PreCheckoutSummaryProps {
  viewState: ViewState;
  onContinue: (planID: string) => void;
  selectedPlanID: string;
}

const PreCheckoutSummary = (props: PreCheckoutSummaryProps) => {
	return (
		<>
			<Column viewState={ props.viewState }>Summary screen</Column>
		</>
	);
};

export default PreCheckoutSummary;
