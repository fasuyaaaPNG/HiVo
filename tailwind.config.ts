import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(90deg, #CDFADB 0%, #F6FDC3 25%, #FFCF96 71%, #FF8080 100%)',
        'text-gradient2': "linear-gradient(to right, #B7B1F2 22%, #F7D7EA 40%, #FFDCCC 66%, #FBF3B9 86%)",
        'text-gradient3': "linear-gradient(to right, #A6F1E0 23%, #73C7C7 87%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
