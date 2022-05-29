import { Box } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import BlogForm from "../../components/Forms/BlogForm";
const EditBlog = ({ user }: { user: any }) => {
  if (!user) return <Navigate to="/" replace />;
  return (
    <Box w="80%" p="1rem" boxShadow="1px 1px 5px 3px rgba(0,0,0,.2);">
      <BlogForm type="edit" />
    </Box>
  );
};

export default EditBlog;
