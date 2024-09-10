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
  const handleFileChange = async (e: { target: { files: any } }) => {
    const imageData = await UploadImage(e.target.files[0]);
    console.log("Funkar?", imageData);
    setImageSrc(imageData.guid.rendered);
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
          <label htmlFor="image" className="choose-file-lable">
            +
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
