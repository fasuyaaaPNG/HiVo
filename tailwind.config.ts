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
        'text-gradient4': 'linear-gradient(to right, #FF1493 10%, #FFFFFF 47%, #BD3EC1 71%)',
        'text-gradient5': 'linear-gradient(to bottom, #9EDDFF 34%, #FF7ED4 76%)',
        'text-gradient6': 'linear-gradient(to right, #F72585 10%, #4361EE 79%)',
        'text-gradient7': 'linear-gradient(to right, #F72585 10%, #00FFFF 79%)',
        'bg-gradient': 'linear-gradient(to bottom, #FF1493 9%, #8089C9 53%, #00FFFF 94%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
