import { useSelector } from "react-redux";
import { selectisLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(selectisLoggedIn);

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <div>
          <Navigation />
        </div>
        {isLoggedIn ? (
          <div>
            <UserMenu />
          </div>
        ) : (
          <div>
            <AuthNav />
          </div>
        )}
      </nav>
    </header>
  );
}
