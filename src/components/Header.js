import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Circle, Stack, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";

const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Stack>
      {isNotSmallerScreen && (
        <Circle
          position="absolute"
          bg="blue.100"
          opacity="0.1"
          w="300px"
          h="300px"
          alignSelf="flex-end"
        />
      )}
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : 0}
        alignSelf="flex-start"
      >
       <Box mt={isNotSmallerScreen ? 0 : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
             fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, yellow.200, yellow.600)"
            bgClip="text"
          >
            Paramesh
          </Text>
          <Text color={isDark ? "gray.200" : "gray.800"}>
           I am a Frontend Developer love to develope Web Applications
          </Text>
          <Button mt={8} color='teal.400' variant='ghost' colorScheme='gray'>
            Hire Me
          </Button>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="https://avatars.githubusercontent.com/u/95079545?s=400&u=e5f36db1d6a7fda807dd060cb3bc2d3e03e7b403&v=4" 
          alt="Profile Pic"
          zIndex={1} 
          />
      </Flex>
    </Stack>
  );
};

export default Header;
