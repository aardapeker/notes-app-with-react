import { useParams } from 'react-router-dom'
import { useState } from 'react'
function NoteDetail({ notes, onData }) {
  let { id } = useParams()
  const [newNotes, setNewNotes] = useState(notes)
  onData(newNotes)
  console.log(newNotes)
  const handleDelete = () => {
    console.log(id)
    setNewNotes(() => newNotes.filter((newNote, idx) => idx !== +id))
    console.log(newNotes)
  }

  return (
    <div>
      <h1>Note Details Page </h1>
      <p dangerouslySetInnerHTML={{ __html: notes[id] }}></p>
      <button onClick={handleDelete}>Delete</button>
      <button>Edit</button>
    </div>
  )
}

export default NoteDetail
