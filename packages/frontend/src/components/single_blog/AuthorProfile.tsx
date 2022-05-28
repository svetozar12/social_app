import React from "react";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";

interface IAuthorProfile {
  username: string;
  author_avatar: string;
}

const AuthorProfile = ({ username, author_avatar }: IAuthorProfile) => {
  return (
    <Box
      onClick={() => alert("info2")}
      mt="4.5rem"
      w="20rem"
      h="15rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      boxShadow="0px 0px 5px 1px rgba(0,0,0,.2);"
    >
      <Heading textAlign="center">{username}</Heading>
      <Image
        src={author_avatar}
        w="7rem"
        h="7rem"
        borderRadius="200px"
        alt={`user: ${username} avatar`}
      />
      <Button bg="transparent" mt="1rem" color="yellow.300">
        MORE FROM {username.toUpperCase()}
      </Button>
    </Box>
  );
};

export default AuthorProfile;
