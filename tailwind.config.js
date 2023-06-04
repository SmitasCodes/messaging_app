/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        channels: "280px",
      },
      minWidth: {
        channels: "48px",
      },
    },
  },
  plugins: [],
};
