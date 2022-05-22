import style from "../styles/card.module.css";
import Button from "./button";

const Card = ({ id, title, createdAt, body }) => {
  return (
    <article id={id} className={style.card}>
      <header className={style.card_header}>
        <h3 className={style.heading}>{title}</h3>
        <small className={style.date}>{createdAt}</small>
        <p className={style.note}>{body}</p>
      </header>
      <footer className={style.card_footer}>
        <Button label='delete' />
        <Button label='archive' />
      </footer>
    </article>
  );
};

export default Card;
