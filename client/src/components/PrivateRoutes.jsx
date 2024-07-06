import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
const PrivateRoutes = () => {
  const { isAuthenticated } = useContext(UserContext);
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoutes;
