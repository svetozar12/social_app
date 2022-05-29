import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { constants } from "../../constant";
import BlogListItem from "./BlogListItem";

const BlogsList = () => {
  const [blogs, setBlogs] = useState([]);
  const [cookies, setCookie] = useCookies(["token", "user_id", "username"]);

  const getBlogs = async () => {
    try {
      const res = await axios.get(
        `${constants.URL}/blog?user_id=${cookies.user_id}`,
      );
      const data = res.data.results;
      console.log(data);

      setBlogs(data);
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      gap="1rem"
      width="80vw"
    >
      {blogs.map((element: any, index) => {
        console.log(element);

        return (
          <BlogListItem
            key={index}
            title={element.title}
            article={element.article}
            user_img={
              "https://i.ytimg.com/vi/sHxzMAAnz2c/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCRaC5mIsL5Q1RO0fNMxYqIF9fLXA"
            }
            author_id={element.owner_id}
          />
        );
      })}
    </Box>
  );
};

export default BlogsList;
