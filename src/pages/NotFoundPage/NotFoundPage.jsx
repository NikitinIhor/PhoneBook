import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>
        Sorry, page not found! Please go to
        <span className={css.home}>
          <Link to="/">Home page</Link>
        </span>
      </p>
    </div>
  );
}
