import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import Header from "./components/Header";
import Ma from './components/Features';
import Cards from './components/Subtitle';
import Help from './components/Helpdesk';
import Fsm from './components/FSM'
import Esm from './components/ESM';
import Itsm from './components/ITSM'
import Itam from './components/ITAM'

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
