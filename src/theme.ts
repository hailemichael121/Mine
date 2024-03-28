import { extendTheme } from "@chakra-ui/react";

const lightTheme = {
  colors: {
    bg: "#gray", // Light theme background color
    text: "black", // Text color
    primary: "#ced8e4", // Primary color
    secondary: "#e8f0f3", // Secondary color
    accent: "#f59e0b",
  },
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "'Open Sans', sans-serif",
  },
  // ... other theme options
};

const darkTheme = {
  colors: {
    // Define colors for dark theme (e.g., black background, white text)
    bg: "black",
    text: "Black",
    primary: "Black", // Adjust primary color shade for dark theme
    // ... other color definitions
  },
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "'Open Sans', sans-serif",
  },
  // ... other theme options
};

// Combine themes and set initial color mode (optional)
const config = {
  initialColorMode: "light", // Optional: Set initial color mode (default is 'light')
  useSystemColorMode: false, // Optional: Disable system color mode detection
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
};

export const theme = extendTheme(config);
