import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";
const customTheme = extendTheme({
  colors: {
    primary: "#F4F1F1",
    secondary: "#121212",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={customTheme}>
    <App />
  </ChakraProvider>
);
