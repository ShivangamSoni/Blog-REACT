import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../DataContext";

const AuthRoute = ({ children }) => {
  const { isAuthenticated } = useContext(DataContext);

  return isAuthenticated ? children : <Navigate to="/signin" replace={true} />;
};

export default AuthRoute;
