import Icon from "@chakra-ui/icon";
import { HStack } from "@chakra-ui/react";
import React from "react";
import {FaYoutube, FaGithub, FaLinkedin} from "react-icons/fa";

const Social = () => {
  return (
    <HStack spacing={24}>
      <Icon as={FaGithub} boxSize={50} />
      <Icon as={FaLinkedin} boxSize={50} />
      <Icon as={FaYoutube} boxSize={50} />
    </HStack>
  );
};
export default Social;
