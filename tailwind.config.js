/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        "very-dark-blue": "#161722",
        "desaturated-blue": "#25273c",
        "light-grayish-blue": "#cacde8",
        "light-grayish-blue-hover": "#e4e5f1",
        "dark-grayish-blue": "#777a92",
        "very-dark-grayish-blue": "#4d5066",
        "very-darker-grayish-blue": "#393a4c",
      },
    },
  },
  plugins: [],
};
