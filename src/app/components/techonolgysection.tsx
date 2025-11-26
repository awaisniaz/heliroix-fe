"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500; // 1.5s
      const increment = target / (duration / 16); // ~60fps

      const step = () => {
        start += increment;
        if (start < target) {
          setCount(Math.floor(start));
          requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };
      requestAnimationFrame(step);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function TechnologySection({ data, technology }: any) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  //const navigate = useNavigate();
  const logos = [
    { src: "/images/marquee-logo-1.png", className: "w-[179px] h-[56px]" },
    { src: "/images/marquee-logo-2.png", className: "w-[124px] h-[50px]" },
    { src: "/images/marquee-logo-3.png", className: "w-[156px] h-[36px]" },
    { src: "/images/marquee-logo-4.png", className: "w-[135px] h-[55px]" },
    { src: "/images/marquee-logo-5.png", className: "w-[181px] h-[32px]" },
    { src: "/images/marquee-logo-6.png", className: "w-[284px] h-[42px]" },
    { src: "/images/marquee-logo-7.png", className: "w-[136px] h-[42px]" },
    { src: "/images/marquee-logo-8.png", className: "w-[245px] h-[72px]" },
    { src: "/images/marquee-logo-9.png", className: "w-[250px] h-[56px]" },
  ];
  const loopLogos = [...logos, ...logos];
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
    <div className="w-full flex flex-col gap-24 ">
      {/* Intro Text */}
      <motion.div
        className="flex flex-col gap-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col gap-10">
          <p className="text-xl text-[#747472] text-center">
            {data?.trustedTopText}
          </p>
          <div className="relative w-full overflow-hidden">
            {/* gradient fade edges */}

            <div
              ref={marqueeRef}
              className="flex gap-11 h-fit w-max items-center"
            >
              {loopLogos.map((logo, i) => (
                <div
                  key={i}
                  className="shrink-0 flex items-center h-fit grayscale hover:grayscale-0 transition-all"
                >
                  <img
                    src={logo.src}
                    alt={`Company logo ${i + 1}`}
                    className={
                      logo.className ? logo.className : "h-[40px] w-auto"
                    } // fallback height
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <div className="w-full max-w-[1920px] mx-auto xl:px-[52px] px-[26px] md:px-8 lg:px-12">
        <div className="flex lg:justify-between max-lg:flex-col">
          <motion.h3
            className="lg:text-[50px]/[130%] text-[30px]/[130%] text-white lg:w-[650px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {technology?.technologyLeftTitle}
          </motion.h3>
          <motion.div
            className="lg:w-[590px] flex flex-col lg:gap-14 gap-9 max-lg:mt-4 max-lg:items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="lg:text-xl text-lg text-white">
              {technology?.technologyRightDescription}
            </p>
            <button
             onClick={() => { window.location.href = "https://app.heliorix.ai/login"; }}
             className="px-4 py-2 bg-[#5FF0BD] text-black rounded-lg font-medium hover:bg-[#5FF0BD]/90 transition-colors group flex items-center gap-3 w-fit my-action-btn"
            >
              {technology?.technologyCtaText}
              <span className="group-hover:rotate-[42deg] transition-transform">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9991 2.04344C14.023 1.49167 13.5952 1.02493 13.0434 1.00094L4.05193 0.61001C3.50017 0.58602 3.03343 1.01386 3.00944 1.56563C2.98545 2.11739 3.41329 2.58413 3.96506 2.60812L11.9575 2.95562L11.61 10.9481C11.586 11.4998 12.0139 11.9666 12.5656 11.9906C13.1174 12.0146 13.5841 11.5867 13.6081 11.0349L13.9991 2.04344ZM1 13L1.67572 13.7372L13.6757 2.73715L13 2L12.3243 1.26285L0.324275 12.2628L1 13Z"
                    fill="black"
                  />
                </svg>
              </span>
            </button>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid lg:grid-cols-11 grid-cols-1 w-full mt-20 border border-[#333331] rounded-2xl max-lg:divide-y divide-[#333331]"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >{
            technology?.technologyStats.map((item: any, index: number) => {
              return index == 0 ? <motion.div
                key={item.id || index}
                className="lg:col-span-4 pt-7 lg:px-14 px-4 pb-12 border-r border-[#333331]"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, delay: item?.delay }}
              >
                <p className="2xl:text-[215px]/[100%] text-[120px]/[100%] text-white max-lg:text-center">
                  <Counter target={item?.technologyValue} suffix={item?.suffix} />
                </p>
                <div className="pt-1 flex gap-2.5 items-center max-lg:justify-center">
                  <div className="lg:size-4 size-3 rounded-full shrink-0 bg-[#5CEEBA] animate-pulse" />
                  <span className="text-xl text-[#747472]">
                    {item?.technologyDescription}
                  </span>
                </div>
              </motion.div> : index == 1 ? <motion.div
               key={item.id || index}
                className="lg:col-span-4 pt-7 lg:px-14 px-4 pb-12 border-r border-[#333331]"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, delay: item?.delay }}
              >
                <p className="2xl:text-[215px]/[100%] text-[120px]/[100%] max-lg:text-center text-white">
                  <Counter target={item?.technologyValue} suffix={item?.suffix} />
                </p>
                <div className="pt-1 flex gap-2.5 items-center max-lg:justify-center">
                  <div className="lg:size-4 size-3 rounded-full shrink-0 bg-[#5CEEBA] animate-pulse" />
                  <span className="text-xl text-[#747472]">
                    {item?.technologyDescription}
                  </span>
                </div>
              </motion.div> : index == 2 ? <motion.div
               key={item.id || index}
                className="lg:col-span-3 pt-7 lg:px-14 px-4 pb-12"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, delay: item?.delay }}
              >
                <p className="2xl:text-[215px]/[100%] text-[120px]/[100%] max-lg:text-center text-white">
                  <Counter target={item?.technologyValue} suffix={item?.suffix} />
                </p>
                <div className="pt-1 flex gap-2.5 items-center max-lg:justify-center">
                  <div className="lg:size-4 size-3 rounded-full shrink-0 bg-[#5CEEBA] animate-pulse" />
                  <span className="text-xl text-[#747472]">
                    {item?.technologyDescription}
                  </span>
                </div>
              </motion.div> : <motion.div
               key={item.id || index}
                className="lg:col-span-3 pt-7 lg:px-14 px-4 pb-12"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, delay: item?.delay }}
              >
                <p className="2xl:text-[215px]/[100%] text-[120px]/[100%] max-lg:text-center text-white">
                  <Counter target={item?.technologyValue} suffix={item?.suffix} />
                </p>
                <div className="pt-1 flex gap-2.5 items-center max-lg:justify-center">
                  <div className="lg:size-4 size-3 rounded-full shrink-0 bg-[#5CEEBA] animate-pulse" />
                  <span className="text-xl text-[#747472]">
                    {item?.technologyDescription}
                  </span>
                </div>
              </motion.div>
            })
          }
        </motion.div>
      </div>
    </div>
  );
}
