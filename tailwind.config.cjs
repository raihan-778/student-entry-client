/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#6419E6",

            secondary: "#D926A9",

            accent: "#1FB2A6",

            neutral: "#001253",

            "base-100": "#2A303C",

            info: "#3ABFF8",

            success: "#36D399",

            warning: "#FBBD23",

            error: "#E14D2A",
          },
        },
      ],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
