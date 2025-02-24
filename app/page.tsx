"use client";
import { useState } from "react";
import { Merriweather } from "next/font/google";
import Link from "next/link";
import dynamic from "next/dynamic";

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

const links = ["Home", "Panduan", "Scan & Terjemah", "About Us", "Feedback"];

const leftOffsets: { [key: number]: number } = {
  0: 32,   // Home
  1: 110,  // Panduan
  2: 220,  // Scan & Terjemah
  3: 375,  // About Us
  4: 484,  // Feedback
};

const widths: { [key: number]: number } = {
  0: 63,   // Home
  1: 90,   // Panduan
  2: 140,  // Scan & Terjemah
  3: 90,   // About Us
  4: 90,   // Feedback
};

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

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
      <nav className={`${merriweather.className} bg-[#1A1A1D] h-[91px]`}>
        <div className="flex justify-between items-center ml-[38px] mr-[30px] pt-[2px]">
          <img src="./logo/LOGO.png" alt="" className="w-[150px]" />
          <div className="relative h-[50px] text-[14px] bg-[#1E1E1E] font-normal rounded-[100px] text-[#213555] flex items-center gap-[43px] pr-[43px] pl-[43px]">
            <div
              className="absolute h-[29px] rounded-[100px] bg-[#FFEDFA] transition-all duration-300"
              style={{
                left: `${leftOffsets[activeIndex]}px`,
                width: `${widths[activeIndex]}px`,
              }}
            ></div>
            {links.map((text, index) => (
              <button
                key={index}
                className={`z-10 transition-all duration-300 ${activeIndex === index ? "text-black" : "bg-text-gradient bg-clip-text text-transparent"}`}
                onClick={() => setActiveIndex(index)}
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      </nav>
      {renderPage()}
    </>
  );
}
