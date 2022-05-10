import React from "react";
import { chakra, Box, Flex, useColorModeValue, Link, Img } from "@chakra-ui/react";

const Ma = () => {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      >
      <Box
        bg={useColorModeValue("white", "red.800")}
        mx={{ lg: 15 }}
        display={{ lg: "flex" }}
        maxW={{ lg: "20xl" }}
        shadow={'none'}
        rounded={{ lg: "lg" }}
      >
      <Img
      boxSize= {'700'}
      src='https://www.asista.com/media/hmImg0.jpg' alt='Asista'
      
      />

      <Img 
       img src='https://www.asista.com/media/lines1.png' alt='Asista'
       boxSize= {'auto'}
       shadow={'none'}
       flex={'left'}
       padding={'right'}
      background={'purple.300'}>
      </Img>
      </Box>
</Flex> 
  );
};

export default Ma;
