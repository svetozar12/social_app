import React from "react";
import LoginBtn from "./components/LoginForm";
import { useState, useEffect } from "react";
import { constants } from "./constant";
import axios from "axios";
import LoginForm from "./components/LoginForm";
import LogoutBtn from "./components/LogoutBtn";
import { Box } from "@chakra-ui/react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import FormContainer from "./components/FormContainer";

import Index from "./pages/Index";
import { useCookies } from "react-cookie";

function App() {
  const [user, setUser] = useState<any>(null);
  const [cookies, setCookie] = useCookies(["token", "user_id", "username"]);

  const getUser = async () => {
    try {
      const res = await axios.get(constants.URL + "/auth/login/success", {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });
      if (!res) console.log("bad");

      //localhost:5000/protected
      setUser(res.data.user);

      return true;
    } catch (error) {
      return false;
    }
  };

  const getUserJwt = async () => {
    try {
      const res = await axios.get(constants.URL + "/protected", {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          Authorization: cookies.token,
        },
      });
      const userObj = {
        displayName: cookies.username,
      };
      setUser(userObj);

      return true;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    getUser();
    getUserJwt();
  }, []);

  return (
    <Box
      w="100%"
      h="100vh"
      bgGradient="linear-gradient(45deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/"
          element={user ? <Index user={user} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Box>
  );
}

export default App;
