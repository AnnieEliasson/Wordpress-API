import { ChangeEvent, useState } from "react";
import { Article } from "../../Types/Types";
import CreatePostForm from "../../Components/CreatePostForm/CreatePostForm";
import { PostContent } from "../../BlogPostHTML/PostContent";

export const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L3Rlc3RzaWRhIiwiaWF0IjoxNzI1NTI3MDIwLCJuYmYiOjE3MjU1MjcwMjAsImV4cCI6MTcyNjEzMTgyMCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.YWf6QOWuZgNBL9sy3EXwJB-7JO_X3Vwz_hsV4UMzKsQ";
const BASE_URL = "http://localhost/testsida/wp-json/wp/v2";

type Props = {
  article: Article;
  setArticle: any;
  setTest: any;
};

const CreatePostPage = ({ article, setArticle, setTest }: Props) => {
  // Hanterar uppladdningen av bilden
  const UploadImage = async () => {
    try {
      const formData = new FormData();
      if (article.file) formData.append("file", article.file);

      const response = await fetch(`${BASE_URL}/media`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(
          `Bilduppladdningen misslyckades: ${response.statusText}`
        );
      }

      const imageData = await response.json();
      return imageData;
    } catch (error) {
      console.error("Fel vid uppladdning av bild:", error);
    }
  };

  // Postar inlägget med den uppladdade bilden
  const PostToWordpress = async (e: any) => {
    const status = e.target.id;

    try {
      // Ladda upp bilden och få tillbaka bilddata
      const imageData = await UploadImage();

      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: article.title,
          content: PostContent(article, imageData),
          status: status,
        }),
      });

      if (!response.ok) {
        throw new Error(`Något gick fel: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Inlägg publiserat:", data);

      if (status === "draft") console.log("Inlägg sparat:", data);
      if (status === "publish") console.log("Inlägg publiserat:", data);
    } catch (error) {
      console.error("Fel vid skapande av inlägg:", error);
    }
  };

  // Plockar ut alla span element ur HTMLsträng
  const extractParagraphs = (htmlString: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const paragraphs = doc.querySelectorAll("span");
    const paragraphTexts = Array.from(paragraphs).map((p) => p.textContent);

    return paragraphTexts;
  };

  const RetriveFromWordpress = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts?status=draft`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      const data = await response.json();
      //console.log(data[0].content.rendered);

      const result = extractParagraphs(data[0].content.rendered);
      console.log(result);
      setArticle({
        ...article,
        title: data[0].title.rendered,
        entry: result[0],
        breadth: result[1],
      });
    } catch (error) {
      console.log("Fel vid hämtning av inlägg", error);
    }
  };

  // Hantera filinmatning
  const [imageSrc, setImageSrc] = useState("");
  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setArticle({ ...article, file: e.target.files[0] });
      setImageSrc(URL.createObjectURL(e.target.files[0]));
      console.log(e.target.files[0].name);
      setTest(e.target.files[0].name);
    }
  };

  return (
    <div className="CreatePostPage">
      <CreatePostForm
        article={article}
        setArticle={setArticle}
        imageSrc={imageSrc}
      />
      <input
        type="file"
        id="image"
        name="image"
        accept="image/png, image/jpeg"
        onChange={handleFileInput}
      />

      <button
        id="publish"
        className="publish-btn"
        onClick={(e) => PostToWordpress(e)}
      >
        Publicera
      </button>
      <button id="draft" onClick={(e) => PostToWordpress(e)}>
        Spara
      </button>
      <button onClick={RetriveFromWordpress}>Hämta</button>
    </div>
  );
};

export default CreatePostPage;
