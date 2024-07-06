import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect, useState } from "react";
import { fetchData } from "../apiHelpers";
import Card from "../components/Card";
const SetlistEditor = () => {
  const { setlistID } = useParams();
  const apiURL = `setlist/${setlistID}`;
  const [setlistData, setSetlistData] = useState([]);
  const fetchSetlistItems = async () => {
    try {
      const listData = await fetchData(apiURL, {}, "get");
      const { title, date, published, notes } = listData;

      setSetlistData({ title, date, published, notes });
      console.log(listData);
    } catch (error) {
      console.log("fetch error: " + JSON.stringify(error));
    }
  };
  useEffect(() => {
    fetchSetlistItems();
  });

  return (
    <Card>
      <code>{JSON.stringify(setlistData)}</code>
      <form action="">
        <h2>Edit Setlist Info</h2>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
        <button type="submit">Update</button>
      </form>
    </Card>
  );
};
export default SetlistEditor;
