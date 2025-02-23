import { Merriweather } from "next/font/google";
import Link from "next/link";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"], 
  style: ["normal", "italic"],
  display: "swap", 
});

export default function Home() {
  return (
    <>
      <nav className={`${merriweather.className} bg-[#FBFBFB] h-[91px]`}>
        <div className="flex justify-between ml-[38px] mr-[120px] pt-[15px]">
          <p className="text-[40px]">LOGO</p>
          <div id="navButton" className="text-[14px] font-normal text-[#213555] flex items-center gap-[43px]">
            <Link href="/">Home</Link>
            <Link href="/panduan">Panduan</Link>
            <Link href="/scan-terjemah">Scan & Terjemah</Link>
            <Link href="/about">About Us</Link>
            <Link href="/feedback">Feedback</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
