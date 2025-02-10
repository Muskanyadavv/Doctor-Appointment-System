/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       primaryColor:"#0067FF",
     yellowColor: "#FEB60D",
     purpleColor:"#9771FF",
     irisBlueColor:"#181A1E",
     textColor: "#4E545F",
     headingColor:"#1E293B",
      },
      boxShadow:{
        pannelShdow: "rgba(17,12,46,0.15) 0px 48px 100px 0px;",
      },
    padding: { '75px': '75px', },
    },
  },
  plugins: [],
}

