import React from "react";
import { Box } from "@chakra-ui/react";
// components
import DashBoard from "../components/dashboard/DashBoard";
import Sidebar from "../components/Sidebar";
import DashboardUser from "../components/dashboard/DashboardUser";
import DashboardBlogs from "../components/dashboard/DashboardBlogs";
import Overlay from "../components/Overlay";

const Index = ({
  user,
  isActive,
  setIsActive,
}: {
  user: any;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  console.log(user);
  const username = user.displayName;
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
      <DashBoard>
        <Box position="absolute" top="5rem" width="80%">
          <DashboardUser username={username} />
          <DashboardBlogs />
        </Box>
      </DashBoard>
    </>
  );
};

export default Index;
