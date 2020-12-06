import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const sans = [
  "Inter",
  "-apple-system",
  "BlinkMacSystemFont",
  "'Segoe UI'",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "'Open Sans'",
  "'Helvetica Neue'",
  "sans-serif",
].join(",");

const serif = [
  "Libre Baskerville",
  "sans-serif",
  "Georgia",
  "serif",
  "-apple-system",
  "BlinkMacSystemFont",
  "'Segoe UI'",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "'Open Sans'",
  "'Helvetica Neue'",
  "serif",
].join(",");

const heading = [
  "Inter",
  "-apple-system",
  "BlinkMacSystemFont",
  "'Segoe UI'",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "'Open Sans'",
  "'Helvetica Neue'",
  "sans-serif",
].join(",");

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  components: {
    Link: {
      variants: {
        // these both work!
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        link: (props: any) => ({
          color: mode("blue.700", "blue.300")(props),
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        external: (props: any) => ({
          color: mode("blue.700", "blue.100")(props),
          fontWeight: "400",
        }),
      },
    },
    Button: {
      variants: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        filter: (props: any) => ({
          color: mode("gray.50", "gray.900")(props),
          background: mode("gray.900", "gray.50")(props),
          boxShadow: mode("base", "base")(props),
          fontFamily: "mono",
          fontWeight: "normal",
          borderRadius: "1.5em",
          px: "1.1em",
          py: "1em",
          _active: {
            background: "gray.200",
            color: "gray.900",
            boxShadow: "outline",
          },
          _focus: { boxShadow: mode("lg", "xl")(props) },
        }),
      },
    },
  },
  fonts: {
    body: sans,
    mono: fonts.mono,
    heading,
    serif,
    // mono,
  },
  colors: {
    black: "#16161D",
  },
  // fonts,
  breakpoints,
});

export default theme;
