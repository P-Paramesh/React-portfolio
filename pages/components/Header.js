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
