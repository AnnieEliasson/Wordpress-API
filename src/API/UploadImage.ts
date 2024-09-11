import { BASE_URL, TOKEN } from "./Variabler";

// Hanterar uppladdningen av bilden
export const UploadImage = async (file: any) => {
  const image = document.querySelector(".image") as HTMLElement;
  image.style.backgroundImage = `url(./loader-2.gif)`;
  try {
    const formData = new FormData();
    if (file) formData.append("file", file);

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
