export default {
  colors: {
    xLightSuccess: '#d7f5e8',
    lightSuccess: '#43cc8b',
    success: '#6AE058',
    darkSuccess: '#5ABF4B',
    xLightWarning: '#91b8e5',
    lightWarning: '#d28488',
    warning: '#E09B35',
    error: '#E33F36',
    white: '#FFFFFF',
    black: '#000000',
    xlightBlue: '#deeafb',
    lightBlue: '#91b8e5',
    lightGrey: '#d3d6e0',
    grey: '#B4B6BF',
    darkGrey: '#7A7C82',
    minWhite: '#F7F7F5'
  },
  fonts: {
    family: {
      default: "'Open Sans', sans-serif",
      secundary: "'Montserrat', sans-serif"
    },
    weight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700
    },
    layers: {
      base: 10,
      overlay: 20,
      onTop: 30
    },
    sizes: {
      xxsmall: '0.8rem',
      xsmall: '1.2rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem'
    },
    spacings: {
      xsmall: '0.8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem'
    },
    transitions: {
      default: '0.3s ease-in-out',
      quick: '0.1s ease-in-out'
    }
  }
} as const
