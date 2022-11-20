import { Img, Box, Flex, chakra, useColorModeValue, Text, Link } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import {CheckCircleIcon} from "@chakra-ui/icons"

export default function Esm(){
    return (
<Flex
      bg={useColorModeValue("white", "white")}
      p={20}
      w="half"
      alignItems="center"
    >
    
    <Box 
    p={'10'}
    mx={'auto'}
    w="7xl"
    >
    <Img src='/fsm-5.jpg' alt='Asista' />
    </Box>
        <chakra.h2
        color={useColorModeValue("black")}
        w="2xl"
        fontSize={"7xl"}
        >
          05
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
          Asista ITAM
        </Flex>
          </Flex>


          <Flex>
          <Text
            fontSize='xl'
            padding={'2'}
            spacing={10}
            >
            Be regulatory compliant and reduce asset support costs by keeping track of all your business assets with our IT Advanced Asset Management Solution.
            <Text >
            You can now have a detailed bird's-eye-view of your business assets, and upgrade them instantly to match the ever growing demands of your users and business with features like...
            </Text>
          </Text>
         
          </Flex>

        <Text fontSize='xl' alignItems={'start'} padding={'5px'} >
          <List spacing={3} size={"2px"}>
          <ListItem>
          <ListIcon as={CheckCircleIcon} color='purple.500' />
            Full lifecycle IT Asset Management with CMDB
          </ListItem>

          <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Hardware Asset Management        
            </ListItem>

          <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Software Asset Management        
            </ListItem>

          <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Integrate with AD, System Center and Cloud Service Providers
            </ListItem>

            <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Agentless Network Discovery
            </ListItem>

            <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Barcoding support 
            </ListItem>

            <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Service Management
            </ListItem>

            <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Spare Parts and storage
            </ListItem>
            
            <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Disposal and Obsolescence
            </ListItem>

            <ListItem>
            <ListIcon as={CheckCircleIcon} color='purple.500' />
            Key performance indicators and management reporting
            </ListItem>
          </List>
        </Text>

        <Link >
          <Text fontSize='xl' color='purple.300'>
            Know More...
          </Text>
        </Link>
     
    </chakra.h2>
</Flex>
    ) 
}