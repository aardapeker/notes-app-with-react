// NoteDetail
//  |
// App --> AllNotes --> SingleNote
//  |
// AddNote --> Editor

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllNotes from './components/AllNotes'
import NoteDetail from './components/NoteDetail'
import AddNote from './components/AddNote'
import { useState } from 'react'

function App() {
  let savedNote = localStorage.getItem('savedNote')
  const [notes, setNotes] = useState(savedNote ? JSON.parse(savedNote) : [])
  const [note, setNote] = useState(null)
  const [noteID, setNoteID] = useState(null)

  const handleData = (data) => {
    setNotes(data)
  }

  const handleNote = (note) => {
    setNote(note)
  }

  const handleNoteID = (noteID) => {
    setNoteID(noteID)
  }

  const handleClean = () => {
    setNote(null)
  }

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='' element={<AllNotes notes={notes} />} />
          <Route
            path='add'
            element={
              <AddNote
                onData={handleData}
                note={note}
                noteID={noteID}
                onCleaningNote={handleClean}
              />
            }
          />
          <Route path='notes'>
            <Route path='' element={<AllNotes notes={notes} />} />
            <Route
              path=':id'
              element={
                <NoteDetail
                  notes={notes}
                  onData={handleData}
                  onNote={handleNote}
                  onNoteID={handleNoteID}
                />
              }
            />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
