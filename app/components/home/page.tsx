"use client";

import { useEffect, useRef, useState } from "react";
import { Merriweather, Playfair_Display, Montserrat } from "next/font/google";
import { useTime, useTransform, motion, px } from "framer-motion";

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
          baseColor: 0x0,
          // baseColor: 0xa4ff,
          // backgroundColor: 0x293c2f,
          backgroundColor: 0x130E1E,
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
      <iframe className="absolute" src="data:text/html;base64,PGh0bWw+CiAgICAgICAgPGhlYWQ+CiAgICAgICAgICAgIDxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSI+CiAgICAgICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgICAgIGh0bWwsIGJvZHl7CiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwOwogICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgPC9zdHlsZT4KICAgICAgICAgICAgPHNjcmlwdCB0eXBlPSJpbXBvcnRtYXAiPgp7CiAgICAiaW1wb3J0cyI6IHsKICAgICAgICAicmVhY3QiOiAiaHR0cHM6Ly9jZG4uc2t5cGFjay5kZXYvcmVhY3RAMTguMC4yIiwKICAgICAgICAicmVhY3QtZG9tIjogImh0dHBzOi8vY2RuLnNreXBhY2suZGV2L3JlYWN0LWRvbUAxOC4wLjIiLAogICAgICAgICJ0aHJlZSI6ICJodHRwczovL2Nkbi5za3lwYWNrLmRldi90aHJlZUAwLjE0OC4wIiwKICAgICAgICAicmVhY3QtdGhyZWUvZmliZXIiOiAiaHR0cHM6Ly9jZG4uc2t5cGFjay5kZXYvQHJlYWN0LXRocmVlL2ZpYmVyQDcuMC4yNCIKICAgIH0KfQo8L3NjcmlwdD4KPHN0eWxlPgogICAgaHRtbCwgYm9keXsKICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgcGFkZGluZzogMDsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgYm9yZGVyOiAwOwogICAgfQogICAgLm50LWVtYmVkewogICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgIGhlaWdodDogMTAwJTsKICAgIH0KICAgIC5udC1lbWJlZCBjYW52YXN7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgfQo8L3N0eWxlPgo8c2NyaXB0IHR5cGU9Im1vZHVsZSI+CiAgICBpbXBvcnQgUmVhY3QsIHt1c2VSZWYsdXNlTWVtb30gZnJvbSAncmVhY3QnOwogICAgaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7CiAgICBpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7CiAgICBpbXBvcnQge0NhbnZhcywgdXNlRnJhbWUsIHVzZVRocmVlfSBmcm9tICdyZWFjdC10aHJlZS9maWJlcic7CgogICAgbGV0IGVtYmVkUm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogICAgZW1iZWRSb290LmNsYXNzTmFtZSA9ICJudC1lbWJlZCI7CiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVtYmVkUm9vdCk7CgogICAgY29uc3QgVGV4dHVyZU1lc2ggPSAoKSA9PiB7CiAgICAgICAgY29uc3QgbWVzaCA9IHVzZVJlZihudWxsKQogICAgICAgIHVzZUZyYW1lKHN0YXRlID0+IHsKICAgICAgICAgICAgY29uc3QgeyBjbG9jaywgbW91c2UsIGdsLCBzY2VuZSwgY2FtZXJhIH0gPSBzdGF0ZQogICAgICAgICAgICBpZihtZXNoLmN1cnJlbnQpewogICAgICAgICAgICAgICAgbWVzaC5jdXJyZW50Lm1hdGVyaWFsLnVuaWZvcm1zLnVfbW91c2UudmFsdWUgPSBbbW91c2UueCAvIDIgKyAwLjUsIG1vdXNlLnkgLyAyICsgMC41XQogICAgICAgICAgICAgICAgbWVzaC5jdXJyZW50Lm1hdGVyaWFsLnVuaWZvcm1zLnVfdGltZS52YWx1ZSA9IGNsb2NrLmdldEVsYXBzZWRUaW1lKCkKICAgICAgICAgICAgICAgIGxldCBjID0gZ2wuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKQogICAgICAgICAgICAgICAgbWVzaC5jdXJyZW50Lm1hdGVyaWFsLnVuaWZvcm1zLnVfcmVzb2x1dGlvbi52YWx1ZSA9IFtjLndpZHRoLGMuaGVpZ2h0XQogICAgICAgICAgICB9CiAgICAgICAgfSkKICAgICAgICAKICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnbWVzaCcsCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIHJlZjptZXNoLAogICAgICAgICAgICAgICAgcG9zaXRpb246IFswLDAsMF0sCiAgICAgICAgICAgICAgICBzY2FsZTogMSwKICAgICAgICAgICAgICAgIHJvdGF0aW9uOiBbMCwwLDBdCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BsYW5lR2VvbWV0cnknLHthcmdzOlsyNDAsNTUwXX0pLCAKICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc2hhZGVyTWF0ZXJpYWwnLHsKICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBgCi8vIFVOSUZPUk1TCnVuaWZvcm0gdmVjMiB1X3Jlc29sdXRpb247CnVuaWZvcm0gdmVjMiB1X21vdXNlOwp1bmlmb3JtIGZsb2F0IHVfdGltZTsKdW5pZm9ybSB2ZWMzIHVfY29sb3JzWzRdOwp1bmlmb3JtIGludCB1X2xheWVyczsgLy9taW46MSwgbWF4OjIwCnVuaWZvcm0gZmxvYXQgdV9zY2FsZTsgLy91bml0czolCgoKbWF0MiByb2F0KGZsb2F0IGEpewogIGZsb2F0IHMgPSBzaW4oYSk7CiAgZmxvYXQgYyA9IGNvcyhhKTsKICByZXR1cm4gbWF0MihjLCAtcywgcywgYyk7Cn0KCmZsb2F0IFN0YXIodmVjMiB1diwgZmxvYXQgZmxhcmUpewogIAogIGZsb2F0IGQgPSBsZW5ndGgodXYpOwogIGZsb2F0IG0gPSAuMDUvZDsKICAKICAKICBmbG9hdCByYXlzID0gbWF4KDAuLCAxLiAtIGFicyh1di54ICogdXYueSAqIDEwMDAuKSk7CiAgbSArPSByYXlzKmZsYXJlOwogIAogIHV2ICo9IHJvYXQoMy4xNDUvNC4pOwogIAogIHJheXMgPSBtYXgoMC4sIDEuIC0gYWJzKHV2LnggKiB1di55ICogMTAwMC4pKTsKICBtICs9IHJheXMgKi4zKmZsYXJlOwogIAogIG0gKj0gc21vb3Roc3RlcCgxLiwgLjIsIGQpOwogIHJldHVybiBtOwp9CiAgICAKZmxvYXQgSGFzaDIxKHZlYzIgcCl7CiAgcCA9IGZyYWN0KHAqIHZlYzIoMTIzLjM0LCA0NTYuMjEpKTsKICBwICs9IGRvdChwLCBwKzQ1LjMyKTsKICAKICByZXR1cm4gZnJhY3QocC54KnAueSk7Cn0KCnZlYzMgU3RhckxheWVyKHZlYzIgdXYsIHZlYzMgYzEpewogIHZlYzMgY29sID0gdmVjMygwKTsKICAKICB2ZWMyIGd2ID0gZnJhY3QodXYpLS41OwogIAogIAogIC8vIGNvbC5yZyA9IGd2OwogIAogIHZlYzIgaWQgPSBmbG9vcih1dik7CiAgCiAgZm9yKGludCB5PS0xOyB5PD0xOyB5KyspewogICAgZm9yKGludCB4PS0xOyB4PD0xOyB4KyspewogICAgICB2ZWMyIG9mZnMgPSB2ZWMyKHgseSk7CiAgICAgIAogICAgICBmbG9hdCBuID0gSGFzaDIxKGlkK29mZnMpOwogICAgICAvLyBjb2wgKz0gU3Rhcihndi1vZmZzLXZlYzIobiwgZnJhY3QobiozNC4pKSsuNSwgMS4pOwogICAgICBmbG9hdCBzaXplID0gZnJhY3QobiAqIDEzNDUuMzIpOwogICAgICBmbG9hdCBzdGFyID0gU3Rhcihndi1vZmZzLXZlYzIobiwgZnJhY3QobiozNC4pKSsuNSwgc21vb3Roc3RlcCguOSwgMS4sIHNpemUpKi42KTsKICAgICAgCiAgICAgIC8vIHZlYzMgY29sb3IgPSBzaW4odmVjMyguMiwuMywuOSkqdV90aW1lKTsKICAgICAgdmVjMyBjb2xvciA9IHNpbihjMSpmcmFjdChuKjIzNDUuMikqMTIuMjgzKSouNSsuNTsKICAgICAgCiAgICAgIGNvbG9yID0gY29sb3IqdmVjMygxLiwuNSwxLitzaXplKTsKICAgICAgc3RhciAqPSBzaW4odV90aW1lKjMuK24qNi4zMjMpKi41KzEuOwogICAgICBjb2wgKz0gc3RhcipzaXplKmMxOwogICAgfSAgCiAgfQogIHJldHVybiBjb2w7Cn0Kdm9pZCBtYWluKCkgewogIHZlYzIgdXYgPSAoZ2xfRnJhZ0Nvb3JkLnh5IC0gLjUgKiB1X3Jlc29sdXRpb24ueHkpL3VfcmVzb2x1dGlvbi55OwogIAogIHZlYzIgTSA9ICh1X21vdXNlLnh5IC0gdV9yZXNvbHV0aW9uLnh5Ki41KS91X3Jlc29sdXRpb24ueTsKICAKICB1dio9KDMuKigxLjAtdV9zY2FsZSkpLS41OwogIAogIGZsb2F0IHQgPSB1X3RpbWUqLjA1OyAKICB1diAqPSByb2F0KHQpOwoKICB2ZWMzIGNvbCA9IHZlYzMoMCk7CiAgCiAgZm9yKGZsb2F0IGk9MC47IGk8ZmxvYXQodV9sYXllcnMpOyBpKz0xLil7CiAgICB2ZWMzIGMgPSB1X2NvbG9yc1tpbnQobW9kKGZsb2F0KGkpLGZsb2F0KHVfY29sb3JzLmxlbmd0aCgpKSkpXTsKICAgIGZsb2F0IGRlcHRoID0gZnJhY3QoaS9mbG9hdCh1X2xheWVycykrdCk7CiAgICBmbG9hdCBzY2FsZSA9IG1peCgyMC4sIC41LCBkZXB0aCk7CiAgICBmbG9hdCBmYWRlID0gZGVwdGgqc21vb3Roc3RlcCgxLiwgLjksIGRlcHRoKTsKICAgIGNvbCs9IFN0YXJMYXllcih1dipzY2FsZStpKjQ1NS4yLGMpICpmYWRlOwogIH0KICAKICAKICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNvbCwxLjApOwp9YCwKICAgICAgICAgICAgICAgIHZlcnRleFNoYWRlcjogYAogICAgICAgICAgICB2b2lkIG1haW4oKSB7CiAgICAgICAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApOwogICAgICAgIH1gLAogICAgICAgICAgICAgICAgdW5pZm9ybXM6IHt1X2NvbG9yczoge3ZhbHVlOiBbbmV3IFRIUkVFLlZlY3RvcjQoMC43MDk4MDM5MjE1Njg2Mjc1LDAuNTA5ODAzOTIxNTY4NjI3NCwwLjA3ODQzMTM3MjU0OTAxOTYsMSksbmV3IFRIUkVFLlZlY3RvcjQoMSwwLjQ1NDkwMTk2MDc4NDMxMzcsMC45MzMzMzMzMzMzMzMzMzMzLDEpLG5ldyBUSFJFRS5WZWN0b3I0KDAsMC4xODgyMzUyOTQxMTc2NDcwNiwxLDEpLG5ldyBUSFJFRS5WZWN0b3I0KDAuNTkyMTU2ODYyNzQ1MDk4LDAuMTg4MjM1Mjk0MTE3NjQ3MDYsMSwxKV19LHVfbGF5ZXJzOiB7dmFsdWU6IDV9LHVfc2NhbGU6IHt2YWx1ZTogMC45MzJ9LHVfdGltZToge3ZhbHVlOiAwfSx1X21vdXNlOiB7dmFsdWU6IFswLDBdfSx1X3Jlc29sdXRpb246IHt2YWx1ZTogWzI0MCw1NTBdfX0sCiAgICAgICAgICAgICAgICB3aXJlZnJhbWU6IGZhbHNlLCAKICAgICAgICAgICAgICAgIHdpcmVmcmFtZUxpbmV3aWR0aDogMCwKICAgICAgICAgICAgICAgIGRpdGhlcmluZzogZmFsc2UsCiAgICAgICAgICAgICAgICBmbGF0U2hhZGluZzogdHJ1ZSwKICAgICAgICAgICAgICAgIGRvdWJsZVNpZGVkOiB0cnVlLAogICAgICAgICAgICAgICAgZ2xzbFZlcnNpb246ICIxMDAiCiAgICAgICAgICAgIH0pCiAgICAgICAgKTsgIAogICAgfQoKICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KENhbnZhcyx7CiAgICAgICAgICAgIGdsOiB7CiAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsCiAgICAgICAgICAgICAgICBwcmVtdWx0aXBsaWVkQWxwaGE6IGZhbHNlLAogICAgICAgICAgICAgICAgYWxwaGE6IHRydWUsCiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSwKICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSwKICAgICAgICAgICAgICAgIHByZWNpc2lvbjogImhpZ2hwIiwKICAgICAgICAgICAgICAgIHBvd2VyUHJlZmVyZW5jZTogImhpZ2gtcGVyZm9ybWFuY2UiCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIHJlc2l6ZTp7CiAgICAgICAgICAgICAgICBkZWJvdW5jZTogMCwKICAgICAgICAgICAgICAgIHNjcm9sbDogZmFsc2UsCiAgICAgICAgICAgICAgICBvZmZzZXRTaXplOiB0cnVlCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIGRwcjogMSwKICAgICAgICAgICAgY2FtZXJhOiB7CiAgICAgICAgICAgICAgICBmb3Y6IDc1LAogICAgICAgICAgICAgICAgbmVhcjogMC4xLAogICAgICAgICAgICAgICAgZmFyOiAxMDAwLAogICAgICAgICAgICAgICAgcG9zaXRpb246IFswLDAsNV0KICAgICAgICAgICAgfSwKICAgICAgICAgICAgc3R5bGU6eyBoZWlnaHQ6ICIxMDAlIiwgd2lkdGg6ICIxMDAlIiB9CiAgICAgICAgfSwKICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHR1cmVNZXNoKSAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgKSwgZW1iZWRSb290KTsKPC9zY3JpcHQ+CiAgICAgICAgPC9oZWFkPgogICAgICAgIDxib2R5Pgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvYm9vay41ZmIxMWI4ZC5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvbHlnaWEuZjc0OTA1OTQuc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL292ZXJmbG93LjhkNTA0MTVkLnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy90cmFzaC41MjRkYmNkMy5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvdmVydGljYWwuOTA2MTA4NDkuc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL2hvcml6b250YWwuNDRmNzcxZjguc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL2FkZC5hNTUyNDBkZC5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvc2lnLjg1MGE4NWU3LnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy9taW51cy4xZTFhMGFiZC5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvZWZmZWN0LjQ1NTcyNDNmLnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy92aXNpYmxlLmM2ZDRlMWMwLnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy9oaWRkZW4uNWE0ZmMyNTQuc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL3dvcmtlci5iNzYxZmIxMS5qcyAtLT4KPC9ib2R5PgogICAgICAgIDwvaHRtbD4=" style={{border:0,margin:0,width: "100%",height: "550px", zIndex: -1}} />
      <div className=" ml-auto mr-auto pt-[145px] mb-[360px] w-max z-30">
          <h1 className="text-[32px] text-center xl:text-[36px] 2xl:text-[40px] mb-6 w-[800px] xl:w-[852px] 2xl:w-[802px] font-bold">
            Menerjemahkan <span className="bg-text-gradient2 bg-clip-text text-transparent">Bahasa Isyarat</span> dengan Cepat dan Mudah dengan <span className="bg-text-gradient3 bg-clip-text text-transparent">Teknologi AI.</span>
          </h1>
          <p className={`${playfair.className} text-[14px] mb-3.5 xl:mb-5 xl:text-[17px] 2xl:text-[23px] text-center w-[753px] ml-auto mr-auto xl:w-[701px] 2xl:w-[781px] font-normal`}>
            Kami menghadirkan solusi inovatif yang mengubah isyarat menjadi teks dan suara secara instan, mempermudah komunikasi yang cepat, akurat.
          </p>
          <div className="flex items-center w-max ml-auto mr-auto gap-[25px] xl:gap-[30px]">
            <a href="" className="text-[12px] xl:text-[14px] 2xl:text-[20px] border border-[#E8F9FF] px-[30px] py-2.5 rounded-[10px]">
              Sign in
            </a>
            <a href="" className="text-[12px] xl:text-[14px] 2xl:text-[20px] border border-[#E8F9FF] px-3.5 py-2.5 rounded-[10px]">
              Learn More
            </a>
          </div>
        </div>
      <div className="flex flex-wrap justify-center gap-x-[45px] gap-y-[45px] mb-[150px]">
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
          <div className={`${montserrat.className} relative w-max flex flex-col items-center pt-[25px] pr-[25px] pb-[27px] pl-[24px] bg-[#2C2348] rounded-[12px]`}>
            <p className="bg-text-gradient5 bg-clip-text text-transparent text-[10px] xl:text-[14px] font-bold mb-[11px]">
              Kamera Penerjemah Gerakan
            </p>
            <img className="mb-[16px] w-[22px] xl:w-[26px]" src="./icon/Camera.svg" alt="" />
            <p className="w-[229px] xl:w-[290px] text-center text-[9px] xl:text-[13px]">
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
          <div className={`${montserrat.className} relative w-max flex flex-col items-center pt-[25px] pr-[25px] pb-[27px] pl-[24px] bg-[#2C2348] rounded-[12px]`}>
            <p className="bg-text-gradient5 bg-clip-text text-transparent text-[10px] xl:text-[14px] font-bold mb-[11px]">
              Hasil Penerjemahan
            </p>
            <img className="mb-[16px] w-[22px] xl:w-[26px]" src="./icon/g_translate.svg" alt="" />
            <p className="w-[220px] xl:w-[240px] text-center text-[9px] xl:text-[13px]">
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
          <div className={`${montserrat.className} relative w-max flex flex-col items-center pt-[18px] pr-[21px] pb-[15px] pl-[20px] bg-[#2C2348] rounded-[12px]`}>
            <p className="bg-text-gradient5 bg-clip-text text-transparent text-[10px] xl:text-[14px] font-bold mb-[11px]">
              Riwayat Terjemahan
            </p>
            <img className="mb-[16px] w-[22px] xl:w-[26px]" src="./icon/schedule.svg" alt="" />
            <p className="w-[237px] xl:w-[340px] text-center text-[9px] xl:text-[13px]">
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
          <div className={`${montserrat.className} relative w-max flex flex-col items-center pt-[30px] pr-[31px] pb-[31px] pl-[33px] bg-[#2C2348] rounded-[12px]`}>
            <p className="bg-text-gradient5 bg-clip-text text-transparent text-[10px] xl:text-[14px] font-bold mb-[11px]">
              Penerjemah Multibahasa
            </p>
            <img className="mb-[16px] w-[22px] xl:w-[26px]" src="./icon/Globe.svg" alt="" />
            <p className="w-[248px] xl:w-[320px] text-center text-[9px] xl:text-[13px]">
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
          <div className={`${montserrat.className} relative w-max flex flex-col items-center pt-[21px] pr-[25px] pb-[23px] pl-[24px] bg-[#2C2348] rounded-[12px]`}>
            <p className="bg-text-gradient5 bg-clip-text text-transparent text-[10px] xl:text-[14px] font-bold mb-[11px]">
              Konversi Otomatis ke Teks atau Suara
            </p>
            <img className="mb-[16px] w-[22px] xl:w-[26px]" src="./icon/Mic.svg" alt="" />
            <p className="w-[248px] xl:w-[370px] text-center text-[9px] xl:text-[13px]">
              Hasil terjemahan dapat diketik atau diucapkan sesuai kebutuhan pengguna.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
