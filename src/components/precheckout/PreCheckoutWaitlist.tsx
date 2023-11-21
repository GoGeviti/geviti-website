import { useEffect, useRef, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import styled, { keyframes } from 'styled-components';

import InputField from '@/components/precheckout/InputField';
import { ViewState } from '@/components/precheckout/WelcomeTransition';

const Column = styled.div<{ viewState: ViewState }>`
  position: absolute;
  left: 50%;
  top: 120px;
  //border: 1px solid red;

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

  animation: ${props =>
		props.viewState === ViewState.IN_PROGRESS && moveFromRight}
    0.5s cubic-bezier(0.21, 1.04, 0.58, 1.15);
  animation-fill-mode: forwards;
  animation-delay: 0.08s;

  transform: translateX(100vw);
`;

// const fadeFromBottom = keyframes`
//   from {
// 	opacity: 0;
//   }
//   to {
// 	opacity: 1;
//   }
// `;
//
const moveFromRight = keyframes`
  from {
	transform: translateX(100vw);
  }
  to {
	transform: translateX(0);
  }
`;

const SecondInputField = styled(InputField)<{ viewState: ViewState }>`
  animation: ${props =>
		props.viewState === ViewState.IN_PROGRESS && moveFromRight}
    0.5s cubic-bezier(0.21, 1.04, 0.58, 1.15);
  animation-fill-mode: forwards;
  animation-delay: 0.24s;
  width: 430px;

  margin-bottom: 12px;

  transform: translateX(100vw);
`;

const Button = styled.button<{ viewState: ViewState }>`
  background: #181a1c;
  color: white;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 430px;
  border-radius: 1000px;
  cursor: pointer;

  font-weight: 500;
  font-size: 15px;
  text-align: center;

  transform: translateX(100vw);
  animation: ${props =>
		props.viewState === ViewState.IN_PROGRESS && moveFromRight}
    0.5s cubic-bezier(0.21, 1.04, 0.58, 1.15);
  animation-fill-mode: forwards;
  animation-delay: 0.4s;
`;

const FreeVisitRow = styled.div<{ viewState: ViewState }>`
  display: flex;
  align-items: center;
  background: #eff9f2;
  border: 2px solid #60c57c;
  border-radius: 10px;
  padding: 8px;
  height: 50px;
  width: 430px;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 22px;

  opacity: ${props => (props.viewState === ViewState.IN_PROGRESS ? 1 : 0)};
  transform: scale(
    ${props => (props.viewState === ViewState.IN_PROGRESS ? 1 : 0.8)}
  );

  transition:
    opacity 0.5s cubic-bezier(0.15, 1.14, 0.88, 0.98),
    transform 0.75s cubic-bezier(0.21, 1.04, 0.58, 1.15);

  transition-delay: ${props => (props.viewState === ViewState.IN_PROGRESS ? 1.33 : 0)}s;
`;

const CheckmarkLottie = styled(Player)`
  position: absolute;
  top: 50%;
  left: -19px;
  width: 70px;
  height: 70px;
  transform: translateY(-50%);
`;

const FreeVisitCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 27px;
`;

const FreeVisitTitle = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #181a1c;
  margin-bottom: -3px;
  //margin-top: 1px;
`;

const FreeVisitSubtitle = styled.span`
  font-size: 12px;
  color: #919b9f;
`;

interface PreCheckoutWaitlistProps {
	viewState: ViewState;
	onContinue: (usState: string, sex: string, birthday: string) => void;
}

const PreCheckoutWaitlist = (props: PreCheckoutWaitlistProps) => {
	const [usState] = useState('AZ');
	const [sex] = useState('male');
	const [birthday, setBirthday] = useState('email@example.com');

	const lottieRef = useRef<Player>(null);

	useEffect(() => {
		if (props.viewState === ViewState.IN_PROGRESS) {
			setTimeout(() => {
				lottieRef.current?.play();
			}, 1_333);
		}
	}, [props.viewState]);

	return (
		<Column viewState={ props.viewState }>
			<FreeVisitRow viewState={ props.viewState }>
				<CheckmarkLottie
					src='https://lottie.host/f3372ff0-3570-431d-a529-7cc4fbd5481a/huZVbKVygH.json'
					keepLastFrame
					ref={ lottieRef }
				/>
				<FreeVisitCol>
					<FreeVisitTitle className='font-BRSonoma'>
						You qualify for Geviti, but we&apos;re currently at capacity.
					</FreeVisitTitle>
					<FreeVisitSubtitle className='font-BRSonoma'>
						This is so we can offer the best service for our current members.
					</FreeVisitSubtitle>
				</FreeVisitCol>
			</FreeVisitRow>
			<Title viewState={ props.viewState }>
				Should we add you to the waitlist?
			</Title>
			<Subtitle
				viewState={ props.viewState }
				className='font-BRSonoma'>
				We&apos;ll notify you as soon as we have more availability.
			</Subtitle>
			<SecondInputField
				label='Email Address'
				placeholder='email@example.com'
				type='email'
				value={ birthday }
				onChange={ newEmail => setBirthday(newEmail) }
				viewState={ props.viewState }
			/>
			<Button
				viewState={ props.viewState }
				onClick={ () => props.onContinue(usState, sex, birthday) }
			>
				Join Waitlist
			</Button>
		</Column>
	);
};

export default PreCheckoutWaitlist;
