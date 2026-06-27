/** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./index.html",

    "./src/**/*.{js,jsx}",

  ],

  theme: {

    extend: {

      colors: {

        primary: "#2563eb",

        secondary: "#0f172a",

        accent: "#38bdf8",

        dark: "#020617",

        light: "#f8fafc"

      },

      fontFamily: {

        sans: ["Inter", "sans-serif"]

      },

      animation: {

        glow: "glow 2s infinite alternate",

        float: "float 5s ease-in-out infinite"

      },

      keyframes: {

        glow: {

          from: {

            boxShadow: "0 0 20px #2563eb"

          },

          to: {

            boxShadow: "0 0 50px #38bdf8"

          }

        },

        float: {

          "0%": {

            transform: "translateY(0px)"

          },

          "50%": {

            transform: "translateY(-12px)"

          },

          "100%": {

            transform: "translateY(0px)"

          }

        }

      }

    },

  },

  plugins: [],

}