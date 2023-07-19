import SingleNote from './SingleNote'
import { useNavigate } from 'react-router-dom'
function AllNotes({ notes }) {
  let navigate = useNavigate()
  console.log(notes)
  const handleClick = (i) => {
    console.log(i)
    navigate(`/notes/${i}`)
  }
  return (
    <div>
      <h1>Notes List Page</h1>
      <div className='note'>
        {notes?.map((note, idx) => (
          <SingleNote
            note={note}
            key={idx}
            handleClick={() => handleClick(idx)}
          />
        ))}
      </div>
    </div>
  )
}

export default AllNotes
