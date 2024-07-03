const RegisterPage = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const formData = Object.fromEntries([...fd.entries()]);
    console.log(formData);
  };

  return (
    <form
      className="p-3 border border-primary border-2"
      onSubmit={submitHandler}
    >
      <h2>Register</h2>
      <div className="mb-3">
        <label htmlFor="register-email" className="form-label">
          email address:
        </label>
        <input
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
          type="password"
          name="password"
          className="form-control"
          id="register-password"
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Register
      </button>
    </form>
  );
};
export default RegisterPage;
