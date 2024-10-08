import { Article } from "../../Types/Types";
import { useArticleContext } from "../Context/ArticleContextProvider";

const subscribers = ["annie.eliasson@gmail.com"];

const Email = () => {
  const { article } = useArticleContext();
  const sendMail = (article: Article) => {
    console.log(article.file);

    const serviceId = "service_7nigrok";
    const templateId = "template_q2ilo02";
    const publicKey = "u_YqnrrTApsmG-_FN";

    subscribers.forEach((subscriber) => {
      console.log(article.imageURL, "<----");

      const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          title: article.title,
          entry: article.entry,
          breadth: article.breadth,
          to_email: subscriber,
          image: article.imageURL,
          /* "https://brvux.se/wp-content/uploads/2024/04/nyhetsbrev-2-1000x800.png" */
        },
      };

      const Send = async () => {
        try {
          const response = await fetch(
            "https://api.emailjs.com/api/v1.0/email/send",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );

          if (response.ok) {
            console.log("E-post skickades");
          } else {
            console.error(`Fel vid skickande av e-post ${subscriber}`);
          }
        } catch (error) {
          console.error("Något gick fel med begäran", error);
        }
      };

      Send();
    });
  };

  return (
    <div>
      <button onClick={() => sendMail(article)}>Skicka</button>
    </div>
  );
};

export default Email;
