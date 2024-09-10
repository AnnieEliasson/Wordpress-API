import { Article } from "../Types/Types";
import { BASE_URL, TOKEN } from "./Variabler";

// Hanterar uppladdningen av bilden
export const UploadImage = async (article: Article) => {
  try {
    const formData = new FormData();
    if (article.file) formData.append("file", article.file);

    const response = await fetch(`${BASE_URL}/media`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Bilduppladdningen misslyckades: ${response.statusText}`);
    }

    const imageData = await response.json();
    return imageData;
  } catch (error) {
    console.error("Fel vid uppladdning av bild:", error);
  }
};
