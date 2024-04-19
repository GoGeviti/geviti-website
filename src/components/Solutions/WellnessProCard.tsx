import React from 'react'
import Image from 'next/image'

interface IWellnessProProps {
  title: string
  subtitle: string
  description: string
  imageURL: string
  mobileimage: string
  counting: string
  million: string | null
  state: string
  age: string
}

interface IWellnessProCardProps {
  obj: IWellnessProProps
}

const WellnessProCard = (props: IWellnessProCardProps) => {
  const {
    title,
    subtitle,
    description,
    imageURL,
    mobileimage,
    counting,
    million,
    state,
    age,
  } = props.obj

  return (
    <>
      <article className="md:bg-white rounded-[19px] px-4 md:px-6 md:pt-10 md:pb-6 z-10 relative">
        <p className="text-grey-primary !text-[10px] md:text-sm font-semibold leading-[150%] md:leading-[171.429%] uppercase tracking-[1.1px] md:tracking-[1.54px] font-Poppins">
          {title}
        </p>
        <h2 className="text-primary text-2xl md:text-3xl lg:text-4xl font-normal font-Poppins my-2 sm:my-0">
          {subtitle}
        </h2>
        <span className="text-gray-400 text-sm md:text-sm font-normal leading-[142%] lg:max-w-[446px] w-full font-Poppins inline-block mt-4 md:mt-3">
          {description}
        </span>
        <div className="w-full mt-[18px] md:mt-10 lg:mt-14 relative h-[288px]">
          <img
            className="w-full h-full rounded-[19px] absolute appearance-none sm:block hidden object-cover object-top"
            src={imageURL}
            alt={title}
          />
          <Image
            style={{ backgroundSize: '100% 100%' }}
            className="w-full h-full rounded-[19px] absolute appearance-none sm:hidden block "
            src={mobileimage}
            alt={title}
            width={648}
            height={648}
            unoptimized
          />
          <div className="relative z-20 md:p-6 p-[18px] flex flex-col justify-end items-start h-full after-gradient-wellnesscard">
            <h2 className="relative z-20 text-[100px] font-normal text-white font-Poppins tracking-[-4px] leading-[70%] mb-[14px]">
              {counting}
              <span className="text-4xl tracking-[-1.44px] font-Poppins">
                {million}
              </span>
            </h2>
            <p className="relative z-20 text-blue-primary !text-sm font-semibold leading-[150%] uppercase tracking-[1.54px] font-Poppins mb-1.5">
              {state}
            </p>
            <p className="relative z-20 text-white !text-sm font-semibold leading-[150%] uppercase tracking-[1.2px] sm:tracking-[1.54px] font-Poppins whitespace-nowrap">
              {age}
            </p>
          </div>
        </div>
      </article>
    </>
  )
}

export default WellnessProCard
