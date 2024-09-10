import { PostContent } from "../BlogPostHTML/PostContent";
import { Article } from "../Types/Types";
import { BASE_URL, TOKEN } from "./Variabler";

// Postar inlägget med den uppladdade bilden
export const PostToWordpress = async (
  e: any,
  imageSrc: string,
  article: Article
) => {
  const status = e.target.id;

  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: article.title,
        content: PostContent(article, imageSrc),
        status: status,
      }),
    });

    if (!response.ok) {
      throw new Error(`Något gick fel: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Inlägg publiserat:", data);

    if (status === "draft") console.log("Inlägg sparat:", data);
    if (status === "publish") console.log("Inlägg publiserat:", data);
  } catch (error) {
    console.error("Fel vid skapande av inlägg:", error);
  }
};
