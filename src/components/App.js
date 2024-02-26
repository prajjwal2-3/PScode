import "./App.css";
import Editor from "./Editor";

function App() {
  return (
    <div className="App flex justify-between bg-slate-500 ">
      <div className="editor section flex flex-col flex-1 w-6/12 justify-between h-screen ">
        <Editor displayname="HTML" value="hellow"/>
        <Editor displayname="CSS"  value="hellow"/>
        <Editor displayname="JS"  value="hellow"/>
      </div>
      <div className="output w-6/12  m-2 rounded-md">
        <iframe src="" title="output" frameborder="0" sandbox="allow-scripts"
        width="100%" height="100%"></iframe>
      </div>
    </div>
  );
}

export default App;
