/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: "class",
    extend: {
      colors: {
        light: {
          primary: "#B17457",
          secondary: "#D8D2C2",
          accent: "#4A4947",
          neutral: "#FAF7F0",
        },
        dark: {
          primary: "#6A9AB0",
          secondary: "#3A6D8C",
          accent: "#EAD8B1",
          neutral: "#001F3F",
        },
      },
    },
  },
  plugins: [],
};
