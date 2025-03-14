"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const LoginMobile = dynamic(() => import("../component_page/landing/landing_login_register_mobile/page"), {
  ssr: false,
});

const LoginDesktop = dynamic(() => import("../component_page/landing/landing_login_register_desktop/page"), {
  ssr: false,
});

export default function DirectLogin() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  const checkScreenSize = () => {
    const screenWidth = window.innerWidth;
    setIsMobile(screenWidth <= 640);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isMobile === null) {
    return;
  }

  return isMobile ? <LoginMobile /> : <LoginDesktop />;
}