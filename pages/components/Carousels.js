import {Text,Box,Flex,useColorModeValue,Image,Stack} from "@chakra-ui/react";
import { Wrap, WrapItem, Center } from '@chakra-ui/react'



  const carouselStyle = {
    transition: "all .5s",
  };

  return (
    <Flex
      w="full"
      bg={useColorModeValue("purple.500", "purple.600")}
      p={'60px'}
      alignItems="center"
      justifyContent="start"
    >
      <Flex w="full" pos="relative" overflow="hidden">
        <Flex h="450px" w="1800" {...carouselStyle}><br />
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Text
                color="white"
                fontSize="10xl"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
              </Text>

              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                bg={'purple.500'}
                pos={'relative'}
                opacity={0.1}
              />
              
              <Stack
                p="8px 12px"
                pos="absolute"
                bottom="24px"
                textAlign="center"
                w="full"
                mb="8"
                color="white"
              >

              <Wrap spacing='15px' padding={5}>
              
              <Wrap >
                  <WrapItem>
                    <Center w='220px' bg='transparent' fontSize={'3xl'} textAlign='start'>{slide.title}</Center>
                  </WrapItem>
                </Wrap>
                
                <Wrap>
                <WrapItem>
                    <Flex w='1200px'  bg='transparent' fontSize={'xl'} textAlign='start'>{slide.description}</Flex>
                  </WrapItem>
                </Wrap>

                <Wrap >
                  <WrapItem>
                    <Center w='200px' bg='transparent' textAlign='start'>{slide.p0}</Center>
                  </WrapItem>
                </Wrap>
                


                <Wrap >
                  <WrapItem>
                    <Center w='200px' bg='transparent' textAlign='start'>{slide.p1}</Center>
                  </WrapItem>
                </Wrap>

                
                <Wrap >
                  <WrapItem>
                    <Center w='200px' bg='transparent' textAlign='start'>{slide.p2}</Center>
                  </WrapItem>
                </Wrap>


                <Wrap >
                  <WrapItem>
                    <Center w='200px' bg='transparent' >{slide.p3}</Center>
                  </WrapItem>
                </Wrap>

                </Wrap>
              </Stack>

            </Box>

          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Component;
