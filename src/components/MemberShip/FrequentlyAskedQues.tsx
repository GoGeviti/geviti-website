'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AccordionMinus, AccordionPlus } from "../Icons";

const FrequentlyAskedQues = () => {
  const accordionData = [
    {
      title: "What states is Geviti in?",
      content:
        "As of now, we are only in Arizona. We plan on being in each state by the end of 2024. Be sure to opt-in to our progress so we can notify you if we don’t currently support your state.",
    },
    {
      title:
        "What “Deep-dive Diagnostic” is included semi-annually with the membership?",
      content: "Content for Accordion Item 2",
    },
    {
      title: "What is the membership cancellation and refund policy?",
      content: "Content for Accordion Item 3",
    },
    {
      title:
        "Are the cost of supplements or prescription included in the membership fee?",
      content: "Content for Accordion Item 3",
    },
    {
      title:
        "What if I have recently done labs? Do I still need to purchase a diagnostic package?",
      content: "Content for Accordion Item 3",
    },
    {
      title: "Does a blood panel guarantee access to specific treatments?",
      content: "Content for Accordion Item 3",
    },
  ];

  // State to track which accordion item is open
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Function to toggle accordion item
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white mx-3 rounded-[19px] my-6 pb-14 pt-28">
      <div className=" container-center ">
        <div className=" md:flex flex-wrap">
          <div className=" md:w-[40%]">
            <p className=" uppercase text-sm text-[#919B9F] font-semibold">
              Have some questions?
            </p>
            <h4 className=" text-4xl font-Poppins">
              Frequently asked questions
            </h4>
          </div>
          <div className="md:w-[60%]">
            {accordionData.map((item, index) => (
              <div key={index} className="border-b border-gray-300">
                <motion.div
                  className={`flex justify-between items-center cursor-pointer duration-300 pt-6 pb-6 ${
                    openIndex === index ? "!pt-6 !pb-0" : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <h2 className="text-lg font-medium font-Poppins text-[#101828]">
                    {item.title}
                  </h2>

                  {openIndex === index ? <AccordionMinus /> : <AccordionPlus />}
                </motion.div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="py-2 font-Poppins text-[#919B9F] leading-6 max-w-[700px]">
                        {item.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQues;
