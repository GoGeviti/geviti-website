import Navbar from '@/components/Navbar/Landing'
import React from 'react'
import Hero from '../../components/MemberShip/Hero'
import BioMakersSection from '../../components/MemberShip/BioMakersSection'
import { Mission, Products, RunningLogo } from '@/components/Landing'
import StepsSection from '@/components/MemberShip/Steps'
import { Footer } from '@/components' 
import FrequentlyAskedQues from '@/components/MemberShip/FrequentlyAskedQues'
import ChooseGeviti from '@/components/MemberShip/ChooseGeviti'
import Pricing from '@/components/MemberShip/Pricing'

const page = () => {
  return (
    <div className='bg-[#F2F2F2]'>
<Hero/>
<RunningLogo/>
<StepsSection/> 
<Pricing/>
<BioMakersSection/>
<ChooseGeviti/>
<Products/>
<FrequentlyAskedQues/>
<div className='flex flex-col gap-y-3.5'>
				<Mission />

				<Footer landingPage />
			</div>
 
    </div>
  )
}

export default page