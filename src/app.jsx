import { useState } from "react";
import { FormInput, Input, SectionNotes } from "./components";
import style from "./styles/app.module.css";
import { getInitialData } from "./utils";

function App() {
  const [notes] = useState(getInitialData());

  return (
    <>
      <header className={style.container}>
        <h1 className={style.heading}>Rey&apos;s Note</h1>
        <Input type='search' id='search_notes' name='search_notes' placeholder='Find notes...' />
      </header>
      <main className={style.main}>
        <FormInput />
        <SectionNotes label='Active Notes' notes={notes} />
        <SectionNotes label='Archived Notes' />
      </main>
    </>
  );
}

export default App;
