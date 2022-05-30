import React from "react";
// components
import { Box } from "@chakra-ui/react";
// others
import BlogsList from "../../../components/public_blogs/BlogsList";
import { Navigate } from "react-router-dom";

const PublicBlogsByAuthor = ({ user }: { user: any }) => {
  if (!user) return <Navigate to="/login" />;

  return (
    <Box w="80%" display="flex" flexWrap="wrap" gap="10px">
      <BlogsList />
    </Box>
  );
};

export default PublicBlogsByAuthor;
