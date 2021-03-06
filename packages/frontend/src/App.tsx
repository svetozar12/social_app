// components
import OverlayHandler from "./components/OverlayHandler";
import Loading from "./components/Loading";
// libs
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { constants } from "./constant";
import { Box } from "@chakra-ui/react";
import PageRoutes from "./components/PageRoutes";
import api from "./utils/axiosInstance";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [cookies, setCookie] = useCookies(["token", "user_id", "username"]);

  const getUser = async () => {
    try {
      const res = await api.get("/auth/login/success");
      const resUser = res.data.user;
      console.log("res", res.data.user);

      setUser(res.data.user);
      setCookie("user_id", resUser._id, { path: "/" });
      setCookie("username", resUser.username, { path: "/" });

      return true;
    } catch (error) {
      console.log(error, "google");
      return false;
    }
  };

  const getUserJwt = async () => {
    try {
      //localhost:5000/protected

      await api.get("/protected", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          Authorization: cookies.token,
        },
      });

      setUser(cookies.username);
      return true;
    } catch (error) {
      return false;
    }
  };
  const Auth = () => {
    if (!user) {
      getUser();
      // getUserJwt();
    }
    setIsLoading(false);
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
          {user && (
            <>
              {" "}
              <OverlayHandler user={user} />
              <PageRoutes user={user} />
            </>
          )}
        </>
      )}
    </Box>
  );
}

export default App;
