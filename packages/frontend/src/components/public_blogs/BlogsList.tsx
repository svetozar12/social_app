import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { constants } from "../../constant";
import BlogListItem from "./BlogListItem";

const BlogsList = () => {
  const blogs = [
    {
      title: "Blog title",
      blog: "dawdawdaw",
      user: {
        user_img:
          "https://i.ytimg.com/vi/sHxzMAAnz2c/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCRaC5mIsL5Q1RO0fNMxYqIF9fLXA",
        username: "ivan",
      },
    },
    {
      title: "Blog title",
      blog: "dawdawdaw",
      user: {
        user_img:
          "https://i.ytimg.com/vi/sHxzMAAnz2c/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCRaC5mIsL5Q1RO0fNMxYqIF9fLXA",
        username: "ivan",
      },
    },
    {
      title: "Blog title",
      blog: "dawdawdaw",
      user: {
        user_img:
          "https://i.ytimg.com/vi/sHxzMAAnz2c/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCRaC5mIsL5Q1RO0fNMxYqIF9fLXA",
        username: "ivan",
      },
    },
    {
      title: "Blog title",
      blog: "dawdawdaw",
      user: {
        user_img:
          "https://i.ytimg.com/vi/sHxzMAAnz2c/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCRaC5mIsL5Q1RO0fNMxYqIF9fLXA",
        username: "ivan",
      },
    },
    {
      title: "Blog title",
      blog: "dawdawdaw",
      user: {
        user_img:
          "https://i.ytimg.com/vi/sHxzMAAnz2c/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCRaC5mIsL5Q1RO0fNMxYqIF9fLXA",
        username: "ivan",
      },
    },
  ];
  // const [blogs, setBlogs] = useState([]);
  const [cookies, setCookie] = useCookies(["token", "user_id", "username"]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      gap="1rem"
      width="80vw"
    >
      {blogs.map((element, index) => {
        return (
          <BlogListItem
            key={index}
            title={element.title}
            blog={element.blog}
            user_img={element.user.user_img}
            username={element.user.username}
          />
        );
      })}
    </Box>
  );
};

export default BlogsList;
