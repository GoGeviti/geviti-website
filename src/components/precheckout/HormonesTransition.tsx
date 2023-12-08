import { useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import styled, { keyframes } from 'styled-components';

import { ViewState } from '@/components/precheckout/WelcomeTransition';

const Column = styled.div<{ viewState: ViewState }>`
  position: absolute;
  left: 50%;
  top: 140px;
  //border: 1px solid green;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  transform: translateX(-50%);
  //transition: transform 0.5s cubic-bezier(.21,1.04,.58,1.15);
`;

const moveFromRight = keyframes`
  from {
	transform: translateX(100vw);
  }
  to {
	transform: translateX(0);
  }
`;

const LogoLottie = styled(Player)<{ viewState: ViewState }>`
  width: 300px;
  height: 300px;

  animation: ${props =>
		props.viewState === ViewState.IN_PROGRESS && moveFromRight}
    0.75s cubic-bezier(0.21, 1.04, 0.58, 1.15);
  animation-fill-mode: forwards;

  transform: translateY(100vh);
`;

const Title = styled.h1<{ viewState: ViewState }>`
  margin-top: -76px;
  font-size: 36px;
  font-weight: 500;
  letter-spacing: -1.44px;
  color: #181a1c;
  max-width: 90vw;
  margin-bottom: 12px;

  animation: ${props =>
		props.viewState === ViewState.IN_PROGRESS
			? moveFromRight
			: ViewState.COMPLETED && leaveToLeft}
    0.5s cubic-bezier(0.21, 1.04, 0.58, 1.15);
  animation-delay: 0.08s;
  animation-fill-mode: forwards;

  transform: translateY(100vh);
`;

const Subtitle = styled.h2<{ viewState: ViewState }>`
  font-weight: 500;
  font-size: 28px;
  color: #181a1c;
  letter-spacing: -1.12px;
  width: 430px;
  max-width: 90vw;
  text-align: center;

  animation: ${props =>
		props.viewState === ViewState.IN_PROGRESS
			? fadeFromBottom
			: ViewState.COMPLETED && leaveToLeft}
    2.25s cubic-bezier(0.21, 1.04, 0.58, 1.15);
  animation-delay: 1.25s;
  animation-fill-mode: forwards;

  opacity: 0;
`;

const fadeFromBottom = keyframes`
  from {
	opacity: 0;
  }
  to {
	opacity: 1;
  }
`;

// const moveFromBottom = keyframes`
//   from {
// 	transform: translateY(100vh);
//   }
//   to {
// 	transform: translateY(0);
//   }
// `;

const leaveToLeft = keyframes`
  from {
	transform: translateX(0);
  }
  to {
	//transform: translateX(-100vw);
  }
`;

interface HormonesTransitionProps {
	viewState: ViewState;
	onContinue: () => void;
}

const HormonesTransition = (props: HormonesTransitionProps) => {
	useEffect(() => {
		if (props.viewState === ViewState.IN_PROGRESS) {
			setTimeout(() => {
				props.onContinue();
			}, 3_000);
		}
	}, [props.viewState]);

	return (
		<Column viewState={ props.viewState }>
			<LogoLottie
				src='https://lottie.host/5057054d-678f-4c6f-a7e6-6c327a613933/QfaWhTNjwk.json'
				autoplay
				keepLastFrame
				viewState={ props.viewState }
			/>
			<Title viewState={ props.viewState }>Hormones can play a key role here.</Title>
			<Subtitle viewState={ props.viewState }>
				No worries, Geviti can help.
			</Subtitle>
		</Column>
	);
};

export default HormonesTransition;
