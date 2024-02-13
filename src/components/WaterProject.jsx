import { Link } from "react-router-dom";
import classes from "./WaterProject.module.css";
const DAMS = [
  { id: "w1", name: "Nagarjuna Sagar" },
  { id: "w2", name: "Kaleswaram Sagar" },
  { id: "w3", name: "Srisailam" },
];
const WaterProject = () => {
  return (
    <>
      <h1>Water Projects</h1>
      <ul>
        {DAMS.map((dam) => (
          <li className={classes.list} key={dam.id}>
            <Link to={`/waterProject/${dam.id}`}> {dam.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default WaterProject;
