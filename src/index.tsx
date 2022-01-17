import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";

import store from "./store/index";
import { Provider } from "react-redux";

import {
  extendTheme,
  theme as base,
  withDefaultVariant,
} from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import "@fontsource/inter";
import "@fontsource/montserrat";

// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: "480px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
});

// 3. Extend the theme
const theme = extendTheme(
  // Takes 3 arguments. First is overriding object. Optionally, Second and third are withDefaultVariant and withDefaultColorScheme
  {
    breakpoints,
    fonts: {
      heading: `Montserrat, ${base.fonts.heading}`,
      body: `Inter, ${base.fonts.body}`,
    },
  },

  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
