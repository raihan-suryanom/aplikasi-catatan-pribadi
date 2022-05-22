import style from "../styles/input.module.css";

const Input = (attributes) => {
  return (
    <>
      {attributes.type === "textarea" ? (
        <textarea
          className={`${style.input} ${style.textarea}`}
          spellCheck={false}
          {...attributes}
        />
      ) : (
        <input className={style.input} spellCheck={false} {...attributes} />
      )}
    </>
  );
};

export default Input;
