/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      boxShadow: {
        box: "40px 60px 50px -47px rgba(72, 85, 106, 0.25)",
      },
      colors: {
        "moderate-violet": "hsl(263, 55%, 52%)",
        "very-dark-grayish-blue": "hsl(217, 19%, 35%)",
        "very-dark-blackish-blue": "hsl(219, 29%, 14%)",
        "light-gray": "hsl(0, 0%, 81%)",
        "light-grayish-blue": "hsl(210, 46%, 95%)",
      },
    },
  },
  plugins: [],
};
