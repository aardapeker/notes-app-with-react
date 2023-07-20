import SingleNote from './SingleNote'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'

function AllNotes({ notes }) {
  let navigate = useNavigate()
  // Usage in a component

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
            key={nanoid()}
            handleClick={() => handleClick(idx)}
          />
        ))}
      </div>
    </div>
  )
}

export default AllNotes
