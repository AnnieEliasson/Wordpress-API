import { useState } from "react";
import { UploadImage } from "../../API/UploadImage";
import {
  placeholder_Title,
  placeholder_Entry,
  placeholder_Breadth,
} from "../../Pages/CreatePostPage/Placeholders";
import { Article } from "../../Types/Types";

type Props = {
  article: Article;
  setArticle: any;
  imageSrc: string;
  setImageSrc: any;
};

const CreatePostForm = ({
  article,
  setArticle,
  imageSrc,
  setImageSrc,
}: Props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const handleFileChange = async (e: { target: { files: any } }) => {
    const file = e.target.files[0];

    if (file) {
      const img = new Image();
      const objectUrl = URL.createObjectURL(file);

      img.onload = async () => {
        if (img.width > 1024 || img.height > 1024) {
          setErrorMessage(
            "Bilden du har valt är för stor. Max storlek 1024x1024"
          );

          const imageError = document.querySelector(
            ".image-error"
          ) as HTMLElement;
          imageError.classList.add("show");
        } else {
          const imageError = document.querySelector(
            ".image-error"
          ) as HTMLElement;
          imageError.classList.remove("show");
          setErrorMessage("");
          const imageData = await UploadImage(file);
          setImageSrc(imageData.guid.rendered);
        }
        URL.revokeObjectURL(objectUrl);
      };

      img.src = objectUrl;
    }
  };

  return (
    <div className="Form-container">
      <textarea
        id="rubrik"
        placeholder={placeholder_Title}
        value={article.title}
        onChange={(e) => setArticle({ ...article, title: e.target.value })}
      />

      <div className="TextAndImage">
        <textarea
          placeholder={placeholder_Entry}
          value={article.entry}
          onChange={(e) => setArticle({ ...article, entry: e.target.value })}
        />
        <div
          className="image"
          style={{
            backgroundImage: `url(${
              imageSrc ? imageSrc : "./transparent_kraken.png"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className="image-error">{errorMessage}</p>
          <label htmlFor="image" className="choose-file-lable">
            Välj bild
            <input
              type="file"
              id="image"
              name="image"
              accept="image/png, image/jpeg"
              onChange={(e) => handleFileChange(e)}
            />
          </label>
        </div>
      </div>

      <textarea
        id="main-text"
        placeholder={placeholder_Breadth}
        value={article.breadth}
        onChange={(e) => setArticle({ ...article, breadth: e.target.value })}
      />
    </div>
  );
};

export default CreatePostForm;
