import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="container">
        <div className="row gx-3 gy-3 pt-3">
          <div className="col col-12 col-md-4">
            <LoginForm />
          </div>
          <div className="col col-12 col-md-4">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
