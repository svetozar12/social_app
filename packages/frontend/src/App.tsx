// components
import OverlayHandler from "./components/OverlayHandler";
import Loading from "./components/Loading";
// libs
import axios from "axios";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { constants } from "./constant";
import { Box } from "@chakra-ui/react";
import PageRoutes from "./components/PageRoutes";

function App() {
  const [isLoading, setIsLoading] = useState(true);
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
      const resUser = res.data.user;
      setUser(res.data.user);
      //  setCookie("token", token, { path: "/" });
      setCookie("user_id", resUser._id, { path: "/" });
      setCookie("username", resUser.username, { path: "/" });
      setIsLoading(false);

      return true;
    } catch (error) {
      setIsLoading(false);
      console.log(error, "google");

      return false;
    }
  };

  const getUserJwt = async () => {
    try {
      //localhost:5000/protected

      await axios.get(constants.URL + "/protected", {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          Authorization: cookies.token,
        },
      });

      setUser(cookies.username);
      setIsLoading(false);
      return true;
    } catch (error) {
      setIsLoading(false);
      return false;
    }
  };
  const Auth = () => {
    if (!user) {
      getUser();
      getUserJwt();
    }
  };
  useEffect(() => {
    Auth();
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
          <OverlayHandler user={user} />
          <PageRoutes user={user} />
        </>
      )}
    </Box>
  );
}

export default App;
