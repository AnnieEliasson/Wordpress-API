import { useState } from "react";
import { PostToWordpress } from "../../API/PostToWordpress";
import { RetriveFromWordpress } from "../../API/RetriveFromWordpress";
import { UploadImage } from "../../API/UploadImage";
import { useArticleContext } from "../Context/ArticleContextProvider";

const Menu = () => {
  const { article, setArticle } = useArticleContext();
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
          setArticle({ ...article, imageURL: imageData.guid.rendered });
        }
        URL.revokeObjectURL(objectUrl);
      };

      img.src = objectUrl;
    }
  };

  return (
    <div className="Menu">
      <div className="button-container">
        <button
          id="draft"
          className="menu-btn"
          onClick={(e) => PostToWordpress(e, article)}
        >
          Spara
        </button>
        <button
          className="menu-btn"
          onClick={() => RetriveFromWordpress(article, setArticle)}
        >
          Hämta
        </button>

        <label htmlFor="image" className="menu-btn">
          Välj bild
          <input
            type="file"
            id="image"
            name="image"
            accept="image/png, image/jpeg"
            onChange={(e) => handleFileChange(e)}
          />
        </label>
        <button className="menu-btn">Bild åt vänster</button>
        <p className="image-error">{errorMessage}</p>
      </div>
      <div className="button-container">
        <button
          id="publish"
          className="menu-btn"
          onClick={(e) => PostToWordpress(e, article)}
        >
          Publicera
        </button>
        <button className="menu-btn">Epost utskick</button>
      </div>
    </div>
  );
};

export default Menu;
