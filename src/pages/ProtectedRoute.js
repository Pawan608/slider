import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children, auth }) => {
  console.log(auth);
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return children;
};
export default ProtectedRoute;
