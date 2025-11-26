"use client";
import { motion } from "framer-motion";
export default function CalculateAutomation({data}:any) {
  const bars = [
    "lg:h-8 h-6 bg-[#20654D]",
    "lg:h-[144px] h-[99px] bg-[#20654D]",
    "lg:h-[70px] h-[47px] bg-[#20654D]",
    "lg:h-[140px] h-[95px] bg-[#20654D]",
    "lg:h-[195px] h-[134px] bg-[#5FF0BD]",
    "lg:h-[134px] h-[92px] bg-[#20654D]",
    "lg:h-[156px] h-[107px] bg-[#20654D]",
    "lg:h-[70px] h-[48px] bg-[#20654D]",
  ];
  return (
    <div className="lg:pt-[107px] pt-11 w-full xl:px-[98px] px-[26px] md:px-8 lg:px-12 max-w-[1920px] mx-auto flex flex-col lg:gap-[75px] gap-11">
      <div className="flex flex-col gap-5 text-center">
        <p className="text-white lg:text-[50px]/[130%] text-[30px]/[130%]">
           <br className="md:hidden" /> {data.roiHeading}
        </p>
        <p className="text-[#9A9A98] lg:text-[22px]/[100%] text-base max-lg:text-center">
          {data.roiDescription}
        </p>
      </div>
      <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        <div className="bg-[#131313] rounded-3xl py-10 px-6 flex flex-col lg:gap-14 gap-9">
          <p className="font-medium text-2xl text-[#9A9A98] text-center">
            5X Boost
          </p>
          <div className="flex items-center justify-center lg:gap-6 gap-4 h-fit">
            {bars.map((cls, i) => (
              <motion.div
                key={i}
                className={`lg:w-5 w-[14px] rounded-full ${cls}`}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
          <div className="flex flex-col lg:gap-8 gap-5">
            <h2 className="font-medium lg:text-3xl/[127%] text-[22px]/[127%] text-[#9A9A98]">
              Structural Success
            </h2>
            <p className="lg:text-2xl/[127%] text-lg text-[#9A9A98]">
              Boost speed upto 5X, by reducing grunt work through agentic AI
            </p>
          </div>
        </div>
        <div className="bg-[#131313] rounded-3xl py-10 px-6 flex flex-col gap-6 justify-between">
          <p className="font-medium text-2xl text-[#9A9A98] max-lg:text-center">
            Save Time
          </p>
          <motion.div
            className="flex justify-center items-center mx-auto lg:size-[168px] size-32 rounded-full bg-[#282828] lg:text-[32px]/[127%] text-2xl text-[#9A9A98] text-center font-medium"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            20
            <br /> hours
          </motion.div>
          <p className="lg:text-2xl/[127%] text-lg text-[#9A9A98] text-center">
            Save up to 20+ hours weekly on repetitive tasks like customer
            inquiries and data entry.
          </p>
        </div>
        <div className="bg-[#131313] rounded-3xl py-10 px-6 flex flex-col gap-6 justify-between">
          <div className="flex flex-col lg:gap-8 gap-4">
            <h2 className="font-medium lg:text-3xl/[127%] text-xl text-[#9A9A98]">
              Operational costs
            </h2>
            <p className="lg:text-2xl/[127%] text-xl text-[#9A9A98]">
              70% reduction in operational cost through intelligent automation
            </p>
          </div>
          <motion.div
            className="relative lg:size-[302px] size-[170px] mx-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Left SVG */}
            <motion.span
              className="absolute left-0 max-lg:hidden"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <svg
                width="147"
                height="230"
                viewBox="0 0 147 230"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M48.8537 224.831C38.6259 232.4 24.0196 230.304 18.0934 219.045C8.98418 201.738 3.28894 182.758 1.40598 163.145C-1.21399 135.854 3.64542 108.365 15.4629 83.627C27.2804 58.8887 45.61 37.8345 68.4854 22.7231C84.9259 11.8626 103.269 4.3662 122.456 0.576433C134.938 -1.88907 145.747 8.15581 146.287 20.868C146.827 33.5803 136.827 44.0762 124.538 47.3719C113.692 50.2805 103.335 54.9243 93.8823 61.1685C77.9872 71.6688 65.2507 86.2984 57.0392 103.488C48.8278 120.678 45.4512 139.778 47.2717 158.741C48.3543 170.018 51.2505 180.993 55.8035 191.258C60.9625 202.889 59.0816 217.263 48.8537 224.831Z"
                  fill="#20654D"
                />
              </svg>
            </motion.span>
            <motion.span
              className="absolute left-0 lg:hidden"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <svg
                width="81"
                height="127"
                viewBox="0 0 81 127"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.7991 124.458C21.1611 128.631 13.1096 127.475 9.84283 121.269C4.82152 111.728 1.68209 101.266 0.644131 90.4545C-0.800086 75.411 1.8786 60.2581 8.39282 46.6215C14.907 32.9848 25.011 21.379 37.6207 13.0491C46.6833 7.06234 56.7945 2.93007 67.3711 0.841014C74.2519 -0.518064 80.2103 5.01904 80.5079 12.0265C80.8054 19.0339 75.2933 24.8197 68.5189 26.6364C62.5402 28.2397 56.8309 30.7995 51.6204 34.2416C42.8584 40.0297 35.8376 48.0941 31.3112 57.5696C26.7847 67.0451 24.9234 77.5742 25.927 88.0273C26.5237 94.2435 28.1202 100.293 30.63 105.952C33.4739 112.363 32.437 120.286 26.7991 124.458Z"
                  fill="#20654D"
                />
              </svg>
            </motion.span>

            {/* Right SVG */}
            <motion.span
              className="absolute right-0 max-lg:hidden"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <svg
                width="259"
                height="302"
                viewBox="0 0 259 302"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M104.179 22.8019C103.827 10.0831 113.907 -0.693894 126.531 0.891663C144.226 3.11396 161.449 8.46118 177.378 16.7445C200.148 28.5845 219.524 46.0327 233.678 67.4415C247.831 88.8503 256.294 113.513 258.268 139.101C260.242 164.689 255.661 190.359 244.959 213.685C234.256 237.011 217.785 257.224 197.1 272.416C176.416 287.608 152.201 297.278 126.741 300.511C101.281 303.745 75.4175 300.436 51.5918 290.897C34.9234 284.224 19.6374 274.656 6.41266 262.692C-3.02285 254.156 -1.42709 239.486 8.44379 231.458C18.3147 223.429 32.7058 225.176 42.6916 233.061C50.5678 239.28 59.3269 244.362 68.7174 248.122C85.2729 254.75 103.244 257.049 120.935 254.802C138.626 252.555 155.452 245.836 169.825 235.28C184.198 224.724 195.643 210.678 203.08 194.47C210.516 178.262 213.699 160.425 212.328 142.645C210.956 124.865 205.076 107.728 195.241 92.8517C185.407 77.9757 171.943 65.8517 156.121 57.6245C147.147 52.958 137.582 49.6325 127.73 47.7181C115.24 45.2909 104.531 35.5207 104.179 22.8019Z"
                  fill="#5FF0BD"
                />
              </svg>
            </motion.span>
            <motion.span
              className="absolute right-0 lg:hidden"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <svg
                width="143"
                height="167"
                viewBox="0 0 143 167"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M57.5505 12.9899C57.3567 5.97879 62.9128 0.0381517 69.8719 0.912168C79.6257 2.13717 89.1196 5.08475 97.9006 9.6508C110.452 16.1775 121.133 25.7956 128.935 37.5968C136.737 49.3981 141.402 62.9932 142.49 77.0983C143.578 91.2034 141.053 105.353 135.153 118.211C129.254 131.069 120.174 142.212 108.772 150.586C97.3701 158.961 84.0217 164.291 69.9875 166.073C55.9532 167.856 41.6962 166.032 28.5626 160.774C19.3744 157.095 10.9481 151.821 3.6582 145.226C-1.54299 140.52 -0.66335 132.434 4.77784 128.008C10.219 123.583 18.1519 124.546 23.6565 128.892C27.9981 132.321 32.8265 135.122 38.0028 137.194C47.1288 140.848 57.0354 142.115 66.7872 140.877C76.539 139.638 85.8142 135.934 93.737 130.115C101.66 124.296 107.969 116.554 112.068 107.619C116.168 98.6848 117.922 88.8528 117.166 79.0517C116.41 69.2507 113.168 59.8041 107.747 51.6039C102.326 43.4037 94.9044 36.7205 86.1829 32.1854C81.2359 29.613 75.9633 27.7799 70.5328 26.7246C63.6479 25.3866 57.7443 20.0009 57.5505 12.9899Z"
                  fill="#5FF0BD"
                />
              </svg>
            </motion.span>

            {/* Center Text */}
            <motion.p
              className="absolute inset-0 m-auto w-full h-full text-center flex justify-center items-center font-medium lg:text-[32px]/[127%] text-[28px] text-[#9A9A98]"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              70%
              <br />
              save
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
