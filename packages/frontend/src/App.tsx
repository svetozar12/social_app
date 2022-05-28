// pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Index from "./pages/Index";
// components
import Navbar from "./components/Navbar/Navbar";
// libs
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { constants } from "./constant";
import { Box } from "@chakra-ui/react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "./components/Loading";
import PublicBlogs from "./pages/PublicBlogs";
import SingleBlog from "./pages/[blog_id]";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [cookies, setCookie] = useCookies(["token", "user_id", "username"]);
  const [isActive, setIsActive] = useState(false);

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
      setIsLoading(false);

      return true;
    } catch (error) {
      setIsLoading(false);

      return false;
    }
  };

  const getUserJwt = async () => {
    try {
      await axios.get(constants.URL + "/protected", {
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
      setIsLoading(false);
      return true;
    } catch (error) {
      setIsLoading(false);
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
      bgGradient="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {user && <Navbar setIsActive={setIsActive} />}
          <Routes>
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/register"
              element={user ? <Navigate to="/" /> : <Register />}
            />
            <Route
              path="/"
              element={
                user ? (
                  <Index
                    isActive={isActive}
                    setIsActive={setIsActive}
                    user={user}
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            <Route
              path="/blogs"
              element={
                user ? (
                  <PublicBlogs
                    isActive={isActive}
                    setIsActive={setIsActive}
                    user={user}
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/:id"
              element={
                user ? (
                  <SingleBlog
                    isActive={isActive}
                    setIsActive={setIsActive}
                    user={user}
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </>
      )}
    </Box>
  );
}

export default App;
