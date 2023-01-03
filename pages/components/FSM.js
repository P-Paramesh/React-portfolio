import { Box, Flex, chakra, useColorModeValue, Text, Link, Img } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { CheckCircleIcon} from "@chakra-ui/icons"

export default function feasum(){
    return (
<Flex
      bg={useColorModeValue("white", "white")}
      p={20}
    >
        <chakra.h2
        color={useColorModeValue("black")}
        fontSize={"7xl"}
        >
          02
        <Flex
        fontSize={"4xl"}
        mt={15}
        color='purple.600'
          >
          Field Service Management
        </Flex>
          <Box>
          <Flex>
          <Text 
            fontSize='xl'
            padding={2}
            >
            Manage on-site services effectively with our Field Service Management Module and App.
            <Text >
            Along with traditional customer-support software functionalities, Asista comes packed with...
            </Text>
          </Text>
          </Flex>
          </Box>

        <Text fontSize='xl' alignItems={'start'} padding={'5px'} >
          <List spacing={3} size={"2px"}>
          <ListItem>
          <ListIcon as={CheckCircleIcon} color='purple.500' />
            Spot Problems
          </ListItem>

          <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Troubleshoot Issues         
            </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Make the Right Decisions         
            </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Deliver Unparalleled Service
            </ListItem>
            <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Always Meeting Your SLAs
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
    p={'10'}
    mx={'auto'}
    w="5xl">
    <Img src='/field-service-management-crop.jpg' alt='Asista' />
</Box>
</Flex>
    ) 
}
