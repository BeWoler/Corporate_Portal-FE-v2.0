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
    brand: {
      white: '#fff',
      black: '#000'
    },
  },
  fonts: {
    body: `'Poppins', sans-serif`,
  },
  
})

export default chakraTheme