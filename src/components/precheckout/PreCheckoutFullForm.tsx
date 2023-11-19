import { useState } from 'react';
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

const SelectInputsRow = styled.div<{ viewState: ViewState }>`
  display: flex;
  gap: 8px;

  animation: ${props =>
		props.viewState === ViewState.IN_PROGRESS && moveFromRight}
    0.5s cubic-bezier(0.21, 1.04, 0.58, 1.15);
  animation-fill-mode: forwards;
  animation-delay: 0.24s;
  width: 430px;

  transform: translateX(100vw);

  margin-bottom: 8px;
`;

const SelectInput = styled.select`
  border: none;
  border-radius: 10px;
  height: 46px;
  font-weight: 500;
  font-size: 13px;
  color: #181a1c;
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

const SelectInputCol = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Label = styled.label`
  font-size: 12px;
  color: #181a1c;
  margin-bottom: 4px;
`;

const FreeVisitRow = styled.div<{ viewState: ViewState }>`
  display: flex;
  align-items: center;
  background: #EFF9F2;
  border: 1.5px solid #60c57c;
  border-radius: 10px;
  padding: 8px;
  width: 430px;

  opacity: ${props => (props.viewState === ViewState.IN_PROGRESS ? 1 : 0)};
  transform: scale(
    ${props => (props.viewState === ViewState.IN_PROGRESS ? 1 : 0.8)}
  );

  transition:
    opacity 0.5s cubic-bezier(0.15, 1.14, 0.88, 0.98),
    transform 0.75s cubic-bezier(0.21, 1.04, 0.58, 1.15);

  transition-delay: 1.33s;
`;

const LogoLottie = styled(Player)`
  width: 60px;
  height: 60px;
`;

interface PreCheckoutFullFormProps {
  viewState: ViewState;
  onContinue: (usState: string, sex: string, birthday: string) => void;
}

const PreCheckoutFullForm = (props: PreCheckoutFullFormProps) => {
	const [usState, setUsState] = useState('AZ');
	const [sex, setSex] = useState('male');
	const [birthday, setBirthday] = useState('');

	return (
		<Column viewState={ props.viewState }>
			<FreeVisitRow viewState={ props.viewState }>
				<LogoLottie
					src='https://lottie.host/f3372ff0-3570-431d-a529-7cc4fbd5481a/huZVbKVygH.json'
					autoplay
					keepLastFrame
				/>
				WIP
			</FreeVisitRow>
			<Title viewState={ props.viewState }>
        We need some final information to determine eligibility.
			</Title>
			<Subtitle viewState={ props.viewState }>
        We need this information in order to confirm your eligibility.
			</Subtitle>
			<SelectInputsRow viewState={ props.viewState }>
				<SelectInputCol>
					<Label>State</Label>
					<SelectInput
						value={ usState }
						onChange={ e => setUsState(e.target.value) }
					>
						<option value='AL'>Alabama</option>
						<option value='AK'>Alaska</option>
						<option value='AZ'>Arizona</option>
						<option value='AR'>Arkansas</option>
						<option value='CA'>California</option>
						<option value='CO'>Colorado</option>
						<option value='CT'>Connecticut</option>
						<option value='DE'>Delaware</option>
						<option value='DC'>District Of Columbia</option>
						<option value='FL'>Florida</option>
						<option value='GA'>Georgia</option>
						<option value='HI'>Hawaii</option>
						<option value='ID'>Idaho</option>
						<option value='IL'>Illinois</option>
						<option value='IN'>Indiana</option>
						<option value='IA'>Iowa</option>
						<option value='KS'>Kansas</option>
						<option value='KY'>Kentucky</option>
						<option value='LA'>Louisiana</option>
						<option value='ME'>Maine</option>
						<option value='MD'>Maryland</option>
						<option value='MA'>Massachusetts</option>
						<option value='MI'>Michigan</option>
						<option value='MN'>Minnesota</option>
						<option value='MS'>Mississippi</option>
						<option value='MO'>Missouri</option>
						<option value='MT'>Montana</option>
						<option value='NE'>Nebraska</option>
						<option value='NV'>Nevada</option>
						<option value='NH'>New Hampshire</option>
						<option value='NJ'>New Jersey</option>
						<option value='NM'>New Mexico</option>
						<option value='NY'>New York</option>
						<option value='NC'>North Carolina</option>
						<option value='ND'>North Dakota</option>
						<option value='OH'>Ohio</option>
						<option value='OK'>Oklahoma</option>
						<option value='OR'>Oregon</option>
						<option value='PA'>Pennsylvania</option>
						<option value='RI'>Rhode Island</option>
						<option value='SC'>South Carolina</option>
						<option value='SD'>South Dakota</option>
						<option value='TN'>Tennessee</option>
						<option value='TX'>Texas</option>
						<option value='UT'>Utah</option>
						<option value='VT'>Vermont</option>
						<option value='VA'>Virginia</option>
						<option value='WA'>Washington</option>
						<option value='WV'>West Virginia</option>
						<option value='WI'>Wisconsin</option>
						<option value='WY'>Wyoming</option>
					</SelectInput>
				</SelectInputCol>
				<SelectInputCol>
					<Label>Sex</Label>
					<SelectInput
						value={ sex }
						onChange={ e => setSex(e.target.value) }>
						<option value='male'>Male</option>
						<option value='female'>Female</option>
					</SelectInput>
				</SelectInputCol>
			</SelectInputsRow>
			<SecondInputField
				label='Birthday (DD/MM/YYYY)'
				placeholder='DD/MM/YYYY'
				type='text'
				value={ birthday }
				onChange={ newEmail => setBirthday(newEmail) }
				viewState={ props.viewState }
			/>
			<span style={ { display: props.viewState === ViewState.IN_PROGRESS ? 'flex' : 'none' } }>Checkbox WIP</span>

			<Button
				viewState={ props.viewState }
				onClick={ () => props.onContinue(usState, sex, birthday) }
			>
        Next
			</Button>
		</Column>
	);
};

export default PreCheckoutFullForm;
