"use client";

import { motion, type Variants } from "framer-motion";
import CognitiveFlowAnimation from "./CognitiveFlowAnimation";

// Typed easing tuple so TS treats it as a valid Easing
const EASE_BEZIER: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE_BEZIER,
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const leftItemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_BEZIER },
  },
};

const rightCardVariants: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: EASE_BEZIER,
      delay: 0.15,
    },
  },
};

export default function MainHeader() {
  return (
    <motion.div
      className=" w-full grid grid-cols-2 gap-[76px] max-w-[1920px] mx-auto px-4 md:px-8 lg:px-14 xl:px-24 pt-[134px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-10">
        <motion.div className="flex flex-col gap-9" variants={leftItemVariants}>
          <h3 className="text-[90px]/[97%] text-white">
            The <span className="text-[#5CEEBA]">Cognitive Platform</span> for
            Solar Engineering.
          </h3>
          <p className="text-[26px]/[100%] text-white">
            Heliorix unites conversation, cognition, and compliance into one
            intelligent ecosystem.
          </p>
        </motion.div>

        <motion.button
          className="w-fit py-3 border-2 border-transparent px-6 flex items-center gap-5 bg-[#5CEEBA] rounded-md font-medium text-xl text-black hover:bg-[#5CEEBA]/90 transition-colors group my-action-btn"
          variants={leftItemVariants}
          whileHover={{
            scale: 1.04,
            y: -2,
            transition: { duration: 0.18, ease: "easeOut" },
          }}
          whileTap={{ scale: 0.97, y: 0 }}
        >
          See how it works
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
        </motion.button>
      </div>

      {/* RIGHT SIDE */}
      <motion.div
        className="py-10 px-12 rounded-3xl bg-[#131313]"
        variants={rightCardVariants}
        whileHover={{
          y: -4,
          scale: 1.01,
          transition: { duration: 0.25, ease: "easeOut" },
        }}
      >
        <h5 className="text-[#5CEEBA] text-4xl pb-[103px]">Cognitive Flow</h5>

        <CognitiveFlowAnimation />

        <motion.div
          className="w-full gap-2 justify-between flex items-center mt-[136px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.6,
            ease: EASE_BEZIER,
          }}
        >
          <p className="text-[#5CEEBA] text-xl">Conversation</p>
          <svg
            width={26}
            height={8}
            viewBox="0 0 26 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.3536 4.03556C25.5488 3.8403 25.5488 3.52372 25.3536 3.32845L22.1716 0.146473C21.9763 -0.0487893 21.6597 -0.0487893 21.4645 0.146473C21.2692 0.341735 21.2692 0.658318 21.4645 0.85358L24.2929 3.68201L21.4645 6.51043C21.2692 6.7057 21.2692 7.02228 21.4645 7.21754C21.6597 7.4128 21.9763 7.4128 22.1716 7.21754L25.3536 4.03556ZM0 3.68201V4.18201H25V3.68201V3.18201H0V3.68201Z"
              fill="white"
            />
          </svg>
          <p className="text-[#5CEEBA] text-xl">Cognition</p>
          <svg
            width={26}
            height={8}
            viewBox="0 0 26 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.3536 4.03556C25.5488 3.8403 25.5488 3.52372 25.3536 3.32845L22.1716 0.146473C21.9763 -0.0487893 21.6597 -0.0487893 21.4645 0.146473C21.2692 0.341735 21.2692 0.658318 21.4645 0.85358L24.2929 3.68201L21.4645 6.51043C21.2692 6.7057 21.2692 7.02228 21.4645 7.21754C21.6597 7.4128 21.9763 7.4128 22.1716 7.21754L25.3536 4.03556ZM0 3.68201V4.18201H25V3.68201V3.18201H0V3.68201Z"
              fill="white"
            />
          </svg>
          <p className="text-[#5CEEBA] text-xl">Compliance</p>
          <svg
            width={26}
            height={8}
            viewBox="0 0 26 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.3536 4.03556C25.5488 3.8403 25.5488 3.52372 25.3536 3.32845L22.1716 0.146473C21.9763 -0.0487893 21.6597 -0.0487893 21.4645 0.146473C21.2692 0.341735 21.2692 0.658318 21.4645 0.85358L24.2929 3.68201L21.4645 6.51043C21.2692 6.7057 21.2692 7.02228 21.4645 7.21754C21.6597 7.4128 21.9763 7.4128 22.1716 7.21754L25.3536 4.03556ZM0 3.68201V4.18201H25V3.68201V3.18201H0V3.68201Z"
              fill="white"
            />
          </svg>
          <p className="text-[#5CEEBA] text-xl">Learning</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
