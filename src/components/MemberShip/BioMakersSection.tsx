'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ChevronDown, FeMaleIcon, InfoBlue, MaleIcon } from '../Icons';
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
      {!isOpen && <p className=' text-lg font-Poppins text-[#AEB1B2]'>Click to expand</p>}
    
      {isOpen && (
        
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="  "
        >
            <div className=" my-11 flex justify-center items-center bg-[#F5F6F6] w-fit   gap-[14px] p-[6px] rounded-[100px]">
          <p className=" cursor-pointer duration-300 flex bg-[#181A1C] text-white  items-center py-[10px] px-[24px] font-Poppins rounded-full gap-[6px]">
       <MaleIcon/>   Male Biomarkers
           
          </p>
          <p className=" cursor-pointer duration-300 flex hover:bg-[#181A1C] text-[#7B7F81] hover:text-white font-Poppins  items-center py-[10px] px-[24px] rounded-full">
      <FeMaleIcon/>    Female Biomarkers
          </p>
        </div>
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