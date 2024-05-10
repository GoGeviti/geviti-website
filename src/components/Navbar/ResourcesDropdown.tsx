import Link from 'next/link';
import styled from 'styled-components';

import clsxm from '@/helpers/clsxm';

import { ChevronDown } from '../Icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 9px;
  padding: 11px;
  border-radius: 9px;
  height: 43px;
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
			color: white !important;
    }
		span {
			color: white !important;
		}
  }
`;

const PrimaryText = styled.span`
  color: white;
  font-size: 14px;
  font-weight: 500;
	&:hover {
		color: white !important;
	}
`;

const OtherLink = styled(Link)`
  color: rgba(251, 251, 251, 0.28);
  font-size: 14px;
  font-weight: 500;
  
  &:hover {
	color: white;
  }
`;

type DropdownProps = {
	theme?: 'dark' | 'light';
	menuName: string;
	items: {
		name: string;
		href: string;
	}[];
};

const Dropdown: React.FC<DropdownProps> = ({
	theme,
	menuName,
	items
}) => {
	return (
		<Container>
			<div className='flex items-center gap-[15px] font-Poppins'>
				<PrimaryText className={
					clsxm(
						theme === 'dark' ? '!text-grey-secondary' : '!text-primary'
					)
				}>{ menuName }</PrimaryText>
				<ChevronDown className={
					clsxm(
						'w-4 h-4',
						theme === 'dark' ? '!text-grey-secondary' : '!text-primary'
					)
				} />
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
			{ items.map(item => (
				<OtherLink
					key={ item.name }
					className={
						clsxm(
							'!font-Poppins'
						)
					}
					href={ item.href }>{ item.name }</OtherLink>
			)) }
		</Container>
	);
};

export default Dropdown;
