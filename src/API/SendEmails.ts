import { PostContent } from "../BlogPostHTML/PostContent";
import { Article } from "../Types/Types";

export const SendEmails = async (article: Article) => {
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

    console.log("Campaign sent successfully!");
  } catch (error) {
    console.log("Failed to send campaign.");
  }
};
