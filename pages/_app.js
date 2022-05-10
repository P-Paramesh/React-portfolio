import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Header from "./components/Header";
import Ma from './components/Features';
import Cards from './components/Subtitle';
import Help from './components/Helpdesk';

export default function MyApp(){
  return(
   
    <ChakraProvider>
    <Header />
     <Ma />
     <Cards />
     <Help />
    </ChakraProvider>
  )
}