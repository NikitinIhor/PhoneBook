import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "../AppBar/AppBar.module.css";

const isActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  return (
    <div>
      <NavLink className={isActive} to="/">
        Home
      </NavLink>
    </div>
  );
}
