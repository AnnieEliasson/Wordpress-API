import { PostToWordpress } from "../../API/PostToWordpress";
import { RetriveFromWordpress } from "../../API/RetriveFromWordpress";
import { Article } from "../../Types/Types";

type MenuProps = {
  article: Article;
  setArticle: any;
  imageSrc: string;
  setImageSrc: any;
};

const Menu = ({ imageSrc, article, setArticle, setImageSrc }: MenuProps) => {
  return (
    <div className="Menu">
      <div className="button-container">
        <button
          className="menu-btn"
          onClick={() => RetriveFromWordpress(article, setArticle, setImageSrc)}
        >
          Hämta
        </button>
        <button
          id="draft"
          className="menu-btn"
          onClick={(e) => PostToWordpress(e, imageSrc, article)}
        >
          Spara
        </button>
        <button className="menu-btn">Välj Bild</button>
      </div>
      <div className="button-container">
        <button
          id="publish"
          className="menu-btn"
          onClick={(e) => PostToWordpress(e, imageSrc, article)}
        >
          Publicera
        </button>
        <button className="menu-btn">Epost utskick</button>
      </div>
    </div>
  );
};

export default Menu;
