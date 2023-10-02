'use client';

import React, { PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';

type CustomLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & LinkProps & PropsWithChildren & React.RefAttributes<HTMLAnchorElement> & {
	externalLink?: boolean;
};

const CustomLink: React.FC<CustomLinkProps> = ({
	href,
	externalLink,
	children,
	...restProps
}) => {
	return (
		<Link
			prefetch={ false }
			aria-label={ 'Redirect page' }
			href={ href }
			{ ...restProps }
			{ ...externalLink
				? {
					target: '_blank',
					rel: 'noopener noreferrer'
				}
				: {} }
		>
			{ children }
		</Link>
	);
};

export default CustomLink;
