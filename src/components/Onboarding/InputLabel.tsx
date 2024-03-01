import React, { PropsWithChildren } from 'react';

const InputLabel: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<span className='font-BRSonoma text-xs leading-normal mb-[5px] flex font-normal'>
			{ children }
		</span>
	);
};

export const ErrorMessage: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<p className='text-red-primary text-[10px] mt-1 text-left'>{ children }</p>
	);
};

export default InputLabel;
