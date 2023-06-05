/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        channels: "260px",
        channels_users: "200px"
      },
      minWidth: {
        channels: "48px",
      },
    },
  },
  plugins: [],
};
