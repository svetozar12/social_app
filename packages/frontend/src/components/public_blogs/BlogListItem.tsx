import { Box, Button, Heading, Text, Image } from "@chakra-ui/react";

interface IBlogItem {
  title: string;
  blog: string;
  user_img: string;
  username: string;
}

const BlogListItem = ({ title, blog, user_img, username }: IBlogItem) => {
  return (
    <Box
      p="1rem 0"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      w="16rem"
      boxShadow="1px 1px 5px 3px rgba(0,0,0,.2);"
    >
      <Heading textAlign="center" w="50%">
        {title}
      </Heading>
      <Text textAlign="justify">{blog}</Text>

      <Box
        cursor="pointer"
        display="flex"
        alignItems="center"
        my="1rem"
        w="50%"
        h="2rem"
        borderRadius="20px"
        bg="#e1e6ed"
      >
        <Image
          borderRadius="100%"
          boxSize="2.1rem"
          src={user_img}
          alt="author_logo"
        />
        <Text fontWeight="bold" color="#265396" w="70%" textAlign="center">
          {username}
        </Text>
      </Box>
      <Button>READ MORE</Button>
    </Box>
  );
};

export default BlogListItem;
