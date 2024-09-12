import CreatePostPage from "./Pages/CreatePostPage/CreatePostPage";
import Email from "./Components/Email/Email";
import MailchimpCampaign from "./Components/testEmail/MailchimpCampaign";

function App() {
  return (
    <>
      <MailchimpCampaign />
      <CreatePostPage />
      <Email />
    </>
  );
}

export default App;
