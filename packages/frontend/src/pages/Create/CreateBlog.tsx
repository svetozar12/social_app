import { Box } from "@chakra-ui/react";
import React from "react";
import { Navigate } from "react-router-dom";
import BlogForm from "../../components/Forms/BlogForm";
const CreateBlog = ({ user }: { user: any }) => {
  if (!user) return <Navigate to="/" replace />;
  return (
    <Box w="80%" p="1rem" boxShadow="1px 1px 5px 3px rgba(0,0,0,.2);">
      <BlogForm type="new" />
    </Box>
  );
};

export default CreateBlog;
