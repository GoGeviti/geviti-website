import React from 'react'
import Image from 'next/image'

const Headshot = () => {
	return (
		<div className='px-4 lg:px-3 lg:pb-[176px]'>
			<div className='bg-primary rounded-[20px] p-3.5 lg:p-[42px] overflow-hidden flex flex-col lg:flex-row gap-6 lg:gap-[140px]'>
				{ /* <div className='rounded-[14px] lg:rounded-[24px] overflow-hidden w-full max-w-[548px] max-h-[363px] lg:max-h-[720px]'>
				</div> */ }
				<Image
					src={ '/images/about_us/headshot.webp' }
					width={ 548 }
					height={ 768 }
					alt='headshot'
					className='object-cover rounded-[14px] lg:rounded-[24px] overflow-hidden w-full max-w-[548px] max-h-[363px] lg:max-h-[720px]'
				/>
				<div className='flex-1'>
					<p className='text-white max-lg:text-sm uppercase font-semibold mt-6 tracking-[1.54px]'>Meet the co-founder and CEO</p>
					<h2 className='text-white font-medium text-[36px] lg:text-[46px] mt-1 tracking-[-1.84px]'>Nathan Graville</h2>
					<p className='lg:text-lg text-sm text-grey-primary mt-3.5'>
          In 2021, I lost my father at the age of 58 to cancer—a disease I believe can often be prevented with proactive care. My father was active and committed to weightlifting several days a week, yet, like so many others, he didn’t regularly check his health status beyond his workout routine. He went years without a comprehensive lab panel to look “under the hood,” and despite his best intentions, critical markers went unmonitored.
						<br/>
						<br/>
          Unfortunately, my father’s story is all too common in America, where many rely solely on the traditional healthcare system, assuming it will catch any health issues before they become severe. This system, however, is often reactive rather than proactive, addressing problems once they appear rather than preventing them in the first place. My father, like many, depended on this approach, which ultimately left him vulnerable to an undetected illness.
						<br/>
						<br/>
          Geviti was founded to bridge this gap, making health screening and optimization easy, accessible, and empowering for everyone. We believe that the healthcare system shouldn’t dictate the state of your health—only you can do that. Geviti exists to give you the tools and insights to actively own and manage your health, putting your well-being firmly in your hands.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Headshot