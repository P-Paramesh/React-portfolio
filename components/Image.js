import React from "react";
import {
  Box,
  Flex,
  Image,
  Spacer,
  useColorModeValue,
  
} from "@chakra-ui/react";

const Man = () => {
  return (
    <Flex
      bg={useColorModeValue("white", "white")}
      maxW="full"
      p={50}
    >
    
    <Box>
    
        </Box>
        <Spacer />

          <Flex >
          <Image                                       
        fit="center"
        src="/hmAppBanner.jpg"
        alt="Article"
      />
        </Flex>
    </Flex>
  );
};

export default Man;
