import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../App";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: Props) => {
  const loginContext = useContext(LoginContext);

  if (!loginContext) {
    throw new Error(
      "ProtectedRoute must be used inside Login Context Provider"
    );
  }

  const [loggedIn] = loginContext;

  if (!loggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;