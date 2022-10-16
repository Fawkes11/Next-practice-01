import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#94b8c7', '#051f34')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        fontSize: 20,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#007a7a', '#fea02f')(props),
      textUnderlineOffset: 3
    })
  }
}
/* #ff63c3 */
const fonts = {
  heading: "'M PLUS Rounded 1c'"
}
const colors = {
  glassTeal: '#88ccca'
}
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
})

export default theme
