/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        "bg-page": "url('/img/pagebg.jpg')",
        darkmode: "radial-gradient(125%_125%_at_50%_10%,#000_40%,#3b82f6_100%)",
        lightmode:
          "radial-gradient(125%_125%_at_50%_10%,#eee_40%,#3b82f6_100%)",
      },
    },
    fontFamily: {
      "roboto-slab": ["Roboto Slab", "serif"],
    },
  },
  plugins: [flowbite.plugin()],
  darkMode: "class",
};
