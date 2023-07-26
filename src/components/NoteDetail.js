import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function NoteDetail({ notes, onData, onNote, onNoteID }) {
  let navigate = useNavigate()
  let { id } = useParams() // caught note's id from url
  const [newNotes, setNewNotes] = useState(notes)

  const handleDelete = async () => {
    // when i clicked delete button, it takes more time to filtering notes.
    await setNewNotes((prevNewNotes) => {
      return prevNewNotes.filter((_, idx) => idx !== +id)
    })
    navigate('/')
  }

  const handleEdit = () => {
    onNote(notes[id]) // this function sends a note variable to the app file that wanted to edit by user.
    onNoteID(id)
    navigate('/add')
  }

  useEffect(() => {
    onData(newNotes)
    localStorage.setItem('savedNote', JSON.stringify(newNotes))
    // eslint-disable-next-line
  }, [newNotes])

  return (
    <div>
      <h1>Note Details Page </h1>
      <p
        className='noteDetail'
        dangerouslySetInnerHTML={{ __html: notes[id] }}></p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  )
}

export default NoteDetail
