/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: ["light"],
  },
  content: [
           "./src/**/*.{js,ts,jsx,tsx,vue}",
           "./index.html" ],
           theme: {
            extend: {
              colors: {
                'nav-color': '#ffffff5d',
                'nav':'#291b12',
                'txt-c1':'#7a6f60'
              
            },
            backgroundImage: {
              'homebg': "url('/images/WANEELLA.gif')",
              
            }
            },
            
          },
          plugins: [require('daisyui')],
          
}

