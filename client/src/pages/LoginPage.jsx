import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";

const LoginPage = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { login } = useContext(UserContext);

  const clearMessages = () => {
    setErrorMsg("");
    setSuccessMsg("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    clearMessages();
    const fd = new FormData(e.target);
    const formData = Object.fromEntries([...fd.entries()]);
    //  try logging in
  };

  return (
    <form
      className="p-3  border border-primary border-2"
      onSubmit={handleSubmit}
    >
      <h2>Login</h2>
      <div className="mb-3">
        <label htmlFor="login-username" className="form-label">
          username:
        </label>
        <input name="username" className="form-control" id="login-username" />
      </div>
      <div className="mb-3">
        <label htmlFor="login-password" className="form-label">
          password:
        </label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="login-password"
        />
      </div>
      {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
      {successMsg && <div className="alert alert-success">{successMsg}</div>}
      <button type="submit" class="btn btn-primary">
        Login
      </button>
    </form>
  );
};
export default LoginPage;
