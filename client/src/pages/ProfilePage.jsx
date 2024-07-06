import ChangePasswordForm from "../forms/ChangePasswordForm";
const ProfilePage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center py-3">
        <div className="col col-12 col-sm-6 col-md-4">
          <h1>Profile</h1>
          <p>
            Eventually there will be other things here, but for now you can
            update your password on this page.
          </p>
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
