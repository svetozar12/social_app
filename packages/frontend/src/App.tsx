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
  const Auth = () => {
    getUser();
    console.log(user);

    if (!user) getUserJwt();
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
