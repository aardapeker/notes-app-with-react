import { useParams } from 'react-router-dom'
function NoteDetail({ notes }) {
  let { id } = useParams()
  console.log('Note ID:', id)
  console.log(notes)

  return (
    <div>
      <h1>Note Details Page </h1>
      <p dangerouslySetInnerHTML={{ __html: notes[id] }}></p>
    </div>
  )
}

export default NoteDetail
