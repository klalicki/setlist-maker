import { createContext } from "react";

const UserContext = createContext(null);
// todo - set up login/logout functions, user object, isLoggedIn on this context provider

const UserContextProvider = ({ children }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
