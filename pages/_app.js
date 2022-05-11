import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import React from 'react';
import Header from "./components/Header";
import Ma from './components/Features';
import Cards from './components/Subtitle';
import Help from './components/Helpdesk';
import Fsm from './components/Fsm'

export default function MyApp(){
  return(
    <StrictMode>
      <ChakraProvider>
        <Header />
          <Ma />
          <Cards />
          <Help />
          <Fsm />
      </ChakraProvider>
    </StrictMode>
  
  )
}