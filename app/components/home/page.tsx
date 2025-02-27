"use client";

import { useEffect, useRef, useState } from "react";
import { Merriweather, Playfair_Display, Montserrat } from "next/font/google";
import { useTime, useTransform, motion } from "framer-motion";

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

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

declare global {
  interface Window {
    VANTA: any;
  }
}

export default function Page() {
  const time = useTime()

  const rotate = useTransform(time, [0, 3000], [0,360], {
    clamp:false,
  });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #00FFFF, #FF1493, #00FFFF)`
  })

  const rotatingGlow = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, transparent, #FF1493, transparent)`;
  });
  
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
          // baseColor: 0x108002,
          baseColor: 0xa4ff,
          // backgroundColor: 0x293c2f,
          backgroundColor: 0x0,
          // backgroundColor:0x7f0061,
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
    <>
      <div ref={vantaRef} className={`${merriweather.className} w-full h-[530px] 2xl:h-[630px] pt-[140px] mb-[96px]`}>
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
      <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-[44px]">
        <motion.div
          className="relative p-[2px] rounded-[12px] h-max inline-block"
          style={{ backgroundImage: rotatingBg }}
        >
          <motion.div
            className="absolute inset-0 rounded-[12px] pointer-events-none blur-[12px] opacity-75"
            style={{
              backgroundImage: rotatingGlow,
              mixBlendMode: "lighten",
              filter: "drop-shadow(0px 0px 10px #FF1493)"
            }}
          />
          <div className={`${montserrat.className} relative w-max flex flex-col items-center pt-[21px] pr-[25px] pb-[23px] pl-[24px] bg-[#232420] rounded-[12px]`}>
            <p className="bg-text-gradient5 bg-clip-text text-transparent text-[10px] font-bold mb-[11px]">
              Kamera Penerjemah Gerakan
            </p>
            <img className="mb-[16px] w-[22px]" src="./icon/Camera.svg" alt="" />
            <p className="w-[229px] text-center text-[9px]">
              Menggunakan teknologi AI dan computer vision untuk mendeteksi gerakan tubuh atau tangan sebagai bahasa isyarat.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="relative p-[2px] rounded-[12px] h-max inline-block"
          style={{ backgroundImage: rotatingBg }}
        >
          <motion.div
            className="absolute inset-0 rounded-[12px] pointer-events-none blur-[12px] opacity-75"
            style={{
              backgroundImage: rotatingGlow,
              mixBlendMode: "lighten",
              filter: "drop-shadow(0px 0px 10px #FF1493)"
            }}
          />
          <div className={`${montserrat.className} relative w-max flex flex-col items-center pt-[21px] pr-[25px] pb-[23px] pl-[24px] bg-[#232420] rounded-[12px]`}>
            <p className="bg-text-gradient5 bg-clip-text text-transparent text-[10px] font-bold mb-[11px]">
              Hasil Penerjemahan
            </p>
            <img className="mb-[16px] w-[22px]" src="./icon/g_translate.svg" alt="" />
            <p className="w-[220px] text-center text-[9px]">
              Setelah sistem mendeteksi bahasa isyarat, hasilnya akan ditampilkan dalam bentuk teks atau suara.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="relative p-[2px] rounded-[12px] h-max inline-block"
          style={{ backgroundImage: rotatingBg }}
        >
          <motion.div
            className="absolute inset-0 rounded-[12px] pointer-events-none blur-[12px] opacity-75"
            style={{
              backgroundImage: rotatingGlow,
              mixBlendMode: "lighten",
              filter: "drop-shadow(0px 0px 10px #FF1493)"
            }}
          />
          <div className={`${montserrat.className} relative w-max flex flex-col items-center pt-[18px] pr-[21px] pb-[15px] pl-[20px] bg-[#232420] rounded-[12px]`}>
            <p className="bg-text-gradient5 bg-clip-text text-transparent text-[10px] font-bold mb-[11px]">
              Riwayat Terjemahan
            </p>
            <img className="mb-[16px] w-[22px]" src="./icon/schedule.svg" alt="" />
            <p className="w-[237px] text-center text-[9px]">
              Fitur ini menyimpan hasil penerjemahan sebelumnya, sehingga pengguna bisa melihat kembali pesan yang pernah diterjemahkan tanpa harus mengulang gerakan.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="relative p-[2px] rounded-[12px] h-max inline-block"
          style={{ backgroundImage: rotatingBg }}
        >   
          <motion.div
            className="absolute inset-0 rounded-[12px] pointer-events-none blur-[12px] opacity-75"
            style={{
              backgroundImage: rotatingGlow,
              mixBlendMode: "lighten",
              filter: "drop-shadow(0px 0px 10px #FF1493)"
            }}
          />
          <div className={`${montserrat.className} relative w-max flex flex-col items-center pt-[26px] pr-[31px] pb-[31px] pl-[31px] bg-[#232420] rounded-[12px]`}>
            <p className="bg-text-gradient5 bg-clip-text text-transparent text-[10px] font-bold mb-[11px]">
              Penerjemah Multibahasa
            </p>
            <img className="mb-[16px] w-[22px]" src="./icon/Globe.svg" alt="" />
            <p className="w-[248px] text-center text-[9px]">
              Mendukung penerjemahan ke berbagai bahasa.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="relative p-[2px] rounded-[12px] h-max inline-block"
          style={{ backgroundImage: rotatingBg }}
        >
          <motion.div
            className="absolute inset-0 rounded-[12px] pointer-events-none blur-[12px] opacity-75"
            style={{
              backgroundImage: rotatingGlow,
              mixBlendMode: "lighten",
              filter: "drop-shadow(0px 0px 10px #FF1493)"
            }}
          />
          <div className={`${montserrat.className} relative w-max flex flex-col items-center pt-[21px] pr-[25px] pb-[23px] pl-[24px] bg-[#232420] rounded-[12px]`}>
            <p className="bg-text-gradient5 bg-clip-text text-transparent text-[10px] font-bold mb-[11px]">
              Konversi Otomatis ke Teks atau Suara
            </p>
            <img className="mb-[16px] w-[22px]" src="./icon/Mic.svg" alt="" />
            <p className="w-[248px] text-center text-[9px]">
              Hasil terjemahan dapat diketik atau diucapkan sesuai kebutuhan pengguna.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
