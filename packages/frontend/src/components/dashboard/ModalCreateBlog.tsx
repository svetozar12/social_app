import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  FormControl,
  Input,
  ModalBody,
  FormLabel,
  ModalFooter,
  Button,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
const ModalCreateBlog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Modal blockScrollOnMount={true} isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Blog Post</ModalHeader>
        <ModalBody>
          <FormControl
            // onKeyDown={handleSubmit}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              w="80%"
              mb="1rem"
              id="title"
              //   value={username}
              //   onChange={(e) => setUsername(e.target.value)}
              type="text"
            />
            <FormLabel htmlFor="password">Status</FormLabel>
            <Select w="80%" mb="1rem" placeholder="Select status">
              <option value="public">Public</option>
              <option value="private">Private</option>
            </Select>
            <Textarea placeholder="Your post text..." />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Create blog post
          </Button>
          <Button variant="ghost">Discard</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalCreateBlog;
