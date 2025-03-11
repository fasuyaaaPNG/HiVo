'use client';

import { useState, useEffect } from "react";
import { Merriweather } from "next/font/google";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";

const Page = dynamic(() => import("@/app/components/home/page"));
const Panduan = dynamic(() => import("@/app/components/panduan/page"));
const Scan = dynamic(() => import("@/app/components/scan-terjemah/page"));
const About = dynamic(() => import("@/app/components/about/page"));
const Feedback = dynamic(() => import("@/app/components/feedback/page"));

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const links = ["Home", "Fitur", "Scan & Terjemah", "About Us", "Feedback"];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [leftOffsets, setLeftOffsets] = useState<Record<number, number>>({
    0: 32,
    1: 10,
    2: 220,
    3: 375,
    4: 484,
  });
  const [widths, setWidths] = useState<Record<number, number>>({
    0: 63,
    1: 20,
    2: 140,
    3: 90,
    4: 90,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth >= 1508) {
        setLeftOffsets({
          0: 25,
          1: 125,
          2: 225,
          3: 430,
          4: 555,
        });
        setWidths({
          0: 90,
          1: 87,
          2: 185,
          3: 107,
          4: 120,
        });
      } else {
        setLeftOffsets({
          0: 32,
          1: 110,
          2: 190,
          3: 345,
          4: 450,
        });
        setWidths({
          0: 63,
          1: 63,
          2: 140,
          3: 90,
          4: 90,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const renderPage = () => {
    switch (activeIndex) {
      case 0:
        return <Page />;
      case 1:
        return <Panduan />;
      case 2:
        return <Scan />;
      case 3:
        return <About />;
      case 4:
        return <Feedback />;
      default:
        return <Page />;
    }
  };

  return (
    <>
      <nav className={`${merriweather.className} bg-[#443C75] h-[91px] 2xl:h-[121px] pt-[1.5%]`}>
        <div className="flex justify-between items-center ml-[38px] mr-[30px] pt-[2px]">
          <img src="./logo/logo.svg" alt="" className=" w-[110px] 2xl:w-[139px]" />
          <div className="relative h-[50px] text-[14px] 2xl:text-[20px] bg-[#2F2B42] font-normal rounded-[100px] text-[#213555] flex items-center gap-[43px] pr-[43px] pl-[43px]">
            <div
              className="absolute h-[29px] rounded-[100px] bg-[#4E495D] transition-all duration-300"
              style={{
                left: `${leftOffsets[activeIndex]}px`,
                width: `${widths[activeIndex]}px`,
              }}
            ></div>
            {links.map((text, index) => (
              <button
                key={index}
                className={`z-10 transition-all duration-300 ${
                  activeIndex === index
                    // ? "bg-text-gradient6 bg-clip-text text-transparent"
                    ? "text-[#ffffff]"
                    : "text-[#cccccc]"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </>
  );
}