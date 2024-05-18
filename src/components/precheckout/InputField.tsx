/* eslint-disable no-unused-vars */
'use client';

import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 12px;
  color: #181a1c;
  margin-bottom: 4px;
`;

const Input = styled.input`
  background: #ffffff;
  border-radius: 10px;
  font-weight: 500;
  font-size: 13px;
  color: #181a1c;
  outline: none;
  border: none;
  padding: 14px 16px;
`;

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  className?: string;
}

const InputField = (props: InputFieldProps) => {
	return (
		<Column className={ props.className }>
			<Label>{ props.label }</Label>
			<Input
				type={ props.type }
				placeholder={ props.placeholder }
				value={ props.value }
				onChange={ e => props.onChange(e.target.value) }
			/>
		</Column>
	);
};

export default InputField;
