import { useState } from "react";
import "./App.css";
import CreatePostPage from "./Pages/CreatePostPage/CreatePostPage";
import Email from "./Components/Email/Email";
import { Article } from "./Types/Types";

function App() {
  /* const [file, setFile] = useState(null); */

  const [article, setArticle] = useState({} as Article);
  const [test, setTest] = useState("");

  return (
    <>
      <CreatePostPage
        /*         file={file}
        setFile={setFile} */
        article={article}
        setArticle={setArticle}
        setTest={setTest}
      />

      <Email article={article} test={test} />
    </>
  );
}

export default App;
