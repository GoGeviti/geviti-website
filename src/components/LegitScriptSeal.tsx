/* eslint-disable @next/next/no-img-element */

import React from 'react';
// import Image from 'next/image';

const LegitScriptSeal: React.FC = () => {

	return (
		<>
			{ /* <Script
				src='http://static.legitscript.com/seals/29593502.js'
				strategy='lazyOnload'
			/> */ }
			<a
				href='https://www.legitscript.com/websites/?checker_keywords=gogeviti.com'
				target='_blank'
				title='Verify LegitScript Approval'
				rel='noreferrer'
			 >
				<img
					src='https://static.legitscript.com/seals/29593502.png'
					alt='LegitScript approved'
					width='100'
					height='86'
				/>
			</a>
		</>
	);
};

export default LegitScriptSeal;