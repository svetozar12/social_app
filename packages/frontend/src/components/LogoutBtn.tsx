import React from "react";
import { Button } from "@chakra-ui/react";
import { useCookies } from "react-cookie";
const LogoutBtn = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "token",
    "user_id",
    "username",
  ]);
  const google = () => {
    removeCookie("token");
    removeCookie("user_id");
    removeCookie("username");
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <Button type="button" onClick={google}>
      LOGOUT
    </Button>
  );
};

export default LogoutBtn;
