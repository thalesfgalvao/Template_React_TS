export default {
  colors: {
    default: '#F2F2F2',
    success: '#6AE058',
    darkSuccess: '#5ABF4B',
    warning: '#E09B35',
    lightError: '#d28488',
    error: '#E33F36',
    white: '#FFFFFF',
    black: '#000000',
    blue: '#002791',
    lightBlue: '#91b8e5',
    minWhite: '#F7F7F5',
    lightGrey: '#d3d6e0',
    grey: '#B4B6BF',
    darkGrey: '#7A7C82'
  },
  layers: {
    base: 10,
    overlay: 20,
    onTop: 30
  },
  transitions: {
    default: '0.3s ease-in-out',
    quick: '0.1s ease-in-out'
  },
  border: {
    radius: {
      default: '0.5rem',
      small: '0.1rem',
      big: '0.8rem',
      huge: '1.4rem'
    }
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
    }
  }
} as const
