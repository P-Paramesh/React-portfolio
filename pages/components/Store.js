import React from "react";
import {  Flex, useColorModeValue, Link, HStack, Box } from "@chakra-ui/react";
import { LogoGooglePlaystore, LogoAppleAppstore } from '@chakra-icons/ionicons'

export default function Compo() {
  return (
    <Flex
      bg={useColorModeValue("white", "white")}
      p={15}
      mt={10}
      justifyContent="center"
      alignItems="center"
      spacing={20} 
    >
    
    <Flex padding={5}>
    <Link href='https://play.google.com/store/apps/details?id=com.asistaagent.android&utm_source=asista-site&utm_campaign=asista-site&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'padding={2} textColor='white' bg="gray.800" rounded={'5'}  >
  GooglePlay <LogoGooglePlaystore mx='2px' bg={'white'} />
    </Link>
    </Flex>


    <Box spacing={20}>
    <HStack spacing={20}>
    <Link href='https://apps.apple.com/in/app/asista/id1446551211' padding={2} textColor='white' bg="gray.800" rounded={'5'} >
  App Store <LogoAppleAppstore mx='2px' bg={'white'}/>
    </Link>
    </HStack>
    </Box>
   
    </Flex>
  );
}
