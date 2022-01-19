import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UnAuthRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.site);

  return !isAuthenticated ? children : <Navigate to="/" replace={true} />;
};

export default UnAuthRoute;
