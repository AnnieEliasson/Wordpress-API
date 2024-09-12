import CreatePostForm from "../../Components/CreatePostForm/CreatePostForm";
import Modal from "../../Components/Modal/Modal";
import Menu from "../../Components/Menu/Menu";

const CreatePostPage = () => {
  return (
    <div className="CreatePostPage">
      <Modal />
      <CreatePostForm />
      <Menu />
    </div>
  );
};

export default CreatePostPage;
