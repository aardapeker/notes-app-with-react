import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Editor } from '@tinymce/tinymce-react'
import './Editor.css'

const API_KEY = process.env.REACT_APP_API_KEY

export default function TinyMCE({ onData }) {
  let navigate = useNavigate()
  let savedNote = localStorage.getItem('savedNote')
  console.log(JSON.parse(savedNote))
  const [notes, setNotes] = useState(savedNote ? JSON.parse(savedNote) : [])
  const [isInit, setIsInit] = useState(false)
  const editorRef = useRef(null)

  const log = () => {
    if (editorRef.current) {
      let content = editorRef.current.getContent()
      setNotes((prev) => {
        return [content, ...prev]
      })
    }
  }

  useEffect(() => {
    localStorage.setItem('savedNote', JSON.stringify(notes))
    onData(notes)
    console.log(notes)
    if (isInit) {
      navigate('/')
    }
  }, [notes])

  // useEffect(() => {
  //   let savedNote = localStorage.getItem('savedNote')

  //   if (savedNote) {
  //     setNotes([savedNote])
  //     console.log(notes)
  //     editorRef.current?.setContent(savedNote)
  //   }
  // }, [isInit])
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
            '.blue { color: blue; } .dark { background-color: #333; color:#f5f5f5; }',
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  )
}
