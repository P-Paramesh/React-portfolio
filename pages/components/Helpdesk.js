import React from 'react';
import { Image, Box, Flex, Link, chakra, useColorModeValue } from "@chakra-ui/react";

export default function Help(){
    return (
<Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
    
    <Box boxSize='50%'
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
        marginTop={15}
        color={useColorModeValue("gray.800", "white")}
        fontSize={{ base: "2xl", md: "3xl" }}
        mt={{ base: 2, md: 0 }}
        fontWeight="bold"
        >
         HelpDesk
        </chakra.h2>

        <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.200")}>
          
        </chakra.p>

        <Flex justifyContent="end" mt={4}>
          <Link
            fontSize="xl"
            color={useColorModeValue("brand.500", "brand.300")}
          >
          </Link>
        </Flex>
</Flex>

    );
}