import SingleNote from './SingleNote'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'

function AllNotes({ notes }) {
  let navigate = useNavigate()

  const handleClick = (i) => {
    navigate(`/notes/${i}`)
  }

  const handleNavigate = () => {
    navigate('add')
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
        <button onClick={handleNavigate}>Add Note</button>
      </div>
    </div>
  )
}

export default AllNotes
