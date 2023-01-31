import {  Box, Flex, useColorModeValue, } from "@chakra-ui/react";
export default function Cards(){
    return (
      <Flex
        bg={useColorModeValue("white", "white")}
        p={50}
        w="full"
      
      >
        <Box
          mx="auto"
          px={8}
          py={4}
          rounded="lg"
          shadow="none"
          bg={useColorModeValue("white", "gray.800")}
          maxW="5xl"
        >
          <Box mt={-1}
              fontSize="2xl"
              color={useColorModeValue("gray.700", "red")}
              fontWeight="500">
              Asista enables organizations to achieve higher customer lifetime value and greater employee productivity with an integrated service automation platform.
          </Box>
        </Box>
      </Flex>
    );
  };
