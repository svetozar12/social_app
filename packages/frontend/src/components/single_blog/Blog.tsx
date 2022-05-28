import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

interface IBlog {
  title: string;
  date: string;
  article: string;
}

const Blog = ({ title, date, article }: IBlog) => {
  return (
    <Box mt="4rem">
      <Heading mb="2rem">{title}</Heading>
      <Box p="1rem" boxShadow="0px 0px 5px 1px rgba(0,0,0,.2);">
        <Text fontWeight="bold">{date}</Text>
        <Text mt="1rem" style={{ textIndent: 20 }}>
          {article}
        </Text>
      </Box>
    </Box>
  );
};

export default Blog;
