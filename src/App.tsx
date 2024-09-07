import { useState } from "react";
import "./App.css";
import CreatePostPage from "./Pages/CreatePostPage/CreatePostPage";
import Email from "./Components/Email/Email";

function App() {
  const [file, setFile] = useState(null);

  const [article, setArticle] = useState({
    title: "",
    entry: "",
    breadth: "",
    file: "",
  });

  return (
    <>
      <CreatePostPage
        file={file}
        setFile={setFile}
        article={article}
        setArticle={setArticle}
      />

      <Email article={article} />
    </>
  );
}

export default App;
