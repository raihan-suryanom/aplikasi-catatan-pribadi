import style from "../styles/card.module.css";
import Button from "./button";

const Card = ({ id, title, createdAt, body, action }) => {
  const deleteNote = (item) => action((notes) => notes.filter((note) => note.id !== item));

  return (
    <article id={id} className={style.card}>
      <header className={style.card_header}>
        <h3 className={style.heading}>{title}</h3>
        <small className={style.date}>{new Date(createdAt).toDateString()}</small>
        <p className={style.note}>{body}</p>
      </header>
      <footer className={style.card_footer}>
        <Button eventHandler={() => deleteNote(id)} label='delete' />
        <Button eventHandler={action} label='archive' />
      </footer>
    </article>
  );
};

export default Card;
