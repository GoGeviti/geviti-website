import React, { Fragment } from 'react';
import Link from 'next/link';

import clsxm from '@/helpers/clsxm';

type PrivacyPolicyStatementProps = {
	highlightText?: string;
	theme?: 'light' | 'dark';
	checkout?: boolean;
};

const PrivacyPolicyStatement: React.FC<PrivacyPolicyStatementProps> = ({ highlightText, theme = 'dark', checkout = false }) => {
	const linkClassName = clsxm(
		'underline',
		theme === 'light' && 'text-primary',
		theme === 'dark' && 'text-blue-primary'
	);

	return (
		<span className={ clsxm(
			'text-lg lg:text-sm !leading-normal',
			theme === 'light' && 'text-grey-500',
			theme === 'dark' && 'text-grey-primary'
		) }>
			{ !checkout ? (
				<Fragment>
					<p>Before we continue, please review our <Link
						href='/privacy-policy'
						className={ linkClassName }>Privacy Policy</Link> and <Link
						href='/terms-and-conditions'
						className={ linkClassName }>Terms of Use</Link>.</p>
					<br className='lg:hidden' />
					<p>By clicking &quot;{ highlightText }&quot;, you automatically agree to abide by our policies and terms.</p>
				</Fragment>
			) : (
				<p>By checking the box, you confirm that you have read, understood, and agree to abide by our <Link
					href='/privacy-policy'
					className={ linkClassName }>Privacy Policy</Link> and <Link
					href='/terms-and-conditions'
					className={ linkClassName }>Terms of Use</Link>.</p>
			) }
		</span>
	);
};

export default PrivacyPolicyStatement;