import { Article } from "../Types/Types";

/* <div style="max-width: 655px; margin: auto;">
      <div style="max-width: 650px; display: flex; justify-content: space-between; flex-wrap: wrap-reverse; gap: 20px;">
      <pre class="text" style="font-style: italic; border: none; max-width: 300px; font-family: Times New Roman, Times, serif; background-color: white; color: black;">${article.entry}</pre>
        <img style="max-width: 300px; height: auto; border: 1px solid black; border-radius: 5px;" src="https://brvux.se/wp-content/uploads/2024/04/nyhetsbrev-2-1000x800.png" alt="${article.title}" />
    </div>
    <pre class="text" style=" border: none; font-family: Times New Roman, Times, serif; background-color: white; color: black;" >${article.breadth}</pre>
    </div> */

export const PostContent = (article: Article) => {
  const postContent = `<div style="margin-top: -100px; max-width: 655px; margin: auto; ">
  <img style="max-width: 100%; height: auto;" src="https://brvux.se/wp-content/uploads/2024/03/skarmavbild-2024-03-05-kl-175910.png" alt="${article.title}" />
  <pre class="text" style="white-space: pre-wrap; margin: 0px; font-style: italic; border: none; font-family: Times New Roman, Times, serif; background-color: white; color: black;">${article.entry}</pre>
  
    <pre class="text" style="white-space: pre-wrap; border: none; font-family: Times New Roman, Times, serif; background-color: white; color: black;" >${article.breadth}</pre>
      
    </div>
    `;

  return postContent;
};
