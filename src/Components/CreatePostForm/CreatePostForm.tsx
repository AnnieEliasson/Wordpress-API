import {
  placeholder_Title,
  placeholder_Entry,
  placeholder_Breadth,
} from "../../Pages/CreatePostPage/Placeholders";

type Props = {
  article: any;
  setArticle: any;
  imageSrc: any;
};

const CreatePostForm = ({ article, setArticle, imageSrc }: Props) => {
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
            backgroundSize: "contain",
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
