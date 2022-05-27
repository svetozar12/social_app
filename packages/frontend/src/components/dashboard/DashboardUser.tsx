import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface IUserDashboard {
  username: string;
}

const DashboardUser = ({ username }: IUserDashboard) => {
  return (
    <Box w="100%">
      <Text mb=".5rem">DashBoard</Text>
      <Heading mb=".5rem">Welcome {username}</Heading>
      <Text mb=".5rem">Your blog posts:</Text>
    </Box>
  );
};

export default DashboardUser;
