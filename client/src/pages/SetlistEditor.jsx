import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect, useState } from "react";
import { fetchData } from "../apiHelpers";
const SetlistEditor = () => {
  const { setlistID } = useParams();
  const apiURL = `setlist/${setlistID}`;
  const [listItems, setListItems] = useState([]);
  const fetchSetlistItems = async () => {
    try {
      const listData = await fetchData(apiURL, {}, "get");
      setListItems(listData);
      console.log(listData);
    } catch (error) {
      console.log("fetch error: " + JSON.stringify(error));
    }
  };
  useEffect(() => {
    fetchSetlistItems();
  }, [apiURL]);

  return <div>{setlistID}</div>;
};
export default SetlistEditor;
