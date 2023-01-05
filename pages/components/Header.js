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
