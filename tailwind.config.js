module.exports = {
  content: [
    ".src/pages/**/*.{js,ts,jsx,tsx}", 
    ".src/components/**/*.{js,ts,jsx,tsx}",
    ".src/**/*.{js,ts,jsx,tsx}",
    ".src/app/**/*.{js,ts,jsx,tsx}" // If using the new App Router in Next.js
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgimage': "url('src/assets/bgimage.jpg')",
      },
      colors: {  // ✅ Correct key
        'mango': '#fea116'
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
    },
  },
  plugins: [],
};
