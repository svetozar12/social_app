import React from "react";
import Sidebar from "./Sidebar";
import Overlay from "./Overlay";
import Navbar from "./Navbar/Navbar";
import { Box } from "@chakra-ui/react";

const OverlayHandler = ({ user }: { user: any }) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <>
      {isActive && <Sidebar setIsActive={setIsActive} />}
      {isActive && (
        <Overlay>
          <Box
            onClick={() => setIsActive((prev) => !prev)}
            zIndex="1"
            opacity=".5"
            w="100vw"
            h="100vh"
            bg="black"
            position="absolute"
          ></Box>
        </Overlay>
      )}
      {user && <Navbar setIsActive={setIsActive} />}
    </>
  );
};

export default OverlayHandler;
