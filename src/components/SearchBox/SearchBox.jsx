import css from "./SEarchBox.module.css";

export default function SearchBox({ onType }) {
  const handleChange = (event) => {
    onType(event.target.value);
  };

  return (
    <div className={css.container}>
      <span>Find contacts by name</span>
      <input type="text" onChange={handleChange} />
    </div>
  );
}
