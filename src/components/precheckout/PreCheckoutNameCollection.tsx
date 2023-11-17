import { ReactNode, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { AnimationItem } from 'lottie-web';
import styled, { keyframes } from 'styled-components';

import ProductSearchInput from '@/app/products/search';
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
  font-size: 15px;
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

const FirstInputField = styled(InputField)<{ viewState: ViewState }>`
  animation: ${props =>
		props.viewState === ViewState.IN_PROGRESS && moveFromRight}
    0.5s cubic-bezier(0.21, 1.04, 0.58, 1.15);
  animation-fill-mode: forwards;
  animation-delay: 0.16s;

  width: 430px;
  margin-bottom: 8px;

  transform: translateX(100vw);
`;

const SecondInputField = styled(InputField)<{ viewState: ViewState }>`
  animation: ${props =>
		props.viewState === ViewState.IN_PROGRESS && moveFromRight}
    0.5s cubic-bezier(0.21, 1.04, 0.58, 1.15);
  animation-fill-mode: forwards;
  animation-delay: 0.24s;
  width: 430px;

  margin-bottom: 24px;

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
  animation-delay: 0.32s;
`;

interface PreCheckoutNameCollectionProps {
  viewState: ViewState;
  onContinue: (name: string, email: string) => void;
}

const PreCheckoutNameCollection = (props: PreCheckoutNameCollectionProps) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	return (
		<Column viewState={ props.viewState }>
			<Title viewState={ props.viewState }>
        Almost done! But we need your name first.
			</Title>
			<Subtitle viewState={ props.viewState }>
        Don&apos;t worry, we take your privacy very seriously.
			</Subtitle>
			<FirstInputField
				label='Full Name'
				placeholder='John Doe'
				type='text'
				value={ name }
				onChange={ newName => setName(newName) }
				viewState={ props.viewState }
			/>
			<SecondInputField
				label='Email Address'
				placeholder='email@example.com'
				type='email'
				value={ email }
				onChange={ newEmail => setEmail(newEmail) }
				viewState={ props.viewState }
			/>
			<Button
				viewState={ props.viewState }
				onClick={ () => props.onContinue(name, email) }
			>
        Next
			</Button>
		</Column>
	);
};

export default PreCheckoutNameCollection;
