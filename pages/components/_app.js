import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import Header from "./components/Header";
import Ma from './components/Features';
import Cards from './components/Subtitle';
import Help from './components/Helpdesk';
import Fsm from './components/Fsm'
import Esm from './components/Esm';
import Itsm from './components/Itsm'
import Itam from './components/Itam'

export default function MyApp(){
  return(
    <StrictMode>
      <ChakraProvider>
        <Header />
          <Ma />
          <Cards />
          <Help />
          <Fsm />
          <Esm />
          <Itsm />
          <Itam />
      </ChakraProvider>
    </StrictMode>
  );
}