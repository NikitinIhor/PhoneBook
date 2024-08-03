import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import clsx from "clsx";
import css from "../AppBar/AppBar.module.css";

const isActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function UserMenu() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.navlink}>
      <div className={css.contacts}>
        <NavLink className={isActive} to="/contacts">
          Contacts
        </NavLink>
      </div>
      <p className={css.text}>
        Wellcome: <span>{user.name}</span>
      </p>
      <button onClick={handleLogout} className={css.btn} type="button">
        Logout
      </button>
    </div>
  );
}
