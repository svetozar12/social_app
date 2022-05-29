import { Box, Button, Heading, Text, Image } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { constants } from "../../constant";

interface IBlogItem {
  title: string;
  article: string;
  user_img: string;
  author_id: string;
}

const BlogListItem = ({ title, article, user_img, author_id }: IBlogItem) => {
  const [username, setUsername] = useState("");
  const getUsername = async () => {
    try {
      const res = await axios.get(`${constants.URL}/user/${author_id}`);
      setUsername(res.data.username);
      return true;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    getUsername();
  }, []);
  return (
    <Box
      p="1rem 0"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      w="16rem"
      h="16rem"
      boxShadow="1px 1px 5px 3px rgba(0,0,0,.2);"
    >
      <Heading fontSize="1.9rem" textAlign="center" w="50%">
        {title}
      </Heading>
      <Text textAlign="justify">{article}</Text>

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
