import { useEffect, useState } from "react";

const ChangePasswordForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const doPasswordsMatch = newPassword === newPassword2;
    setErrorMsg(
      newPassword === newPassword2
        ? ""
        : "Error: new password and confirmation must match!"
    );
  }, [newPassword, newPassword2]);

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };
  const handlePassword2Change = (e) => {
    setNewPassword2(e.target.value);
  };

  const submitPasswordChange = (e) => {};

  return (
    <form onSubmit={submitPasswordChange}>
      <div className="mb-3">
        <label htmlFor="current-password" className="form-label">
          current password:
        </label>
        <input
          type="password"
          required
          name="password"
          className="form-control"
          id="current-password"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="current-password" className="form-label">
          new password:
        </label>
        <input
          type="password"
          required
          name="new-password-2"
          className="form-control"
          id="new-password"
          onChange={handlePasswordChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="current-password" className="form-label">
          confirm new password:
        </label>
        <input
          type="password"
          required
          name="new-password-2"
          className="form-control"
          id="new-password-2"
          onChange={handlePassword2Change}
        />
      </div>
      {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
      <button type="submit" disabled={errorMsg}>
        Submit
      </button>
    </form>
  );
};
export default ChangePasswordForm;
