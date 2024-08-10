import { PhoneFill } from "react-bootstrap-icons";
import * as icons from "react-bootstrap-icons";
import "bootstrap-icons/font/bootstrap-icons.css";
import css from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <div className={css.form}>
      <div className={css.data}>
        <i className="bi bi-person-fill">{contact.name}</i>
        <i className="bi bi-telephone-fill">{contact.number}</i>
      </div>
      <div></div>
      <button
        onClick={() => {
          onDelete(contact.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
