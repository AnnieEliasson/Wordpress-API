import { useState } from "react";
import "./App.css";
import Email from "./Components/Email/email";
import CreatePostPage from "./Pages/CreatePostPage/CreatePostPage";

function App() {
  const [breadth, setBreadth] = useState("");
  const [entry, setEntry] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  return (
    <>
      <CreatePostPage
        breadth={breadth}
        setBreadth={setBreadth}
        entry={entry}
        setEntry={setEntry}
        title={title}
        setTitle={setTitle}
        file={file}
        setFile={setFile}
      />
      <Email
        breadth={breadth}
        setBreadth={setBreadth}
        entry={entry}
        setEntry={setEntry}
        title={title}
        setTitle={setTitle}
        file={file}
        setFile={setFile}
      />
    </>
  );
}

export default App;
