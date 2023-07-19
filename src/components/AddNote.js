import TinyMCE from './Editor'
const AddNote = ({ onData }) => {
  return (
    <div className='editor-mce'>
      <TinyMCE onData={onData} />
    </div>
  )
}

export default AddNote
