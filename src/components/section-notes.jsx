import style from "../styles/section-notes.module.css";
import Card from "./card";

const SectionNotes = ({ label, notes }) => {
  return (
    <section>
      <h2 className={style.heading}>{label}</h2>
      <div className={style.list_of_notes}>
        {notes?.map((note) => <Card key={note.id} {...note} />) || "There are no note."}
      </div>
    </section>
  );
};

export default SectionNotes;
