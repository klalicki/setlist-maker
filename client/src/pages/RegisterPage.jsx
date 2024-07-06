import RegisterForm from "../forms/RegisterForm";
import Card from "../components/Card";

const RegisterPage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col col-12 col-md-4 text-white bg-dark bg-opacity-25 p-3 rounded-start my-md-4">
          <h1>Register</h1>
        </div>
        <Card className="col col-12 col-md-4">
          <RegisterForm />
        </Card>
      </div>
    </div>
  );
};
export default RegisterPage;
