import React from 'react'

import {
  FIlterIcon,
  HeartIcon,
  PeptidesIcon,
  TherapyIcon,
  ThyroidIcon,
  WeightLossIcon,
} from '../SolutionIcons'

const tabContent = [
  { id: 1, label: 'Testosterone Therapy', icon: <HeartIcon /> },
  { id: 2, label: 'Anti-aging Peptides', icon: <PeptidesIcon /> },
  { id: 3, label: 'Medical Weight Loss', icon: <WeightLossIcon /> },
  { id: 4, label: 'Sexual Health', icon: <HeartIcon /> },
  { id: 5, label: 'Thyroid', icon: <ThyroidIcon /> },
]

interface IEasyCareTab {
  activeContent: string
  setActiveContent: (content: string) => void
}

const EasyCareTab = (props: IEasyCareTab) => {
  const { activeContent, setActiveContent } = props

  return (
    <>
      <section className="w-full flex items-center justify-center px-4 md:px-0">
        <div className="p-[6px] rounded-[100px] w-full space-x-[14px] bg-gray-50 max-w-[991px] lg:flex hidden justify-between items-center">
          {tabContent.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setActiveContent(label)}
              className={`text-sm font-normal font-Poppins px-5 py-2 rounded-[100px] w-fit ${
                activeContent === label
                  ? 'text-white bg-primary'
                  : 'bg-transparent text-[#7B7F81]'
              }`}
            >
              <span className="flex items-center gap-[6px] ">
                {icon} {label}
              </span>
            </button>
          ))}
        </div>
        <div className="justify-between items-center flex lg:hidden border border-grey-50 rounded-[20px] py-2 pl-4 pr-2 w-full">
          <div className="flex items-center gap-[6px] text-xs text-primary font-Poppins">
            <TherapyIcon />
            Testosterone Therapy
          </div>
          <button className="flex items-center gap-[6px] h-[34px] px-3 text-xs font-medium text-white font-Poppins bg-primary rounded-[100px] shadow-[0px_4px_8px_0px_rgba_(0_0_0_0.10)]">
            <FIlterIcon />
            <span>Filter</span>
          </button>
        </div>
      </section>
    </>
  )
}

export default EasyCareTab
