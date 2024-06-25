import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="container">
        <div className="row">
          <LoginForm />
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default App;
