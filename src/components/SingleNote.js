const SingleNote = ({ note, handleClick }) => {
  return (
    <div
      className='singleNote'
      onClick={handleClick}
      dangerouslySetInnerHTML={{ __html: note }}></div>
  )
}

export default SingleNote
