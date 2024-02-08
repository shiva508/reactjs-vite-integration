import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/video"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Video Page
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
