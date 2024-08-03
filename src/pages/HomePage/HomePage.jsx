import { IconContext } from "react-icons";
import { FiUserPlus } from "react-icons/fi";
import { IoBook } from "react-icons/io5";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.content}>
      <IconContext.Provider value={{ size: 100, color: "white" }}>
        <IoBook />
      </IconContext.Provider>
      <h1 className={css.title}>Task manager wellcome page</h1>;
      <p className={css.text}>
        This is the page where you can create and delete your cantacts in your
        own ---phone book---
      </p>
      <IconContext.Provider value={{ size: 40, color: "white" }}>
        <FiUserPlus className={css.user} />
      </IconContext.Provider>
    </div>
  );
}
