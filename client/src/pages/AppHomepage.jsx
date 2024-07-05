import { UserContext } from "../context/UserContext";
import { useContext } from "react";
const AppHomepage = () => {
  const { userInfo } = useContext(UserContext);
  console.log(userInfo);
  return (
    <div className="container">
      <div className="row">
        <h2>Welcome, {userInfo.username}!</h2>
      </div>
      <div className="row">
        <div className="col col-md-6">
          <h2>Setlists</h2>
        </div>
      </div>
    </div>
  );
};

export default AppHomepage;
