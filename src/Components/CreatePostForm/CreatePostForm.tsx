import {
  placeholder_Title,
  placeholder_Entry,
  placeholder_Breadth,
} from "../../Pages/CreatePostPage/Placeholders";
import { useArticleContext } from "../Context/ArticleContextProvider";

type Props = {
  imageSrc: string;
  setImageSrc: any;
};

const CreatePostForm = ({ imageSrc }: Props) => {
  const { article, setArticle } = useArticleContext();
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
        ></div>
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
