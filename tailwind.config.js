/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        
        'black-2xl': '0 0 20px rgb(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
}

 
