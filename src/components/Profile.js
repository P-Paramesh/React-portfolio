import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import {Box, Flex,Heading,Text, }from "@chakra-ui/layout"
import Icon from "@chakra-ui/icon"
import {DiReact, } from "react-icons/di";
import {SiChakraui} from "react-icons/si"

const Profile = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return(
    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%" maxWidth={{base:"100vh",md:"130vh", lg:"130vh", xl:"130vh"}}>
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="3xl">Experience</Heading>
        <Text fontSize="2xl" color="gray.500" padding="3px">5+ Months</Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="2xl">Product Specialist and Developer, specialised in web app development</Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex rounded="xl" direction="column" m={6} bg="blue.800" h="30vh" w="30vh" justify="flex-end">
            <Icon color="white" p="4" w="24" h="24" as={DiReact} />
           <Text color="gray.800" p="4" fontSize="xl" fontWeight="semibold">
              React
            </Text>
          </Flex>
         <Flex rounded="xl" direction="column" m={6} bg="blue.300"_hover={{bg:"blue.400"}}  h="30vh" w="30vh" justify="flex-end">
            <Icon color="white" p="4" w="24" h="24" as={SiChakraui} />
            <Text color="gray.800" p="4" fontSize="xl" fontWeight="semibold">
             Chakra Ui
            </Text>
          </Flex>
          <Flex rounded="xl" direction="column" m={6} bg="teal.300"_hover={{bg:"teal.500"}}  h="30vh" w="30vh" justify="flex-end">
            <Icon color="white" p="4" w="24" h="24" as={ImGithub} />
            <Text color="gray.800" p="4" fontSize="xl" fontWeight="semibold">
             Github
            </Text>
          </Flex>
        </Flex>
      </Box>
      
    </Flex>
  )
}

export default Profile
