import React, { FC, Fragment, ReactNode } from 'react'

import clsxm from '@/helpers/clsxm';

const Skeleton: FC<SkeletonProps> = ({ loading = true, className, children }) => {
	return (
		<Fragment>
			{ loading ? (
				<span className={
					clsxm(
						'inline-block bg-grey-700 rounded animate-skeletonLoading',
						className
					)
				} />
			) : (
				<Fragment>
					{ children }
				</Fragment>
			) }
		</Fragment>
	)
}
type SkeletonProps = {
  children: ReactNode;
  loading?: boolean;
  className?: string;
}
export default Skeleton;