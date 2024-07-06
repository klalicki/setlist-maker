import { useParams } from "react-router-dom";

const SetlistEditor = () => {
  const { setlistID } = useParams();
  return <div>{setlistID}</div>;
};
export default SetlistEditor;
