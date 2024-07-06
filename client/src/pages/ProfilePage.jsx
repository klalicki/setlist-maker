import ChangePasswordForm from "../forms/ChangePasswordForm";
import { UserContext } from "../context2/UserContext";
import { useContext } from "react";
import Card from "../components/Card";
const ProfilePage = () => {
  const { userInfo } = useContext(UserContext);
  return (
    <div className="container">
      <div className="row justify-content-center py-3">
        <div className="col col-12 col-sm-6 col-md-4">
          <Card>
            <h1>Profile</h1>
            <p className="lead">Hi there, {userInfo.username}! </p>
            <p>
              Eventually there will be other things here, but for now you can
              update your password on this page.
            </p>
            <ChangePasswordForm />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
