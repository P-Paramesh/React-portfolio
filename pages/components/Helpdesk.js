import React from 'react';
import { Image, Box, Flex, chakra, useColorModeValue, Text, Link } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import {CheckCircleIcon} from "@chakra-ui/icons"

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
    p={'10'}
    mx={'auto'}
    w="xlg">
    <Image src='https://www.asista.com/media/tktAuto/ticketing-automation-crop.jpg' alt='Dan Abramov' />
</Box>
      <Box
        w="md"
        mx="auto"
      />
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
            Know More....
          </Text>
        </Link>
     
    </chakra.h2>
</Flex>
    ) 
}