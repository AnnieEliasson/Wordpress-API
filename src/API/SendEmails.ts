import { PostContent } from "../BlogPostHTML/PostContent";
import { Article } from "../Types/Types";

export const SendEmails = async (article: Article, setErrorMessage: any) => {
  try {
    const response = await fetch("http://localhost:5000/send-campaign", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: article.title,
        content: PostContent(article, "mail"),
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send campaign");
    }

    console.log("Campaign sent successfully!");
    setErrorMessage("Epost skickat!");
  } catch (error) {
    console.log("Failed to send campaign.");
    setErrorMessage("Misslyckades med att skicka Epost");
  }
};
