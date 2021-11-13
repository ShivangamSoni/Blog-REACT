import { Navigate } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { DataContext } from "../../DataContext";

const UnAuthRoute = ({ children }) => {
  const { isAuthenticated } = useContext(DataContext);

  return !isAuthenticated ? children : <Navigate to="/" replace={true} />;
};

export default UnAuthRoute;
