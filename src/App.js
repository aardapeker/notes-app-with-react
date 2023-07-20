import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import AllNotes from './components/AllNotes'
import NoteDetail from './components/NoteDetail'
import AddNote from './components/AddNote'
import { useEffect, useState } from 'react'

function App() {
  let savedNote = localStorage.getItem('savedNote')
  const [notes, setNotes] = useState(savedNote ? JSON.parse(savedNote) : [])

  // useEffect(() => {
  //   setNotes(JSON.parse(savedNote))
  // }, [])

  const handleData = (data) => {
    setNotes(data)
    console.log(notes)
  }

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='' element={<AllNotes notes={notes} />} />
          <Route path='add' element={<AddNote onData={handleData} />} />
          <Route path='notes'>
            <Route path='' element={<AllNotes notes={notes} />} />
            <Route
              path=':id'
              element={<NoteDetail notes={notes} onData={handleData} />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
