"use client";

import { useState } from "react";
import { Poppins } from "next/font/google";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function Page() {  
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#2A2140] w-screen ml-auto mr-auto h-screen grid place-items-center">
      <div
        id="content"
        className="[background:linear-gradient(to_right,rgba(255,20,147,0.5)_4%,rgba(0,255,255,0.5)_40%)] rounded-[10px] p-[1px] w-[400px] xl:w-[470px] ml-auto mr-auto mt-[10.344%] xl:mt-[3.344%] shadow-custom"
      >
        <form
          id="isiContent"
          className="bg-[#2A2140] rounded-[10px] w-full pt-[37px] xl:pt-[41px] flex items-center flex-col"
        >
          <p
            id="judul"
            className={`${poppins.className} mb-[24px] xl:mb-[30px] text-center text-[20px] xl:text-[24px]  font-bold`}
          >
            Create an account
          </p>

          {/* Form Inputs */}
          <div className="form w-max ml-auto mr-auto flex flex-col gap-y-[14px] xl:gap-y-[18px] mb-[7px] xl:mb-[12px]">
            {/* Name Input */}
            <div className="p-[1px] w-[305px] xl:w-[405px] rounded-md [background:linear-gradient(to_right,rgba(255,20,147,0.5)_4%,rgba(0,255,255,0.5)_40%)]">
              <div className="bg-[#2A2140] rounded-md">
                <input
                  type="text"
                  placeholder="Name"
                  className={`${poppins.className} pt-[15px] pb-[15px] xl:pt-[20px] xl:pb-[20px] placeholder:relative placeholder:bottom-[8px] placeholder:text-[#ffffff] focus:placeholder-transparent placeholder:text-[10px] text-[10px] xl:placeholder:text-[14px] xl:text-[14px] w-full bg-transparent focus:outline-none px-3 py-2 xl:px-5`}
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="p-[1px] w-[305px] xl:w-[405px] rounded-md [background:linear-gradient(to_right,rgba(255,20,147,0.5)_4%,rgba(0,255,255,0.5)_40%)]">
              <div className="bg-[#2A2140] rounded-md">
                <input
                  type="email"
                  placeholder="Email Address"
                  className={`${poppins.className} pt-[15px] pb-[15px] xl:pt-[20px] xl:pb-[20px] placeholder:relative placeholder:bottom-[8px] placeholder:text-[#ffffff] focus:placeholder-transparent placeholder:text-[10px] text-[10px] xl:placeholder:text-[14px] xl:text-[14px] w-full bg-transparent focus:outline-none px-3 py-2 xl:px-5`}
                />
              </div>
            </div>

            {/* Password Input dengan Toggle Icon */}
            <div className="p-[1px] w-[305px] xl:w-[405px] rounded-md [background:linear-gradient(to_right,rgba(255,20,147,0.5)_4%,rgba(0,255,255,0.5)_40%)]">
              <div className="bg-[#2A2140] rounded-md relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className={`${poppins.className} pt-[15px] pb-[15px] xl:pt-[20px] xl:pb-[20px] placeholder:relative placeholder:bottom-[8px] placeholder:text-[#ffffff] focus:placeholder-transparent placeholder:text-[10px] text-[10px] xl:placeholder:text-[14px] xl:text-[14px] w-full bg-transparent focus:outline-none px-3 py-2 xl:px-5 pr-10`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 xl:right-5 top-1/2 -translate-y-1/2 transform text-white"
                >
                  {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </button>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className={`${poppins.className} text-[6px] xl:text-[8.5px] text-center mb-[12px] xl:mb-[20px]`}>
            Dengan membuat akun, Anda menyetujui Syarat & Ketentuan serta Kebijakan Privasi.
          </p>

          {/* Submit Button */}
          <div className="p-[1px] w-max xl: h-max  mb-[24px] rounded-md [background:linear-gradient(to_right,rgba(255,20,147,0.5)_4%,rgba(0,255,255,0.5)_40%)]">
            <div className="bg-[#2A2140] rounded-md relative">
              <input
                type="submit"
                value="Sign Up"
                className={`${poppins.className} text-[10px] xl:text-[14px] font-bold rounded-[5px] pb-[11px] pr-[45px] pt-[11px] pl-[45px] xl:[50px]`} 
              />
            </div>
          </div>

          {/* Sign up with */}
          <div className="flex gap-x-[10px] mb-[28px]">
            <img src="/assets/stroke.svg" alt="" className="w-[117px] xl:w-[140px]" />
            <p className={`${poppins.className} text-[6px] xl:text-[9px] font-bold`}>Sign up with</p>
            <img src="/assets/stroke.svg" alt="" className="w-[117px] xl:w-[140px]" />
          </div>

          {/* OAuth Icons */}
          <div className="flex gap-x-[10px] xl:gap-x-[19px] mb-[23px] justify-center">
            <a href="">
              <img src="/icon/Twitter.png" alt="Twitter" className="w-[15px] xl:w-[23px]" />
            </a>
            <a href="">
              <img src="/icon/Google.png" alt="Google" className="w-[15px] xl:w-[23px]" />
            </a>
            <a href="">
              <img src="/icon/Apple.svg" alt="Apple" className="w-[13px] xl:w-[19px]" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}