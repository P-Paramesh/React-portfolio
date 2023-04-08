import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({ colors, config });

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ChakraProvider theme={theme}>
  </ChakraProvider>,
  rootElement
);

