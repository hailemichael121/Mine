import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// Pure black and white colors
const colors = {
  white: "#FFFFFF",
  black: "#000000",
  gray: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#E5E5E5",
    300: "#D4D4D4",
    400: "#A3A3A3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
  },
};

export const theme = extendTheme({
  config,
  fonts: {
    heading: '"Mova", "Arenq", "Ruslan Display", system-ui, sans-serif',
    body: '"Mova", system-ui, sans-serif',
  },
  colors: {
    // Only define black and white
    white: colors.white,
    black: colors.black,
    gray: colors.gray,
  },
  semanticTokens: {
    colors: {
      // Light mode: white background, black text
      bg: {
        default: colors.white,
        _dark: colors.black,
      },
      text: {
        default: colors.black,
        _dark: colors.white,
      },
      // Pure black/white components
      surface: {
        default: colors.white,
        _dark: colors.black,
      },
      border: {
        default: colors.gray[300],
        _dark: colors.gray[700],
      },
      // If you want inverted elements (black on white in light mode)
      invertedBg: {
        default: colors.black,
        _dark: colors.white,
      },
      invertedText: {
        default: colors.white,
        _dark: colors.black,
      },
    },
  },
  // Remove all default Chakra colors
  components: {
    Button: {
      variants: {
        // Outline button with border matching background
        outline: (props: any) => ({
          borderWidth: "1px",
          borderColor: "bg", // This will match the current bg color
          color: "text", // This will match the current text color
          _hover: {
            // Optional: Add hover effect
            borderColor: props.colorMode === "light" ? "gray.400" : "gray.600",
          },
        }),

        // Ghost button (borderless)
        ghost: (props: any) => ({
          color: "text",
          _hover: {
            bg: props.colorMode === "light" ? "gray.100" : "gray.900",
          },
        }),
      },
    },
  },
});
