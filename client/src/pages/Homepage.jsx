import LoginForm from "../forms/LoginForm";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <>
      <div className="container">
        <div className="row py-3">
          <div className="col-12 col-md-6 col-lg-8 d-flex flex-column justify-content-center">
            <h1>Welcome to Setlist Maker!</h1>
            <p>
              Setlist Maker is an app to help artists manage their setlists for
              live performances. The app will eventually have the following
              features:
            </p>
            <ul>
              <li>
                Import artist discography and track information from Spotify
                and/or Bandcamp
              </li>
              <li>
                Add performance notes to each song, such as instrument or tuning
                info
              </li>
              <li>
                Build setlists from discography, keeping track of total setlist
                length
              </li>
              <li>
                Print setlists or share them as a URL to a mobile-friendly
                layout
              </li>
              <li>
                Keep track of performances of each setlist, and include notes
                about how the performance went
              </li>
              <li>...and much more!</li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-4 p-3 gap-2 border border-primary border-2 d-flex flex-column">
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
