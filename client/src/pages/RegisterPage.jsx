import RegisterForm from "../forms/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-8">
          <h1>Register</h1>
        </div>
        <div className="col col-md-4">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
