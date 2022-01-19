import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.site);

  return isAuthenticated ? children : <Navigate to="/signin" replace={true} />;
};

export default AuthRoute;
