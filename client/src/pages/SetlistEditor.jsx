import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../apiHelpers";
import { useNavigate } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";
import Card from "../components/Card";
const SetlistEditor = () => {
  const navigate = useNavigate();
  const { setlistID } = useParams();
  const apiURL = `setlist/${setlistID}`;
  const [setlistData, setSetlistData] = useState({});
  const [isUpdated, setIsUpdated] = useState(false);
  const fetchSetlistItems = async () => {
    try {
      const listData = await fetchData(apiURL, {}, "get");
      const { title, published, notes } = listData;

      setSetlistData({ title, published, notes });
      console.log(listData);
    } catch (error) {
      console.log("fetch error: " + JSON.stringify(error));
    }
  };
  useEffect(() => {
    fetchSetlistItems();
  }, []);

  const handleFormChanges = (e) => {
    setIsUpdated(true);
    console.log(e.target.value);
    console.log(e.target.id);
    const keyToChange = e.target.id;
    const newValue =
      e.target.id === "published" ? !setlistData.published : e.target.value;
    setSetlistData({ ...setlistData, [keyToChange]: newValue });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    console.log(e);
    try {
      const updatedSetlist = await fetchData(apiURL, setlistData, "put");
      setIsUpdated(false);
      fetchSetlistItems();
    } catch (error) {}
  };

  const handleDelete = async () => {
    try {
      await fetchData(apiURL, {}, "delete");
      navigate("/");
    } catch {}
  };
  return (
    <div className="container">
      <Card>
        <div className="row">
          <div className="col col-12 col-md-6">
            <form onSubmit={handleSubmitForm}>
              <h1>{setlistData.title}</h1>

              <div className="mb-2">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="title"
                  name="title"
                  onChange={handleFormChanges}
                  value={setlistData.title}
                />
              </div>
              <div className="mb-3">
                {" "}
                <label htmlFor="notes" className="form-label">
                  Notes
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="notes"
                  id="notes"
                  value={setlistData.notes}
                  onChange={handleFormChanges}
                />{" "}
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={handleFormChanges}
                  checked={setlistData.published}
                  name="published"
                  id="published"
                />
                <label htmlFor="published" className="form-check-label">
                  Published
                </label>
              </div>
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={!isUpdated}
                >
                  Save
                </button>{" "}
                <DeleteButton onClick={handleDelete} />
              </div>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default SetlistEditor;
