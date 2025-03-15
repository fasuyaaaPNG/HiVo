"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";
import { Lobster } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const lobster = Lobster({
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal"],
    display: "swap",
  });

export default function Page() {  
    return (
        <div id="wrapper" className="h-screen bg-[#151023]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max">
                <p className={`${lobster.className} text-center text-[55px]`}>HiVo</p>
                <p className={`${poppins.className} text-center text-[12px]`}>Terjemahkan Bahasa Isyarat menggunakan AI</p>
            </div>
            <div id="wrapper2" className="absolute w-screen bottom-[50px]">
                <div className="w-[80vw] ml-auto mr-auto relative flex flex-col text-center gap-y-[14px]">
                    <a href="/register" className={`${poppins.className} pt-[14px] pb-[14px] rounded-[5px] text-[13px] font-bold bg-[#3A2E5F] text-[#ffffff]`}>Sign Up</a>
                    <a href="/login" className={`${poppins.className} pt-[14px] pb-[14px] rounded-[5px] text-[13px] font-bold bg-[#DCDCDC] text-[#3A2E5F]`}>Sign In</a>
                </div>
            </div>
        </div>
    )
}