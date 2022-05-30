import React from "react";
import { Box, Button, Heading, Image } from "@chakra-ui/react";
import redirect from "../../utils/redirect";
import axios from "axios";
import { constants } from "../../constant";
import { useCookies } from "react-cookie";

interface IAuthorProfile {
  username: string;
  author_avatar: string;
}

const AuthorProfile = ({ username, author_avatar }: IAuthorProfile) => {
  const [cookies, setCookie] = useCookies(["token", "user_id", "username"]);

  const getUserId = async () => {
    try {
      const res = await axios.get(`${constants.URL}/user/${cookies.user_id}`);
      return res.data;
    } catch (error) {
      return false;
    }
  };
  const handleClick = async () => {
    const user = await getUserId();
    redirect(`/blogs/${user._id}`);
  };
  return (
    <Box
      onClick={() => handleClick()}
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
