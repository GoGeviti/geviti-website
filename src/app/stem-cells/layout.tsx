import type { Viewport } from 'next';

import { libreCaslon, playFairDisplay } from '@/constant/fonts';
import clsxm from '@/helpers/clsxm';

export const viewport: Viewport = {
	themeColor: '#0B0F26',
};

const StemCellsLayout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div
			className={ clsxm(
				libreCaslon.variable,
				playFairDisplay.variable,
				'bg-midnight-blue relative isolate min-h-screen'
			) }
		>
			{ children }
		</div>
	);
};

export default StemCellsLayout;
