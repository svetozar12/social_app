import { useLocation, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
// !!! UNUSED BUT WILL BE ADDED IN THE FIRST REFACTOR :)
interface IAuthsProvider {
  children: JSX.Element | JSX.Element[];
}

const AuthProvider = ({ children }: IAuthsProvider) => {
  const [cookies, setCookie] = useCookies(["token", "user_id", "username"]);
  // if cookie token doesnt exist redirect to page /
  let auth = cookies.token;
  let location = useLocation();
  if (!auth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  // gets the children we pass which is always should be the PROTECTED page
  return children;
};

const UnprotectedAuthProvider = ({ children }: IAuthsProvider) => {
  const [cookies, setCookie] = useCookies(["token", "user_id", "username"]);
  // if cookie token doesnt exist redirect to page /
  let auth = cookies.token;
  let location = useLocation();
  if (auth) {
    return <Navigate to={`/`} state={{ from: location }} replace />;
  }
  // gets the children we pass which is always should be the UNPROTECTED page
  return children;
};

export { UnprotectedAuthProvider };
export default AuthProvider;
