import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "../AppBar/AppBar.module.css";

const isActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function AuthNav() {
  return (
    <ul className={css.items}>
      <li>
        <NavLink className={isActive} to="/register">
          Register
        </NavLink>
      </li>
      /
      <li>
        <NavLink className={isActive} to="/login">
          Login
        </NavLink>
      </li>
    </ul>
  );
}
