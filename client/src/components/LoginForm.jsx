const LoginForm = () => {
  return (
    <form className="p-3 m-3 max-width-400 border border-primary border-2">
      <h2>Login</h2>
      <div className="mb-3">
        <label htmlFor="login-email" className="form-label">
          email address:
        </label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="login-email"
        />
      </div>{" "}
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
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default LoginForm;
