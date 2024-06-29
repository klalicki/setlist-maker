import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
      {/* <div className="container">
        <div className="row gx-3 gy-3 pt-3">
          <div className="col col-12 col-md-4">
            <LoginForm />
          </div>
          <div className="col col-12 col-md-4">
            <RegisterForm />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
