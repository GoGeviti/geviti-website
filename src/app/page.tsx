import { NextPage } from 'next';

const Wrapper = styled.div`
  @media (max-width: 1024px) {
    span, p, h1, h2, h3 {
      zoom: 1.2;
    }
  }
`;

import styled from 'styled-components';

import { Footer, LandingComponent } from '@/components';

const HomePage: NextPage = () => {
	return (
		<Wrapper className='flex min-h-screen flex-col w-full bg-grey-background'>
			<LandingComponent.Hero />

			<LandingComponent.Steps />
			<LandingComponent.Flexible />
			<LandingComponent.RunningLogo />
			<LandingComponent.Quality />
			<LandingComponent.Therapy />
			<LandingComponent.Functional />
			<LandingComponent.Application />
			<LandingComponent.Dashboard />
			<LandingComponent.Investment />
			<LandingComponent.Products />
			<LandingComponent.Mission />

			<Footer landingPage />
		</Wrapper>
	);
};

export default HomePage;