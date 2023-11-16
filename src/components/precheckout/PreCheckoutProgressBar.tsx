import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  background: rgba(24, 27, 28, 0.1);
`;

const RowInner = styled.div<{ percentage: number }>`
  background: #a3e0ff;
  height: 2px;
  width: ${({ percentage }) => percentage}%;
  display: flex;
  
  transition: 0.2s width ease-out;
`;

interface PreCheckoutProgressBarProps {
  percentage: number;
}

const PreCheckoutProgressBar = ({
	percentage,
}: PreCheckoutProgressBarProps) => {
	return (
		<Row>
			<RowInner percentage={ percentage } />
		</Row>
	);
};

export default PreCheckoutProgressBar;
