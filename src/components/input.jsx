import style from "../styles/input.module.css";

const Input = (attributes) => {
  return (
    <>
      {attributes.type === "textarea" ? (
        <textarea className={`${style.input} ${style.textarea}`} {...attributes} />
      ) : (
        <input className={style.input} {...attributes} />
      )}
    </>
  );
};

export default Input;
