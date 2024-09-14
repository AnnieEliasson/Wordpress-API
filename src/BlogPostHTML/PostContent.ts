import { Article } from "../Types/Types";

/* <div style="max-width: 655px; margin: auto;">
      <div style="max-width: 650px; display: flex; justify-content: space-between; flex-wrap: wrap-reverse; gap: 20px;">
      <pre class="text" style="font-style: italic; border: none; max-width: 300px; font-family: Times New Roman, Times, serif; background-color: white; color: black;">${article.entry}</pre>
        <img style="max-width: 300px; height: auto; border: 1px solid black; border-radius: 5px;" src="https://brvux.se/wp-content/uploads/2024/04/nyhetsbrev-2-1000x800.png" alt="${article.title}" />
    </div>
    <pre class="text" style=" border: none; font-family: Times New Roman, Times, serif; background-color: white; color: black;" >${article.breadth}</pre>
    </div> */

export const PostContent = (article: Article, to: "post" | "mail") => {
  if (to === "post") {
    const postContent = `
    <div style="margin-top: -100px; max-width: 655px; margin: auto; ">
    <img style="max-width: 100%; border-radius: 3px; height: auto;" src="${article.imageURL}" alt="${article.title}" />
    <pre class="text" style="white-space: pre-wrap; margin: 0px; font-style: italic; border: none; font-family: "Nunito Sans", Arial, sans-serif; background-color: white; color: black;">${article.entry}</pre>
    
      <pre class="text" style="white-space: pre-wrap; border: none; font-family: "Nunito Sans", Arial, sans-serif; background-color: white; color: black;" >${article.breadth}</pre>
        
      </div>
      `;

    return postContent;
  }

  if (to === "mail") {
    const mailContent = `
    <div style="width: 100%; height: 100%; background-color: #b6514b;">
    <div style="text-align: center; max-width: 655px; margin: auto; background-color: black; padding: 10px 5%;">
    <img style="height: 50px; width: auto;" src="https://brvux.se/wp-content/themes/brvux/assets/images/logo.webp" alt="logo" />
    </div>
    <div style="margin-top: -100px; max-width: 655px; margin: auto; background-color: white; padding: 5%;">
    <h1 style="color: black; font-family: "Nunito Sans", Arial, sans-serif;">${article.title}</h1>
    <img style="max-width: 100%; margin-bottom: 20px; border-radius: 3px; height: auto;" src="https://brvux.se/wp-content/uploads/2024/03/skarmavbild-2024-03-05-kl-175910.png" alt="${article.title}" />
    <pre class="text" style="white-space: pre-wrap; margin: 0px; font-style: italic; border: none; font-family: sans-serif; background-color: white; color: black;">${article.entry}</pre>
    
      <pre class="text" style="white-space: pre-wrap; border: none; font-family: sans-serif; background-color: white; color: black;" >${article.breadth}</pre>
        
      </div>
      </div>
      `;
    return mailContent;
  }
};
