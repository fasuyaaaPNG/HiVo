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
    <div
      id="content"
      className="[background:linear-gradient(to_right,rgba(255,20,147,0.5)_4%,rgba(0,255,255,0.5)_40%)] rounded-[10px] p-[1px] w-[400px] ml-auto mr-auto mt-[10.344%]"
    >
      <form
        id="isiContent"
        className="bg-[#1A1427] rounded-[10px] w-full pt-[37px] flex items-center flex-col"
      >
        <p
          id="judul"
          className={`${poppins.className} mb-[24px] text-center text-[20px] font-bold`}
        >
          Create an account
        </p>

        {/* Form Inputs */}
        <div className="form w-max ml-auto mr-auto flex flex-col gap-y-[14px] mb-[7px]">
          {/* Name Input */}
          <div className="p-[1px] w-[305px] rounded-md [background:linear-gradient(to_right,rgba(255,20,147,0.5)_4%,rgba(0,255,255,0.5)_40%)]">
            <div className="bg-[#1A1427] rounded-md">
              <input
                type="text"
                placeholder="Name"
                className={`${poppins.className} pt-[15px] pb-[15px] placeholder:relative placeholder:bottom-[8px] placeholder:text-[#ffffff] focus:placeholder-transparent placeholder:text-[10px] text-[10px] w-full bg-transparent focus:outline-none px-3 py-2`}
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="p-[1px] w-[305px] rounded-md [background:linear-gradient(to_right,rgba(255,20,147,0.5)_4%,rgba(0,255,255,0.5)_40%)]">
            <div className="bg-[#1A1427] rounded-md">
              <input
                type="email"
                placeholder="Email Address"
                className={`${poppins.className} pt-[15px] pb-[15px] placeholder:relative placeholder:bottom-[8px] placeholder:text-[10px] text-[10px] w-full bg-transparent focus:outline-none px-3 py-2`}
              />
            </div>
          </div>

          {/* Password Input dengan Toggle Icon */}
          <div className="p-[1px] w-[305px] rounded-md [background:linear-gradient(to_right,rgba(255,20,147,0.5)_4%,rgba(0,255,255,0.5)_40%)]">
            <div className="bg-[#1A1427] rounded-md relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={`${poppins.className} pt-[15px] pb-[15px] placeholder:relative placeholder:bottom-[8px] placeholder:text-[10px] text-[10px] w-full bg-transparent focus:outline-none px-3 py-2 pr-10`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 transform text-white"
              >
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className={`${poppins.className} text-[6px] text-center mb-[12px]`}>
          Dengan membuat akun, Anda menyetujui Syarat & Ketentuan serta Kebijakan Privasi.
        </p>

        {/* Submit Button */}
        <input
          type="submit"
          value="Sign Up"
          className={`${poppins.className} text-[10px] font-bold rounded-[5px] bg-bg-gradient pb-[11px] pr-[45px] pt-[11px] pl-[45px] mb-[24px]`}
        />

        {/* Sign up with */}
        <div className="flex gap-x-[10px] mb-[28px]">
          <img src="/assets/stroke.svg" alt="" className="w-[117px]" />
          <p className={`${poppins.className} text-[6px]`}>Sign up with</p>
          <img src="/assets/stroke.svg" alt="" className="w-[117px]" />
        </div>

        {/* OAuth Icons */}
        <div className="flex gap-x-[7px] mb-[23px]">
          <a href="">
            <img src="/icon/Facebook.svg" alt="Facebook" className="w-[15px]" />
          </a>
          <a href="">
            <img src="/icon/Twitter.svg" alt="Twitter" className="w-[15px]" />
          </a>
          <a href="">
            <img src="/icon/Google.svg" alt="Google" className="w-[15px]" />
          </a>
        </div>
      </form>
    </div>
  );
}