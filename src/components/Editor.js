import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { UnControlled as ControlledEditor } from 'react-codemirror2'
function Editor(props) {
const {displayname,language,value,onChange}=props;
console.log(props)
    function handleChange(value){
      console.log(value)
        onChange(value)
    }
    
  return (
    <div className='bg-slate-700 h-screen  mt-2 mx-2 rounded-md '>
      <div className='heading bg-white text-black rounded-md p-2 '>{displayname}</div>
      
        <ControlledEditor
        className='h-48 overflow-auto '
        value={value}
        onBeforeChange={handleChange}
       options={{
        lineWrapping: true,
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
