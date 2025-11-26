"use client";
import { motion } from "framer-motion";


export default function HomePageFooter({ data, automation }: any) {
  //const navigate = useNavigate();
  if(!data && !automation){
    return null
  }

  return (
    <>
      {/* Top CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="lg:pt-[155px] pt-[68px] flex flex-col gap-[90px] xl:px-[90px] px-[26px] md:px-8 lg:px-12 pb-[90px]"
      >
        <div className="flex flex-col lg:gap-12 gap-10 lg:w-[792px] justify-center items-center mx-auto">
          <div className="flex flex-col lg:gap-9 gap-5 text-center">
            <h2 className="lg:text-[50px]/[130%] text-[30px]/[130%] text-white">
              {automation?.roiCtaHeading}
            </h2>
            <p className="lg:text-[22px]/[120%] text-base text-white">
              {automation?.roiCtaDescription}
            </p>
          </div>
          <motion.button
            //onClick={() => navigate("/login")}
            onClick={() => { window.location.href = "https://app.heliorix.ai/login"; }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-3 border-2 my-action-btn border-transparent px-6 flex items-center gap-5 bg-[#5FF0BD] rounded-md font-medium text-xl text-black hover:bg-[#5FF0BD]/90 transition-colors group"
          >
            {automation?.roiCtaButtonText}
            <span className="group-hover:rotate-[42deg] transition-transform">
              <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9991 2.04344C14.023 1.49167 13.5952 1.02493 13.0434 1.00094L4.05193 0.61001C3.50017 0.58602 3.03343 1.01386 3.00944 1.56563C2.98545 2.11739 3.41329 2.58413 3.96506 2.60812L11.9575 2.95562L11.61 10.9481C11.586 11.4998 12.0139 11.9666 12.5656 11.9906C13.1174 12.0146 13.5841 11.5867 13.6081 11.0349L13.9991 2.04344ZM1 13L1.67572 13.7372L13.6757 2.73715L13 2L12.3243 1.26285L0.324275 12.2628L1 13Z" fill="black" />
              </svg>

            </span>
          </motion.button>
        </div>
      </motion.div>

      {/* Footer Main */}
      <div className="bg-[#0C120B] lg:px-14 px-8 2xl:h-[694px] flex flex-col justify-between lg:pt-28 pt-8">
        <div className="flex lg:justify-between max-lg:flex-col">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-[635px] text-white lg:text-[50px]/[130%] text-[30px]/[130%] lg:pt-[60px]"
          >
            {data.footerTagline}
          </motion.h1>

          {/* Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="flex max-2xl:flex-col 2xl:gap-[190px] gap-10 max-2xl:mb-20"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="flex lg:flex-col max-lg:flex-col-reverse lg:gap-14 gap-11 max-lg:pt-11"
            >
              <div className="flex flex-col gap-4">
                <p className="text-[#848480] text-xl">{data.footerSupportHeading}</p>
                <a
                  href="tel:17035368351"
                  className="text-[#B1B1B1] text-xl cursor-pointer group w-fit"
                >
                  {data.footerSupportPhone}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px  group-aria-selected:max-w-full bg-[#B1B1B1]" />
                </a>
                <a
                  href="mailto:info@heliorix.ai"
                  className="text-[#B1B1B1] text-xl cursor-pointer group w-fit"
                >
                  {data.footerSupportEmail}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px  group-aria-selected:max-w-full bg-[#B1B1B1]" />
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[#848480] text-xl">{data.footerQuickLinksHeading}</p>
                {data?.footerQuickLinks?.map((link: any, i: number) => (
                  <span
                    key={i}
                    className="text-[#B1B1B1] text-xl cursor-pointer group w-fit"
                  >
                    {link.footerLinkText}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px  group-aria-selected:max-w-full bg-[#B1B1B1]" />
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.9 }}
              className="flex flex-col gap-11 lg:w-[525px] max-lg:pt-[72px]"
            >
              <div className="flex flex-col gap-5">
                <span className="text-[#848480] text-xl">{data.footerNewsletterHeading}</span>
                <span className="text-[#B1B1B1] text-xl">
                  {data.footerNewsletterDescription}
                </span>
              </div>
              <div className="flex flex-col gap-5">
                <span className="text-[#848480] text-xl">{data.footerAddressHeading}</span>
                <p className="text-[#B1B1B1] text-xl">
                  <span><b>{data.footerAddressDescription1}</b></span>
                  <br />
                  {data.addressDescription}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="w-full flex lg:items-end max-lg:flex-col pb-9 max-lg:gap-3"
        >
          <div className="lg:w-1/2 flex lg:items-end max-lg:flex-col lg:gap-[228px] max-lg:items-center max-lg:justify-center max-lg:pt-12 max-lg:gap-10">
            <div className="flex gap-1.5">
              {[
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.40119 6.20224C4.40119 5.20843 5.20636 4.40258 6.19986 4.40258C7.19337 4.40258 7.99897 5.20843 7.99897 6.20224C7.99897 7.19604 7.19337 8.00189 6.19986 8.00189C5.20636 8.00189 4.40119 7.19604 4.40119 6.20224ZM3.42863 6.20224C3.42863 7.73326 4.66931 8.97431 6.19986 8.97431C7.73042 8.97431 8.9711 7.73326 8.9711 6.20224C8.9711 4.67121 7.73042 3.43016 6.19986 3.43016C4.66931 3.43016 3.42863 4.67121 3.42863 6.20224ZM8.43318 3.32024C8.43313 3.44837 8.47106 3.57364 8.54218 3.6802C8.6133 3.78676 8.71441 3.86984 8.83273 3.91891C8.95105 3.96799 9.08126 3.98088 9.2069 3.95593C9.33254 3.93098 9.44796 3.86933 9.53856 3.77877C9.62917 3.6882 9.6909 3.5728 9.71594 3.44714C9.74098 3.32149 9.7282 3.19123 9.67923 3.07283C9.63026 2.95444 9.5473 2.85323 9.44082 2.782C9.33435 2.71078 9.20915 2.67273 9.08107 2.67268H9.08081C8.90912 2.67276 8.74447 2.741 8.62305 2.86242C8.50162 2.98384 8.43333 3.1485 8.43318 3.32024ZM4.01952 10.5965C3.49335 10.5725 3.20736 10.4849 3.0173 10.4108C2.76533 10.3127 2.58555 10.1958 2.39653 10.007C2.20751 9.81817 2.0905 9.63851 1.99284 9.38646C1.91875 9.19643 1.83111 8.91027 1.80719 8.38393C1.78102 7.81488 1.7758 7.64394 1.7758 6.20228C1.7758 4.76061 1.78146 4.59015 1.80719 4.02063C1.83115 3.49429 1.91944 3.20869 1.99284 3.0181C2.09093 2.76605 2.20777 2.58622 2.39653 2.39714C2.58529 2.20806 2.7649 2.09102 3.0173 1.99333C3.20727 1.91922 3.49335 1.83155 4.01952 1.80762C4.5884 1.78145 4.75928 1.77622 6.19986 1.77622C7.64044 1.77622 7.8115 1.78188 8.38085 1.80762C8.90703 1.83159 9.19254 1.91991 9.38308 1.99333C9.63505 2.09102 9.81483 2.20832 10.0038 2.39714C10.1929 2.58596 10.3094 2.76605 10.4075 3.0181C10.4816 3.20813 10.5693 3.49429 10.5932 4.02063C10.6194 4.59015 10.6246 4.76061 10.6246 6.20228C10.6246 7.64394 10.6194 7.81441 10.5932 8.38393C10.5692 8.91027 10.4811 9.19635 10.4075 9.38646C10.3094 9.63851 10.1926 9.81834 10.0038 10.007C9.81509 10.1956 9.63505 10.3127 9.38308 10.4108C9.19311 10.4849 8.90703 10.5726 8.38085 10.5965C7.81198 10.6227 7.64109 10.6279 6.19986 10.6279C4.75864 10.6279 4.58822 10.6227 4.01952 10.5965ZM3.97484 0.836404C3.40031 0.862576 3.00771 0.953704 2.66486 1.08716C2.30979 1.22497 2.0092 1.40986 1.70883 1.70984C1.40847 2.00983 1.22411 2.31098 1.08634 2.66616C0.952926 3.00933 0.861826 3.40183 0.835662 3.97653C0.809066 4.55214 0.802979 4.73617 0.802979 6.20224C0.802979 7.6683 0.809066 7.85233 0.835662 8.42794C0.861826 9.00269 0.952926 9.39514 1.08634 9.73831C1.22411 10.0933 1.40851 10.3948 1.70883 10.6946C2.00916 10.9945 2.30979 11.1791 2.66486 11.3173C3.00836 11.4508 3.40031 11.5419 3.97484 11.5681C4.55058 11.5942 4.73424 11.6008 6.19986 11.6008C7.66548 11.6008 7.84945 11.5947 8.42489 11.5681C8.99946 11.5419 9.3918 11.4508 9.73487 11.3173C10.0897 11.1791 10.3905 10.9946 10.6909 10.6946C10.9913 10.3946 11.1752 10.0933 11.3134 9.73831C11.4468 9.39514 11.5383 9.00265 11.5641 8.42794C11.5902 7.8519 11.5963 7.6683 11.5963 6.20224C11.5963 4.73617 11.5902 4.55214 11.5641 3.97653C11.5379 3.40178 11.4468 3.00912 11.3134 2.66616C11.1752 2.3112 10.9908 2.0103 10.6909 1.70984C10.391 1.40938 10.0897 1.22497 9.7353 1.08716C9.3918 0.953704 8.99942 0.862145 8.42532 0.836404C7.84989 0.810232 7.66592 0.803711 6.2003 0.803711C4.73467 0.803711 4.55058 0.8098 3.97484 0.836404Z"
                    fill="white"
                  />
                </svg>,
                <svg
                  width="7"
                  height="13"
                  viewBox="0 0 7 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.3222 12.4059V6.97314H6.0799L6.34111 4.85706H4.3222V3.50461C4.3222 2.89278 4.48601 2.47417 5.33166 2.47417H6.41195V0.578897C6.226 0.551296 5.58402 0.496094 4.84021 0.496094C3.28175 0.496094 2.21916 1.48513 2.21916 3.2976V4.86166H0.457031V6.97774H2.21916V12.4059H4.3222Z"
                    fill="white"
                  />
                </svg>,
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.90694 1.86029C2.90676 2.2139 2.76286 2.55295 2.50692 2.80285C2.25097 3.05276 1.90393 3.19306 1.54214 3.19289C1.18036 3.19271 0.833461 3.05207 0.577768 2.80191C0.322075 2.55175 0.17853 2.21256 0.178711 1.85896C0.178892 1.50536 0.322784 1.16631 0.578733 0.916398C0.834682 0.666489 1.18172 0.526191 1.54351 0.526367C1.90529 0.526544 2.25219 0.667182 2.50788 0.917341C2.76357 1.1675 2.90712 1.50669 2.90694 1.86029ZM2.94786 4.18016H0.219634V12.5264H2.94786V4.18016ZM7.25846 4.18016H4.54387V12.5264H7.23118V8.14661C7.23118 5.70675 10.4846 5.48009 10.4846 8.14661V12.5264H13.1787V7.23999C13.1787 3.12689 8.36339 3.28021 7.23118 5.3001L7.25846 4.18016Z"
                    fill="white"
                  />
                </svg>,
              ].map((icon, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="size-[26px] rounded-full flex justify-center items-center bg-[#9C9F99] cursor-pointer"
                >
                  {icon}
                </motion.span>
              ))}
            </div>

            <p className="lg:text-xl text-base text-[#848480]">
              {data.footerCopyrightText}
            </p>
          </div>
          <p className="lg:w-1/2 lg:text-xl text-base text-[#848480] lg:mr-1.5 max-lg:text-center">
            {data.footerBottomText}
          </p>
        </motion.div>
      </div>
    </>
  );
}
