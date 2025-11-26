"use client";

import { motion, type Variants } from "framer-motion";
import LearningLoopAnimation from "./LearningLoopAnimation";

// Typed easing curves so TS accepts them as Easing
const EASE_MAIN: [number, number, number, number] = [0.2, 0.8, 0.3, 0.98];
const EASE_BULLET: [number, number, number, number] = [0.21, 0.8, 0.3, 0.98];

const leftGroupVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const leftItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASE_MAIN,
    },
  },
};

const bulletRowVariants: Variants = {
  hidden: { opacity: 0, x: -14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: EASE_BULLET,
    },
  },
};

const rightCardVariants: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: EASE_MAIN,
    },
  },
};

const labelsRowVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASE_MAIN,
      delay: 0.1,
    },
  },
};

export default function ContinuousLearning() {
  return (
    <div className="w-full grid grid-cols-2 gap-[76px] max-w-[1920px] mx-auto px-4 md:px-8 lg:px-14 xl:px-24">
      {/* LEFT COLUMN */}
      <motion.div
        className="flex flex-col gap-11"
        variants={leftGroupVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.h4
          className="text-[50px]/[100%] text-white"
          variants={leftItemVariants}
        >
          Continuous Learning
        </motion.h4>

        <motion.p
          className="text-[26px]/[100%] text-[#848480]"
          variants={leftItemVariants}
        >
          Every Project Makes the Platform Smarter{" "}
        </motion.p>

        <motion.div
          className="flex flex-col gap-[18px]"
          variants={leftItemVariants}
        >
          <motion.p
            className="text-2xl text-white"
            variants={leftItemVariants}
          >
            Heliorix’s Federated Learning Hub collects anonymized performance
            data to refine rulepacks and optimization heuristics across all
            tenants — ensuring every future design is faster, safer, and more
            compliant.
          </motion.p>

          <motion.div
            className="flex flex-col gap-8"
            variants={leftGroupVariants}
          >
            <motion.div
              className="flex items-center gap-7"
              variants={bulletRowVariants}
            >
              <div className="size-3 shrink-0 rounded-full bg-[#5CEEBA]" />
              <span className="font-light text-2xl text-white">
                Global Policy Bus
              </span>
            </motion.div>

            <motion.div
              className="flex items-center gap-7"
              variants={bulletRowVariants}
            >
              <div className="size-3 shrink-0 rounded-full bg-[#5CEEBA]" />
              <span className="font-light text-2xl text-white">
                Rule Optimization Loop
              </span>
            </motion.div>

            <motion.div
              className="flex items-center gap-7"
              variants={bulletRowVariants}
            >
              <div className="size-3 shrink-0 rounded-full bg-[#5CEEBA]" />
              <span className="font-light text-2xl text-white">
                Tenant-Safe Telemetry
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* RIGHT COLUMN */}
      <motion.div
        className="py-10 px-12 rounded-3xl bg-[#131313]"
        variants={rightCardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        whileHover={{
          y: -4,
          scale: 1.01,
          transition: { duration: 0.25, ease: "easeOut" },
        }}
      >
        <h5 className="text-[#5CEEBA] text-4xl pb-[103px]">Learning Loop</h5>

        <LearningLoopAnimation />

        <motion.div
          className="w-full gap-2 justify-between flex items-center mt-[136px]"
          variants={labelsRowVariants}
        >
          <p className="text-[#5CEEBA] text-xl">Project</p>
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
          <p className="text-[#5CEEBA] text-xl">Learning Hub</p>
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
          <p className="text-[#5CEEBA] text-xl">Rule Update</p>
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
          <p className="text-[#5CEEBA] text-xl">Next Design</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
