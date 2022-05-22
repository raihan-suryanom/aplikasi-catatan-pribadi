import Input from "./input";
import style from "../styles/form-input.module.css";

const FormInput = () => {
  return (
    <form className={style.form}>
      <h2 className={style.heading}>Create a note</h2>
      <small className={style.small}>Remaining characters: 5</small>
      <Input type='search' placeholder='Title' required />
      <Input
        type='textarea'
        placeholder='Write your note'
        id='note'
        name='note'
        cols='30'
        rows='10'
      />
      <Input type='submit' id='submit_form' name='submit_form' value='Create' />
    </form>
  );
};

export default FormInput;
