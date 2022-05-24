import React from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Link,
} from "@chakra-ui/react";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  return (
    <Box
      w={{ base: "90%", lg: "40%" }}
      minH="60vh"
      bg="white"
      border="none"
      p="2rem"
      boxShadow="1px 1px 5px 3px rgba(0,0,0,.2);"
      borderRadius="10px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="column"
    >
      <Heading>Sign in with</Heading>
      <Box w="100%" display="flex" alignItems="center" justifyContent="center">
        <Box
          boxShadow="1px 1px 5px 3px rgba(0,0,0,.2);"
          cursor="pointer"
          display="flex"
          alignItems="center"
          justifyContent="center"
          w={{ base: "50%", md: "30%", lg: "35%" }}
          h="10"
          m="2"
          bg="white"
          borderRadius="5px"
          onClick={google}
        >
          login with{" "}
          <Box ml=".5rem" w="2rem" h="2rem">
            <AiFillGoogleCircle style={{ width: "2rem", height: "2rem" }} />
          </Box>
        </Box>
        <Box
          boxShadow="1px 1px 5px 3px rgba(0,0,0,.2);"
          cursor="pointer"
          display="flex"
          alignItems="center"
          justifyContent="center"
          w={{ base: "50%", md: "30%", lg: "35%" }}
          h="10"
          m="2"
          bg="black"
          color="white"
          borderRadius="5px"
          onClick={google}
        >
          login with{" "}
          <Box ml=".5rem" w="2rem" h="2rem">
            <AiFillGithub style={{ width: "2rem", height: "2rem" }} />
          </Box>
        </Box>
      </Box>
      <Text>or</Text>
      <Heading>Sing Up with</Heading>
      <FormControl
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input w="80%" mb="1rem" id="email" type="email" />
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input w="80%" mb="1rem" id="password" type="password" />
        <Button w="35%" colorScheme="gray">
          Sing Up
        </Button>
      </FormControl>
      <Link mt="4" color="blue" onClick={() => navigate("/login")}>
        Sign in
      </Link>
    </Box>
  );
};

export default RegisterForm;
