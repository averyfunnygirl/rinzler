import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    // Create new note object
    const newNoteObj = {
      id: Date.now(),
      text: newNote,
    };
    // Add new note object to notes state
    setNotes([...notes, newNoteObj]);
    // Clear input field
    setNewNote('');
  };

  const handleDeleteNote = (id) => {
    // Filter out note with matching ID
    const updatedNotes = notes.filter((note) => note.id !== id);
    // Update notes state with filtered notes
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <main>
        <div className="note-form">
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
          <button onClick={handleAddNote}>Add Note</button>
        </div>
        <div className="note-list">
          <h2>Notes</h2>
          {notes.length > 0 ? (
            <ul>
              {notes.map((note) => (
                <li key={note.id}>
                  <div className="note-text">{note.text}</div>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteNote(note.id)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No notes yet. Add a note above.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
