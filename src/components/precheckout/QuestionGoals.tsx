import { ReactNode, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import styled, { keyframes } from 'styled-components';

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

  @media (max-width: 1300px) {
    max-width: 90vw;
    top: 40px;
  }
`;

const Title = styled.h1<{ viewState: ViewState }>`
  font-size: 36px;
  letter-spacing: -1.44px;
  color: #181a1c;
  margin-bottom: 24px;
  width: 430px;

  animation: ${props =>
		props.viewState === ViewState.IN_PROGRESS && moveFromRight}
    0.5s cubic-bezier(0.21, 1.04, 0.58, 1.15);
  animation-fill-mode: forwards;

  transform: translateX(100vw);

  @media (max-width: 1300px) {
    max-width: 85vw;
    font-size: 24px;
    text-align: center;
  }
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

const AnswerBox = styled.div<{ viewState: ViewState; delayMultiplier: number }>`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 10px;
  width: 430px;
  padding: 19px 24px;
  cursor: pointer;
  margin-bottom: 12px;

  animation: ${props =>
		props.viewState === ViewState.IN_PROGRESS && moveFromRight}
    0.5s cubic-bezier(0.21, 1.04, 0.58, 1.15);
  animation-delay: ${props => props.delayMultiplier * 0.08}s;
  animation-fill-mode: forwards;

  transform: translateX(100vw);

  &:hover {
    box-shadow: 0 15px 30px 0 rgba(16, 24, 40, 0.1);
  }

  transition: 0.2s box-shadow ease-out;

  @media (max-width: 1300px) {
    max-width: 90vw;
  }
`;

const BoxText = styled.span`
  font-weight: 500;
  font-size: 17px;
  color: #181a1c;
  margin-right: auto;
`;

const BoxArrow = styled(Player)`
  width: 26px;
`;

interface QuestionGoalsProps {
  viewState: ViewState;
  onSelectOption: () => void;
}

const ResponseBox = ({
	children,
	index,
	viewState,
	onSelectOption,
}: {
  children: ReactNode;
  index: number;
  viewState: ViewState;
  onSelectOption: () => void;
}) => {
	// lottie-web is not installed, so we cannot import the type. Using any to fix build.
	const [lottieRef, setLottieRef] = useState<any | null>(null);

	return (
		<AnswerBox
			viewState={ viewState }
			delayMultiplier={ index }
			onMouseEnter={ () => lottieRef?.play() }
			// onMouseLeave={ () => lottieRef?.stop() }>
			onClick={ () => onSelectOption() }
		>
			<BoxText>{ children }</BoxText>
			<BoxArrow
				src='https://lottie.host/bb088647-6cba-449e-88b6-c71c07ada63e/Fnq8jLrX0T.json'
				lottieRef={ ref => setLottieRef(ref) }
			/>
		</AnswerBox>
	);
};

const QuestionGoals = (props: QuestionGoalsProps) => {
	return (
		<Column viewState={ props.viewState }>
			<Title viewState={ props.viewState }>
        What goals are you looking to achieve?
			</Title>
			<ResponseBox
				viewState={ props.viewState }
				index={ 1 }
				onSelectOption={ props.onSelectOption }
			>
        Have increased daily energy
			</ResponseBox>
			<ResponseBox
				viewState={ props.viewState }
				index={ 2 }
				onSelectOption={ props.onSelectOption }
			>
        Maintain optimal hormone levels
			</ResponseBox>
			<ResponseBox
				viewState={ props.viewState }
				index={ 3 }
				onSelectOption={ props.onSelectOption }
			>
        Slow the aging process
			</ResponseBox>
			<ResponseBox
				viewState={ props.viewState }
				index={ 4 }
				onSelectOption={ props.onSelectOption }
			>
        All of the above
			</ResponseBox>
		</Column>
	);
};

export default QuestionGoals;
