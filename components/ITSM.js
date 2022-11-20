import { Box, Flex, chakra, useColorModeValue, Text, Link, Img } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { CheckCircleIcon} from "@chakra-ui/icons"

export default function Help(){
    return (
<Flex
      bg={useColorModeValue("white", "white")}
      p={20}
    >
        <chakra.h2
        color={useColorModeValue("black")}
        fontSize={"7xl"}
        >
          04
        <Flex
        fontSize={"4xl"}
        mt={15}
        color='purple.600'
          >
          Asista ITSM
        </Flex>
          <Box>
            <Flex>
            <Text 
              fontSize='xl'
              padding={2}
            >
            Optimize your IT processes with Asista's IT Service Management Solution, While You align your operations to ITIL standards

            <Text >
            Asista ITSM is designed to give your agents an outstanding experiance and make them more efficient with features like...
            </Text>
          </Text>
          </Flex>
          </Box>

        <Text fontSize='xl' alignItems={'start'} padding={'5px'} >
          <List spacing={3} size={"2px"}>
          <ListItem>
          <ListIcon as={CheckCircleIcon} color='purple.500' />
            Self Service & Knowledge Management
          </ListItem>

          <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Incident Management        
            </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Request Management        
            </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Problem Management
            </ListItem>
            <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Change Management
            </ListItem>
            <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Configration Management
            </ListItem>
            <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            SLA Management
            </ListItem>
            <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Daskboards & Reports
            </ListItem>
            <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            CSAT Surveys
            </ListItem>
            <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Ticketing Automation
            </ListItem>
          </List>
        </Text>
        
        <Link >
          <Text fontSize='xl' color='purple.300'>
            Know More...
          </Text>
        </Link>
    </chakra.h2>

    <Box boxSize='50%'
    background={"white"}
    p={20}
    mx={'auto'}
    w="8xl">
    <Img src='/fsm-1.jpg' alt='Asista' />
</Box>
</Flex>
    ) 
}