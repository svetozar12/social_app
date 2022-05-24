import React from "react";
import { Button } from "@chakra-ui/react";
const LogoutBtn = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <Button type="button" onClick={google}>
      LOGOUT
    </Button>
  );
};

export default LogoutBtn;
