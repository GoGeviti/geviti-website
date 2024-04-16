import Image from 'next/image';
import styled from 'styled-components';

import gevitiLogo from '@/assets/precheckout/geviti-logo.svg';
import previousStepIcon from '@/assets/precheckout/previous-step.svg';

const Row = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  padding: 0 20px;
  position: relative;

  @media (max-width: 1300px) {
    height: 60px;
  }
`;

const PreviousStepButton = styled.div`
  display: flex;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 1300px) {
    transform: scale(0.9);
  }
`;

const Logo = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const PreCheckoutNav = ({
	shouldInvertColors,
	onGoBack,
}: {
  shouldInvertColors: boolean;
  onGoBack: () => void;
}) => {
	return (
		<Row style={ { filter: `invert(${shouldInvertColors ? 1 : 0})` } }>
			<PreviousStepButton onClick={ onGoBack }>
				<Image
					src={ previousStepIcon }
					height={ 50 }
					width={ 50 }
					alt=''
					unoptimized
				/>
			</PreviousStepButton>
			<Logo>
				<Image
					src={ gevitiLogo }
					width={ 85 }
					height={ 20 }
					alt=''
					unoptimized />
			</Logo>
		</Row>
	);
};

export default PreCheckoutNav;
