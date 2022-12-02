import React from "react";
import ReactDOM from "react-dom";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
  
    
   
    700: "#2a2f57",
    800: "#181c37",
    900: "#080819"
  }
};

const theme = extendTheme({ colors, config });

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ChakraProvider theme={theme}>
  </ChakraProvider>,
  rootElement
);

