import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#f5fffe', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: (props: any) => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'Josefin Sans'",
  body: "'Source Sans Pro'"
}

const colors = {
  glassTeal: '#88ccca',
  brown: {
    50: '#c7a59d',
    100: '#b07e72',
    200: '#945b4e',
    300: '#804336',
    400: '#733b2f',
    500: '#6e3224',
    600: '#5e2619',
    700: '#521b0f',
    800: '#421207',
    900: '#240801',
  },
  navy: {
    50: '#BBE1FA',
    100: '#75b8e6',
    200: '#4a94c7',
    300: '#3282B8',
    400: '#216694',
    500: '#15537d',
    600: '#0F4C75',
    700: '#174157',
    800: '#1d323d',
    900: '#1B262C',
  },
}

const config = {
  initialColorMode: 'light',
  useSystemColormode: false
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
})

export default theme
