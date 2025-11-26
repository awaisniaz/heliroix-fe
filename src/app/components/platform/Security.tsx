"use client";

import { motion, type Variants } from "framer-motion";

// Typed easing tuple so TS accepts it as an Easing
const EASE_BEZIER: [number, number, number, number] = [0.2, 0.8, 0.3, 0.98];

const textGroupVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASE_BEZIER,
    },
  },
};

const cardsRowVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: EASE_BEZIER,
    },
  },
};

export default function Security() {
  const data = [
    {
      id: "dual_approval_governance",
      title: "Dual-Approval Rule Governance",
      description: "Ensure changes to rulepacks pass maker checker review.",
    },
    {
      id: "gdpr_alignment",
      title: "GDPR / CCPA / ISO 27001 alignment",
      description: "Privacy, data right and security alignment.",
    },
    {
      id: "cloudflare_security",
      title: "Cloudflare WAF + TLS 1.3 security perimeter",
      description: "Modern parameter with strict transport security.",
    },
    {
      id: "rds_encryption",
      title: "RDS Encryption + S3 Object-Lock (5 years)",
      description: "Data-at-rest protections and immutability.",
    },
    {
      id: "aor_trace_dashboard",
      title: "AOR Trace Replay Dashboard",
      description: "Reconstruct and audit every decision step.",
    },
  ];

  return (
    <div className="pt-14 pb-[164px] flex flex-col gap-[74px] max-w-[1920px] mx-auto px-4 md:px-8 lg:px-14 xl:px-24">
      {/* Heading */}
      <motion.div
        className="text-center flex flex-col gap-6"
        variants={textGroupVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h4
          className="text-[50px]/[100%] text-white"
          variants={textItemVariants}
        >
          Governance & Security
        </motion.h4>
        <motion.p
          className="text-[26px] text-[#848480]"
          variants={textItemVariants}
        >
          Built for Enterprise-Grade Compliance
        </motion.p>
      </motion.div>

      <div className="flex flex-col gap-7">
        {/* Top row – 3 cards */}
        <motion.div
          className="grid grid-cols-3 gap-7"
          variants={cardsRowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {data.slice(0, 3).map((item, idx) => (
            <motion.div
              key={idx}
              className="px-16 py-[58px] flex flex-col gap-11 bg-[#131313] rounded-[28px]"
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.99, y: -1 }}
            >
              <div className="flex items-center gap-6">
                <span className="shrink-0">
                  <svg
                    width={35}
                    height={44}
                    viewBox="0 0 35 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 2.18945L18.3619 0.176946C18.0895 0.0601993 17.7963 0 17.5 0C17.2037 0 16.9105 0.0601993 16.6381 0.176946L17.5 2.18945ZM17.5 41.5644L16.415 43.4632C16.7455 43.652 17.1194 43.7512 17.5 43.7512C17.8806 43.7512 18.2545 43.652 18.585 43.4632L17.5 41.5644ZM16.6381 0.179134L2.65125 6.1707L4.375 10.1957L18.3619 4.20195L16.6381 0.179134ZM3.32062e-07 10.1935V25.1998H4.375V10.1935H3.32062e-07ZM7.71531 38.4932L16.415 43.4632L18.585 39.6657L9.88531 34.6935L7.71531 38.4932ZM18.585 43.4632L27.2847 38.4932L25.1147 34.6935L16.415 39.6657L18.585 43.4632ZM35 25.1976V10.1957H30.625V25.2019L35 25.1976ZM32.3488 6.17288L18.3619 0.179134L16.6381 4.19976L30.625 10.1957L32.3488 6.17288ZM35 10.1957C34.9999 9.33963 34.7487 8.50241 34.2774 7.78774C33.8061 7.07307 33.1356 6.51017 32.3488 6.17288L30.625 10.1957H35ZM27.2847 38.4932C29.6289 37.1536 31.5772 35.2203 32.9322 32.8849C34.2871 30.5496 35.0005 27.8975 35 25.1976H30.625C30.6248 27.1258 30.1148 29.0198 29.1467 30.6874C28.1786 32.355 26.7868 33.7371 25.1125 34.6935L27.2847 38.4932ZM3.32062e-07 25.1976C-0.000120638 27.8971 0.713446 30.5488 2.06838 32.8837C3.4233 35.2186 5.37143 37.1538 7.71531 38.4932L9.88531 34.6935C8.21201 33.7372 6.82112 32.3557 5.85347 30.6889C4.88583 29.0221 4.37579 27.1292 4.375 25.2019L3.32062e-07 25.1976ZM2.65125 6.1707C1.86409 6.50813 1.19328 7.07137 0.721995 7.78647C0.250707 8.50156 -0.000333273 9.33926 3.32062e-07 10.1957H4.375L2.65125 6.1707Z"
                      fill="#5FF0BD"
                    />
                    <path
                      d="M24.0625 17.5022L15.3125 26.2522L10.9375 21.8772"
                      stroke="#5FF0BD"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h5 className="font-medium text-[28px]/[100%] text-white">
                  {item.title}
                </h5>
              </div>
              <p className="text-[22px]/[26px] text-white font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row – 2 centered cards */}
        <motion.div
          className="flex justify-center mx-auto gap-7 "
          variants={cardsRowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {data.slice(3).map((item, idx) => (
            <motion.div
              key={idx}
              className="w-full md:w-[533px] px-16 py-[58px] flex flex-col gap-11 bg-[#131313] rounded-[28px]"
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.99, y: -1 }}
            >
              <div className="flex items-center gap-6">
                <span className="shrink-0">
                  <svg
                    width={35}
                    height={44}
                    viewBox="0 0 35 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 2.18945L18.3619 0.176946C18.0895 0.0601993 17.7963 0 17.5 0C17.2037 0 16.9105 0.0601993 16.6381 0.176946L17.5 2.18945ZM17.5 41.5644L16.415 43.4632C16.7455 43.652 17.1194 43.7512 17.5 43.7512C17.8806 43.7512 18.2545 43.652 18.585 43.4632L17.5 41.5644ZM16.6381 0.179134L2.65125 6.1707L4.375 10.1957L18.3619 4.20195L16.6381 0.179134ZM3.32062e-07 10.1935V25.1998H4.375V10.1935H3.32062e-07ZM7.71531 38.4932L16.415 43.4632L18.585 39.6657L9.88531 34.6935L7.71531 38.4932ZM18.585 43.4632L27.2847 38.4932L25.1147 34.6935L16.415 39.6657L18.585 43.4632ZM35 25.1976V10.1957H30.625V25.2019L35 25.1976ZM32.3488 6.17288L18.3619 0.179134L16.6381 4.19976L30.625 10.1957L32.3488 6.17288ZM35 10.1957C34.9999 9.33963 34.7487 8.50241 34.2774 7.78774C33.8061 7.07307 33.1356 6.51017 32.3488 6.17288L30.625 10.1957H35ZM27.2847 38.4932C29.6289 37.1536 31.5772 35.2203 32.9322 32.8849C34.2871 30.5496 35.0005 27.8975 35 25.1976H30.625C30.6248 27.1258 30.1148 29.0198 29.1467 30.6874C28.1786 32.355 26.7868 33.7371 25.1125 34.6935L27.2847 38.4932ZM3.32062e-07 25.1976C-0.000120638 27.8971 0.713446 30.5488 2.06838 32.8837C3.4233 35.2186 5.37143 37.1538 7.71531 38.4932L9.88531 34.6935C8.21201 33.7372 6.82112 32.3557 5.85347 30.6889C4.88583 29.0221 4.37579 27.1292 4.375 25.2019L3.32062e-07 25.1976ZM2.65125 6.1707C1.86409 6.50813 1.19328 7.07137 0.721995 7.78647C0.250707 8.50156 -0.000333273 9.33926 3.32062e-07 10.1957H4.375L2.65125 6.1707Z"
                      fill="#5FF0BD"
                    />
                    <path
                      d="M24.0625 17.5022L15.3125 26.2522L10.9375 21.8772"
                      stroke="#5FF0BD"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h5 className="font-medium text-[28px]/[100%] text-white">
                  {item.title}
                </h5>
              </div>
              <p className="text-[22px]/[26px] text-white font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
