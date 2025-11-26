"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function IndustryUseCase({data1}:any) {

  const [openId, setOpenId] = useState<number | null>(0);

  // Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const listContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.15 },
    },
  };

  const listItem:Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="lg:pt-28 pt-12 w-full xl:px-[52px] px-[26px] md:px-8 lg:px-12 max-w-[1920px] mx-auto">
      <div className="flex flex-col lg:gap-8 gap-3 lg:text-center xl:mb-[124px] lg:mb-[100px] md:mb-16 mb-7">
        <p className="lg:text-xl text-lg font-semibold text-[#5FF0BD]">{data1?.industrySectionLabel}</p>
        <h4 className="lg:text-[50px]/[130%] text-[30px]/[130%] text-white">{data1?.industrySectionHeading}</h4>
      </div>
      <div className="flex lg:justify-between max-lg:flex-col gap-12 w-full">
        {/* Left Image */}
      <div className="lg:w-1/2 flex items-center justify-center h-fit">
          <AnimatePresence mode="wait">
  
            {openId != null &&  <motion.img
                key={openId} // important for AnimatePresence
                src={data1?.industryUseCases.find((d:any,index:any) => index == openId)?.industryImage?.sourceUrl}
                alt={data1?.industryUseCases.find((d:any,index:any) => index == openId)?.industryTitle}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="rounded-2xl object-cover w-full aspect-[4/2.25]" // adjust sizes as needed
              />}
            
          </AnimatePresence>
        </div>

        {/* Right Accordion */}
        <motion.div
          className="lg:w-1/2 flex flex-col gap-7"
          variants={listContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          {data1?.industryUseCases?.map((item:any,index:number) => (
            <motion.div
              key={index}
              variants={listItem}
              className="flex flex-col pb-6 border-b border-[#2C2C2C]"
            >
              {/* Header */}
              <div
                onClick={() => setOpenId(openId === index ? null : index)}
                className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-all duration-300"
              >
                <motion.span
                  animate={{ rotate: openId === index ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`${
                    openId === index ? "text-[#6ADBB3]" : "text-white"
                  }`}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 8 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 5L0.5 9.33013L0.5 0.669872L8 5Z"
                      fill="currentColor"
                    />
                  </svg>
                </motion.span>
                <h4 className="lg:text-[22px]/[120%] text-lg text-white">{item.industryTitle}</h4>
              </div>

              {/* Description */}
              <AnimatePresence initial={false} mode="wait">
                {openId === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#848480] lg:text-[22px]/[150%] text-base pl-5 pr-2 pt-3">
                      {item.industryDescription}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
