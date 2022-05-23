import { useState } from "react";
import { FormInput, Header, SectionNotes } from "./components";
import style from "./styles/app.module.css";
import { getInitialData } from "./utils";

function App() {
  const [query, setQuery] = useState("");
  const [notes, setNotes] = useState(getInitialData());

  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <>
      <Header search={query} updateQuery={setQuery} />
      <main className={style.main}>
        <FormInput updateNotes={setNotes} />
        <SectionNotes label='Active Notes' notes={activeNotes} setNotes={setNotes} />
        <SectionNotes label='Archived Notes' notes={archivedNotes} setNotes={setNotes} />
      </main>
    </>
  );
}

export default App;
