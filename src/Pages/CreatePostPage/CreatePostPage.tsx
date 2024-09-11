import { Article } from "../../Types/Types";
import CreatePostForm from "../../Components/CreatePostForm/CreatePostForm";
import Modal from "../../Components/Modal/Modal";
import Menu from "../../Components/Menu/Menu";

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
      <Modal />
      <CreatePostForm
        article={article}
        setArticle={setArticle}
        imageSrc={imageSrc}
        setImageSrc={setImageSrc}
      />

      <Menu
        article={article}
        setArticle={setArticle}
        imageSrc={imageSrc}
        setImageSrc={setImageSrc}
      />
    </div>
  );
};

export default CreatePostPage;
