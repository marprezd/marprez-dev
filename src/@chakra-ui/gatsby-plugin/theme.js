import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `"Inter var", sans-serif`,
    heading: `"Inter var", sans-serif`,
    mono: `"JetBrains Mono", monospace`,
  },
})

export default theme;
export const baseTheme = {}
