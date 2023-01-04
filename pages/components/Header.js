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
