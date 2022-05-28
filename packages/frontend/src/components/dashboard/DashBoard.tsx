import { Button } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import s from "../../styles/DashBoard.module.css";
import ModalCreateBlog from "./ModalCreateBlog";
import { useDisclosure } from "@chakra-ui/react";

const DashBoard = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children}{" "}
      <Button
        onClick={onOpen}
        _hover={{ background: "rgba(229, 62, 62, .6)" }}
        bg="red.500"
        color="white"
        borderRadius="50%"
        w="4rem"
        h="4rem"
        position="absolute"
        bottom="1rem"
        right="1rem"
      >
        <AiOutlinePlus className={s.icon} />
      </Button>
      <ModalCreateBlog isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
};

export default DashBoard;
