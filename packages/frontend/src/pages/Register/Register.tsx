import RegisterForm from "../../components/Forms/RegisterForm";
import FormContainer from "../../components/Forms/FormContainer";
import { Navigate } from "react-router-dom";
const Register = ({ user }: { user: any }) => {
  if (user) return <Navigate to="/" replace={true} />;
  return (
    <FormContainer>
      <RegisterForm />
    </FormContainer>
  );
};

export default Register;
