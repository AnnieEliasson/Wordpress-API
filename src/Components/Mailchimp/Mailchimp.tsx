/* import { useState } from "react";
import { useArticleContext } from "../Context/ArticleContextProvider";
import { PostContent } from "../../BlogPostHTML/PostContent";

const Mailchimp = () => {
  const { article } = useArticleContext();
  const [status, setStatus] = useState("");

  const sendEmails = async () => {
    try {
      const response = await fetch("http://localhost:5000/send-campaign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: article.title,
          content: PostContent(article),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send campaign");
      }

      setStatus("Campaign sent successfully!");
    } catch (error) {
      setStatus("Failed to send campaign.");
    }
  };

  return (
    <div>
      <button onClick={sendEmails}>SKICKA MAIL</button>

      {status && <p>{status}</p>}
    </div>
  );
};

export default Mailchimp;
 */
