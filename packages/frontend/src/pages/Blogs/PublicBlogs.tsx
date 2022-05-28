import React from "react";
// components
import Overlay from "../../components/Overlay";
import Sidebar from "../../components/Sidebar";
import { Box } from "@chakra-ui/react";
// others
import BlogsList from "../../components/public_blogs/BlogsList";
import { Navigate } from "react-router-dom";

const PublicBlogs = ({
  user,
  isActive,
  setIsActive,
}: {
  user: any;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  if (!user) return <Navigate to="/login" />;

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
      <Box w="80%" display="flex" flexWrap="wrap" gap="10px">
        <BlogsList />
      </Box>
    </>
  );
};

export default PublicBlogs;
