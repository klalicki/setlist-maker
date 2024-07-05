import { UserContext } from "../context/UserContext";
import { useContext } from "react";
// this is a higher order component that can switch between displaying two different components depending on whether the user is logged in or not
const AuthSwitcher = ({ loggedIn, loggedOut }) => {
  const { isAuthenticated } = useContext(UserContext);
  return isAuthenticated ? loggedIn : loggedOut;
};
export default AuthSwitcher;
