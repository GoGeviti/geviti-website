import React from 'react'
import membershipdata from "@/constant/data/membershipdata"; 
import { CrossRed, GreenCheck } from '../Icons';
const pricing = membershipdata.pricing;

const PriceExtended = () => {
  return (
    <div className=' pt-20'>
         <p className=" uppercase text-sm text-[#919B9F] text-center font-Poppins font-semibold">
          Care based off of biomarkers
        </p>
        <h4 className=" text-6xl text-center font-Poppins">
        More, for less.
        </h4> 

        <div className=' md:flex  justify-center gap-6 mt-12 '>
            <div className=' max-w-[411px] w-full'>
                <div className=' bg-[#181A1C] px-6 py-10 rounded-2xl text-white'>
                    <h3 className=" text-5xl font-medium font-Poppins ">Geviti</h3>
                    <p className=' text-grey-primary'>Membership cost as low as</p>
                    <p className=" text-5xl font-medium font-Poppins ">
                       $99{" "}
                      <span className=" text-sm">biomarkers</span>
                    </p>
                    <ul className=' pt-6'>
                        {pricing.others.map((data)=>(
                            <>
                        <li className=' text-sm pb-3 flex justify-between'>{data} <GreenCheck/></li>
                            </>
                        ))}
                    </ul>
                </div>
            </div>
            <div className=' max-w-[411px] w-full'>
                <div className=' text-[#181A1C] border border-[#e9e9ea] bg-[#F5F6F6] px-6 py-10 rounded-2xl '>
                    <h3 className=" text-5xl font-medium font-Poppins ">Others</h3>
                    <p className=' text-grey-primary'>Membership cost </p>
                    <p className=" text-5xl font-medium font-Poppins ">
                       $130+{" "}
                      <span className=" text-sm">biomarkers</span>
                    </p>
                    <ul className=' pt-6'>
                        {pricing.others.map((data)=>(
                            <>
                        <li className=' text-sm pb-3 flex justify-between'>{data} <CrossRed/></li>
                            </>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PriceExtended