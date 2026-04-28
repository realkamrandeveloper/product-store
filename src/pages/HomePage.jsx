import {
  Container,
  Flex,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight="bold"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
          textAlign="center"
        >
          Current Products
        </Text>

        {products.length === 0 && (
          <Flex flexDir="column" alignItems="center" gap={2}>
            <Text fontSize="xl" textAlign="center" fontWeight="bold">
              No products found
            </Text>
            <Link
              as={RouterLink}
              to="/create"
              color="blue.500"
              _hover={{ textDecoration: "underline" }}
            >
              Create a product
            </Link>
          </Flex>
        )}

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          w="full"
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default HomePage;
