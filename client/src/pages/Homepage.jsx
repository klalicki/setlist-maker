import RegisterPage from "./RegisterPage";
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
          <div className="col col-md-4">
            <RegisterPage />
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;
