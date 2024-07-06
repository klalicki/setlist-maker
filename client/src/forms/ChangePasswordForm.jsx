import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { fetchData } from "../apiHelpers";

const ChangePasswordForm = () => {
  const { userInfo } = useContext(UserContext);
  const userID = userInfo._id;
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const clearMessages = () => {
    setErrorMsg("");
    setSuccessMsg("");
  };

  useEffect(() => {
    clearMessages();
    setErrorMsg(
      newPassword === newPassword2
        ? ""
        : "Error: new password and confirmation must match!"
    );
  }, [newPassword, newPassword2]);

  const submitPasswordChange = async (e) => {
    e.preventDefault();
    clearMessages();

    // make sure the two passwords match!
    if (newPassword !== newPassword2) {
      setErrorMsg("Error: new password and confirmation must match!");
    } else {
      // submit password change to API
      try {
        const response = await fetchData(
          `user/${userID}`,
          { password: newPassword, oldPassword: oldPassword },
          "put"
        );
        setSuccessMsg("Successfully updated password!");
      } catch (error) {
        console.log(error);
        setErrorMsg(error.message);
      }
    }
  };

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
          onChange={(e) => {
            setOldPassword(e.target.value);
          }}
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
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
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
          onChange={(e) => {
            setNewPassword2(e.target.value);
          }}
        />
      </div>
      {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
      {successMsg && <div className="alert alert-success">{successMsg}</div>}
      <button type="submit" disabled={errorMsg} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default ChangePasswordForm;
