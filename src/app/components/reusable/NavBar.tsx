"use client";
import { motion } from "framer-motion";

import HamburgerMenu from "./MobileMenu";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function NavBar({ setting }: any) {
  const pathName = usePathname();
  if(!setting){
    return null
  }
  return (
    <>
      {" "}
      <header className="relative z-20 pt-[50px]">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div dangerouslySetInnerHTML={{ __html: setting?.logoSection }} />
            <span className="text-lg font-semibold text-white">
              {setting?.siteName}
            </span>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="hidden lg:flex items-center gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {/* Home */}
            <motion.a
              href="/"
              className={`font-medium text-emerald-400 transition-colors ${
                pathName === "/"
                  ? "text-emerald-400"
                  : "text-gray-300 hover:text-white"
              }`}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Home
            </motion.a>

            {/* Solutions (with ChevronDown) */}
            <motion.a
              href="/platform"
              className={`cursor-pointer font-medium text-emerald-400 transition-colors ${
                pathName === "/platform"
                  ? "text-emerald-400"
                  : "text-gray-300 hover:text-white"
              }`}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <button className="flex items-center gap-1 cursor-pointer">
                <span>Platform</span>
              </button>
            </motion.a>

            {/* Resources (with ChevronDown) */}
            <motion.div
              className="relative group flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <button className="flex items-center gap-1 cursor-not-allowed">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Pricing */}
            <motion.button
              className="text-gray-300 hover:text-white transition-colors cursor-not-allowed"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Pricing
            </motion.button>
          </motion.div>

          {/* Auth Buttons */}
          <motion.div
            className="hidden lg:flex items-center gap-3"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <button
              onClick={() => {
                window.location.href = setting?.siteHeaderButtons?.loginUrl;
              }}
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors my-action-btn"
            >
              {setting?.siteHeaderButtons?.loginText}
            </button>

            <button
              onClick={() => {
                window.location.href = setting?.siteHeaderButtons?.signupUrl;
              }}
              className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors my-action-btn"
            >
              {setting?.siteHeaderButtons?.signuptext}
            </button>
          </motion.div>
          <HamburgerMenu
            // handleNavigation={handleNavigation}
            setting={setting}
          />
        </nav>
      </header>
    </>
  );
}
