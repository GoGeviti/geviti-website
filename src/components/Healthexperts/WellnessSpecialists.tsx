import Image from 'next/image';

import clsxm from '@/helpers/clsxm';

import AccordionList from '../FrequentlyAskedQuestions/AccordionList';
const data = [
	{
		title: 'Functional Wellness Specialists',
		subTitle: 'Led by Sharon Brack, Director of Wellness',
		heroImage: '/images/healthexperts/Functional_Wellness_Specialists.jpg',
		image: '/images/healthexperts/Sharon_Brack.jpg',
		name: 'Sharon Brack',
		description: 'a Certified Peptide Therapist, Functional Medicine Nutritionist, and Holistic Health Counselor dedicated to helping clients thrive. She specializes in genetic nutrition, hormone health, gut and mitochondrial support, and advanced supplementation, holding additional certifications in GLP-1 coaching, functional blood chemistry, and personal training.',
		faq: [
			{
				title: 'Nutrition & Gut Health',
				content: 'Encompasses individualized meal planning, mindful eating strategies, and comprehensive gut health support—targeting everything from nutrient deficiencies and food sensitivities to more complex concerns like IBS or dysbiosis. This may include evaluating how certain foods affect energy, digestion, and overall well-being, then crafting sustainable, delicious meal plans that align with your goals and lifestyle. By optimizing your digestive environment, you can enhance nutrient absorption, improve immune function, and support balanced energy levels.'
			},
			{
				title: 'Exercise & Weight Management',
				content: 'Covers the full spectrum of physical activity and body composition goals—whether you’re aiming to shed weight, gain muscle, or simply maintain a more active lifestyle. This approach might involve personalized workout routines, habit-building strategies, and adjustments to accommodate any physical limitations. By integrating the right blend of cardiovascular, strength, and flexibility training, you can achieve efficient, measurable progress that fits neatly into your daily schedule.'
			},
			{
				title: 'Supplementation',
				content: 'Focuses on selecting targeted vitamins, minerals, herbs, and other specialized nutrients to support optimal health and address specific deficiencies. These recommendations are often guided by lab data, symptom assessments, and long-term wellness objectives. Whether you need foundational nutrients or advanced supplements designed for stress management or immune support, the goal is to enhance physiological balance without overcomplicating your daily routine.'
			},
		]
	},
	{
		title: 'Longevity Clinicians',
		subTitle: 'Led by Clay Hall, Director of Clinical Ops',
		heroImage: '/images/healthexperts/Longevity_Clinicians.jpg',
		image: '/images/healthexperts/Clay_Hall.jpg',
		name: 'Clay Hall',
		description: 'Has served in healthcare since 2007, beginning in emergency medicine and later earning graduate and post-graduate credentials in general medicine, psychiatry, and men’s health training at the Mayo Clinic in Phoenix.',
		faq: [
			{
				title: 'Men’s & Women’s Health',
				content: 'Addresses the unique hormonal and metabolic differences that shape men’s and women’s well-being. This might include assessing androgen or estrogen levels, managing perimenopausal or andropausal changes, and tackling concerns like low libido, mood fluctuations, or stress. By tailoring interventions—ranging from lifestyle modifications to advanced therapies—this approach ensures each stage of life is met with personalized solutions and compassionate care.'
			},
			{
				title: 'Peptide & Hormone Replacement Therapies',
				content: 'Leverages cutting-edge science to support metabolic function, tissue repair, and energy regulation through carefully calibrated hormone and peptide interventions. These could include everything from thyroid or testosterone optimization to advanced peptides that enhance recovery or boost growth factors. With ongoing monitoring and precise dosing, these therapies can help revitalize energy levels, maintain lean muscle mass, and sharpen mental clarity.'
			},
			{
				title: 'Critical Biomarker Analysis',
				content: 'Involves deep-diving into detailed lab panels—potentially spanning 90+ markers—and using the data to uncover early imbalances or hidden deficiencies. By reviewing trends over time, clinicians can refine treatment plans and track your progress with data-backed confidence. This proactive, analytic approach not only flags potential health risks before they escalate but also guides personalized interventions to help you thrive long-term.'
			},
		]
	},
]

const WellnessSpecialists = () => {
	return (
		<div className='lg:px-3 font-Poppins'>
			<div className='lg:container-center'>
				{
					data.map((item, index) => (
						<div
							key={ index }
							className='my-16 lg:last:my-16'>
							<h2 className='h4 max-lg:font-medium lg:h2 max-lg:px-4'>{ item.title }</h2>
							<h4 className='h5 text-grey-500 max-lg:px-4'>{ item.subTitle }</h4>
							<div className='h-96 lg:h-[694px] w-full mb-16 mt-5 lg:my-16'>
								<Image
									src={ item.heroImage }
									alt={ item.title }
									width={ 1281 }
									height={ 694 }
									className='h-full w-full object-cover'
								/>
							</div>
							<div
								className={ clsxm(
									'flex flex-col lg:flex-row gap-5 lg:gap-36 items-end max-lg:px-4 rounded-lg overflow-hidden',
								) }>
								<Image
									src={ item.image }
									alt={ item.name }
									className='w-[415px] h-[415px] object-cover rounded-lg overflow-hidden'
									width={ 415 }
									height={ 415 }
								/>
								<div className='max-w-[737px]'>
									<h3 className='h4 lg:h3'>{ item.name }</h3>
									<p className='max-lg:body-small lg:h5 mt-3.5 lg:mt-6 lg:text-grey-500'>{ item.description }</p>
								</div>
							</div>
							<h3 className='h4 lg:h3 mt-10 lg:mt-16 max-lg:px-4'>Areas of Expertise</h3>
							<div className='max-lg:px-4'>
								<AccordionList data={ item.faq } />
							</div>
						</div>
					))
				}
			</div>
		</div>
	);
};

export default WellnessSpecialists;
