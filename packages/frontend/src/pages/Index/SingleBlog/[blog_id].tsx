import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Blog from "../../../components/single_blog/Blog";
import AuthorProfile from "../../../components/single_blog/AuthorProfile";
import axios from "axios";
import { constants } from "../../../constant";

export interface IBlog {
  _id: string;
  owner_id: string;
  title: string;
  article: string;
  status: string;
  date: string;
}

const SingleBlog = ({ user }: { user: any }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState<IBlog | any>({});
  const obj = {
    title: "some random title",
    date: "Saturday, May 28, 2022",
    article: "this a blog article",
  };
  const getBlog = async () => {
    try {
      const response = await axios.get(`${constants.URL}/blog/${id}`);
      console.log(response.data);
      setBlog(response.data);
      return true;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Box display="flex" justifyContent="space-between" w="60%" h="100vh">
      {blog && (
        <Blog
          _id={blog._id}
          owner_id={blog.owner_id}
          status={blog.status}
          title={blog.title}
          date={blog.date}
          article={blog.article}
        />
      )}
      <AuthorProfile
        username="ivan"
        author_avatar="https://i.ytimg.com/vi/sHxzMAAnz2c/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCRaC5mIsL5Q1RO0fNMxYqIF9fLXA"
      />
    </Box>
  );
};

export default SingleBlog;
