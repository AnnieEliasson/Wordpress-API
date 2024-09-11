import { useState } from "react";
import "./App.css";
import CreatePostPage from "./Pages/CreatePostPage/CreatePostPage";
import Email from "./Components/Email/Email";

function App() {
  const [imageSrc, setImageSrc] = useState("");

  return (
    <>
      <CreatePostPage imageSrc={imageSrc} setImageSrc={setImageSrc} />

      <Email imageSrc={imageSrc} />
    </>
  );
}

export default App;
