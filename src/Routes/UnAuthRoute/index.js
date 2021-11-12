import { Navigate } from "react-router-dom";
import withAuth from "../../Authentication/withAuth";

const UnAuthRoute = ({ isAuthenticated, children }) => {
  return !isAuthenticated ? children : <Navigate to="/" replace={true} />;
};

export default withAuth(UnAuthRoute);
