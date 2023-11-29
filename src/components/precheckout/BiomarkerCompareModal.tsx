import React from 'react';
import styled from 'styled-components';

import { ChevronRight } from '@/components/Icons';
import PreCheckoutBiomarkersTable from '@/components/precheckout/PreChechkoutBiomarkersTable';

const Column = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f2f2f2;
  z-index: 10;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${props => (props.isOpen ? 1 : 0)};

  transition:
    0.2s visibility ease-out,
    0.2s opacity ease-out;
`;

const ExpandTablesRow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 20px 0;
  gap: 4px;

  span {
    color: #181a1c;
    font-size: 14px;
    font-weight: 600;
  }
`;

interface BiomarkerCompareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BiomarkerCompareModal = ({
	isOpen,
	onClose,
}: BiomarkerCompareModalProps) => {
	return (
		<Column isOpen={ isOpen }>
			<ExpandTablesRow onClick={ onClose }>
				<span>Compare Tested Biomarkers</span>
				<ChevronRight style={ { transform: 'rotate(90deg)' } } />
			</ExpandTablesRow>
			<PreCheckoutBiomarkersTable />
		</Column>
	);
};

export default BiomarkerCompareModal;
