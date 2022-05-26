import React, { useState } from "react";
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

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { constants } from "../constant";
import { useCookies } from "react-cookie";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["token", "user_id", "username"]);

  const handleSubmit = async (e: any) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      try {
        const res = await axios.post(`${constants.URL}/user/login`, {
          username,
          password,
        });
        const token = res.data.token;
        const user_id = res.data._id;
        const username_ = res.data.username;

        setCookie("token", token, { path: "/" });
        setCookie("user_id", user_id, { path: "/" });
        setCookie("username", username_, { path: "/" });
        window.open("http://localhost:3000/", "_self");

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  };
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
      {/* here */}
      <>
        <FormControl
          onKeyDown={handleSubmit}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <FormLabel htmlFor="username">username</FormLabel>
          <Input
            w="80%"
            mb="1rem"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="username"
          />
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            w="80%"
            mb="1rem"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Button w="35%" colorScheme="gray">
            Log in
          </Button>
        </FormControl>
        <Link mt="4" color="blue" onClick={() => navigate("/register")}>
          Sign Up
        </Link>
      </>
      {/* here */}
    </Box>
  );
};

export default LoginForm;
