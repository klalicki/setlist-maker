const LoginForm = () => {
  return (
    <form className="p-3 col col-sm-6 col-md-4 border border-primary border-2">
      <h2>Login</h2>
      <div className="mb-3">
        <label htmlFor="login-username" className="form-label">
          username:
        </label>
        <input name="username" className="form-control" id="login-username" />
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
        Login
      </button>
    </form>
  );
};
export default LoginForm;
