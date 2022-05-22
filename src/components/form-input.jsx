import Input from "./input";
import style from "../styles/form-input.module.css";

const FormInput = () => {
  return (
    <form className={style.form} onSubmit={() => {}}>
      <h2 className={style.heading}>Create a note</h2>
      <small className={style.small}>
        Remaining characters: <span className={style.counter}>50</span>
      </small>
      <Input type='text' placeholder='Title' required />
      <Input type='textarea' placeholder='Write your note' id='note' name='note' />
      <Input type='submit' id='submit_form' name='submit_form' value='Create' />
    </form>
  );
};

export default FormInput;
