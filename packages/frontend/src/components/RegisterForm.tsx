import React from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";

const RegisterForm = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  return (
    <Box
      w="80%"
      minH="40vh"
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
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box
          boxShadow="1px 1px 5px 3px rgba(0,0,0,.2);"
          cursor="pointer"
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="200px"
          h="10"
          m="2"
          bg="white"
          borderRadius="5px"
          onClick={google}
        >
          login with google
        </Box>
        <Box
          boxShadow="1px 1px 5px 3px rgba(0,0,0,.2);"
          cursor="pointer"
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="200px"
          h="10"
          m="2"
          bg="black"
          color="white"
          borderRadius="5px"
          onClick={google}
        >
          login with github
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
        <Input w="90%" mb="1rem" id="email" type="email" />
        <Input w="90%" mb="1rem" id="password" type="password" />
        <Button w="35%" colorScheme="gray">
          Sing Up
        </Button>
      </FormControl>
    </Box>
  );
};

export default RegisterForm;
