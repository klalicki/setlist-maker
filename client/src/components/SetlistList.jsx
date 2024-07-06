import { UserContext } from "../context/UserContext";
import { fetchData } from "../apiHelpers";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SetlistList = () => {
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);
  const userID = userInfo._id;
  const apiURL = `user/${userID}/setlists`;
  const [listItems, setListItems] = useState([]);
  const fetchSetlistItems = async () => {
    try {
      const listData = await fetchData(apiURL, {}, "get");
      setListItems(listData);
      console.log(listData);
    } catch (error) {
      console.log("fetch error: " + error);
    }
  };
  useEffect(() => {
    fetchSetlistItems();
  }, [apiURL]);

  const createSetlist = async () => {
    const newSetlist = await fetchData("setlist", { author: userID }, "post");
    navigate(`/setlist/${newSetlist._id}`);
  };

  return (
    <div>
      {listItems.map((item) => {
        return (
          <div>
            <Link to={`/setlist/${item._id}`}>{item.title || "Untitled"}</Link>
          </div>
        );
      })}
      <button className="btn btn-primary" onClick={createSetlist}>
        Create Setlist
      </button>
    </div>
  );
};
export default SetlistList;
