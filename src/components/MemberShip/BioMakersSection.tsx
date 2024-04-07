'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ChevronDown, InfoBlue } from '../Icons';
import membershipdata from '@/constant/data/membershipdata';
const biomakers = membershipdata.biomakers; 


const BioMakersSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
      // List of options

  return (
    <div className='bg-white mx-3 rounded-[19px] my-6 py-14'>
        <div className=' container-center '>
        <button
        onClick={toggleDropdown}
        className=" flex items-center font-Poppins text-[28px] gap-3"
      >
        Compare Tested Biomarkers 
        <ChevronDown/>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="  "
        >
          <ul className="py-2 flex gap-6 flex-wrap">
            {biomakers.data.map((option, index) => (
              <li
                key={index}
                className=" hover:opacity-70 font-Poppins duration-300 flex gap-2 text-sm border bg-[#F2FAFF] py-2 px-[14px] rounded-full border-[#C8EAFF] items-center cursor-pointer"
              >
                {option}
             <InfoBlue/>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
        </div>
    </div>
  )
}

export default BioMakersSection