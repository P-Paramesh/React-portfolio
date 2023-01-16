import React from "react";
import {
  chakra,
  HStack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Box,
  Flex,
  useColorModeValue,
  useDisclosure,
  VStack,
  Button,
  SimpleGrid,
  Stack,
  Icon,
} from "@chakra-ui/react";

import { useViewportScroll } from "framer-motion";

export default function Header() {
  const bg = useColorModeValue("white", "white");
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};
  
  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();

  const Section = (props) => {
  const ic = useColorModeValue("brand.600", "brand.50");
  const hbg = useColorModeValue("white", "brand.400");
  const tcl = useColorModeValue("gray.900", "gray.50");
  const dcl = useColorModeValue("gray.500", "gray.50");
     return (
      <Link
        m={-3}
        p={3}
        display="flex"
        alignItems="start"
        rounded="lg"
      >
        <Icon
          flexShrink={0}
          h={6}
          w={6}
          color={ic}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
         <path d={props.icon} />
        </Icon>
         <Box ml={4}>
          <chakra.p fontSize="sm" fontWeight="700" color={tcl}>
            {props.title}
          </chakra.p>
          <chakra.p mt={1} fontSize="xlg" color={dcl}>
            {props.children}
          </chakra.p>
        </Box>
      </Link>
    );
  };

 const sections = [
    {
      title: "Asista Helpdesk",
    },
    {
      title: "Asista FSM",
    },
    {
      title: "Asista ESM",
    },
    {
      title: "Asista ITSM",
    },
    {
      title: "Asista ITAM ",
    },
  ];

const Features = (props) => {
    const hbg = useColorModeValue("gray.100", "brand.400");
    const hbgh = useColorModeValue("gray.100", "brand.500");
    const tcl = useColorModeValue("gray.900", "gray.50");
  return (
      <React.Fragment>
        <SimpleGrid
          columns={props.h ? { base: 1, md: 3, lg: 5 } : 1}
          pos="relative"
          gap={{ base: 6, sm: 8 }}
          px={5}
          py={6}
          p={{ sm: 8 }}
        >
             {sections.map(({ title,}, sid) => (
            <Section title={title} > 
            </Section>
          ))}
          </SimpleGrid>

        <Box px={{ base: 5, sm: 8 }} py={5} bg={hbg} display={{ sm: "flex" }}>
          <Stack direction={{ base: "row" }} spacing={{ base: 6, sm: 10 }}>
            <Box display="flow-root">
              <Link
                m={-3}
                p={3}
                display="flex"
                alignItems="center"
                rounded="md"
                fontSize="md"
                color={tcl}
                _hover={{ bg: "#2F855A" }}
              >
                 <Icon
                  flexShrink={0}
                  h={6}
                  w={6}
                  color="gray.400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                    <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </Icon>
              </Link>
            </Box>

            <Box display="flow-root">
              <Link
                m={-3}
                p={3}
                display="flex"
                alignItems="center"
                rounded="md"
                fontSize="md"
                color={tcl}
              >
              
              <Icon
                  flexShrink={0}
                  h={6}
                  w={6}
                  color="gray.400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </Icon>
              </Link>
            </Box>
          </Stack>
        </Box>
      </React.Fragment>
    );
  };
  
  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
    </VStack>
  );

 return (
    <chakra.header
      w="full"
      overflowY="hidden"
    
    >
   <chakra.div h="4.5rem" mx="auto" maxW="1200px">
        <Flex
          w="full"
          h="full"
          px="6"
          alignItems="center"
          justifyContent="space-between"
        >
   <img src="/asista-logo.png" alt="Asista" sizes="30px"/>
          <Flex align="flex-start">
            <Link href="/">
              <HStack>
              </HStack>
            </Link>
          </Flex>
          <Flex>
            <HStack spacing="4" display={{ base: "none", md: "flex" }}>
              <Popover>
                <PopoverTrigger>
                  <Button
                    bg="white"
                    color="black"
                    display="inline-flex"
                    alignItems="center"
                    fontSize="md"
                    _hover={{ color: "#2F855A" }}
                    _focus={{ boxShadow: "none" }}
                  >
                     Solutions
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  w="100vw"
                  maxW="md"
                  _focus={{ boxShadow: "lg" }}
                >
                  <Features />
                </PopoverContent>
              </Popover>
              <Button
                bg={bg}
                color="black"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{ color: "#2F855A" }}
                _focus={{ boxShadow: "none" }}
              >
                Pricing
              </Button>
              <Button
                bg={bg}
                color="black"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{ color: "#2F855A" }}
                _focus={{ boxShadow: "none" }}
              >
                FAQs
              </Button>
              <Button
                bg={bg}
                color="black"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{ color: "#2F855A" }}
                _focus={{ boxShadow: "none" }}
              >
              Blog
              </Button>
               <Button
                bg="white"
                color="green"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
               _hover={{ color: "#2F855A" }}
               _focus={{ boxShadow: "none " }}
              >
                Partners
              </Button>
              <Button
                bg="white"
                color="black"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
               _hover={{ color: "#2F855A" }}
               _focus={{ boxShadow: "none " }}
               outline= "black"
              >
                <Box border='1px' padding={2} paddingStart={5} paddingEnd={5} borderColor='gray.600'> Free Trial</Box>
              </Button>
