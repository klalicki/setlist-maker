import { createContext, useState } from "react";
import { fetchData } from "../apiHelpers";
const UserContext = createContext(null);
// todo - set up login/logout functions, user object, isLoggedIn on this context provider

const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const isAuthenticated = userInfo ? true : false;

  const login = async (username, password) => {
    const user = await fetchData("user/login", { username, password }, "post");
    console.log("ran login function with username" + username);
    console.log(user);
  };

  const logout = () => {};

  return (
    <UserContext.Provider value={{ userInfo, isAuthenticated, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
