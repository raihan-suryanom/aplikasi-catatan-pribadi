import { FormInput, Input } from "./components";
import style from "./styles/app.module.css";

function App() {
  return (
    <>
      <header className={style.container}>
        <h1 className={style.heading}>Rey&apos;s Note</h1>
        <Input
          type='search'
          id='search_notes'
          name='search_notes'
          placeholder='Find notes...'
          spellCheck={false}
        />
      </header>
      <main className={style.main}>
        <FormInput />
      </main>
    </>
  );
}

export default App;
