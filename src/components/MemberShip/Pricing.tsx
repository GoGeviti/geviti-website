'use client'
import React, { useState } from 'react'

import membershipdata from '@/constant/data/membershipdata'

import { ChevronDown, QuestionIcon } from '../Icons'
import ButtonCta from '../Landing/ButtonCta'

import PriceExtended from './PriceExtended'
const pricing = membershipdata.pricing

const Pricing = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [activeTab, setActiveTab] = useState('quarterly')

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="bg-white mx-3 rounded-[19px] my-6 py-14">
      <div className=" container-center ">
        <p className=" uppercase leading-[171.429%] tracking-[1.54px] text-[10px] lg:text-sm text-grey-primary text-center font-Poppins font-semibold">
          Care based off of biomarkers
        </p>
        <h4 className="text-[24px] md:text-[40px] lg:text-[60px] leading-normal text-primary  md:tracking-[-2.56px] text-center font-Poppins">
          Start by establishing baselines
        </h4>
        <p className=" text-[12px] md:text-sm leading-[142.857%] text-grey-primary text-center font-Poppins pt-3">
          Every user starts with one of these to establish baselines. This
          includes month free.{' '}
        </p>

        <div className=" my-11 flex justify-center items-center bg-[#F5F6F6] w-fit mx-auto gap-[14px] p-[6px] rounded-[100px]">
          <button
            onClick={() => setActiveTab('quarterly')}
            className={`${
              activeTab === 'quarterly'
                ? 'bg-primary text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.10)]'
                : 'text-[#7B7F81] '
            } transition-all ease-in-out duration-300 flex font-Poppins  items-center py-2 px-[14px] rounded-full gap-1.5`}
          >
            Quarterly{' '}
            <span className="text-xs text-grey-50  font-medium bg-[#393C3E] border border-[#57595B] rounded-full px-2 py-px">
              17% off
            </span>
          </button>
          <button
            onClick={() => setActiveTab('monthly')}
            className={`${
              activeTab === 'monthly'
                ? 'bg-primary text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.10)]'
                : 'text-[#7B7F81] '
            } transition-all ease-in-out duration-300 flex font-Poppins  items-center py-2 px-[14px] rounded-full`}
          >
            Monthly
          </button>
        </div>
        <div className="lg:max-w-full mx-auto max-w-[344px] lg:flex-row flex-col flex gap-8 lg:gap-6 items-end w-full pt-10 ">
          {pricing.data.map((value, index) => (
            <div key={index} className=" w-full relative">
              <div
                style={{ background: value.bg }}
                className={`pt-[42px] pb-[34px] px-3 xl:px-6 ${value.text} rounded-2xl w-full`}
              >
                <p className="leading-[140%] text-[16px] lg:text-xl font-Poppins ">
                  {value.name}
                </p>
                <h3 className=" text-[30px] xl:text-5xl font-Poppins py-1">
                  ${value.price}{' '}
                  <span className="text-[12px] lg:text-sm">
                    one time payment
                  </span>
                </h3>
                <p className=" font-medium text-[12px] lg:text-sm font-Poppins ">
                  +$99/m billed quarterly
                </p>
                <p className=" text-2xl font-medium font-Poppins pb-4 mt-8 lg:mt-10">
                  {value.biomakers}+{' '}
                  <span className=" text-xs">biomarkers</span>
                </p>
                {pricing.features.map((text, index) => (
                  <p
                    key={index}
                    className=" font-Poppins text-sm lg:text-[12px] xl:text-sm gap-[6px] flex items-center font-medium pb-3"
                  >
                    <QuestionIcon /> {text}
                  </p>
                ))}
                <ButtonCta
                  href=""
                  text="Get Started"
                  theme={
                    value.button === 'primary'
                      ? 'primary'
                      : value.button === 'secondary'
                      ? 'secondary'
                      : undefined
                  }
                  className="w-fit mx-auto"
                />
              </div>
              <div className={`${value.hide}`}>
                <p className=" absolute top-0 right-8 -translate-y-1/2 text-sm font-Poppins font-medium bg-[#91c9f2] py-2 px-6 rounded-full">
                  Most Popular
                </p>
                <div
                  onClick={toggleDropdown}
                  className={` ${
                    isOpen ? 'bg-[#E6E7E7] border-[#E6E7E7]' : ''
                  } cursor-pointer hidden  lg:flex mt-3 items-center border border-[#91c9f2] gap-3 rounded-2xl justify-center p-6 w-full bg-[#99D4FF]`}
                >
                  <p className=" text-xl font-Poppins">
                    Geviti vs. competitors
                  </p>
                  <span className={`${isOpen ? ' rotate-180' : ''}`}>
                    <ChevronDown />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          onClick={toggleDropdown}
          className={` ${
            isOpen ? 'bg-[#E6E7E7] border-[#E6E7E7]' : ''
          } cursor-pointer lg:hidden max-w-[344px] mx-auto flex mt-3 items-center border border-[#91c9f2] gap-3 rounded-2xl justify-center p-6 w-full bg-[#99D4FF]`}
        >
          <p className=" text-xl font-Poppins">Geviti vs. competitors</p>
          <span className={`${isOpen ? ' rotate-180' : ''}`}>
            <ChevronDown />
          </span>
        </div>
        {isOpen && (
          <>
            <PriceExtended />
          </>
        )}
      </div>
    </div>
  )
}

export default Pricing
