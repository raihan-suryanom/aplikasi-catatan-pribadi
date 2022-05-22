import style from "../styles/card.module.css";
import Button from "./button";

const Card = ({ id, title, createdAt, body, action }) => {
  return (
    <article id={id} className={style.card}>
      <header className={style.card_header}>
        <h3 className={style.heading}>{title}</h3>
        <small className={style.date}>{new Date(createdAt).toDateString()}</small>
        <p className={style.note}>{body}</p>
      </header>
      <footer className={style.card_footer}>
        <Button eventHandler={action} label='delete' />
        <Button eventHandler={action} label='archive' />
      </footer>
    </article>
  );
};

export default Card;
