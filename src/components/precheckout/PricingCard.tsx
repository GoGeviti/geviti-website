import Image from 'next/image';
import styled from 'styled-components';

import blueCheckCircle from '@/assets/precheckout/blue-check-circle.svg';
import QuestionTooltip from '@/components/Home/QuestionTooltip';

const SelectPlanButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #181a1c;
  border-radius: 1000px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  height: 45px;
  margin-top: 20px;
  cursor: pointer;
`;

const GreyPillText = styled.span`
  height: 28px;
  padding: 0 9px;
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #181a1c;
  background: #181a1c1a;
  font-weight: 700;
  border-radius: 14px;
  align-self: flex-start;
  margin-bottom: 8px;

  transition: 0.2s background ease-out;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background: white;
  opacity: 0.7;

  &:first-child {
    border-radius: 30px 0 0 30px;
    border-right: 1px solid rgba(145, 155, 159, 0.2);
    transform-origin: left;

    &:hover {
      transform: scale(1.1) translateX(-9%);
    }
  }

  &:last-child {
    border-radius: 0 30px 30px 0;
    transform-origin: right;

    &:hover {
      transform: scale(1.1) translateX(9%);
    }
  }

  &:nth-child(2) {
    border-right: 1px solid rgba(145, 155, 159, 0.2);

    &:hover {
      &:first-child {
        transform: scale(1.1) translateX(-9%);
      }
      transform: scale(1.1);
    }
  }

  &:hover {
    border-radius: 30px;
    border: 2px solid #a3e0ff !important;
    box-shadow: 0 15px 30px 0 rgba(16, 24, 40, 0.1);
    padding: 40px;
    opacity: 1;
    z-index: 10;

    ${GreyPillText} {
      background: #a3e0ff;
    }
  }

  transition:
    0.2s border-radius ease-in-out,
    0.2s border ease-in-out,
    0.2s box-shadow ease-in-out,
    0.2s transform ease-in-out,
    0.2s padding ease-out;
`;

const TopRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 350px;
  padding-bottom: 13px;
  border-bottom: 1px solid rgba(24, 26, 28, 0.1);
  margin-bottom: 24px;
`;

const Name = styled.h2`
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.475px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 3px;
`;

const PriceBig = styled.span`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -1.44px;
`;

const PriceSmall = styled.span`
  color: #919b9f;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.464px;
  margin-bottom: 10px;
`;

const BiomarkersTested = styled.span`
  color: #ea3f62;
  text-align: right;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -1.44px;
`;

const BioTestedText = styled.span`
  color: #52585a;
  text-align: right;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.464px;
  margin-bottom: 10px;
`;

const FeatureRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
`;

const FeatureText = styled.span`
  color: #52585a;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.571px;
  margin-right: auto;
`;

interface PricingCardProps {
  name: string;
  priceUpfront: string;
  priceMonthly: string;
  features: {
    name: string;
    description?: string;
  }[];
  biomarkersTested: string;
  pillText: string;
  isHighlighted?: boolean;
  onChoose: () => void;
}

const PricingCard = (props: PricingCardProps) => {
	return (
		<Card className='font-BRSonoma'>
			<GreyPillText>{ props.pillText }</GreyPillText>
			<TopRow>
				<div className='flex flex-col font-Poppins'>
					<Name>{ props.name }</Name>
					<PriceRow>
						<PriceBig>{ props.priceUpfront }</PriceBig>
						<PriceSmall>+{ props.priceMonthly } monthly</PriceSmall>
					</PriceRow>
				</div>
				<div className='flex flex-col'>
					<BiomarkersTested>{ props.biomarkersTested }</BiomarkersTested>
					<BioTestedText>Biomarkers tested</BioTestedText>
				</div>
			</TopRow>
			{ props.features.map(feature => (
				<FeatureRow
					key={ feature.name }
					className='font-Poppins'>
					{ !!feature.description && (
						<QuestionTooltip
							text={ feature.description }
						/>
					) }
					<FeatureText>{ feature.name }</FeatureText>
					<Image
						src={ blueCheckCircle }
						width={ 23 }
						height={ 23 }
						alt='Blue check circle'
					/>
				</FeatureRow>
			)) }
			<SelectPlanButton
				className='font-Poppins'
				onClick={ props.onChoose }>
        Select plan
			</SelectPlanButton>
		</Card>
	);
};

export default PricingCard;
