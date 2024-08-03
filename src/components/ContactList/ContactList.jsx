import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import Contact from "../../components/Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contactsList = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error)
    return (
      <p className={css.error}>
        Something went wrong...Please reload the page :(
      </p>
    );
  if (contactsList.length === 0)
    return <p className={css.empty}>--No contacts--</p>;

  return (
    <ul className={css.list}>
      {contactsList.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
