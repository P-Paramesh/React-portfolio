import { Box, Flex, chakra, useColorModeValue, Text, Link, Img } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import {CheckCircleIcon} from "@chakra-ui/icons"

export default function Help(){
    return (
<Flex
      bg={useColorModeValue("white", "white")}
      
      p={20}
      w="half"
      alignItems="left"
      justifyContent="center"
    >
    <Box boxSize='50%'
    p={20}
    mx={'auto'}
    w="5xl">
    <Img src='/ticketing-automation-crop.jpg' alt='Asista' />
</Box>
        <chakra.h2
        color={useColorModeValue("black")}
        w="2xl"
        fontSize={"7xl"}
        >
          01
        <Flex
            alignItems="center"
            mt={0}
            color={useColorModeValue("gray.700", "gray.200")}
          >
         
         <Flex
        fontSize={"4xl"}
        mt={15}
        color='purple.600'
          >
          Helpdesk
        </Flex>
          </Flex>


          <Flex>
          <Text
            fontSize='xl'
            padding={'2'}
            spacing={10}
            >
            Simplify your business processes with Asista – Intelligent Customer Support Ticketing Software.
            <Text >
            Along with traditional customer-support software functionalities, Asista comes packed with...
            </Text>
          </Text>
         
          </Flex>

        <Text fontSize='xl' alignItems={'end'} padding={'5px'} >
          <List spacing={3} size={"2px"}>
          <ListItem>
          <ListIcon as={CheckCircleIcon} color='purple.500' />
            Social Channel Integration
          </ListItem>

          <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Process Automation          
            </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Items-Based Support          
            </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Real-Time SLA Notifications
            </ListItem>

          </List>
        </Text>

        <Link >
          <Text fontSize='xl' color='purple.300'>
            Know More...
          </Text>
     
