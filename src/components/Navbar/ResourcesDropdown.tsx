import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: default;
  background: linear-gradient(
    180deg,
    rgba(15, 23, 27, 0.44) 0%,
    rgba(15, 23, 27, 0) 100%
  );
  gap: 9px;
  backdrop-filter: blur(27px);
  padding: 11px 14px;
  border-radius: 9px;
  height: 43px;
  align-self: flex-start;
  overflow: hidden;

  img {
    transform: rotate(180deg);
	transition: 0.2s transform ease-out;
  }
  
  &:hover {
    height: 128px;
    transform: translateY(43px);

    img {
      transform: rotate(0deg);
    }
  }
`;

const PrimaryText = styled.span`
  color: white;
  font-size: 14px;
  font-weight: 500;
`;

const OtherLink = styled(Link)`
  color: rgba(251, 251, 251, 0.28);
  font-size: 14px;
  font-weight: 500;
  
  &:hover {
	color: white;
  }
`;

const ResourcesDropdown = () => {
	return (
		<Container>
			<div className='flex items-center gap-[15px] font-Poppins'>
				<PrimaryText>Resources</PrimaryText>
				<Image
					src='/images/icons/caret-down.svg'
					width={ 16 }
					height={ 16 }
					alt='Dropdown caret'
				/>
			</div>
			<OtherLink href='/blog'>Blog</OtherLink>
			<OtherLink href='/faq'>FAQ</OtherLink>
			<OtherLink href='/contact-us'>Help Center</OtherLink>
		</Container>
	);
};

export default ResourcesDropdown;
