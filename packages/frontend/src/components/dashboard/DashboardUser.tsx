import { Box, Heading, Text } from "@chakra-ui/react";
import { useCookies } from "react-cookie";

const DashboardUser = () => {
  const [cookies, setCookie] = useCookies(["username"]);

  return (
    <Box w="100%">
      <Text mb=".5rem">DashBoard</Text>
      <Heading mb=".5rem">Welcome {cookies.username}</Heading>
      <Text mb=".5rem">Your blog posts:</Text>
    </Box>
  );
};

export default DashboardUser;
