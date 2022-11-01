/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      display: ["group-hover"],
    },
    colors: {
      lightred: "#F65261",
      gray: "#424242",
      black: "#232323",
      darkgray: "#323232",
      lightgray: "#555555",
      white: "#FFFFFF",
      mediumgray: "#424242",
      superlightgray: "#979797",
    },
    width: {
      ultraxxl: "713px",
      6: "12px",
      12: "24px",
      16: "32px",
      20: "40px",
      24: "48px",
      28: "56px",
      details: "1024px",
      popup: "1124px",
    },
  },
  plugins: [],
};
