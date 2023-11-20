import Link from 'next/link';
import styled from 'styled-components';

import clsxm from '@/helpers/clsxm';

import { ChevronDown } from '../Icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 9px;
  padding: 11px 14px;
  border-radius: 9px;
  height: 43px;
  align-self: flex-start;
  overflow: hidden;

  svg {
  transform: rotate(0deg);
	transition: 0.2s transform ease-out;
  }
  
  &:hover {
    background: linear-gradient(
      180deg,
      rgba(15, 23, 27, 0.44) 0%,
      rgba(15, 23, 27, 0.44) 100%
    );
    backdrop-filter: blur(27px);
    height: 128px;
    transform: translateY(43px);

    svg {
      transform: rotate(180deg);
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

type ResourcesDropdownProps = {
  theme?: 'dark' | 'light';
}

const ResourcesDropdown:React.FC<ResourcesDropdownProps> = ({
	theme
}) => {
	return (
		<Container>
			<div className='flex items-center gap-[15px] font-Poppins'>
				<PrimaryText className={
					clsxm(
						theme === 'dark' ? '!text-grey-secondary' : '!text-primary'
					)
				}>Resources</PrimaryText>
				<ChevronDown className={
					clsxm(
						'w-4 h-4',
						theme === 'dark' ? '!text-grey-secondary' : '!text-primary'
					)
				}/>
				{ /* <Image
          className={
            clsxm(
              theme === 'dark' ? '' : '!text-primary'
            )
          }
					src='/images/icons/caret-down.svg'
					width={ 16 }
					height={ 16 }
					alt='Dropdown caret'
				/> */ }
			</div>
			<OtherLink
				className={
					clsxm(
						theme === 'dark' ? '!text-grey-primary hover:!text-grey-secondary' : '!text-primary/70 hover:!text-primary'
					)
				}
				href='/blog'>Blog</OtherLink>
			<OtherLink
				className={
					clsxm(
						theme === 'dark' ? '!text-grey-primary hover:!text-grey-secondary' : '!text-primary/70 hover:!text-primary'
					)
				}
				href='/faq'>FAQ</OtherLink>
			<OtherLink
				className={
					clsxm(
						theme === 'dark' ? '!text-grey-primary hover:!text-grey-secondary' : '!text-primary/70 hover:!text-primary'
					)
				}
				href='/contact-us'>Help Center</OtherLink>
		</Container>
	);
};

export default ResourcesDropdown;
