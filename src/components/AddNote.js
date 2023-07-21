import TinyMCE from './Editor'
const AddNote = ({ onData, note, noteID }) => {
  return (
    <div className='editor-mce'>
      <TinyMCE onData={onData} note={note} noteID={noteID} />
    </div>
  )
}

export default AddNote
