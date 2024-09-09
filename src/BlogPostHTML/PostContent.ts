import { Article } from "../Types/Types";

export const PostContent = (
  article: Article,
  imageData: { source_url: string }
) => {
  const postContent = `
      <div style="display: flex; gap: 20px;">
      <p style="font-style: italic;"><span>${article.entry}</span></p>
        <img style="max-width: 320px; border: 1px solid black; border-radius: 3px;" src="${imageData.source_url}" alt="${article.title}" />
    </div>
    <p><span>${article.breadth}</span></p>
      `;

  return postContent;
};
