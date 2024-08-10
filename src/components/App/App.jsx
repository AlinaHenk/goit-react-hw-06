import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  deleteContact,
  selectContacts,
} from "../../redux/contactsSlice";

export default function App() {
  const dispatch = useDispatch();
  const contactsInState = useSelector(selectContacts);
  const [filterValue, setFilterValue] = useState("");

  const handleAddContact = (contact) => {
    contact.id = nanoid();
    dispatch(addContact(contact));
  };

  const handledeleteContact = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox onType={setFilterValue} />
      <ContactList
        contacts={contactsInState.filter(
          (contact) =>
            contact.name
              .toLowerCase()
              .trim()
              .indexOf(filterValue.toLowerCase().trim(), 0) >= 0 ||
            filterValue === ""
        )}
        onDelete={handledeleteContact}
      />
    </div>
  );
}
