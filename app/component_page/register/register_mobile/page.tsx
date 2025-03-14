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
    <div>
    </div>
  );
}