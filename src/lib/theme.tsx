import { createSystem, defaultConfig, defineRecipe } from '@chakra-ui/react'
import { Josefin_Sans, Source_Sans_3 } from 'next/font/google'

const JosefinSansRegular = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '600'],
})

const SourceSansProRegular = Source_Sans_3({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700'],
})

export const HeadingRecipe = defineRecipe({
  variants: {
    variant: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 2,
        marginTop: 6,
        marginBottom: 4,
      },
    },
  },
})

const LinkRecipe = defineRecipe({
  base: {
    color: '#3d7aed',
    textUnderlineOffset: 3,
  },
})

const fonts = {
  heading: { value: `${JosefinSansRegular.style.fontFamily}, sans-serif` },
  body: { value: `${SourceSansProRegular.style.fontFamily}, sans-serif` },
  mono: { value: 'Hack, monospace' },
}

const colors = {
  glassTeal: { value: '#88ccca' },
  brown: {
    50: { value: '#c7a59d' },
    100: { value: '#b07e72' },
    200: { value: '#945b4e' },
    300: { value: '#804336' },
    400: { value: '#733b2f' },
    500: { value: '#6e3224' },
    600: { value: '#5e2619' },
    700: { value: '#521b0f' },
    800: { value: '#421207' },
    900: { value: '#240801' },
  },
  navy: {
    50: { value: '#BBE1FA' },
    100: { value: '#75b8e6' },
    200: { value: '#4a94c7' },
    300: { value: '#3282B8' },
    400: { value: '#216694' },
    500: { value: '#15537d' },
    600: { value: '#0F4C75' },
    700: { value: '#174157' },
    800: { value: '#1d323d' },
    900: { value: '#1B262C' },
  },
}

const system = createSystem(defaultConfig, {
  globalCss: {
    body: {
      bg: '#f0f8fc',
    },
  },
  theme: {
    tokens: {
      colors,
      fonts,
    },
    recipes: {
      link: LinkRecipe,
    },
  },
})

export default system
