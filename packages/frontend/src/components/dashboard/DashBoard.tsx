import { Button } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import s from "../../styles/DashBoard.module.css";
import redirect from "../../utils/redirect";

const DashBoard = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <>
      {children}{" "}
      <Button
        onClick={() => redirect("/create")}
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
    </>
  );
};

export default DashBoard;
