import { Article } from "../../Types/Types";
import CreatePostForm from "../../Components/CreatePostForm/CreatePostForm";
import { UploadImage } from "../../API/UploadImage";
import { PostToWordpress } from "../../API/PostToWordpress";
import { RetriveFromWordpress } from "../../API/RetriveFromWordpress";

type Props = {
  article: Article;
  setArticle: any;
  imageSrc: string;
  setImageSrc: any;
};

const CreatePostPage = ({
  article,
  setArticle,
  imageSrc,
  setImageSrc,
}: Props) => {
  return (
    <div className="CreatePostPage">
      <CreatePostForm
        article={article}
        setArticle={setArticle}
        imageSrc={imageSrc}
        setImageSrc={setImageSrc}
      />

      <button
        id="publish"
        className="publish-btn"
        onClick={(e) => PostToWordpress(e, imageSrc, article)}
      >
        Publicera
      </button>
      <button id="draft" onClick={(e) => PostToWordpress(e, imageSrc, article)}>
        Spara
      </button>
      <button
        onClick={() => RetriveFromWordpress(article, setArticle, setImageSrc)}
      >
        Hämta
      </button>
    </div>
  );
};

export default CreatePostPage;
