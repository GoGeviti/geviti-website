import React from 'react'

import clsxm from '@/helpers/clsxm'

const Line = ({
	className
}:{
	className?:string
}) => {
	return (
		<div className={ clsxm(
			'lg:px-3',
			className
		) }>
			<div className='container-center'>
				<div className='h-[1px] w-full bg-grey-100' />
			</div>
		</div>
	)
}

export default Line