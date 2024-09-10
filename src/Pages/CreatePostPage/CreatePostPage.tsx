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
  const handleFileChange = async (e: { target: { files: any } }) => {
    const imageData = await UploadImage(e.target.files[0]);
    console.log("Funkar?", imageData);
    setImageSrc(imageData.guid.rendered);
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
        onChange={(e) => handleFileChange(e)}
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
