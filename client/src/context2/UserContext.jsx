import { createContext, useState } from "react";
import { fetchData } from "../apiHelpers";
const UserContext = createContext(null);
// todo - set up login/logout functions, user object, isLoggedIn on this context provider

const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (username, password) => {
    try {
      const user = await fetchData(
        "user/login",
        { username, password },
        "post"
      );
      setUserInfo(user);
      console.log("ran login function with username" + username);
      console.log(user);
      setIsAuthenticated(true);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserInfo({});
  };

  return (
    <UserContext.Provider value={{ userInfo, isAuthenticated, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
