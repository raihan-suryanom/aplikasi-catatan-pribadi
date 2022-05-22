import { useState } from "react";
import { FormInput, Header, SectionNotes } from "./components";
import style from "./styles/app.module.css";
import { getInitialData } from "./utils";

function App() {
  const [query, setQuery] = useState("");
  const [activeNotes, setActiveNotes] = useState(getInitialData());
  const [archivedNotes, setArchivedNotes] = useState([]);

  return (
    <>
      <Header search={query} updateQuery={setQuery} />
      <main className={style.main}>
        <FormInput updateNotes={setActiveNotes} />
        <SectionNotes label='Active Notes' notes={activeNotes} updateNotes={setArchivedNotes} />
        <SectionNotes label='Archived Notes' notes={archivedNotes} />
      </main>
    </>
  );
}

export default App;
