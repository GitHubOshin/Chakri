module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      mobile: '0px',
      laptop: '1920px',
      screen1280: '1280px',
      screen750: '750px'
    },

    fontFamily: {
      dmSans: ['DM Sans'],
      poppins: ['Poppins']
    },
    extend: {
      colors: {
        darkBlue: '#183B56',
        darkGrey: '#3F475C',
        grey: '#838995',
        grey001: '#5A7184',
        grey002: '#92AABD',
        grey003: '#acb7c1',
        grey004: '#C4C4C4',
        grey005: '#ecedef',
        grey006: '#e8ebee',
        grey007: '#e9edeb',
        pumpkin: '#E95432',
        orange: '#FF8345',
        apricot: '#fda87c',
        plango: '#FFB583',
        bgCircleOrange: 'rgb(255 244 236)',
        bgSubscribe: '#F3F6FB',
        white: '#FFFFFF',
        green: '#7BC678',
        divPink: 'rgba(233, 84, 50, 0.1)'
      }
    }
  },
  plugins: []
}
