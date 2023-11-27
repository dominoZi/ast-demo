import { useState } from "react";
import { Button, TextField } from "./components";

function App() {
  const [notes, setNotes] = useState<string[]>([]);
  const [note, setNote] = useState("");
  return (
    <>
      <main className="mt-8 mx-auto max-w-[640px] bg-white p-6 rounded border border-slate-100">
        <h1 className="text-3xl font-bold">ACT DEMO</h1>
        <section className="mt-4">
          <TextField
            className="w-[420px]"
            data-test-id="app-note-input"
            label="Notatka"
            value={note}
            onChange={(e) => {
              const val = e.target.value;
              console.log(val);
              setNote(val);
            }}
          />
          <Button
            data-test-id="app-add-note-button"
            className="mt-6"
            onClick={() => {
              console.log(note);
              setNotes((prev) => [...prev, note]);
              setNote("");
            }}
          >
            Dodaj
          </Button>
        </section>
        <section className="mt-8">
          {0 < notes.length ? (
            <ol
              data-test-id="app-notes-list"
              className="list-decimal list-inside"
              type="1"
            >
              {notes.map((x, i) => (
                <li key={`${x}-${i}`} className="my-1">
                  {x}
                </li>
              ))}
            </ol>
          ) : (
            "Dodaj pierwszą notatkę"
          )}
        </section>
      </main>
    </>
  );
}

export default App;
