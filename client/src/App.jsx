import NavBar from "./components/NavBar";
import LoginForm from "./forms/LoginForm";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import AuthSwitcher from "./components/AuthSwitcher";
import Homepage from "./pages/Homepage";
import AppHomepage from "./pages/AppHomepage";
import { UserContextProvider } from "./context/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <UserContextProvider>
      <div className="app">
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
            <Route path="/register" element={<RegisterPage />} />{" "}
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContextProvider>
  );
}

export default App;
