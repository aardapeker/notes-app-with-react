import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function NoteDetail({ notes, onData }) {
  let navigate = useNavigate()
  let { id } = useParams()
  const [newNotes, setNewNotes] = useState(notes)
  onData(newNotes)
  console.log(newNotes)
  const handleDelete = async () => {
    console.log(id)
    await setNewNotes(() => newNotes.filter((newNote, idx) => idx !== +id))
    console.log(newNotes)
    navigate('/')
  }

  useEffect(() => {
    localStorage.setItem('savedNote', JSON.stringify(newNotes))
  }, [newNotes])

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
