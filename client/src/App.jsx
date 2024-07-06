// import { UserContextProvider } from "./context/UserContext";

import NavBar from "./components/NavBar";
import LoginForm from "./forms/LoginForm";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import SetlistEditor from "./pages/SetlistEditor";
import AuthSwitcher from "./components/AuthSwitcher";
import Homepage from "./pages/Homepage";
import AppHomepage from "./pages/AppHomepage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
function App() {
  return (
    <UserContextProvider>
      <div className="app bg-primary bg-gradient">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <AuthSwitcher
                  loggedIn={<AppHomepage />}
                  loggedOut={<Homepage />}
                />
              }
            />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/setlist/:setlistID" element={<SetlistEditor />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </UserContextProvider>
  );
}

export default App;
