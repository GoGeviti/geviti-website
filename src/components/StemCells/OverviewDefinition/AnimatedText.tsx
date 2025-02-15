import SectionAnimate from '../SectionAnimate';

const AnimatedText = ({ text }: { text: string }) => {
	const textMobile = text?.replaceAll('[d/n]', ' ')?.split('[m/n]');
	const textDesktop = text?.replaceAll('[m/n]', ' ')?.split('[d/n]');

	const renderTextPerRows = (currentText: string[]) => {
		return (
			<SectionAnimate
				by='line'
				animation='blurInUp'
				segmentStyle={ {
					background:
            'radial-gradient(180.6% 170.29% at 50.02% 50%, #DFDFFF 0%, #D8D9FF 18%, #161645 43%, #080819 66%, #020206 86%, #000 100%)',
					backgroundClip: 'text',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					mixBlendMode: 'screen',
				} }
				className='text-center'
				segmentClassName='overflow-hidden -tracking-0.04em font-medium text-[6.4vw]/normal xs3:text-2xl/normal sm:text-3xl lg:text-[42px]/normal'
			>
				{ currentText.join('\n') }
			</SectionAnimate>
		);
	};

	return (
		<>
			<div className='max-lg:hidden'>{ renderTextPerRows(textDesktop) }</div>
			<div className='lg:hidden'>{ renderTextPerRows(textMobile) }</div>
		</>
	);
};

export default AnimatedText;
