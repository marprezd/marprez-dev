import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      "html, body": {
        bg: mode("gray.50", "gray.800")(props),
        color: mode("gray.800", "whiteAlpha.900")(props),
      },
    })
  },
  components: {
    Link: {
      variants: {
        primary: ({ colorScheme = "primary"}) => ({
          color: `${colorScheme}.700`,
          fontWeight: "500",
          _hover: {
            color: `${colorScheme}.800`,
            textDecoration: "underline",
          }
        })
      },
      defaultProps: {
        variant: "primary"
      }
    }
  },
  colors: {
    primary: {
      50: "#f0fcfb",
      100: "#cef5f2",
      200: "#a8eee8",
      300: "#7ae4dc",
      400: "#40d9cc",
      500: "#00c9b8",
      600: "#00b3a4",
      700: "#009a8d",
      800: "#007a70",
      900: "#004842",
    },
    secondary: {
      50: '#e6f7f2',
      100: '#cfdfdb',
      200: '#b5c7c4',
      300: '#9ab0ac',
      400: '#809994',
      500: '#667f7b',
      600: '#4e635f',
      700: '#364844',
      800: '#1d2b29',
      900: '#001111',
    },
    tertiary: 
    {
      50: '#e6f3ff',
      100: '#cadae7',
      200: '#adc0d2',
      300: '#8ea7bd',
      400: '#708da9',
      500: '#56748f',
      600: '#425a71',
      700: '#2e4052',
      800: '#182734',
      900: '#010e18',
    },
  },
  fonts: {
    body: `"Inter var", sans-serif`,
    heading: `"Inter var", sans-serif`,
    mono: `"JetBrains Mono", monospace`,
  },
})

export default theme;
export const baseTheme = {}
