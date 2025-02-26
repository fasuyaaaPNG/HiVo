"use client";

import { useEffect, useRef, useState } from "react";
import { Merriweather, Playfair_Display } from "next/font/google";

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
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const [xOffset, setXOffset] = useState<number>(0.3);

  useEffect(() => {
    const updateXOffset = () => {
      setXOffset(window.innerWidth >= 1280 ? 0.25 : 0.3);
    };

    updateXOffset();
    window.addEventListener("resize", updateXOffset);
    return () => window.removeEventListener("resize", updateXOffset);
  }, []);

  const loadScript = (src: string): Promise<void> => {
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

  useEffect(() => {
    if (!vantaRef.current) return;

    const initVanta = async () => {
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js");
      await loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js");
      if (window.VANTA && vantaRef.current) {
        if (vantaEffect) vantaEffect.destroy();
        const effect = window.VANTA.HALO({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          baseColor: 0x108002,
          backgroundColor: 0x293c2f,
          amplitudeFactor: 3,
          xOffset: xOffset,
          yOffset: 0.05,
          size: 1.8,
        });
        setVantaEffect(effect);
      }
    };

    initVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [xOffset]);

  return (
    <div ref={vantaRef} className={`${merriweather.className} w-full h-[530px] pt-[140px]`}>
      <div className="ml-[57px]">
        <h1 className="text-[24px] xl:text-[30px] 2xl:text-[40px] mb-[13px] w-[522px] xl:w-[602px] 2xl:w-[802px] font-bold">
          Menerjemahkan <span className="bg-text-gradient2 bg-clip-text text-transparent">Bahasa Isyarat</span> dengan Cepat dan Mudah dengan <span className="bg-text-gradient3 bg-clip-text text-transparent">Teknologi AI.</span>
        </h1>
        <p className={`${playfair.className} text-[14px] xl:text-[17px] 2xl:text-[23px] w-[470px] xl:w-[551px] 2xl:w-[781px] font-normal`}>
          Kami menghadirkan solusi inovatif yang mengubah isyarat menjadi teks dan suara secara instan, mempermudah komunikasi yang cepat, akurat.
        </p>
        <div className="flex items-center w-max ml-[45px] mt-[40px] gap-[25px] xl:gap-[30px]">
          <a href="" className="text-[12px] xl:text-[14px] 2xl:text-[20px] border border-dashed border-white pt-[13px] pb-[13px] pl-[35px] pr-[35px] rounded-[10px]">
            Sign in
          </a>
          <a href="" className="border border-dashed border-white pt-[13px] pb-[13px] pl-[18px] pr-[18px] bg-[#FFFFFF] text-[#213555] rounded-[10px] flex gap-[4px]">
            <p className="text-[12px] xl:text-[14px] 2xl:text-[20px]">Try HiVo</p>
            <img src="/icon/arrow-up.svg" alt="" className="w-[18px]" />
          </a>
        </div>
      </div>
    </div>
  );
}
