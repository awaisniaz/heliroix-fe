"use client";
import { motion } from "framer-motion";

export default function FutureOfAutomation({data}:any) {
  const bars = [
    { height: "80%" },
    { height: "40%" },
    { height: "90%" },
    { height: "80%" },
  ];

  return (
    <div className="xl:pt-[234px] lg:pt-36 md:pt-24 pt-7 w-full xl:px-[98px] px-[26px] md:px-8 lg:px-12 max-w-[1920px] mx-auto flex flex-col gap-[68px]">
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center lg:text-[50px]/[130%] text-[30px]/[130%] text-white"
      >
        {data.futureSectionHeading}
      </motion.h1>

      <div className="flex flex-col gap-5 h-full">
        {/* First Row */}
        <div className="w-full flex max-lg:flex-col gap-[18px] h-full">
          {/* Card 1 (smaller) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-[45%] lg:p-12 max-lg:pt-9 max-lg:px-[18px] rounded-3xl bg-[#131313] flex flex-col gap-10 pb-4"
          >
            {/* Animated Images */}
            <div className="flex justify-center relative">
              <motion.img
                src="/images/card-image-1.png"
                className="object-cover 2xl:h-[166px] h-[90px] max-2xl:w-[27px] relative z-20"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              />
              <motion.img
                src="/images/card-image-2.png"
                className="object-cover 2xl:h-[160px] h-[88px] max-2xl:w-[146px] relative 2xl:z-10"
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              />
              <motion.img
                src="/images/card-image-3.png"
                className="object-cover 2xl:-ml-36 -ml-20 2xl:mt-12 mt-8 relative z-0 max-2xl:h-[103px] max-2xl:w-[158px]"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              />
            </div>
            <div className="flex flex-col lg:gap-9 gap-3">
              <h3 className="font-medium 2xl:text-4xl lg:text-2xl text-[22px] text-[#5CEEBA] -mt-8">
                {data?.futureCards?.[0]?.cardTitle}
              </h3>
              <div className="flex flex-col gap-3">
                <p className="font-medium 2xl:text-3xl text-[22px]/1 text-[#9A9A98] sub-text">
                   {data?.futureCards?.[0]?.cardSubtitle}
                </p>
                <p className="2xl:text-2xl/[127%] text-lg/[127%] text-[#9A9A98] automation-description">
                 {data?.futureCards?.[0]?.cardDescription}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 (larger with bars) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-[55%] lg:p-12 max-lg:pt-9 max-lg:px-[18px] pt-[88px] rounded-3xl bg-[#131313] flex flex-col gap-[75px] justify-between"
          >
            <div className="w-full flex lg:gap-12 gap-6">
              {bars.map((bar, i) => (
                <div
                  key={i}
                  className="w-36 lg:h-[188px] h-[90px] bg-black rounded-2xl relative overflow-hidden"
                >
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: bar.height }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: i * 0.25,
                    }}
                    className="absolute bottom-0 w-full bg-[#282828] rounded-t-2xl"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col lg:gap-9 gap-3 mb-9">
              <h3 className="font-medium 2xl:text-4xl lg:text-2xl text-[22px] text-[#5CEEBA] -mt-8">
                {data?.futureCards?.[1]?.cardTitle}
              </h3>
              <div className="flex flex-col gap-3">
                <p className="font-medium 2xl:text-3xl text-[22px]/1 text-[#9A9A98] sub-text">
                  {data?.futureCards?.[1]?.cardSubtitle}
                </p>
                <p className="2xl:text-2xl/[127%] text-lg/[127%] text-[#9A9A98] automation-description">
                 {data?.futureCards?.[1]?.cardDescription}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="w-full flex max-lg:flex-col-reverse flex-row-reverse gap-[18px] h-full">
          {/* Card 3 (smaller, right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-[45%] lg:p-12 lg:pt-16 max-lg:py-[30px] px-[18px] rounded-3xl bg-[#131313] flex flex-col gap-5 justify-between"
          >
            <div className="flex flex-col lg:gap-9 gap-3">
              <h3 className="font-medium 2xl:text-4xl lg:text-2xl text-[22px] text-[#5CEEBA] lg:-mt-8">
                {data?.futureCards?.[2]?.cardTitle}
              </h3>
              <div className="flex flex-col gap-3">
                <p className="font-medium 2xl:text-3xl text-[22px]/1 text-[#9A9A98] sub-text">
                 {data?.futureCards?.[2]?.cardSubtitle}
                </p>
                <p className="2xl:text-2xl/[127%] text-lg/[127%] text-[#9A9A98] automation-description">
                 {data?.futureCards?.[2]?.cardDescription}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 4 (larger, left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-[55%] lg:p-12 lg:pt-16 max-lg:py-[30px] px-[18px] rounded-3xl bg-[#131313] flex flex-col gap-5"
          >
            <div className="flex flex-col lg:gap-9 gap-3">
              <h3 className="font-medium 2xl:text-4xl lg:text-2xl text-[22px] text-[#5CEEBA] lg:-mt-8">
                {data?.futureCards?.[3]?.cardTitle}
              </h3>
              <div className="flex flex-col gap-3">
                <p className="font-medium 2xl:text-3xl text-[22px]/1 text-[#9A9A98] sub-text">
                  {data?.futureCards?.[3]?.cardSubtitle}
                </p>
                <p className="2xl:text-2xl/[127%] text-lg/[127%] text-[#9A9A98] automation-description">
                 {data?.futureCards?.[3]?.cardDescription}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
