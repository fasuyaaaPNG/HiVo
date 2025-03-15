"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { SlArrowLeft} from "react-icons/sl";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function Page() {  
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen w-screen bg-[url(/assets/bgsign.png)] bg-cover bg-center">
      <div className="h-screen backdrop-blur-sm">
        <div className="absolute w-screen top-6">
          <div className="h w-[90%] ml-auto mr-auto flex flex-row justify-between">
            <a href="/sign">
                <div id="back" className="flex items-center gap-x-[10px]">
                <SlArrowLeft  className="size-3"/>
                <p className={`${poppins.className} text-[10px] font-thin`}>Back</p>
                </div>
            </a>
          </div>
        </div>
        <div className="absolute w-screen top-24">
          <div className="w-[90%] ml-auto mr-auto">
            <h1 className={`${poppins.className} text-[24px] font-bold w-full text-center mb-8`}>Welcome Back!</h1>
            <form action="" className="mb-6 flex flex-col">
              <input type="email" name="" id="" placeholder="Email Address" className={`mb-3 w-full pl-3 pt-4 pb-4 pr-3 bg-transparent border border-[#b5b1c2] rounded-md outline-none focus:outline-none placeholder:relative placeholder:bottom-2 placeholder:${poppins.className} placeholder:font-bold placeholder:text-white focus:placeholder-transparent`}/>
              <div className="border border-[#b5b1c2] rounded-md mb-3 flex gap-x-3 pl-3 pr-3">
                <input type={showPassword ? "text" : "password"} name="" id="" placeholder="Password" className={`pt-4 pb-4 w-full bg-transparent h-full outline-none focus:outline-none placeholder:relative placeholder:bottom-2 placeholder:${poppins.className} placeholder:font-bold placeholder:text-white focus:placeholder-transparent`}/>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-white"
                >
                  {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </button>
              </div>
              <p className="text-center text-[7px] font-bold mb-6">Dengan membuat akun, Anda menyetujui Syarat & Ketentuan serta Kebijakan Privasi.</p>
              <input type="submit" value="Sign In" className={`${poppins.className} text-[10px] font-bold border border-[#ffffff] rounded-md pt-2 pb-2 pl-11 pr-11 ml-auto mr-auto`} />
            </form>
            <div className="mb-10 flex ml-auto mr-auto w-max gap-x-2">
              <img src="/assets/stroke2.svg" alt="" className="w-28" />
              <p className={`${poppins.className} font-bold text-[6px]`}>Sign In with</p>
              <img src="/assets/stroke2.svg" alt="" className="w-28" />
            </div>
            <div>
              <div className="flex flex-col gap-y-4 mb-5">
                <a href="">
                  <div className="rounded-full bg-[#ffffff] w-max flex items-center gap-x-4 pt-3 pb-3 pl-[61px] pr-[61px] ml-auto mr-auto">
                    <img src="/assets/apple.svg" className="w-5 h-6" alt="" />
                    <p className={`${poppins.className} font-bold text-[13px] text-[#000000]`}>Continue with Apple</p>
                  </div>
                </a>
                <a href="">
                  <div className="rounded-full bg-[#ffffff2c] backdrop-blur-sm w-max flex items-center gap-x-5 pt-3 pb-3 pl-[61px] pr-[55px] ml-auto mr-auto">
                    <img src="/assets/google.svg" className="w-5 h-6" alt="" />
                    <p className={`${poppins.className} font-bold text-[13px] text-[#ffffff]`}>Continue with Google</p>
                  </div>
                </a>
              </div>
              <div className="flex ml-auto mr-auto w-max gap-x-12">
                <a href="">
                  <div className="w-max pt-2 pb-2 pl-12 pr-12 rounded-full bg-[#ffffff2c] backdrop-blur-sm">
                    <img src="/assets/facebook.png" className="w-7" alt="" />
                  </div>
                </a>
                <a href="">
                  <div className="w-max pt-2 pb-2 pl-12 pr-12 rounded-full bg-[#ffffff2c] backdrop-blur-sm">
                    <img src="/assets/Twitter.png" className="w-7" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}