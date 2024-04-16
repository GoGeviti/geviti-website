'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { ArrowUpRight, GevitiLogoIcon } from '../Icons'

const RunningLogo: React.FC = () => {
  // Duplicating the data for a seamless continuous effect
  const keywordsData = Array.from(Array(40).keys()).concat(
    Array.from(Array(40).keys()),
  )

  // Correct variant structure for Framer Motion with TypeScript
  const marqueeVariants = {
    animate: {
      translateX: ['0%', '-100%'], // Moving from 0% to -100% for the loop
      transition: {
        x: {
          type: 'tween',
          ease: 'linear',
          duration: 20,
          repeat: Infinity,
          repeatType: 'loop',
        },
      },
    },
  }

  const renderKeyword = (keywordIdx: number, section: number) => (
    <span
      key={`keyword-${section}-${keywordIdx}`}
      className="pl-[25.21px] lg:pl-[37.62px] inline-flex items-center gap-x-[25.22px] lg:gap-x-[37.62px]"
    >
      <span className="flex items-center justify-center">
        <ArrowUpRight className="w-[42.01px] h-[42.01px] lg:w-[62.7px] lg:h-[62.7px]" />
      </span>
      <span>
        <GevitiLogoIcon className="w-[130.26px] h-[31.21px] lg:w-[194.37px] lg:h-[46.58px]" />
      </span>
    </span>
  )

  return (
    <div className="py-7 lg:py-14">
      <div className="relative flex justify-center overflow-x-hidden select-none">
        <motion.div
          className="h-[42.01px] lg:h-[62.7px] whitespace-nowrap flex"
          variants={marqueeVariants}
          animate="animate"
        >
          {keywordsData.map((idx, index) => renderKeyword(idx, index))}
        </motion.div>
      </div>
    </div>
  )
}

export default RunningLogo
