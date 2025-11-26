"use client";

import { motion } from "framer-motion";

import { useEffect, useRef } from "react";
import gsap from "gsap";
export default function OurPillars({ data }: any) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  console.log(data?.pillarsIntegrations[0]);
  const logos = [
    { src: "/images/tool-1.png", className: "w-[157px] h-[34px]" },
    { src: "/images/tool-2.png", className: "w-[155px] h-[42px]" },
    { src: "/images/tool-3.png", className: "w-[192px] h-[53px]" },
    { src: "/images/tool-4.png", className: "w-[117px] h-[44px]" },
    { src: "/images/tool-5.png", className: "w-[208px] h-[66px]" },
    { src: "/images/tool-6.png", className: "w-[170px] h-[39px]" },
    { src: "/images/tool-7.png", className: "w-[128px] h-[39px]" },
    { src: "/images/tool-8.png", className: "w-[186px] h-[36px]" },
    { src: "/images/tool-9.png", className: "w-[202px] h-[54px]" },
    { src: "/images/tool-10.png", className: "w-[141px] h-[46px]" },
    { src: "/images/tool-11.png", className: "w-[166px] h-[47px]" },
    { src: "/images/tool-12.png", className: "w-[160px] h-[47px]" },
    { src: "/images/tool-13.png", className: "w-[119px] h-[47px]" },
    { src: "/images/tool-14.png", className: "w-[122px] h-[47px]" },
    { src: "/images/tool-15.png", className: "w-[165px] h-[47px]" },
  ];
  const loopLogos = [
    ...data?.pillarsIntegrations,
    ...data?.pillarsIntegrations,
  ];
  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = marqueeRef.current;
      if (!el) return;

      gsap.to(el, {
        xPercent: -50, // move full width
        ease: "linear",
        duration: 20,
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="pt-[160px] flex flex-col gap-16">
      {/* Heading */}
      <motion.div
        className="flex flex-col lg:gap-5 gap-3 xl:px-[52px] px-[26px] md:px-8 lg:px-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="lg:text-xl text-lg font-semibold text-[#5FF0BD]">
          {data.pillarsSectionTitle}
        </p>
        <motion.h3
          className="lg:text-[50px]/[130%] text-[30px]/[130%] text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {data.pillarsMainHeading}
        </motion.h3>
      </motion.div>
      <div ref={marqueeRef} className="flex gap-11 h-fit w-max items-center">
        {loopLogos.map((logo, i) => (
          <div
            key={i}
            className="shrink-0 flex items-center h-fit grayscale hover:grayscale-0 transition-all"
          >
            <img
              src={logo?.pillarsLogoImage?.sourceUrl}
              alt={`Company logo ${i + 1}`}
              className={
                logo.width
                  ? `w-[${logo?.width}px] h-[${logo?.height}px]`
                  : "h-[40px] w-auto"
              } // fallback height
            />
          </div>
        ))}
      </div>
      {/* Swiper */}
      {/* <motion.div
        className="pl-[52px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="overflow-hidden w-full">
          <div ref={marqueeRef} className="flex gap-5 w-max">
            {loopFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                className="w-[320px] bg-black text-white border border-[#171715] rounded-xl p-6 flex flex-col justify-between transition-all duration-500 shrink-0"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0px 20px 40px rgba(0, 0, 0, 0.4), 0px 0px 20px rgba(0, 122, 255, 0.3)",
                }}
              >
                <span className="text-xl text-[#747472]">[{feature.id}]</span>
                <div className="rounded-lg overflow-hidden w-full aspect-square flex justify-center items-center mt-2.5 mb-8 bg-[#171715]">
                  <img
                    src={feature.img}
                    className="m-auto object-cover w-max overflow-hidden size-[150px]"
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <h3 className="text-3xl font-semibold mt-2">
                    {feature.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div> */}
    </div>
  );
}
