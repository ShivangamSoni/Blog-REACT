import { Navigate } from "react-router-dom";
import withAuth from "../../Authentication/withAuth";

const AuthRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/signin" replace={true} />;
};

export default withAuth(AuthRoute);
