import clsxm from '@/helpers/clsxm';

import ButtonCta from '../ButtonCta';
import { CheckCircleIcon } from '../Icons';

export type PackageContentProps = {
  title?: string;
  description?: string;
  list?: {
    title: string;
    description: string;
  }[];
  className?: string;
  titleClassName?: string;
};

const PackageContent: React.FC<PackageContentProps> = ({
	title,
	description,
	list,
	className,
	titleClassName,
}) => {
	return (
		<div className={ clsxm('max-lg:px-4 flex flex-col gap-[42px]', className) }>
			<div>
				<h2
					className={ clsxm(
						'h5 lg:h3 max-xs3:text-[6vw] -tracking-0.04em',
						titleClassName
					) }
				>
					{ title }
				</h2>

				<p className='mt-3.5 body-small lg:max-w-[434px]'>{ description }</p>
			</div>
			<ButtonCta
				href='/pricing'
				className='w-full sm:w-fit'>
        Join Geviti
			</ButtonCta>

			<div className='space-y-6 lg:max-w-[511px]'>
				{ list?.map(item => (
					<div key={ item.title }>
						<div className='flex items-center gap-3.5 -tracking-0.04em font-medium h6'>
							<CheckCircleIcon className='w-18px h-18px text-[#4AADF6] shrink-0' />
							{ item.title }
						</div>

						<div className='pl-8 pt-1 text-sm text-grey-primary lg:max-w-[460px]'>
							{ item.description }
						</div>
					</div>
				)) }
			</div>
		</div>
	);
};

export default PackageContent;
