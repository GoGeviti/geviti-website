import Navbar from '../Navbar/Landing';

import ButtonCTA from './ButtonCTA';

const Hero = () => {
	return (
		<>
			<Navbar
				theme='light'
				className='!backdrop-blur-[25px]'
				background='!bg-grey-50/10'
			/>

			<div className='relative isolate overflow-hidden container-center bg-midnight-blue'>
				<div className='pt-[165.3px] lg:pt-[267px] w-full max-w-[1042px] mx-auto'>
					<svg
						width='1042'
						height='263'
						viewBox='0 0 1042 263'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='w-full h-auto'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M794.428 0H745.09V44.2298H794.428V0ZM965.031 259.422C960.26 260.391 944.6 262.641 902.054 262.641H902.026C849.826 262.641 849.826 220.518 849.826 189.76V104.946H822.856V63.4214H849.826V4.21094H899.444V63.4499H965.031V104.974H899.444V177.884V184.633C899.444 195.712 901.296 202.177 905.59 206.278C912.971 213.313 926.218 212.487 952.627 210.835C956.471 210.579 960.597 210.323 965.031 210.066V259.422ZM745.09 64.1152H794.428V262.651H745.09V64.1152ZM992.479 64.1152H1041.82V262.651H992.479V64.1152ZM443.703 196.597C438.848 207.334 425.096 219.295 387.995 219.295C350.893 219.295 334.083 205.539 330.041 176.005L329.62 172.986H493.462C495.707 149.063 493.378 108.108 457.932 81.7642L454.901 79.6567C437.192 67.1538 414.684 60.8027 387.995 60.8027C320.64 60.8027 281.995 97.5707 281.995 161.708C281.995 225.846 318.647 262.614 387.995 262.614C448.278 262.614 485.099 239.203 492.031 196.568H443.703V196.597ZM332.23 138.127C339.19 115.257 357.432 104.15 387.995 104.15C428.773 104.15 439.297 122.32 443.9 138.155L444.882 141.544H331.192L332.23 138.098V138.127ZM992.479 0H1041.82V44.2298H992.479V0ZM671.364 64.3711L612.456 218.335H603.279L544.372 64.3711H492.059L567.918 262.651H647.846L723.677 64.3711H671.364ZM133.7 187.891V141.981H253.62V262.965H207.398V229.615L203.048 233.545C200.354 236.051 197.407 238.386 194.432 240.551C178.407 252.285 158.341 259.69 136.507 262.025C116.833 264.133 96.2338 261.598 77.0656 254.649C61.6581 249.067 48.1309 240.893 36.9051 230.355C25.3424 219.618 15.9969 205.862 9.87877 190.71C3.3397 174.477 0 156.022 0 135.886C0 59.7013 51.639 8.55078 128.424 8.55078C147.059 8.55078 165.722 11.7121 183.15 18.4049C199.007 24.4712 213.937 33.4995 226.089 45.5751C238.915 58.3058 249.158 75.0237 252.133 93.1656C253.228 99.8015 253.34 106.637 253.34 113.358H200.27C200.27 105.184 199.287 96.1845 195.555 88.8366C192.075 81.9444 186.518 76.3338 180.175 72.1472C165.076 62.1791 146.049 59.9576 128.424 59.9576C79.0021 59.9576 49.5342 88.324 49.5342 135.886C49.5342 177.61 72.4069 204.808 112.315 210.533C118.265 211.387 149.136 214.548 171.559 192.448L176.162 187.891H133.7Z'
							fill='url(#paint0_radial_15169_41032)'
							style={ { mixBlendMode: 'screen' } }
						/>
						<defs>
							<radialGradient
								id='paint0_radial_15169_41032'
								cx='0'
								cy='0'
								r='1'
								gradientUnits='userSpaceOnUse'
								gradientTransform='translate(520.909 62.7627) rotate(90) scale(424.237 1220.14)'
							>
								<stop stopColor='#2D2E83' />
								<stop
									offset='0.18'
									stopColor='#212261' />
								<stop
									offset='0.43'
									stopColor='#131337' />
								<stop
									offset='0.66'
									stopColor='#0B0F26' />
								<stop
									offset='0.86'
									stopColor='#0B0F26' />
								<stop
									offset='1'
									stopColor='#0B0F26' />
							</radialGradient>
						</defs>
					</svg>
				</div>
				<div className='mt-[58.3px] lg:mt-[0.04px] max-w-[824px] mx-auto container-center w-full'>
					<div className='flex flex-col gap-y-6'>
						<h1 className='font-LibreCaslon font-normal text-[8vw]/normal xs3:text-[32px]/normal md:text-4xl lg:text-[64px]/normal -tracking-0.04em text-center text-grey-secondary'>
              Mobile Stem Cell Therapy
						</h1>
						<p className='font-Poppins text-[3vw]/5 xs3:text-xs/5 max-w-[343px] sm:max-w-[544px] text-center mx-auto text-blue-alice'>
              The world`&apos;s most powerful longevity treatment unlocks your
              body`&apos;s regenerative potential offering hope and healing for
              a wide range of conditions.
						</p>
					</div>
					<div className='mt-[42px] lg:mt-6 flex justify-center'>
						<ButtonCTA className='max-sm:w-full'>Coming Soon</ButtonCTA>
					</div>
				</div>

				<div
					style={ {
						fill: 'linear-gradient(184deg, #2D2E83 -11.49%, #212261 11.59%, #131337 43.63%, #080819 73.12%, #020206 98.75%, #000 116.7%)',
						// opacity: 0.5,
						// backgroundBlendMode: 'screen',
						mixBlendMode: 'screen',
					} }
					className='max-lg:hidden top-0 right-0 absolute transform-gpu aspect-[1178/817] w-[1178px]'
				>
					<svg
						width='1261'
						height='689'
						viewBox='0 0 1261 689'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g
							style={ { mixBlendMode: 'screen' } }
							opacity='0.5'
							filter='url(#filter0_f_15169_41041)'
						>
							<path
								d='M153.38 461.614L1260.83 -343.999L632.611 535.673L153.38 461.614Z'
								fill='url(#paint0_linear_15169_41041)'
								style={ { mixBlendMode: 'screen' } }
							/>
						</g>
						<defs>
							<filter
								id='filter0_f_15169_41041'
								x='0.0796356'
								y='-497.298'
								width='1414.05'
								height='1186.27'
								filterUnits='userSpaceOnUse'
								colorInterpolationFilters='sRGB'
							>
								<feFlood
									floodOpacity='0'
									result='BackgroundImageFix' />
								<feBlend
									mode='normal'
									in='SourceGraphic'
									in2='BackgroundImageFix'
									result='shape'
								/>
								<feGaussianBlur
									stdDeviation='76.65'
									result='effect1_foregroundBlur_15169_41041'
								/>
							</filter>
							<linearGradient
								id='paint0_linear_15169_41041'
								x1='692.459'
								y1='-421.539'
								x2='738.72'
								y2='702.792'
								gradientUnits='userSpaceOnUse'
							>
								<stop stopColor='#2D2E83' />
								<stop
									offset='0.18'
									stopColor='#212261' />
								<stop
									offset='0.43'
									stopColor='#131337' />
								<stop
									offset='0.66'
									stopColor='#080819' />
								<stop
									offset='0.86'
									stopColor='#020206' />
								<stop offset='1' />
							</linearGradient>
						</defs>
					</svg>
				</div>

				<div
					style={ {
						fill: 'linear-gradient(184deg, #2D2E83 -11.49%, #212261 11.59%, #131337 43.63%, #080819 73.12%, #020206 98.75%, #000 116.7%)',
						// opacity: 0.5,
						// backgroundBlendMode: 'screen',
						mixBlendMode: 'screen',
					} }
					className='max-lg:hidden absolute top-0 left-[120px] transform-gpu aspect-[416/507] w-[416px]'
				>
					<svg
						width='775'
						height='471'
						viewBox='0 0 775 471'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g
							style={ { mixBlendMode: 'screen' } }
							opacity='0.5'
							filter='url(#filter0_f_15169_41042)'
						>
							<path
								d='M153.483 222.641L621.548 -153.42L308.537 316.985L153.483 222.641Z'
								fill='url(#paint0_linear_15169_41042)'
								style={ { mixBlendMode: 'screen' } }
							/>
						</g>
						<defs>
							<filter
								id='filter0_f_15169_41042'
								x='0.182999'
								y='-306.72'
								width='774.665'
								height='777.004'
								filterUnits='userSpaceOnUse'
								colorInterpolationFilters='sRGB'
							>
								<feFlood
									floodOpacity='0'
									result='BackgroundImageFix' />
								<feBlend
									mode='normal'
									in='SourceGraphic'
									in2='BackgroundImageFix'
									result='shape'
								/>
								<feGaussianBlur
									stdDeviation='76.65'
									result='effect1_foregroundBlur_15169_41042'
								/>
							</filter>
							<linearGradient
								id='paint0_linear_15169_41042'
								x1='436.498'
								y1='-259.051'
								x2='283.514'
								y2='419.989'
								gradientUnits='userSpaceOnUse'
							>
								<stop stopColor='#2D2E83' />
								<stop
									offset='0.18'
									stopColor='#212261' />
								<stop
									offset='0.43'
									stopColor='#131337' />
								<stop
									offset='0.66'
									stopColor='#080819' />
								<stop
									offset='0.86'
									stopColor='#020206' />
								<stop offset='1' />
							</linearGradient>
						</defs>
					</svg>
				</div>

				<div
					style={ {
						fill: 'linear-gradient(184deg, #2D2E83 -11.49%, #212261 11.59%, #131337 43.63%, #080819 73.12%, #020206 98.75%, #000 116.7%)',
						// opacity: 0.5,
						// backgroundBlendMode: 'screen',
						mixBlendMode: 'screen',
					} }
					className='lg:hidden absolute right-0 top-0'
				>
					<svg
						width='367'
						height='292'
						viewBox='0 0 367 292'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g
							// style={{ mixBlendMode: 'screen' }}
							opacity='0.5'
							filter='url(#filter0_f_15213_46040)'
						>
							<path
								d='M55.0967 211.599L446.325 -73.0003L224.395 237.762L55.0967 211.599Z'
								fill='url(#paint0_linear_15213_46040)'
								// style={{ mixBlendMode: 'screen' }}
							/>
						</g>
						<defs>
							<filter
								id='filter0_f_15213_46040'
								x='0.940357'
								y='-127.156'
								width='499.541'
								height='419.074'
								filterUnits='userSpaceOnUse'
								colorInterpolationFilters='sRGB'
							>
								<feFlood
									floodOpacity='0'
									result='BackgroundImageFix' />
								<feBlend
									mode='normal'
									in='SourceGraphic'
									in2='BackgroundImageFix'
									result='shape'
								/>
								<feGaussianBlur
									stdDeviation='27.0782'
									result='effect1_foregroundBlur_15213_46040'
								/>
							</filter>
							<linearGradient
								id='paint0_linear_15213_46040'
								x1='245.537'
								y1='-100.393'
								x2='261.88'
								y2='296.8'
								gradientUnits='userSpaceOnUse'
							>
								<stop stopColor='#2D2E83' />
								<stop
									offset='0.18'
									stopColor='#212261' />
								<stop
									offset='0.43'
									stopColor='#131337' />
								<stop
									offset='0.66'
									stopColor='#080819' />
								<stop
									offset='0.86'
									stopColor='#020206' />
								<stop offset='1' />
							</linearGradient>
						</defs>
					</svg>
				</div>

				<div
					style={ {
						fill: 'linear-gradient(184deg, #2D2E83 -11.49%, #212261 11.59%, #131337 43.63%, #080819 73.12%, #020206 98.75%, #000 116.7%)',
						// opacity: 0.5,
						// backgroundBlendMode: 'screen',
						mixBlendMode: 'screen',
					} }
					className='lg:hidden absolute left-0 top-0'
				>
					<svg
						width='275'
						height='215'
						viewBox='0 0 275 215'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g
							// style={{ mixBlendMode: 'screen' }}
							opacity='0.5'
							filter='url(#filter0_f_15213_46041)'
						>
							<path
								d='M54.8996 127.178L220.253 -5.67336L109.675 160.507L54.8996 127.178Z'
								fill='url(#paint0_linear_15213_46041)'
								// style={{ mixBlendMode: 'screen' }}
							/>
						</g>
						<defs>
							<filter
								id='filter0_f_15213_46041'
								x='0.743214'
								y='-59.8302'
								width='273.666'
								height='274.492'
								filterUnits='userSpaceOnUse'
								colorInterpolationFilters='sRGB'
							>
								<feFlood
									floodOpacity='0'
									result='BackgroundImageFix' />
								<feBlend
									mode='normal'
									in='SourceGraphic'
									in2='BackgroundImageFix'
									result='shape'
								/>
								<feGaussianBlur
									stdDeviation='27.0782'
									result='effect1_foregroundBlur_15213_46041'
								/>
							</filter>
							<linearGradient
								id='paint0_linear_15213_46041'
								x1='154.88'
								y1='-42.9896'
								x2='100.836'
								y2='196.895'
								gradientUnits='userSpaceOnUse'
							>
								<stop stopColor='#2D2E83' />
								<stop
									offset='0.18'
									stopColor='#212261' />
								<stop
									offset='0.43'
									stopColor='#131337' />
								<stop
									offset='0.66'
									stopColor='#080819' />
								<stop
									offset='0.86'
									stopColor='#020206' />
								<stop offset='1' />
							</linearGradient>
						</defs>
					</svg>
				</div>
			</div>
		</>
	);
};

export default Hero;
