import { FormControl, FormLabel, Input, Button, Link } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <FormControl
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input w="80%" mb="1rem" id="email" type="email" />
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input w="80%" mb="1rem" id="password" type="password" />
        <Button w="35%" colorScheme="gray">
          Sing Up
        </Button>
      </FormControl>
      <Link mt="4" color="blue" onClick={() => navigate("/login")}>
        Sign in
      </Link>
    </>
  );
};

export default RegisterForm;
