import React from "react";
import LoginForm from "../../components/Forms/LoginForm";
import FormContainer from "../../components/Forms/FormContainer";
import { Navigate } from "react-router-dom";

const Login = ({ user }: { user: any }) => {
  if (user) return <Navigate to="/" replace={true} />;

  return (
    <FormContainer>
      <LoginForm />
    </FormContainer>
  );
};

export default Login;
