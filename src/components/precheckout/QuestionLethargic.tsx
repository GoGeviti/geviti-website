import styled, { keyframes } from 'styled-components';

import { ViewState } from '@/app/precheckout/page';

const Column = styled.div<{ viewState: ViewState }>`
  position: absolute;
  left: 50%;
  top: 120px;
   border: 1px solid red;
  
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1<{ viewState: ViewState }>`
  font-size: 36px;
  letter-spacing: -1.44px;
  color: #181a1c;
  margin-bottom: 12px;
  width: 430px;

  animation: ${props =>
		props.viewState === ViewState.IN_PROGRESS && moveFromRight}
    0.5s cubic-bezier(0.21, 1.04, 0.58, 1.15);
  animation-delay: 0.08s;
  animation-fill-mode: forwards;

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

interface QuestionLethargicProps {
  viewState: ViewState;
}

const QuestionLethargic = (props: QuestionLethargicProps) => {
	return (
		<Column viewState={ props.viewState }>
			<Title viewState={ props.viewState }>How often are you feeling lethargic, even with sufficient sleep?</Title>
		</Column>
	);
};

export default QuestionLethargic;
