import {  Box, Flex, useColorModeValue, Img, Text } from "@chakra-ui/react";

const Ma = () => {
  return (
    <Flex
      bg={useColorModeValue("white", "white")}
      maxW="5800px"
      p={50}
    //  w="full"
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
      src='/hmImg0.jpg' alt='Asista'
      
      />

      <Img 
       src='/lines1.png' alt='Asista'
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
