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

