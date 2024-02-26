import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
function Editor(props) {
    const {
        language,
        displayname,
        value,
        onChange
    }=props
  return (
    <div className='bg-slate-700 h-screen  mt-2 mx-2 rounded-md '>
      <div className='heading bg-white text-black rounded-md p-2'>{displayname}</div>
      
        <ControlledEditor
        className='h-48 overflow-hidden rounded-md code-mirror-wrapper'
        value="oh"
       options={{
       theme:'material',
       lint:true,
        mode: language,
        lineNumbers: true,
       }}
        />
      
    </div>
  )
}

export default Editor
