import { useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import styled, { keyframes } from 'styled-components';

const Column = styled.div<{ viewState: ViewState }>`
  position: absolute;
  left: 50%;
  top: 140px;
  border: 1px solid blue;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

	transform: translateX(-50%);
  //transition: transform 0.5s cubic-bezier(.21,1.04,.58,1.15);
`;

const LogoLottie = styled(Player)<{ viewState: ViewState }>`
  width: 300px;
  height: 300px;

  animation: ${props =>
		props.viewState === ViewState.IN_PROGRESS && moveFromBottom}
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
  margin-bottom: 12px;

  animation: ${props =>
		props.viewState === ViewState.IN_PROGRESS ? moveFromBottom : ViewState.COMPLETED && leaveToLeft}
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

  animation: ${props =>
		props.viewState === ViewState.IN_PROGRESS ? fadeFromBottom : ViewState.COMPLETED && leaveToLeft}
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

const moveFromBottom = keyframes`
  from {
	transform: translateY(100vh);
  }
  to {
	transform: translateY(0);
  }
`;

const leaveToLeft = keyframes`
  from {
	transform: translateX(0);
  }
  to {
	//transform: translateX(-100vw);
  }
`;

// TODO: Move elsewhere
export enum ViewState {
	COMPLETED,
	IN_PROGRESS,
	NEXT_UP,
	HIDDEN,
}

interface WelcomeTransitionProps {
  viewState: ViewState;
  onContinue: () => void;
}

const WelcomeTransition = (props: WelcomeTransitionProps) => {

	useEffect(() => {
		setTimeout(() => {
			props.onContinue();
		}, 3_000);
	}, []);

	return (
		<Column viewState={ props.viewState }>
			<LogoLottie
				src='https://lottie.host/5057054d-678f-4c6f-a7e6-6c327a613933/QfaWhTNjwk.json'
				autoplay
				keepLastFrame
				viewState={ props.viewState }
			/>
			<Title viewState={ props.viewState }>Welcome to Geviti</Title>
			<Subtitle viewState={ props.viewState }>
        Let&apos;s start by making sure you are eligible.
			</Subtitle>
		</Column>
	);
};

export default WelcomeTransition;
