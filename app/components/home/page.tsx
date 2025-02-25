"use client";

import { useEffect, useRef, useState } from "react";
import { Merriweather,Playfair_Display } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"], 
  style: ["normal", "italic"],
  display: "swap", 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  display: "swap", 
});

declare global {
  interface Window {
    VANTA: any;
  }
}

export default function Page() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    const loadScript = (src: string) => {
      return new Promise<void>((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve(); 
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        document.body.appendChild(script);
      });
    };

    loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js")
      .then(() => loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js"))
      .then(() => {
        if (window.VANTA && !vantaEffect) {
          setVantaEffect(
            window.VANTA.HALO({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 100.0,
              minWidth: 100.0,
              baseColor: 0x108002,
              backgroundColor: 0x80708,
              amplitudeFactor: 1,
              xOffset: 0.3,
              yOffset: 0.05,
              size: 1.6,
            })
          );
        }
      });

    return () => {
      vantaEffect?.destroy(); 
    };
  }, []); 

  return (
    <div ref={vantaRef} className={`${merriweather.className} h-[540px] w-full pt-[140px]`}>
      <div className="ml-[57px]">
        <h1 className="text-[24px] mb-[9px] w-[522px] font-bold">Menerjemahkan <span className="bg-text-gradient2 bg-clip-text text-transparent">Bahasa Isyarat</span> dengan Cepat dan Mudah dengan <span className="bg-text-gradient3 bg-clip-text text-transparent">Teknologi AI.</span></h1>
        <p className={`${playfair.className} text-[14px] w-[461px] font-normal`}>Kami menghadirkan solusi inovatif yang mengubah isyarat menjadi teks dan suara secara instan, mempermudah komunikasi yang cepat, akurat</p>
        <div className="border border-red-600 flex w-max ml-[45px] mt-[40px] gap-[25px]">
          <a href="" className="border border-dashed border-white p-[13px]">Sign in</a>
          <a href="">
            <p>Try HiVo</p>
            <img src="/" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
