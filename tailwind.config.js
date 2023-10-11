/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./public/*.{html,js}",
            "./public/index.html"],
  theme: {
    extend:{
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'footerBgColor':'#D6D6D0',
        'footerTextColor':'#363432',
        'headerBottomBg':'#7f7f7f',
        'shippingBgColor':'#F2F2F2',
        'taskGrey1': '#F0F0E9',
        'taskGrey2': '#696763',
        'taskGrey3': '#B3AFA8',
        'taskGrey4': '#8C8C88',
        'taskGrey5': '#666663',
        'taskYellow1' :'#fdb45e'
      },
      fontFamily:{
        'roboto-sans':['"Roboto"', 'sans-serif']
  
      },
      spacing:{
        '1.25':'5px',
        '3.5':'15px',
        '6.5':'25px',
        '7.5':'30px',
        '13':'50px',
      },
      fontSize:{
        sm2: ['15px', '22px'],

      },
      screens:{
        'xs':'460px',
      },
    },
  },
  plugins: [],
}

