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

// const wavePointsPath2 = [
//   'M110.499 4C110.499 4 348.499 209.5 110.499 338C-127.502 466.5 110.499 522.062 110.499 640V942',
//   'M 110.499 4 C 110.499 4 348.499 209.5 110.499 338 C -72 446 110.499 522.062 110.499 640 V 942',
//   'M110.499 4C110.499 4 348.499 209.5 110.499 338C-127.502 466.5 110.499 522.062 110.499 640V942',
// ];

// const wavePointsMorePath2 = [
//   'M110.499 4C110.499 4 348.499 209.5 110.499 338C-127.502 466.5 110.499 522.062 110.499 640V942',
//   'M 110.499 4 C 110.499 4 348.499 209.5 110.499 338 C -164 475 110.499 522.062 110.499 640 V 942',
//   'M110.499 4C110.499 4 348.499 209.5 110.499 338C-127.502 466.5 110.499 522.062 110.499 640V942',
// ];

// const wavePointsPath1 = [
//   'M26.4988 4C26.4988 4 -22.0031 14.5 26.4984 144C75 273.5 26.4987 418.062 26.4987 536L26.4988 942',
//   'M 26.4988 4 C 26.4988 4 -27 10 26.4984 144 C 91 280 26.4987 418.062 26.4987 536 L 26.4988 942',
//   'M26.4988 4C26.4988 4 -22.0031 14.5 26.4984 144C75 273.5 26.4987 418.062 26.4987 536L26.4988 942',
// ];

// const wavePointsMorePath1 = [
//   'M26.4988 4C26.4988 4 -22.0031 14.5 26.4984 144C75 273.5 26.4987 418.062 26.4987 536L26.4988 942',
//   'M 26.4988 4 C 26.4988 4 -31 14 26.4984 144 C 101 293 26.4987 418.062 26.4987 536 L 26.4988 942',
//   'M26.4988 4C26.4988 4 -22.0031 14.5 26.4984 144C75 273.5 26.4987 418.062 26.4987 536L26.4988 942',
// ];

