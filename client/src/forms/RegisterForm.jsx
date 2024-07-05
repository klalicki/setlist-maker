import { fetchData } from "../apiHelpers";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const RegisterForm = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { login } = useContext(UserContext);

  const clearMessages = () => {
    setErrorMsg("");
    setSuccessMsg("");
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    clearMessages();
    const fd = new FormData(e.target);
    const formData = Object.fromEntries([...fd.entries()]);
    console.log(formData);
    try {
      const result = await fetchData(
        "user/",
        {
          username: formData.username,
          password: formData.password,
          email: formData.email,
        },
        "post"
      );
      setSuccessMsg("Successfully registered!");
      login(formData.username, formData.password);
      console.log(result);
    } catch (error) {
      setErrorMsg(error.message);
      console.log(error);
    }
  };

  return (
    <form className="" onSubmit={submitHandler}>
      <h2>Register</h2>
      <div className="mb-3">
        <label htmlFor="register-email" className="form-label">
          email address:
        </label>
        <input
          required
          type="email"
          name="email"
          className="form-control"
          id="register-email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="register-username" className="form-label">
          username:
        </label>
        <input
          required
          type="text"
          name="username"
          className="form-control"
          id="register-username"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="register-password" className="form-label">
          password:
        </label>
        <input
          required
          type="password"
          name="password"
          className="form-control"
          id="register-password"
        />
      </div>
      {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
      {successMsg && <div className="alert alert-success">{successMsg}</div>}
      <button type="submit" class="btn btn-primary">
        Register
      </button>
    </form>
  );
};
export default RegisterForm;
