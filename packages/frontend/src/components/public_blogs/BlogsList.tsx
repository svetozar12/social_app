import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { constants } from "../../constant";
import BlogListItem from "./BlogListItem";

const BlogsList = () => {
  const [blogs, setBlogs] = useState([]);
  const { author_id } = useParams();

  const getBlogs = async () => {
    try {
      const res = await axios.get(`${constants.URL}/blog`);
      const data = res.data.results;

      setBlogs(data);
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const getBlogsByAuthor = async () => {
    try {
      const res = await axios.get(`${constants.URL}/blog?user_id=${author_id}`);
      const data = res.data.results;

      setBlogs(data);
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const getData = () => {
    if (!author_id) return getBlogs();
    getBlogsByAuthor();
  };

  useEffect(() => {
    getData();
  }, []);

  if (blogs.length === 0) return <h1>no data</h1>;
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
        return (
          <BlogListItem
            key={index}
            _id={element._id}
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
