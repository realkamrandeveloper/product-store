import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { useProductStore } from "../store/product";

const UpdateProductModal = ({ children, product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const { updateProduct } = useProductStore();

  const [updatedProduct, setUpdatedProduct] = useState({
    name: product?.name || "",
    price: product?.price || "",
    image: product?.image || "",
  });

  useEffect(() => {
    setUpdatedProduct({
      name: product?.name || "",
      price: product?.price || "",
      image: product?.image || "",
    });
  }, [product]);

  const handleUpdate = async () => {
    const { success, message } = await updateProduct(product._id, updatedProduct);

    toast({
      title: success ? "Success" : "Error",
      description: message,
      status: success ? "success" : "error",
      isClosable: true,
    });

    if (success) onClose();
  };

  return (
    <>
      <span onClick={onOpen} style={{ display: "inline-flex" }}>
        {children}
      </span>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Product Name</FormLabel>
                <Input
                  placeholder="Product Name"
                  name="name"
                  value={updatedProduct.name}
                  onChange={(e) =>
                    setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Price</FormLabel>
                <Input
                  placeholder="Price"
                  name="price"
                  type="number"
                  value={updatedProduct.price}
                  onChange={(e) =>
                    setUpdatedProduct({ ...updatedProduct, price: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel>Image URL</FormLabel>
                <Input
                  placeholder="Image URL"
                  name="image"
                  value={updatedProduct.image}
                  onChange={(e) =>
                    setUpdatedProduct({ ...updatedProduct, image: e.target.value })
                  }
                />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleUpdate}>
              Update
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateProductModal;
