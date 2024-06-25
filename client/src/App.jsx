import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="container">
        <div className="row">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default App;