// const waveAnimation = (path: SVGPathElement, keyframes: string[]) => {
//   return gsap.to(path, {
//     keyframes: keyframes.map((d) => ({ attr: { d }, duration: 2 })),
//     repeat: 3,
//     ease: 'sine.inOut',
//   });
// };

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
						start: 'top 50%',
						end: 'bottom 5%',
						toggleActions: 'play none none none',
					},
				});

				const length1 = path1.getTotalLength();
				const length2 = path2.getTotalLength();

				strokeTl
					.set([box1, box2], { autoAlpha: 0, scale: 0.5 })
					.set(path1, {
						strokeDasharray: length1,
						strokeDashoffset: length1,
						strokeOpacity: 1,
					})
					.set(path2, {
						strokeDasharray: length2,
						strokeDashoffset: length2,
						strokeOpacity: 0.3,
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
					.to(path1, { strokeOpacity: 0.3, duration: 1 }, '-=3');

				const repeatTl = gsap.timeline({
					repeat: -1,
					defaults: { ease: 'sine.inOut', duration: 1 },
					scrollTrigger: {
						trigger: '#sc_ip_container',
						start: 'top 50%',
						end: 'bottom 5%',
						toggleActions: 'play none none none',
					},
				});

				repeatTl
				// Set initial state
					.set(circle, { autoAlpha: 0 })
					.set([boxMobile1, boxMobile2, boxContentMobile1, boxContentMobile2], {
						autoAlpha: 0,
					})

				// Fade-in circle, path, and box 1
					.to(path2, { strokeOpacity: 1, duration: 2 }, 1.5)
					.to(
						circle,
						{
							autoAlpha: 1,
							duration: 2,
							motionPath: {
								path: path2,
								align: path2,
								autoRotate: true,
								alignOrigin: [0.25, 0.25],
								end: 0.52,
							},
						},
						'<'
					)
					.to(boxMobile1, { autoAlpha: 1, scale: 1, zIndex: 1 }, '<')
					.set(boxMobile2, { autoAlpha: 1, scale: 0.9, zIndex: -1 })
					.to(
						isMobile ? boxContentMobile1 : box1,
						{ autoAlpha: 1, scale: 1 },
						'-=0.5'
					)
				// .to(path2, {
				//   keyframes: wavePointsMorePath2.map((d) => ({
				//     attr: { d },
				//     duration: 1.5, // Kurangi durasi setiap keyframe menjadi 1.5 detik
				//   })),
				//   repeat: 2,
				//   onComplete: () => {
				//     waveAnimation(path2, wavePointsPath2);
				//   },
				// })
				// .to(
				//   circle,
				//   {
				//     x: '-=10', // Gerak ke kanan 20px
				//     duration: 3, // Selaras dengan keyframe path2
				//     yoyo: true,
				//     repeat: 3, // Total 3 detik
				//     ease: 'sine.inOut',
				//   },
				//   '<'
				// )
				// Fade-out circle, path, and box 1
					.to(circle, { autoAlpha: 0, duration: 1 }, '+=5')
					.to(path2, { strokeOpacity: 0.3, duration: 1 }, '<+=0.6')
					.to(
						isMobile ? boxContentMobile1 : box1,
						{
							autoAlpha: isMobile ? 0 : 0.3,
							scale: isMobile ? 1 : 0.5,
							duration: 1,
						},
						'<+=0.8'
					)
					.set(boxMobile2, { autoAlpha: 1, scale: 1, zIndex: 1 })
					.set(boxMobile1, { autoAlpha: 1, scale: 0.9, zIndex: -1 })
					.to(boxContentMobile2, { autoAlpha: 1, scale: 1 }, '<+=0.8')
				// Fade-in circle, path, and box 2
					.to(
						circle,
						{
							autoAlpha: 1,
							duration: 2,
							motionPath: {
								path: path1,
								align: path1,
								autoRotate: true,
								alignOrigin: [0.25, 0.25],
								end: 0.3,
							},
						},
						isMobile ? '<' : '<+=1'
					)
					.to(path1, { strokeOpacity: 1, duration: 2 }, '<+=0.5')
					.to(box2, { autoAlpha: 1, scale: 1 }, '-=0.5')
				// .to(path1, {
				//   keyframes: wavePointsMorePath1.map((d) => ({
				//     attr: { d },
				//     duration: 1.5, // Kurangi durasi setiap keyframe menjadi 1.5 detik
				//   })),
				//   repeat: 2,
				//   onComplete: () => {
				//     waveAnimation(path1, wavePointsPath1);
				//   },
				// })
				// .to(
				//   circle,
				//   {
				//     x: '+=10', // Gerak ke kanan 20px
				//     duration: 3, // Selaras dengan keyframe path2
				//     yoyo: true,
				//     repeat: 3, // Total 3 detik
				//     ease: 'sine.inOut',
				//   },
				//   '<'
				// )
				// Fade-out circle, path, and box 2
					.to(circle, { autoAlpha: 0, duration: 1 }, '+=5')
					.to([path1, path2], { strokeOpacity: 0.3, duration: 1 }, '<+=0.6')
					.to(
						isMobile ? boxContentMobile2 : box2,
						{
							autoAlpha: isMobile ? 1 : 0.3,
							scale: isMobile ? 1 : 0.5,
							duration: 1,
						},
						'<+=0.8'
					);
			}
		}
	}, []);

	const renderCircle = (id?: string) => {
		return <CircleGradient id={ id } />;
	};

	return (
		<div className='pb-[485px] lg:pb-[248px] font-Poppins'>
			<div
				id='sc_ip_container'
				className='container-center w-full'>
				<Title />
				<div className='mt-[34px] w-full relative flex flex-col items-center'>
					<div className='max-lg:hidden relative'>
						<div className='absolute top-0 left-1/2 -translate-x-1/2 z-[2]'>
							{ renderCircle('d') }
						</div>

						<div className='absolute top-0 left-1/2 -translate-x-1/2 overflow-visible'>
							<Path1 />
						</div>

						<div className='w-full flex flex-col items-center overflow-visible'>
							<Path2 />
						</div>
					</div>
					<div className='lg:hidden'>
						<div className='absolute top-0 left-1/2 -translate-x-1/2 z-[2]'>
							{ renderCircle('m') }
						</div>

						<div className='absolute top-0 left-1/2 -translate-x-1/2 overflow-visible'>
							<Path1Mobile />
						</div>
						<div className='w-full flex flex-col items-center overflow-visible'>
							<Path2Mobile />
						</div>
					</div>

					<Cards />
				</div>
			</div>
		</div>
	);
};

export default InnovativeProcess;
