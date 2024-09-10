import { ChangeEvent } from "react";
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
  // Hantera filinmatning

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setArticle({ ...article, file: e.target.files[0] });
      /* setImageSrc(URL.createObjectURL(e.target.files[0])); */
    }
  };

  const handleUpload = async () => {
    const imageData = await UploadImage(article);
    setImageSrc(imageData.guid.rendered);
    console.log("image uploaded", imageData);
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
      <button onClick={handleUpload}>Ladda upp bild</button>
    </div>
  );
};

export default CreatePostPage;
