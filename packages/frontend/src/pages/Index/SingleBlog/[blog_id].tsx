import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Blog from "../../../components/single_blog/Blog";
import AuthorProfile from "../../../components/single_blog/AuthorProfile";
import axios from "axios";
import { constants } from "../../../constant";
import api from "../../../utils/axiosInstance";

export interface IBlog {
  _id: string;
  owner_id: string;
  title: string;
  article: string;
  status: string;
  date: string;
}

interface IAuthor {
  author_avatar: string;
  username: string;
}

const SingleBlog = ({ user }: { user: any }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState<IBlog | any>({});
  const [author, setAuthor] = useState<IAuthor | any>({});

  const getBlog = async () => {
    try {
      const blogResponse = await api.get(`/blog/${id}`);
      setBlog(blogResponse.data);
      const getAuthor = async () => {
        try {
          const response = await api.get(`/user/${blogResponse.data.owner_id}`);
          console.log(response.data, "author");
          setAuthor({
            username: response.data.username,
            author_avatar: response.data.user_avatar,
          });
          return true;
        } catch (error) {
          return false;
        }
      };
      getAuthor();
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
      {author.username && (
        <AuthorProfile
          username={author.username}
          author_avatar={author.author_avatar}
        />
      )}
    </Box>
  );
};

export default SingleBlog;
