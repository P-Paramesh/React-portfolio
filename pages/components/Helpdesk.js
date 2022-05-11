import React from 'react';
import { Image, Box, Flex, Link, chakra, useColorModeValue, Hide } from "@chakra-ui/react";

export default function Help(){
    return (
<Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={"left"}
      w="half"
      alignItems="left"
      justifyContent="center"
    >
    
    <Box boxSize='50%'
    p={5}
    alignItems={'start'}>
    <Image src='https://www.asista.com/media/tktAuto/ticketing-automation-crop.jpg' alt='Dan Abramov' />
</Box>
      <Box
        w="md"
        mx="auto"
        py={4}
        px={8}
        bg={useColorModeValue("white", "gray.800")}
        rounded="lg"
      />
        <chakra.h2
        color={useColorModeValue("black")}
        w="2xl"
        fontSize={"7xl"}
        >
          01
        <Flex
            alignItems="end"
            mt={0}
            color={useColorModeValue("gray.700", "gray.200")}
          >
         
            <chakra.h1 px={2} fontSize="4xl"
            color={"purple.600"}>
              Helpdesk
            </chakra.h1>
          </Flex>
          <Flex>
          <chakra.h1 px={2} fontSize="2xl"
            color={"gray.700"}>
            Simplify your business processes with Asista – Intelligent Customer Support Ticketing Software.
            </chakra.h1>
          </Flex>
      </chakra.h2>
</Flex>
    ) 
}