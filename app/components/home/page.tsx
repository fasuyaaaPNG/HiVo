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
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const [xOffset, setxOffset] = useState<number>(
    typeof window !== "undefined" && window.innerWidth >= 1280 ? 1 : 0.3
  );

  // 🔥 Tambahkan state 'key' untuk memaksa re-render saat berpindah halaman
  const [key, setKey] = useState(0);

  useEffect(() => {
    const updateXOffset = () => {
      setxOffset(window.innerWidth >= 1280 ? 0.25 : 0.3);
    };

    window.addEventListener("resize", updateXOffset);
    updateXOffset();

    return () => {
      window.removeEventListener("resize", updateXOffset);
    };
  }, []);

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
        if (window.VANTA) {
          if (vantaEffect) vantaEffect.destroy(); // Hapus efek lama jika ada
          setVantaEffect(
            window.VANTA.HALO({
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
            })
          );
        }
      });

    return () => {
      vantaEffect?.destroy();
    };
  }, [key]); // 🔥 Tambahkan key sebagai dependency

  // 🔄 Paksa re-render saat komponen dimuat kembali
  useEffect(() => {
    setKey((prev) => prev + 1);
  }, []);

  return (
    <div key={key} ref={vantaRef} className={`${merriweather.className} w-full h-[530px] pt-[140px]`}>
      <div className="ml-[57px]">
        <h1 className="text-[24px] xl:text-[30px] mb-[13px] w-[522px] xl:w-[602px] font-bold">
          Menerjemahkan <span className="bg-text-gradient2 bg-clip-text text-transparent">Bahasa Isyarat</span> dengan Cepat dan Mudah dengan <span className="bg-text-gradient3 bg-clip-text text-transparent">Teknologi AI.</span>
        </h1>
        <p className={`${playfair.className} text-[14px] xl:text-[17px] w-[470px] xl:w-[551px] font-normal`}>
          Kami menghadirkan solusi inovatif yang mengubah isyarat menjadi teks dan suara secara instan, mempermudah komunikasi yang cepat, akurat.
        </p>
        <div className="flex items-center w-max ml-[45px] mt-[40px] gap-[25px] xl:gap-[30px]">
          <a href="" className="text-[12px] xl:text-[14px] border border-dashed border-white pt-[13px] pb-[13px] pl-[35px] pr-[35px] rounded-[10px]">Sign in</a>
          <a href="" className="border border-dashed border-white pt-[13px] pb-[13px] pl-[18px] pr-[18px] bg-[#FFFFFF] text-[#213555] rounded-[10px] flex gap-[4px]">
            <p className="text-[12px] xl:text-[14px]">Try HiVo</p>
            <img src="/icon/arrow-up.svg" alt="" className="w-[18px]" />
          </a>
        </div>
      </div>
    </div>
  );
}