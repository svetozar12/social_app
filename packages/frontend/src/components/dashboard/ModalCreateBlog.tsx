import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import ModalForm from "../Forms/ModalForm";

interface IModalCreateBlog {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const handleSubmit = async (e: any, title: string, status: string) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    const obj = { title, status };
    console.log("submit", obj);
  }
};

const ModalCreateBlog = ({ isOpen, onOpen, onClose }: IModalCreateBlog) => {
  return (
    <Modal
      blockScrollOnMount={true}
      size="5xl"
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Blog Post</ModalHeader>
        <ModalBody>
          <ModalForm onClose={onClose} />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalCreateBlog;
