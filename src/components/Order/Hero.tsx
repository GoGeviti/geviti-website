import React from 'react';

const Hero: React.FC = () => {
	return (
		<div className='flex flex-col gap-11px text-grey-secondary'>
			<p className='uppercase text-pretitle'>GET STARTED WITH GEVITI</p>
			<h1 className='text-[32px] md:text-4xl lg:text-[40px] lg:leading-[98.75%] font-Poppins -tracking-0.04em'>Your Order</h1>
		</div>
	);
};

export default Hero;