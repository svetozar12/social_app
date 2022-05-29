import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Blog from "../../../components/single_blog/Blog";
import AuthorProfile from "../../../components/single_blog/AuthorProfile";

const SingleBlog = ({ user }: { user: any }) => {
  const obj = {
    title: "some random title",
    date: "Saturday, May 28, 2022",
    article: "this a blog article",
  };
  // const { id } = useParams();
  if (!user) return <Navigate to="/login" />;

  return (
    <>
      <Box display="flex" justifyContent="space-between" w="60%" h="100vh">
        <Blog {...obj} />
        <AuthorProfile
          username="ivan"
          author_avatar="https://i.ytimg.com/vi/sHxzMAAnz2c/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCRaC5mIsL5Q1RO0fNMxYqIF9fLXA"
          {...obj}
        />
      </Box>
    </>
  );
};

export default SingleBlog;
