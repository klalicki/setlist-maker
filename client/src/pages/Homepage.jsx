import LoginForm from "../forms/LoginForm";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-md-8">
            <h1>Welcome to Setlist Maker!</h1>
            <p>
              Setlist Maker is an app to help artists manage their setlists for
              live performances.
            </p>
          </div>
          <div className="col col-md-4 p-3 gap-2 border border-primary border-2 d-flex flex-column">
            <LoginForm />
            <p className="mb-0">
              Not a user yet? Sign up <Link to="/register">here.</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;
