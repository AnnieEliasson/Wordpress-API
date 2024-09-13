import { Article } from "../Types/Types";
import {
  extractImgSrc,
  extractParagraphs,
} from "../Utility/TextExtractors/TextExtractors";
import { BASE_URL, TOKEN } from "./Variabler";

export const RetriveFromWordpress = async (
  article: Article,
  setArticle: any
) => {
  try {
    const response = await fetch(`${BASE_URL}/posts?status=draft`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    const data = await response.json();

    const texts = extractParagraphs(data[0].content.rendered);
    const img = extractImgSrc(data[0].content.rendered);

    console.log(texts);

    setArticle({
      ...article,
      title: data[0].title.rendered,
      entry: texts[0],
      breadth: texts[1],
      imageURL: img[0],
    });
  } catch (error) {
    console.log("Fel vid hämtning av inlägg", error);
  }
};
