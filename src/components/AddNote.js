import TinyMCE from './Editor'
const AddNote = ({ onData, note, noteID, onCleaningNote }) => {
  return (
    <div className='editor-mce'>
      <TinyMCE
        onData={onData}
        note={note}
        noteID={noteID}
        onCleanNote={onCleaningNote}
      />
    </div>
  )
}

export default AddNote
