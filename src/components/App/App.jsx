import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "../../redux/contactsSlice";

import contacts from "../contacts.json";

export default function App() {
  // const [contactsInState, setContactsInState] = useState(() => {
  //   const savedContacts = window.localStorage.getItem("saved-contacts");
  //   if (savedContacts !== null) {
  //     return JSON.parse(savedContacts);
  //   }
  //   return contacts;
  // });

  const dispatch = useDispatch();
  const contactsInState = useSelector((state) => state.contacts.items);
  const [filterValue, setFilterValue] = useState("");

  // useEffect(() => {
  //   window.localStorage.setItem(
  //     "saved-contacts",
  //     JSON.stringify(contactsInState)
  //   );
  // }, [contactsInState]);

  const handleAddContact = (contact) => {
    contact.id = nanoid();
    dispatch(addContact(contact));
  };

  const deleteContact = (id) => {
    // setContactsInState((prevContacts) => {
    //   return prevContacts.filter((contact) => contact.id !== id);
    // });
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
        onDelete={deleteContact}
      />
    </div>
  );
}
