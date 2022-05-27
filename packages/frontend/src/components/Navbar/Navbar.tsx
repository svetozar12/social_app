import { Box, Heading } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import s from "../../styles/HamburgerBtn.module.css";
// components
import HamburgerBtn from "../Buttons/HamburgerBtn";

const Navbar = ({
  setIsActive,
}: {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="4rem"
      bg="#4b5970"
      pos="absolute"
      top="0"
    >
      <HamburgerBtn>
        <Box
          onClick={() => setIsActive((prev) => !prev)}
          position="absolute"
          left="10%"
          cursor="pointer"
          w="2rem"
          h="2rem"
        >
          <GiHamburgerMenu className={s.icon} />
        </Box>
      </HamburgerBtn>
      <Heading color="white">Blogs App</Heading>
    </Box>
  );
};

export default Navbar;
