import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { Dict } from '@chakra-ui/utils'

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const styles = {
  global: (props: Dict<any>) => ({
    'html, body': {
      fontFamily: 'body',
      bgColor: '#fff',
      zIndex: -2,
    },
  }),
}

const chakraTheme = extendTheme({
  config,
  styles,
  colors: {
    main: {
      mainColor: '#1d3557',
      mainColorRGB: 'rgb(29, 53, 87)',
      mainColorRGBWithOpacity: 'rgb(29, 53, 87, 0.6)',
      btnColor: '#e63946',
      btnHoverColor: '#c1303a'
    },
    brand: {
      white: '#fff',
      black: '#000',
      gray100: '#a5abb5'
    },
  },
  fonts: {
    body: `'Poppins', sans-serif`,
  },

})

export default chakraTheme