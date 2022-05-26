import React from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
} from "@chakra-ui/react";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";

import { Route, Routes, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const FormContainer = () => {
  const navigate = useNavigate();
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
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
          onClick={github}
        >
          login with{" "}
          <Box ml=".5rem" w="2rem" h="2rem">
            <AiFillGithub style={{ width: "2rem", height: "2rem" }} />
          </Box>
        </Box>
      </Box>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Box>
  );
};

export default FormContainer;
