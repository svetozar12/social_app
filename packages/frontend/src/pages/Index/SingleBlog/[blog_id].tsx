import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Blog from "../../../components/single_blog/Blog";
import AuthorProfile from "../../../components/single_blog/AuthorProfile";
import Overlay from "../../../components/Overlay";
import Sidebar from "../../../components/Sidebar";
import { constants } from "../../../constant";

const SingleBlog = ({
  user,
  isActive,
  setIsActive,
}: {
  user: any;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const obj = {
    title: "some random title",
    date: "Saturday, May 28, 2022",
    article: "this a blog article",
  };
  // const { id } = useParams();
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
