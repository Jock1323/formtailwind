module.exports = {
  mode:'JIT', 
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    extend: {
      spacing:{
        '125':'180px',
        '496':'496px',
        'cover':'-100%',
        'zero':'0%',
      },
      colors:{
        'main':'#254152',
        'secondary':'#2DA6DD',
        'border':'#1D3E4F',
        'pronsess':'#E7F2F9',
      },
      maxWidth:{
        '1300':'1300px',
      },
      screens:{
        'xs':'320px'
      }
    },
  },
  plugins: [],
}
