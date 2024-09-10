import { useState } from "react";
import "./App.css";
import CreatePostPage from "./Pages/CreatePostPage/CreatePostPage";
import Email from "./Components/Email/Email";
import { Article } from "./Types/Types";

function App() {
  const [article, setArticle] = useState({} as Article);
  const [imageSrc, setImageSrc] = useState("");

  return (
    <>
      <CreatePostPage
        article={article}
        setArticle={setArticle}
        imageSrc={imageSrc}
        setImageSrc={setImageSrc}
      />

      <Email article={article} imageSrc={imageSrc} />
    </>
  );
}

export default App;
