import clsxm from '@/helpers/clsxm';

const PathText = ({
	title,
	description,
	titleClassName,
	descriptionClassName,
}: {
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) => {
	return (
		<div className='space-y-2 text-white'>
			<p
				className={ clsxm(
					'text-sm/6 font-semibold tracking-0.11em uppercase xl:whitespace-nowrap',
					titleClassName
				) }
			>
				{ title }
			</p>
			<p className={ clsxm('text-xs/5 lg:max-w-[245px]', descriptionClassName) }>
				{ description }
			</p>
		</div>
	);
};

export default PathText;
