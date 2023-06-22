import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { VStack, Heading, Flex, Spacer} from "@chakra-ui/layout";
import { FaLinkedin} from "react-icons/fa";
const App = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark"

    return (
      <VStack p="5">
        <Flex w="100%">
          <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
            Paramesh P
          </Heading>
          <Spacer />
          <IconButton icon={<FaLinkedin />}
          isRound="true"
          onClick={() =>
          window.open("https://www.linkedin.com/in/paramesh-p-3603321ba/")}></IconButton>
        </Flex>
      </VStack>
    )
export default App;
