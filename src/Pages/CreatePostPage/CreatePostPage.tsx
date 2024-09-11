import CreatePostForm from "../../Components/CreatePostForm/CreatePostForm";
import Modal from "../../Components/Modal/Modal";
import Menu from "../../Components/Menu/Menu";

type Props = {
  imageSrc: string;
  setImageSrc: any;
};

const CreatePostPage = ({ imageSrc, setImageSrc }: Props) => {
  return (
    <div className="CreatePostPage">
      <Modal />
      <CreatePostForm imageSrc={imageSrc} setImageSrc={setImageSrc} />

      <Menu imageSrc={imageSrc} setImageSrc={setImageSrc} />
    </div>
  );
};

export default CreatePostPage;
