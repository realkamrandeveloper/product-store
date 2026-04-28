import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box px={4}>
      <Container maxW="1140px" px={4}>
        <Flex
          h={16}
          alignItems="center"
          justifyContent="space-between"
          flexDir={{ base: "column", sm: "row" }}
        >
          <Text
            fontSize={{ base: "22", sm: "28" }}
            fontWeight="bold"
            textTransform="uppercase"
            textAlign="center"
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
          >
            <Link to="/">Product Store</Link>
          </Text>

          <Flex alignItems="center" gap={2}>
            <Link to="/create">
              <Button>
                <PlusSquareIcon fontSize={20} />
              </Button>
            </Link>

            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <FaMoon /> : <FaSun />}
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
