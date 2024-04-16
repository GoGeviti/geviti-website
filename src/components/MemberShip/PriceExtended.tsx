import React from 'react'

import membershipdata from '@/constant/data/membershipdata'

import { CrossRed, GreenCheck } from '../Icons'
const pricing = membershipdata.pricing

const PriceExtended = () => {
  return (
    <div className=" pt-20">
      <p className=" uppercase text-[10px] md:text-sm text-[#919B9F] text-center font-Poppins font-semibold">
        Care based off of biomarkers
      </p>
      <h4 className="text-[24px] md:text-6xl text-center font-Poppins">
        More, for less.
      </h4>

      <div className=" md:flex-row flex-col flex  justify-center gap-6 mt-12 ">
        <div className="md:mx-0 mx-auto max-w-[411px] w-full">
          <div className=" bg-primary px-6 py-10 rounded-2xl text-white">
            <h3 className="text-3xl lg:text-5xl font-medium font-Poppins ">
              Geviti
            </h3>
            <p className=" text-grey-primary">Membership cost as low as</p>
            <p className=" text-4xl md:text-5xl font-medium font-Poppins ">
              $99 <span className=" text-sm">biomarkers</span>
            </p>
            <ul className=" pt-6">
              {pricing.others.map((data) => (
                <>
                  <li className=" text-sm pb-3 flex justify-between">
                    {data} <GreenCheck />
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
        <div className=" max-w-[411px] md:mx-0 mx-auto w-full">
          <div className=" text-primary border border-[#e9e9ea] bg-[#F5F6F6] px-6 py-10 rounded-2xl ">
            <h3 className="text-3xl lg:text-5xl font-medium font-Poppins ">
              Others
            </h3>
            <p className=" text-grey-primary">Membership cost </p>
            <p className=" text-4xl md:text-5xl font-medium font-Poppins ">
              $130+ <span className=" text-sm">biomarkers</span>
            </p>
            <ul className=" pt-6">
              {pricing.others.map((data) => (
                <>
                  <li className=" text-sm pb-3 flex justify-between">
                    {data} <CrossRed />
                  </li>
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
