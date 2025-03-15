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
    <>
    <div className="bg-[#2A2140] relative bg-opacity-70 overflow-hidden">
      <iframe src="data:text/html;base64,PGh0bWw+CiAgICAgICAgPGhlYWQ+CiAgICAgICAgICAgIDxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSI+CiAgICAgICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgICAgIGh0bWwsIGJvZHl7CiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwOwogICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgPC9zdHlsZT4KICAgICAgICAgICAgPHNjcmlwdCB0eXBlPSJpbXBvcnRtYXAiPgp7CiAgICAiaW1wb3J0cyI6IHsKICAgICAgICAicmVhY3QiOiAiaHR0cHM6Ly9jZG4uc2t5cGFjay5kZXYvcmVhY3RAMTguMC4yIiwKICAgICAgICAicmVhY3QtZG9tIjogImh0dHBzOi8vY2RuLnNreXBhY2suZGV2L3JlYWN0LWRvbUAxOC4wLjIiLAogICAgICAgICJ0aHJlZSI6ICJodHRwczovL2Nkbi5za3lwYWNrLmRldi90aHJlZUAwLjE0OC4wIiwKICAgICAgICAicmVhY3QtdGhyZWUvZmliZXIiOiAiaHR0cHM6Ly9jZG4uc2t5cGFjay5kZXYvQHJlYWN0LXRocmVlL2ZpYmVyQDcuMC4yNCIKICAgIH0KfQo8L3NjcmlwdD4KPHN0eWxlPgogICAgaHRtbCwgYm9keXsKICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgcGFkZGluZzogMDsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgYm9yZGVyOiAwOwogICAgfQogICAgLm50LWVtYmVkewogICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgIGhlaWdodDogMTAwJTsKICAgIH0KICAgIC5udC1lbWJlZCBjYW52YXN7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgfQo8L3N0eWxlPgo8c2NyaXB0IHR5cGU9Im1vZHVsZSI+CiAgICBpbXBvcnQgUmVhY3QsIHt1c2VSZWYsdXNlTWVtb30gZnJvbSAncmVhY3QnOwogICAgaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7CiAgICBpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7CiAgICBpbXBvcnQge0NhbnZhcywgdXNlRnJhbWUsIHVzZVRocmVlfSBmcm9tICdyZWFjdC10aHJlZS9maWJlcic7CgogICAgbGV0IGVtYmVkUm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogICAgZW1iZWRSb290LmNsYXNzTmFtZSA9ICJudC1lbWJlZCI7CiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVtYmVkUm9vdCk7CgogICAgY29uc3QgVGV4dHVyZU1lc2ggPSAoKSA9PiB7CiAgICAgICAgY29uc3QgbWVzaCA9IHVzZVJlZihudWxsKQogICAgICAgIHVzZUZyYW1lKHN0YXRlID0+IHsKICAgICAgICAgICAgY29uc3QgeyBjbG9jaywgbW91c2UsIGdsLCBzY2VuZSwgY2FtZXJhIH0gPSBzdGF0ZQogICAgICAgICAgICBpZihtZXNoLmN1cnJlbnQpewogICAgICAgICAgICAgICAgbWVzaC5jdXJyZW50Lm1hdGVyaWFsLnVuaWZvcm1zLnVfbW91c2UudmFsdWUgPSBbbW91c2UueCAvIDIgKyAwLjUsIG1vdXNlLnkgLyAyICsgMC41XQogICAgICAgICAgICAgICAgbWVzaC5jdXJyZW50Lm1hdGVyaWFsLnVuaWZvcm1zLnVfdGltZS52YWx1ZSA9IGNsb2NrLmdldEVsYXBzZWRUaW1lKCkKICAgICAgICAgICAgICAgIGxldCBjID0gZ2wuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKQogICAgICAgICAgICAgICAgbWVzaC5jdXJyZW50Lm1hdGVyaWFsLnVuaWZvcm1zLnVfcmVzb2x1dGlvbi52YWx1ZSA9IFtjLndpZHRoLGMuaGVpZ2h0XQogICAgICAgICAgICB9CiAgICAgICAgfSkKICAgICAgICAKICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnbWVzaCcsCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIHJlZjptZXNoLAogICAgICAgICAgICAgICAgcG9zaXRpb246IFswLDAsMF0sCiAgICAgICAgICAgICAgICBzY2FsZTogMSwKICAgICAgICAgICAgICAgIHJvdGF0aW9uOiBbMCwwLDBdCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BsYW5lR2VvbWV0cnknLHthcmdzOlsyNDAsNTgwXX0pLCAKICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc2hhZGVyTWF0ZXJpYWwnLHsKICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBgdW5pZm9ybSB2ZWMyIHVfcmVzb2x1dGlvbjsKCnVuaWZvcm0gZmxvYXQgdV90aW1lOwoKdW5pZm9ybSB2ZWMzIHVfY29sb3I7Cgp1bmlmb3JtIHZlYzQgdV9iYWNrZ3JvdW5kOwoKdW5pZm9ybSBmbG9hdCB1X3NwZWVkOwoKdW5pZm9ybSBmbG9hdCB1X2RldGFpbDsKCgoKLyoKCiogQGF1dGhvciBIYXpzaSAoa2luZGEpCgoqLwoKbWF0MiBtKGZsb2F0IGEpIHsKCiAgICBmbG9hdCBjPWNvcyhhKSwgcz1zaW4oYSk7CgogICAgcmV0dXJuIG1hdDIoYywtcyxzLGMpOwoKfQoKCgoKCgojaWZuZGVmIEZOQ19SR0IyTFVNQQojZGVmaW5lIEZOQ19SR0IyTFVNQQpmbG9hdCByZ2IybHVtYShpbiB2ZWMzIGNvbG9yKSB7CiAgICByZXR1cm4gZG90KGNvbG9yLCB2ZWMzKDAuMjk5LCAwLjU4NywgMC4xMTQpKTsKfQpmbG9hdCByZ2IybHVtYShpbiB2ZWM0IGNvbG9yKSB7CiAgICByZXR1cm4gcmdiMmx1bWEoY29sb3IucmdiKTsKfQojZW5kaWYKCgojaWZuZGVmIEZOQ19MVU1BCiNkZWZpbmUgRk5DX0xVTUEKZmxvYXQgbHVtYShmbG9hdCB2KSB7IHJldHVybiB2OyB9CmZsb2F0IGx1bWEoaW4gdmVjMyB2KSB7IHJldHVybiByZ2IybHVtYSh2KTsgfQpmbG9hdCBsdW1hKGluIHZlYzQgdikgeyByZXR1cm4gcmdiMmx1bWEodi5yZ2IpOyB9CiNlbmRpZgoKCgpmbG9hdCBtYXAodmVjMyBwKSB7CgogICAgZmxvYXQgdCA9IHVfdGltZSAqIHVfc3BlZWQ7CgogICAgcC54eiAqPSBtKHQgKiAwLjQpO3AueHkqPSBtKHQgKiAwLjEpOwoKICAgIHZlYzMgcSA9IHAgKiAyLjAgKyB0OwoKICAgIHJldHVybiBsZW5ndGgocCt2ZWMzKHNpbigodCp1X3NwZWVkKSAqIDAuMSkpKSAqIGxvZyhsZW5ndGgocCkgKyAwLjkpICsgY29zKHEueCArIHNpbihxLnogKyBjb3MocS55KSkpICogMC41IC0gMS4wOwoKfQoKCgp2b2lkIG1haW4oKSB7CgogICAgdmVjMiBhID0gZ2xfRnJhZ0Nvb3JkLnh5IC8gdV9yZXNvbHV0aW9uLnggLSB2ZWMyKDAuNSwgMC41KTsKCiAgICB2ZWMzIGNsID0gdmVjMygwLjApOwoKICAgIGZsb2F0IGQgPSAyLjU7CgoKCiAgICBmb3IgKGZsb2F0IGkgPSAwLjsgaSA8PSAoMS4gKyAyMC4gKiB1X2RldGFpbCk7IGkrKykgewoKICAgICAgICB2ZWMzIHAgPSB2ZWMzKDAsIDAsIDQuMCkgKyBub3JtYWxpemUodmVjMyhhLCAtMS4wKSkgKiBkOwoKICAgICAgICBmbG9hdCByeiA9IG1hcChwKTsKCiAgICAgICAgZmxvYXQgZiA9ICBjbGFtcCgocnogLSBtYXAocCArIDAuMSkpICogMC41LCAtMC4xLCAxLjApOwoKICAgICAgICB2ZWMzIGwgPSB2ZWMzKDAuMSwgMC4zLCAwLjQpICsgdmVjMyg1LjAsIDIuNSwgMy4wKSAqIGY7CgogICAgICAgIGNsID0gY2wgKiBsICsgc21vb3Roc3RlcCgyLjUsIDAuMCwgcnopICogMC42ICogbDsKCiAgICAgICAgZCArPSBtaW4ocnosIDEuMCk7CgogICAgfQoKICAgIAoKICAgIHZlYzQgY29sb3IgPSB2ZWM0KG1pbih1X2NvbG9yLCBjbCksMS4wKTsKCiAgICAvL2NvbG9yID0gbWluKHVfYmFja2dyb3VuZCwgdV9jb2xvcik7CgogICAgY29sb3IuciA9IG1heCh1X2JhY2tncm91bmQucixjb2xvci5yKTsKCiAgICBjb2xvci5nID0gbWF4KHVfYmFja2dyb3VuZC5nLGNvbG9yLmcpOwoKICAgIGNvbG9yLmIgPSBtYXgodV9iYWNrZ3JvdW5kLmIsY29sb3IuYik7CgogICAgCgoKCiAgICBnbF9GcmFnQ29sb3IgPSBjb2xvcjsKCn0KCmAsCiAgICAgICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGAKICAgICAgICAgICAgdm9pZCBtYWluKCkgewogICAgICAgICAgICAgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTsKICAgICAgICB9YCwKICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7dV9jb2xvcjoge3ZhbHVlOiBbMC4zMTM3MjU0OTAxOTYwNzg0LDAsMV19LHVfYmFja2dyb3VuZDoge3ZhbHVlOiBbMC4xNjQ3MDU4ODIzNTI5NDExNywwLjEyOTQxMTc2NDcwNTg4MjM3LDAuMjUwOTgwMzkyMTU2ODYyNzQsMV19LHVfc3BlZWQ6IHt2YWx1ZTogMC4zNDd9LHVfZGV0YWlsOiB7dmFsdWU6IDAuMjA2fSx1X3RpbWU6IHt2YWx1ZTogMH0sdV9tb3VzZToge3ZhbHVlOiBbMCwwXX0sdV9yZXNvbHV0aW9uOiB7dmFsdWU6IFsyNDAsNTgwXX19LAogICAgICAgICAgICAgICAgd2lyZWZyYW1lOiBmYWxzZSwgCiAgICAgICAgICAgICAgICB3aXJlZnJhbWVMaW5ld2lkdGg6IDAsCiAgICAgICAgICAgICAgICBkaXRoZXJpbmc6IGZhbHNlLAogICAgICAgICAgICAgICAgZmxhdFNoYWRpbmc6IHRydWUsCiAgICAgICAgICAgICAgICBkb3VibGVTaWRlZDogdHJ1ZSwKICAgICAgICAgICAgICAgIGdsc2xWZXJzaW9uOiAiMTAwIgogICAgICAgICAgICB9KQogICAgICAgICk7ICAKICAgIH0KCiAgICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChDYW52YXMsewogICAgICAgICAgICBnbDogewogICAgICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLAogICAgICAgICAgICAgICAgcHJlbXVsdGlwbGllZEFscGhhOiBmYWxzZSwKICAgICAgICAgICAgICAgIGFscGhhOiB0cnVlLAogICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsCiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsCiAgICAgICAgICAgICAgICBwcmVjaXNpb246ICJoaWdocCIsCiAgICAgICAgICAgICAgICBwb3dlclByZWZlcmVuY2U6ICJoaWdoLXBlcmZvcm1hbmNlIgogICAgICAgICAgICB9LAogICAgICAgICAgICByZXNpemU6ewogICAgICAgICAgICAgICAgZGVib3VuY2U6IDAsCiAgICAgICAgICAgICAgICBzY3JvbGw6IGZhbHNlLAogICAgICAgICAgICAgICAgb2Zmc2V0U2l6ZTogdHJ1ZQogICAgICAgICAgICB9LAogICAgICAgICAgICBkcHI6IDEsCiAgICAgICAgICAgIGNhbWVyYTogewogICAgICAgICAgICAgICAgZm92OiA3NSwKICAgICAgICAgICAgICAgIG5lYXI6IDAuMSwKICAgICAgICAgICAgICAgIGZhcjogMTAwMCwKICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbMCwwLDVdCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIHN0eWxlOnsgaGVpZ2h0OiAiMTAwJSIsIHdpZHRoOiAiMTAwJSIgfQogICAgICAgIH0sCiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0dXJlTWVzaCkgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICksIGVtYmVkUm9vdCk7Cjwvc2NyaXB0PgogICAgICAgIDwvaGVhZD4KICAgICAgICA8Ym9keT4KPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL2Jvb2suNWZiMTFiOGQuc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL2x5Z2lhLmY3NDkwNTk0LnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy9vdmVyZmxvdy44ZDUwNDE1ZC5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvdHJhc2guNTI0ZGJjZDMuc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL3ZlcnRpY2FsLjkwNjEwODQ5LnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy9ob3Jpem9udGFsLjQ0Zjc3MWY4LnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy9hZGQuYTU1MjQwZGQuc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL3NpZy44NTBhODVlNy5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvbWludXMuMWUxYTBhYmQuc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL2VmZmVjdC40NTU3MjQzZi5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvdmlzaWJsZS5jNmQ0ZTFjMC5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvaGlkZGVuLjVhNGZjMjU0LnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy93b3JrZXIuYjc2MWZiMTEuanMgLS0+CjwvYm9keT4KICAgICAgICA8L2h0bWw+" style={{border:0,margin:0,top:0,width: "100vw",height:"40vh", position: "absolute", zIndex: -1, scale:4}} />
      <div className="h-screen backdrop-blur-sm">
        <div className="absolute w-screen top-6">
          <div className="h w-[90%] ml-auto mr-auto flex flex-row justify-between">
            <a href="/sign">
              <div id="back" className="flex items-center gap-x-[10px]">
                <SlArrowLeft  className="size-3"/>
                <p className={`${poppins.className} text-[12px] font-thin`}>Back</p>
              </div>
            </a>
          </div>
        </div>
        <div className="absolute w-screen top-24">
          <div className="w-[90%] ml-auto mr-auto">
            <h1 className={`${poppins.className} text-[24px] font-bold w-full text-center mb-8`}>Create an account</h1>
            <form action="" className="mb-6 flex flex-col">
              <input type="text" name="" id="" placeholder="Name" className={`mb-3 w-full pl-3 pt-4 pb-4 pr-3 bg-transparent border border-[#b5b1c2] rounded-md outline-none focus:outline-none placeholder:relative placeholder:bottom-2 placeholder:${poppins.className} placeholder:font-bold placeholder:text-white focus:placeholder-transparent`}/>
              <input type="email" name="" id="" placeholder="Email Address" className={`mb-3 w-full pl-3 pt-4 pb-4 pr-3 bg-transparent border border-[#b5b1c2] rounded-md outline-none focus:outline-none placeholder:relative placeholder:bottom-2 placeholder:${poppins.className} placeholder:font-bold placeholder:text-white focus:placeholder-transparent`}/>
              <div className="mb-3 border border-[#b5b1c2] rounded-md gap-x-3 flex pl-3 pr-3">
                <input type={showPassword ? "text" : "password"} name="" id="" placeholder="Password" className={`pt-4 pb-4 w-full bg-transparent h-full outline-none focus:outline-none placeholder:relative placeholder:bottom-2 placeholder:${poppins.className} placeholder:font-bold placeholder:text-white focus:placeholder-transparent`}/>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-white"
                >
                  {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </button>
              </div>
              <p className="text-center text-[8px] font-bold mb-6">Dengan membuat akun, Anda menyetujui Syarat & Ketentuan serta Kebijakan Privasi.</p>
              <input type="submit" value="Sign Up" className={`${poppins.className} text-[10px] font-bold bg-[#ffffff2c] backdrop-blur-sm rounded-md pt-2 pb-2 pl-11 pr-11 ml-auto mr-auto`} />
            </form>
            <div className="mb-10 flex ml-auto mr-auto w-max gap-x-2">
              <img src="/assets/stroke2.svg" alt="" className="w-28" />
              <p className={`${poppins.className} font-bold text-[8px]`}>Sign Up with</p>
              <img src="/assets/stroke2.svg" alt="" className="w-28" />
            </div>
            <div>
              <div className="flex flex-col gap-y-4 mb-5">
                <a href="">
                  <div className="rounded-full bg-[#ffffff] w-max flex items-center gap-x-4 pt-3 pb-3 pl-[61px] pr-[61px] ml-auto mr-auto">
                    <img src="/icon/apple.svg" className="w-5 h-6" alt="" />
                    <p className={`${poppins.className} font-bold text-[13px] text-[#000000]`}>Continue with Apple</p>
                  </div>
                </a>
                <a href="">
                  <div className="rounded-full bg-[#ffffff2c] backdrop-blur-sm w-max flex items-center gap-x-5 pt-3 pb-3 pl-[61px] pr-[55px] ml-auto mr-auto">
                    <img src="/icon/google.svg" className="w-5 h-6" alt="" />
                    <p className={`${poppins.className} font-bold text-[13px] text-[#ffffff]`}>Continue with Google</p>
                  </div>
                </a>
              </div>
              <div className="flex ml-auto mr-auto w-max gap-x-12">
                <a href="">
                  <div className="w-max pt-2 pb-2 pl-12 pr-12 rounded-full bg-[#ffffff2c] backdrop-blur-sm">
                    <img src="/icon/Facebook.png" className="w-7" alt="" />
                  </div>
                </a>
                <a href="">
                  <div className="w-max pt-2 pb-2 pl-12 pr-12 rounded-full bg-[#ffffff2c] backdrop-blur-sm">
                    <img src="/icon/Twitter.png" className="w-7" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}