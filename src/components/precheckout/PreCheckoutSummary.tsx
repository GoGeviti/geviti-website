import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import doctorVisitIcon from '@/assets/precheckout/doctor-visit.png';
import gevitiBlueIcon from '@/assets/precheckout/geviti-blue.svg';
import secureCheckoutIcon from '@/assets/precheckout/secure-checkout.svg';
import summaryBackgroundImage from '@/assets/precheckout/summary-background-image.png';
import { ViewState } from '@/components/precheckout/WelcomeTransition';

const Column = styled.div<{ viewState: ViewState }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: black;
  color: white;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  z-index: ${props => (props.viewState === ViewState.IN_PROGRESS ? 1 : 0)};
  opacity: ${props => (props.viewState === ViewState.IN_PROGRESS ? 1 : 0)};

  transition: 0.3s opacity ease-out;
`;

const Row = styled.div`
  display: flex;
  gap: 210px;
  z-index: 2;

  @media (max-width: 1200px) {
    gap: 80px;
  }
`;

const TextCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;

const SummaryCard = styled.div`
  width: 400px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(40px);
  display: flex;
  flex-direction: column;
  padding: 30px;
  overflow: hidden;
`;

const CardHeading = styled.h2`
  background: #333434;
  padding: 30px;
  color: white;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: -0.6px;
  margin: -30px;
  margin-bottom: 30px;
`;

const CardRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const ItemName = styled.h3``;

const ItemPrice = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -1px;
  gap: 10px;
`;

const PriceCrossedOut = styled.span`
  text-decoration: line-through;
  color: rgba(251, 251, 251, 0.3);
  font-weight: 400;
`;

const PriceFree = styled.span`
  color: #60c57c;
  margin-top: -1px;
`;

const TotalRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 16px;
`;

const TotalText = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: white;
  letter-spacing: -0.64px;
  margin-bottom: 22px;
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  height: 45px;
  border-radius: 1000px;
  gap: 8px;
  cursor: pointer;

  span {
    font-weight: 600;
    font-size: 14px;
    color: #181a1c;
  }

  &:hover {
    opacity: 0.85;
  }

  transition: 0.1s opacity ease-out;
`;

const Heading = styled.h2`
  font-size: 36px;
  color: #f2f2f2;
  letter-spacing: -1.44px;
  margin-bottom: 8px;
`;

const Subheading = styled.p`
  font-size: 14px;
  color: rgba(242, 242, 242, 0.7);
  margin-bottom: 44px;
`;

const StepRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StepNumber = styled.span`
  background: rgba(255, 255, 255, 0.2);
  height: 46px;
  width: 46px;
  border-radius: 50%;
  color: white;
  flex-shrink: 0;
  font-size: 26px;
  letter-spacing: -1.04px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StepText = styled.p`
  font-size: 16px;
  color: white;
  letter-spacing: -0.64px;
`;

const BackgroundImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

const steps = [
	'Proceed to checkout, and begin then begin the onboarding process.',
	'Once account is activated, we’ll send you a link to schedule your mobile blood draw.',
	'Once the results are in, we’ll notify you to schedule your doctor telehealth visit.',
	'Finally, we will mail your custom treatment plan every month!',
];

interface PreCheckoutSummaryProps {
  viewState: ViewState;
  onContinue: (planID: 'essentials' | 'ultimate' | 'comprehensive') => void;
  selectedPlanID: 'essentials' | 'ultimate' | 'comprehensive';
}

const PreCheckoutSummary = (props: PreCheckoutSummaryProps) => {
	const panelPrice =
    props.selectedPlanID === 'ultimate'
    	? '$605.00'
    	: props.selectedPlanID === 'comprehensive'
    		? '$475.00'
    		: props.selectedPlanID === 'essentials'
    			? '$300.00'
    			: 'Continue to see price';

	return (
		<>
			<Column viewState={ props.viewState }>
				<Row>
					<TextCol className='font-Poppins'>
						<Heading>Great choice!</Heading>
						<Subheading className='font-BRSonoma'>
              You’re almost ready to begin your Geviti journey.
							<br />
              Here’s how to get started:
						</Subheading>
						{ steps.map((step, index) => (
							<StepRow key={ step }>
								<StepNumber>{ index + 1 }</StepNumber>
								<StepText>{ step }</StepText>
							</StepRow>
						)) }
					</TextCol>
					<SummaryCard className='font-Poppins'>
						<CardHeading className='font-BRSonoma'>Order Summary</CardHeading>
						<CardRow>
							<Image
								src={ gevitiBlueIcon }
								height={ 44 }
								width={ 44 }
								alt='' />
							<div className='flex flex-col'>
								<ItemName>1st Month Subscription</ItemName>
								<ItemPrice>
									<PriceCrossedOut>$99.99</PriceCrossedOut>
									<PriceFree>FREE!</PriceFree>
								</ItemPrice>
							</div>
						</CardRow>
						<CardRow>
							<Image
								src={ doctorVisitIcon }
								height={ 44 }
								width={ 44 }
								alt='' />
							<div className='flex flex-col'>
								<ItemName>Telehealth Doctor Visit</ItemName>
								<ItemPrice>
									<PriceCrossedOut>$99.99</PriceCrossedOut>
									<PriceFree>FREE!</PriceFree>
								</ItemPrice>
							</div>
						</CardRow>
						<CardRow>
							<Image
								src={ doctorVisitIcon }
								height={ 44 }
								width={ 44 }
								alt='' />
							<div className='flex flex-col'>
								<ItemName>
									{ props.selectedPlanID === 'ultimate'
										? 'Ultimate Panel'
										: props.selectedPlanID === 'comprehensive'
											? 'Comprehensive Panel'
											: props.selectedPlanID === 'essentials'
												? 'Essentials Panel'
												: 'Blood Panel' }
								</ItemName>
								<ItemPrice>{ panelPrice }</ItemPrice>
							</div>
						</CardRow>
						<TotalRow>
							<TotalText>Total</TotalText>
							<TotalText>{ panelPrice }</TotalText>
						</TotalRow>
						<ButtonRow onClick={ () => props.onContinue(props.selectedPlanID) }>
							<Image
								src={ secureCheckoutIcon }
								width={ 14 }
								height={ 16 }
								alt='' />
							<span>Secure Checkout</span>
						</ButtonRow>
					</SummaryCard>
				</Row>
				<BackgroundImage
					alt=''
					src={ summaryBackgroundImage } />
			</Column>
		</>
	);
};

export default PreCheckoutSummary;
