import { Article } from "../Types/Types";

export const PostContent = (article: Article, imageSrc: string) => {
  const postContent = `
      <div style="display: flex; justify-content: space-between; gap: 20px;">
      <pre style="font-style: italic; border: none; font-family: Times New Roman, Times, serif; background-color: white;" id="text">${article.entry}</pre>
        <img style="max-width: 320px; border: 1px solid black; border-radius: 3px;" src="${imageSrc}" alt="${article.title}" />
    </div>
    <pre style=" border: none; font-family: Times New Roman, Times, serif; background-color: white;" id="text">${article.breadth}</pre>
      `;

  return postContent;
};
