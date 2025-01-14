'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { screens } from '@/helpers/style';

import Cards from './Cards';
import {
	CircleGradient, Path1, Path1Mobile, Path2, Path2Mobile
} from './svgs';
import Title from './Title';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
}

const InnovativeProcess = () => {
	useEffect(() => {
		if (window && window.innerWidth > 0) {
			const isMobile = window.innerWidth < screens.lg;

			const path1 = document.querySelector(
				isMobile ? '#sc_ip_path_1_m' : '#sc_ip_path_1'
			) as SVGPathElement;
			const path2 = document.querySelector(
				isMobile ? '#sc_ip_path_2_m' : '#sc_ip_path_2'
			) as SVGPathElement;
			const circle = isMobile ? '#sc_ip_circle_m' : '#sc_ip_circle_d';
			const box1 = '#sc_ip_box_1';
			const box2 = '#sc_ip_box_2';
			const boxMobile1 = '#sc_ip_box_wrapper_m_1';
			const boxMobile2 = '#sc_ip_box_wrapper_m_2';
			const boxContentMobile1 = '#sc_ip_box_content_m_1';
			const boxContentMobile2 = '#sc_ip_box_content_m_2';

			if (path1 && path2) {
				const strokeTl = gsap.timeline({
					scrollTrigger: {
						trigger: '#sc_ip_container',
						start: 'top 40%',
						end: 'bottom bottom',
						toggleActions: 'play none none none',
					},
				});

				const length1 = path1.getTotalLength();
				const length2 = path2.getTotalLength();

				strokeTl
					.set([box1, box2], { autoAlpha: 0, scale: 0.5 })
					.set(circle, { autoAlpha: 0 })
					.set([boxMobile1, boxMobile2, boxContentMobile1, boxContentMobile2], {
						autoAlpha: 0,
					})
					.set(path1, {
						strokeDasharray: length1,
						strokeDashoffset: length1,
						strokeOpacity: 1,
					})
					.set(path2, {
						strokeDasharray: length2,
						strokeDashoffset: length2,
						strokeOpacity: 1,
					})
					.to(path1, {
						strokeDashoffset: 0,
						ease: 'power1.inOut',
						duration: 5,
					})
					.to(
						path2,
						{
							strokeDashoffset: 0,
							ease: 'power1.inOut',
							duration: 5,
						},
						'-=5'
					)
					.to([box1, box2], { autoAlpha: 0.3, scale: 0.5 }, '-=3')
					.to(path1, { strokeOpacity: 0.3, duration: 1 }, '-=3')
					.to(
						circle,
						{
							autoAlpha: 1,
							ease: 'sine.inOut',
							duration: 1,
							motionPath: {
								path: path2,
								align: path2,
								autoRotate: true,
								end: 0,
								alignOrigin: [0.25, 0.25],
							},
						},
						'-=2'
					)
					.to(
						boxMobile2,
						{ autoAlpha: 1, scale: 1, zIndex: 1, y: -35, duration: 0.5 },
						'<'
					)
					.set(boxMobile1, { autoAlpha: 1, scale: 0.9, zIndex: -1, y: 0 }, '<')
					.to(boxContentMobile2, { autoAlpha: 1 }, '<')
					.to(circle, {
						duration: 2,
						ease: 'sine.inOut',
						motionPath: {
							path: path2,
							align: path2,
							autoRotate: true,
							alignOrigin: [0.25, 0.25],
						},
						scrollTrigger: {
							trigger: '#sc_ip_container',
							start: 'top top',
							end: 'bottom bottom',
							scrub: 1,
							onUpdate: self => {
								const progress = self.progress;
								const currentLength = length2 * progress;

								const curve1Start = 0.3 * length2;
								const curve1End = 0.45 * length2;

								const curve2Start = 0.45 * length2;
								const curve2End = 0.6 * length2;

								if (
									currentLength >= curve1Start &&
                  currentLength <= curve1End
								) {
									if (isMobile) {
										gsap.set(boxMobile2, {
											autoAlpha: 1,
											scale: 1,
											zIndex: 1,
											y: -35,
										});
										gsap.set(boxMobile1, {
											autoAlpha: 1,
											scale: 0.9,
											zIndex: -1,
											y: 0,
										});
										gsap.to(boxContentMobile2, {
											autoAlpha: 1,
											duration: 0.5,
											ease: 'power1.inOut',
										});
										gsap.to(boxContentMobile1, {
											autoAlpha: 0,
											duration: 0.5,
											ease: 'power1.inOut',
										});
									} else {
										gsap.to(box2, {
											autoAlpha: 1,
											scale: 1,
											duration: 0.5,
										});
										gsap.to(box1, {
											autoAlpha: 0.3,
											scale: 0.5,
											duration: 0.5,
										});
									}
								} else if (
									currentLength >= curve2Start &&
                  currentLength <= curve2End
								) {
									if (isMobile) {
										gsap.set(boxMobile1, {
											autoAlpha: 1,
											scale: 1,
											zIndex: 1,
											y: -35,
										});
										gsap.set(boxMobile2, {
											autoAlpha: 1,
											scale: 0.9,
											zIndex: -1,
											y: 0,
										});
										gsap.to(boxContentMobile1, {
											autoAlpha: 1,
											duration: 0.5,
											ease: 'power1.inOut',
										});
										gsap.to(boxContentMobile2, {
											autoAlpha: 0,
											duration: 0.5,
											ease: 'power1.inOut',
										});
									} else {
										gsap.to(box1, {
											autoAlpha: 1,
											scale: 1,
											duration: 0.5,
										});
										gsap.to(box2, {
											autoAlpha: 0.3,
											scale: 0.5,
											duration: 0.5,
										});
									}
								} else {
									gsap.to([box1, box2], {
										autoAlpha: 0.3,
										scale: 0.5,
										duration: 0.5,
									});
								}
							},
						},
					});
			}
		}
	}, []);

	const renderCircle = (id?: string) => {
		return <CircleGradient id={ id } />;
	};

	return (
		<div className='pb-[72px] lg:pb-[248px] font-Poppins'>
			<div className='container-center w-full'>
				<Title />
				<div className='mt-[34px] w-full relative flex flex-col items-center'>
					<div
						id='sc_ip_container'
						className='relative h-[200vh] w-full'>
						<div className='sticky top-0 left-0 w-full flex flex-col h-1/2 lg:min-h-[946px] items-center'>
							<div className='max-lg:hidden relative'>
								<div className='absolute top-0 left-1/2 -translate-x-1/2 z-[1]'>
									{ renderCircle('d') }
								</div>
								<div className='absolute top-0 left-1/2 -translate-x-1/2 overflow-visible'>
									<Path1 />
								</div>
								<div className='absolute top-0 left-1/2 -translate-x-1/2 w-full flex flex-col items-center overflow-visible'>
									<Path2 />
								</div>

								<Cards />
							</div>
							<div className='lg:hidden relative w-full h-full'>
								<div className='absolute top-0 left-1/2 -translate-x-1/2 z-[1]'>
									{ renderCircle('m') }
								</div>

								<div className='absolute top-0 left-1/2 -translate-x-1/2 overflow-visible'>
									<Path1Mobile />
								</div>
								<div className='absolute top-0 left-1/2 -translate-x-1/2 w-full flex flex-col items-center overflow-visible'>
									<Path2Mobile />
								</div>
								<Cards />
							</div>
						</div>

						<div className='absolute top-1/4 left-0 h-1/3 -z-10 w-full' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default InnovativeProcess;
