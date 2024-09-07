import { ChangeEvent, useState } from "react";
import { ArticleProps } from "../../Types/Types";
import CreatePostForm from "../../Components/CreatePostForm/CreatePostForm";
import { PostContent } from "../../BlogPostHTML/PostContent";
import { TOKEN } from "../../Token/Token.ts";

const BASE_URL = "http://localhost/testsida/wp-json/wp/v2";

const CreatePostPage = ({
  file,
  setFile,
  article,
  setArticle,
}: ArticleProps) => {
  // Hanterar uppladdningen av bilden
  const UploadImage = async () => {
    try {
      const formData = new FormData();
      if (file) formData.append("file", file);

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
  const PostToWordpress = async () => {
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
          status: "publish",
        }),
      });

      if (!response.ok) {
        throw new Error(`Något gick fel: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Inlägg skapat:", data);
    } catch (error) {
      console.error("Fel vid skapande av inlägg:", error);
    }
  };

  // Hantera filinmatning
  const [imageSrc, setImageSrc] = useState("");
  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setImageSrc(URL.createObjectURL(e.target.files[0]));
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

      <button onClick={PostToWordpress}>Posta inlägg</button>
    </div>
  );
};

export default CreatePostPage;
