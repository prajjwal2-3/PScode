import { useEffect, useState } from "react";
import "./App.css";
import Editor from "./Editor";

function App() {
const [html,sethtml]=useState('')
const [css,setcss]=useState('')
const [js,setjs]=useState('')
const [src, setsrc]=useState('')

useEffect(()=>{
const timeout= setTimeout(() => {
  setsrc(`<html><body>${html}</body><style>${css}</style><script>${js}</script></html>`)
    
}, 250);
console.log(src)
return()=> clearTimeout(timeout)



},[html,css,js])
  return (
    <div className="App flex justify-between bg-slate-500 ">
      <div className="editor section flex flex-col flex-1 w-6/12 justify-between h-screen ">
        <Editor displayname="HTML" value={html} onChange={sethtml} language="xml"/>
        <Editor displayname="CSS"  value={css} onChange={setcss} language="CSS"/>
        <Editor displayname="JS"  value={js} onChange={setjs} language="javascript"/>
      </div>
      <div className="output w-6/12 bg-white text-black m-2 rounded-md">
        <iframe srcDoc={src} title="output" frameBorder="0" sandbox="allow-scripts"
        width="100%" height="100%"></iframe>
      </div>
    </div>
  );
}

export default App;
