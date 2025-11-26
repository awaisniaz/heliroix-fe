"use client";
import { Brain, ChevronDown } from "lucide-react";
import { DOMPurify } from "dompurify";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  fontSizeResponsive,
  fontWeightValid,
  toLineHeight,
} from "../utilities/size-convertor";
import HamburgerMenu from "./reusable/MobileMenu";
import NavBar from "./reusable/NavBar";

export default function Header({ data, setting }: any) {
  const handleNavigation = (mode: string) => {};
  return (
    <div className="w-full max-w-[1920px] mx-auto xl:px-[52px] px-[26px] md:px-8 lg:px-12">
      {/* HERO */}
      <section className="xl:mb-[174px] mb-9 mt-[50px] w-full overflow-hidden rounded-[48px] xl:px-[60px] px-5 md:px-8 lg:px-12 xl:pt-28 pt-4 md:pt-12 lg:pt-16 lg:pb-11 pb-6 md:pb-8 flex flex-col xl:gap-[150px] lg:gap-28 md:gap-16 gap-3 bg-[url('/images/main-hero-image.png')] h-full bg-cover bg-no-repeat relative">
        {/* Background subtle zoom */}
        <motion.div
          className={`absolute inset-0 rounded-[48px] bg-[url(${data?.backgroundImage?.sourceUrl})] bg-cover bg-no-repeat`}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Content */}
        <motion.h1
          className="hero-text relative z-10"
          style={{
            fontSize: fontSizeResponsive(data?.headerStyleFontSize),
            fontWeight: fontWeightValid(data?.headerStyleFontWeight),
            lineHeight: toLineHeight(data?.headerStyleLineHeight),
            color: data?.headerStyleFontColor,
            fontFamily: data?.headerStyleFontFamily,
            textTransform: data?.headerStyleTextTransform,
            textDecoration: data?.headerStyleTextDecoration,
          }}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span dangerouslySetInnerHTML={{ __html: data?.headerTitle || "" }} />
          <br className="sm:hidden" />
          <span
            dangerouslySetInnerHTML={{ __html: data?.headerTitle1 || "" }}
          />
        </motion.h1>

        <motion.div
          className="flex flex-col gap-14 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <p
            className="lg:text-xl text-base text-white"
            style={{
              fontSize: fontSizeResponsive(data?.descriptionStyleFontSize),
              fontWeight: fontWeightValid(data?.descriptionStyleFontWeight),
              lineHeight: toLineHeight(data?.descriptionStyleLineHeight),
              color: data?.descriptionStyleFontColor,
              fontFamily: data?.descriptionStyleFontFamily,
              textTransform: data?.descriptionStyleTextTransform,
              textDecoration: data?.descriptionStyleTextDecoration,
            }}
            dangerouslySetInnerHTML={{ __html: data?.descriptions }}
          ></p>

          <motion.div
            className="flex gap-3 max-lg:hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 120 }}
          >
            <button
              onClick={() => {
                window.location.href = setting.siteHeaderButtons.loginUrl;
              }}
              className="py-3 border-2 border-transparent px-6 flex items-center gap-5 bg-[#5FF0BD] rounded-md font-medium text-xl text-black hover:bg-[#5FF0BD]/90 transition-colors group my-action-btn"
            >
              {data?.navigationButton}

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
        </motion.div>
      </section>
      <motion.div
        className="flex gap-3 lg:hidden justify-center mb-[64px]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 120 }}
      >
        <button
          onClick={() => {
            window.location.href = setting.siteHeaderButtons.loginUrl;
          }}
          className="py-3 border-2 border-transparent px-6 flex items-center gap-5 bg-[#5FF0BD] rounded-md font-medium text-xl text-black hover:bg-[#5FF0BD]/90 transition-colors group my-action-btn"
        >
          {data?.navigationButton}
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
  );
}
