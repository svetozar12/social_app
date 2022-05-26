import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
  Text,
  Heading,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { constants } from "../constant";
import { useCookies } from "react-cookie";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["token", "user_id", "username"]);

  const handleSubmit = async (e: any) => {
    if (e.keyCode === 13) {
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
        window.location.href = "http://localhost:3000/";

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  };
  const navigate = useNavigate();

  return (
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
  );
};

export default LoginForm;
