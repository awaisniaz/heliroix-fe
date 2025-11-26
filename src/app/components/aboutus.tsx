"use client";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function AboutUs({ data }: any) {
  const images = data?.pillarsRightImage?.map((item: any) => {
    return item?.pillarImage?.sourceUrl
  })
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const variants: Variants = {
    enter: {
      x: 300, // always from right
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      x: -300, // always to left
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <div className="lg:pt-[160px] pt-[52px]">
      {/* Hero Heading */}
      <motion.h1
        className="xl:px-[52px] px-[26px] md:px-8 lg:px-12 max-w-[1920px] mx-auto text-white lg:text-[80px]/[130%] text-[32px]/[130%]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {data?.pillarsRightSideTitle}
      </motion.h1>

      {/* Image */}
      {/* <motion.img
        className="w-full object-cover -mt-5 opacity-60 rounded-xl"
        src="/images/about-us-main-image.png"
        alt="About Us"
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      /> */}

      {/* Content */}
      <div className="pt-16 flex lg:justify-between max-lg:flex-col gap-12 w-full xl:px-[52px] px-[26px] md:px-8 lg:px-12 max-w-[1920px] mx-auto">
        {/* Left animated images */}
        <div className="lg:w-1/2 flex justify-center items-center relative overflow-hidden max-lg:w-full max-lg:h-[200px]">
          <div className="relative w-full lg:h-[450px] h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full object-fill rounded-xl shadow-xl"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Right text */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
         <p className="lg:text-[22px]/[160%] text-lg text-[#848480] leading-relaxed">
           {data.pillarsRightDescription}
            <br />
            <br />
           {data.rightDescription2}
            <br />
            <br />
            {data.rightDescription3}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
