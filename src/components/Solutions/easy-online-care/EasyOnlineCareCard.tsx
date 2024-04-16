import React from 'react'

import ButtonCta from '@/components/Landing/ButtonCta'

import { CheckIcon } from '../SolutionIcons'

interface IEasyOnlineCareCardListProps {
  heading: string
  subheading: string
  paragraph: string
  features: string[]
}

interface IEasyOnlineCareCardProps {
  obj: IEasyOnlineCareCardListProps
}

const EasyOnlineCareCard = (props: IEasyOnlineCareCardProps) => {
  const { heading, subheading, paragraph, features } = props.obj

  return (
    <>
      <article className="w-full">
        <div className="w-full">
          <p className="text-grey-primary !text-[10px] md:text-sm font-semibold leading-[150%] md:leading-[171.429%] uppercase tracking-[1.1px] md:tracking-[1.54px] font-Poppins">
            {heading}
          </p>
          <h2 className="text-primary text-2xl md:text-3xl lg:text-5xl font-normal font-Poppins mt-3 mb-4 sm:my-0">
            {subheading}
          </h2>
          <span className="text-gray-400 text-xs md:text-sm lg:text-lg font-normal leading-[142%] w-full font-Poppins inline-block mt-0 md:mt-[14px]">
            {paragraph}
          </span>
          <div className="lg:max-w-[486px] w-full gap-x-[42px] gap-y-6 grid lg:grid-cols-3 grid-cols-2 h-fit mt-6 md:mt-10 lg:mt-[64px] place-content-between">
            {features?.map((text, index) => (
              <div className="flex items-center gap-2 w-fit" key={index}>
                <CheckIcon />
                <p className="text-xs font-normal font-Poppins text-primary">
                  {text}
                </p>
              </div>
            ))}
          </div>
          <ButtonCta
            text="Get Started"
            href="/your-link"
            theme="primary"
            className="max-w-[222px] w-full mt-[64px] md:flex hidden"
          />
        </div>
      </article>
    </>
  )
}

export default EasyOnlineCareCard
