import { Box, Heading, Text } from "@chakra-ui/react";
import FormatData from "../../utils/timeFormat";
import { IBlog } from "../../pages/Index/SingleBlog/[blog_id]";

const Blog = ({ title, date, article }: IBlog) => {
  console.log(date);

  return (
    <Box mt="4rem" mr="4rem" w="100%">
      <Heading mb="2rem">{title}</Heading>
      <Box w="100%" p="1rem" boxShadow="0px 0px 5px 1px rgba(0,0,0,.2);">
        <Text fontWeight="bold">{date && FormatData(date)}</Text>
        <Text mt="1rem" style={{ textIndent: 20 }}>
          {article || "no article"}
        </Text>
      </Box>
    </Box>
  );
};

export default Blog;
