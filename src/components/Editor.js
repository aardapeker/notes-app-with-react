import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Editor } from '@tinymce/tinymce-react'

const API_KEY = process.env.REACT_APP_API_KEY

export default function TinyMCE({ onData, note, noteID, onCleanNote }) {
  let navigate = useNavigate()
  let savedNote = localStorage.getItem('savedNote')

  const [notes, setNotes] = useState(savedNote ? JSON.parse(savedNote) : [])
  const [isInit, setIsInit] = useState(false)
  const editorRef = useRef(null)

  if (note !== null) {
    // If user click edit button on NoteDetail component note variables has a value.
    editorRef.current?.setContent(note) // Then this value wrote on editor.
  }

  const log = () => {
    if (editorRef.current) {
      if (note !== null) {
        setNotes((prevNotes) => prevNotes.filter((_, idx) => idx !== +noteID)) // before add updating note to existing notes, delete previous note.
        onCleanNote(note) // when my job is finished for note variable, send onCleanNote function to app and clean this note to null again.
      }
      let content = editorRef.current.getContent() // When user write smth on editor, this value assigned to content variable.
      setNotes((prev) => {
        return [content, ...prev] // after deleting previous note, then add new added note to first.
      })
    }
  }

  useEffect(() => {
    localStorage.setItem('savedNote', JSON.stringify(notes))
    onData(notes) // when notes array changed or first initialized, pass data to parent components via onData function.

    if (isInit) {
      navigate('/')
    }
    // eslint-disable-next-line
  }, [notes])

  return (
    <>
      <Editor
        apiKey={API_KEY}
        onInit={(evt, editor) => {
          setIsInit(true)
          return (editorRef.current = editor)
        }}
        initialValue='<p>This is the initial content of the editor.</p>'
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'code',
            'help',
            'wordcount',
            'importcss',
          ],
          content_css: [''],
          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help' +
            '| forecolor backcolor',
          body_class: 'dark',
          branding: false,
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px, }' +
            'div { margin: 10px; border: 5px solid red; padding: 3px; } ' +
            '.blue { color: blue; } .dark { background-color: #3e525c; color:#f5f5f5; }',
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  )
}
