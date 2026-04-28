import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

import { useProductStore } from "../store/product";
import UpdateProductModal from "./UpdateProductModal";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  const toast = useToast();
  const { deleteProduct } = useProductStore();

  const handleDelete = async () => {
    const { success, message } = await deleteProduct(product._id);

    toast({
      title: success ? "Success" : "Error",
      description: message,
      status: success ? "success" : "error",
      isClosable: true,
    });
  };

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image src={product.image} alt={product.name} h={48} w="full" objectFit="cover" />

      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>

        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
          $ {product.price}
        </Text>

        <HStack spacing={2}>
          <UpdateProductModal product={product}>
            <IconButton icon={<EditIcon />} colorScheme="blue" />
          </UpdateProductModal>

          <IconButton
            icon={<DeleteIcon />}
            onClick={handleDelete}
            colorScheme="red"
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
