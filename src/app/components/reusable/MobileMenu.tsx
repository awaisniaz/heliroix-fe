"use client"
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const HamburgerMenu = ({ handleNavigation, setting }: any) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <span className="lg:hidden size-8">
        <svg
          className={`text-white menu__icon ${isActive ? "active" : ""}`}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            setIsActive(!isActive);
            document.body.style.overflow = isActive ? "auto" : "hidden";
          }}
        >
          <path
            className="line top"
            d="M5.3335 10.6666H26.6668"
            stroke="currentColor"
            strokeWidth="1.04167"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="line bottom"
            d="M5.3335 21.3334H26.6668"
            stroke="currentColor"
            strokeWidth="1.04167"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <div
        className={` fixed inset-0 top-28 md:top-33 w-full bg-white/20 xl:hidden transition-all duration-300 ease-in-out  backdrop-blur-lg ${
          isActive ? "p-4 h-full" : "h-0 delay-150"
        }`}
      >
        <ul
          className={`text-center transition-opacity duration-300 ease-in ${
            isActive
              ? "opacity-100 pointer-events-auto delay-150"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <li className={`w-full relative `}>
            <div className="flex flex-col gap-2 justify-center items-center px-4">
              <div
                onClick={() => setIsActive(!isActive)}
                // href="#"
                className="py-4 px-6 font-medium text-emerald-400 transition-colors"
              >
                Home
              </div>

              {/* Solutions (with ChevronDown) */}
              <div
                onClick={() => setIsActive(!isActive)}
                className="py-4 px-6 relative group flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
              >
                <button className="flex items-center gap-1 cursor-not-allowed">
                  <span>Solutions</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Resources (with ChevronDown) */}
              <div
                onClick={() => setIsActive(!isActive)}
                className="py-4 px-6 relative group flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
              >
                <button className="flex items-center gap-1 cursor-not-allowed">
                  <span>Resources</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Pricing */}
              <button
                onClick={() => setIsActive(!isActive)}
                className="py-4 px-6 text-gray-300 hover:text-white transition-colors cursor-not-allowed"
              >
                Pricing
              </button>
            </div>
          </li>
          <div className="flex flex-col w-full items-center gap-3 mt-10">
            <button
              onClick={() => {
                window.location.href = setting?.siteHeaderButtons?.loginUrl;
              }}
              className="px-4 py-2 hover:text-white transition-colors w-full border border-white rounded-lg text-white my-action-btn"
            >
              Login
            </button>

            <button
              onClick={() => {
                window.location.href = setting?.siteHeaderButtons?.signupUrl;
              }}
              className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors w-full my-action-btn"
            >
              Sign up
            </button>
          </div>
        </ul>
      </div>
    </>
  );
};
export default HamburgerMenu;
