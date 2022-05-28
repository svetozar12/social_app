import { Box } from "@chakra-ui/react";
import React from "react";
import { Navigate } from "react-router-dom";
import BlogForm from "../../components/Forms/BlogForm";
import Overlay from "../../components/Overlay";
import Sidebar from "../../components/Sidebar";
const CreateBlog = ({
  user,
  isActive,
  setIsActive,
}: {
  user: any;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  if (!user) return <Navigate to="/" replace />;
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
      <Box w="80%" p="1rem" boxShadow="1px 1px 5px 3px rgba(0,0,0,.2);">
        <BlogForm type="new" />
      </Box>
    </>
  );
};

export default CreateBlog;
