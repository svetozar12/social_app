// pages
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Index";
import PublicBlogs from "./pages/Blogs/PublicBlogs";
import SingleBlog from "./pages/Index/SingleBlog";
import NotFound from "./pages/404/NotFound";
import EditBlog from "./pages/Edit/EditBlog";
import CreateBlog from "./pages/Create/CreateBlog";
// components
import Navbar from "./components/Navbar/Navbar";
// libs
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { constants } from "./constant";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

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
            <Route path="/login" element={<Login user={user} />} />
            <Route path="/register" element={<Register user={user} />} />
            <Route
              path="/"
              element={
                <Dashboard
                  isActive={isActive}
                  setIsActive={setIsActive}
                  user={user}
                />
              }
            />
            <Route
              path="/:id"
              element={
                <SingleBlog
                  isActive={isActive}
                  setIsActive={setIsActive}
                  user={user}
                />
              }
            />
            <Route
              path="/blogs"
              element={
                <PublicBlogs
                  isActive={isActive}
                  setIsActive={setIsActive}
                  user={user}
                />
              }
            />
            <Route
              path="/edit"
              element={
                <EditBlog
                  user={user}
                  isActive={isActive}
                  setIsActive={setIsActive}
                />
              }
            />
            <Route
              path="/create"
              element={
                <CreateBlog
                  user={user}
                  isActive={isActive}
                  setIsActive={setIsActive}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </Box>
  );
}

export default App;
