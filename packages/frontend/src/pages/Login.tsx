import React from "react";
import LoginForm from "../components/LoginForm";
import FormContainer from "../components/FormContainer";
const Login = () => {
  return <FormContainer children={<LoginForm />} />;
};

export default Login;
