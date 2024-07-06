import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import Card from "../components/Card";
const AppHomepage = () => {
  const { userInfo } = useContext(UserContext);
  console.log(userInfo);
  return (
    <div className="container">
      <div className="row text-white">
        <h2>Welcome, {userInfo.username}!</h2>
      </div>
      <div className="row g-3">
        <div className="col col-12 col-lg-6">
          <Card>
            <h2>Setlists</h2>
          </Card>
        </div>
        <div className="col col-12 col-lg-6">
          <Card>
            <h2>Albums</h2>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AppHomepage;
