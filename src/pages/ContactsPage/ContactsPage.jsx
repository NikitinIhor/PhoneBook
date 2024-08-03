import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <div className={css.search}>
        <SearchBox />
      </div>
      <div className={css.container}>
        <ContactForm />
        <ContactList />
      </div>
    </>
  );
}
