/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: "#3B71FE",
        primary2: "#8BC5E5",
        primary3: "#92A5EF",
        primary4: "#58C27D",
        secondary1: "#A4CDE3",
        secondary2: "#E4D7CF",
        secondary3: "#FFD166",
        secondary4: "#FA8F54",
        neutrals1: "#141416",
        neutrals2: "#23262F",
        neutrals3: "#353945",
        neutrals4: "#777E90",
        neutrals5: "#B1B5C3",
        neutrals6: "#E6E8EC",
        neutrals7: "#F4F5F6"
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      }
    }
  },
  variants: {
    extend: {
      display: ["group-focus"]
    }
  },
  plugins: []
};
