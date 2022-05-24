import React from "react";
import { Heading, Box } from "@chakra-ui/react";
import LogoutBtn from "../components/LogoutBtn";

const Index = ({ user }: { user: any }) => {
  console.log(user);
  const username = user.displayName;
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
    >
      <Heading>Welcome {username}</Heading>
      <LogoutBtn />
    </Box>
  );
};

export default Index;
