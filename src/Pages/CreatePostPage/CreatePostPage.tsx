import React, { useState } from "react";

const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [contentBig, setContentBig] = useState("");
  const [file, setFile] = useState(null);

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L3Rlc3RzaWRhIiwiaWF0IjoxNzI1NTI3MDIwLCJuYmYiOjE3MjU1MjcwMjAsImV4cCI6MTcyNjEzMTgyMCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.YWf6QOWuZgNBL9sy3EXwJB-7JO_X3Vwz_hsV4UMzKsQ";

  // Hanterar uppladdningen av bilden
  const handleApi = async () => {
    try {
      const formData = new FormData();
      if (file) formData.append("file", file);

      const response = await fetch(
        "http://localhost/testsida/wp-json/wp/v2/media",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(
          `Bilduppladdningen misslyckades: ${response.statusText}`
        );
      }

      const imageData = await response.json();
      console.log("Bild uppladdad, ID:", imageData.id);
      console.log("Bild URL:", imageData.source_url);
      return imageData;
    } catch (error) {
      console.error("Fel vid uppladdning av bild:", error);
    }
  };

  // Postar inlägget med den uppladdade bilden
  const postToWordpress = async () => {
    try {
      // Ladda upp bilden och få tillbaka bilddata
      const imageData = await handleApi();
      const imageUrl = imageData.source_url;

      const postContent = `
      <div style="display: flex; gap: 20px;">
      <p style="font-style: italic;">${content}</p>
        <img style="max-width: 320px; border: 1px solid black; border-radius: 3px;" src="${imageUrl}" alt="${title}" />
    </div>
    <p>${contentBig}</p>
      `;

      const response = await fetch(
        "http://localhost/testsida/wp-json/wp/v2/posts",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            content: postContent,
            comment_status: "closed",
            status: "publish",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Något gick fel: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Inlägg skapat:", data);
    } catch (error) {
      console.error("Fel vid skapande av inlägg:", error);
    }
  };

  const [imageSrc, setImageSrc] = useState("");

  // Hantera filinmatning
  const handleImageChange = (e) => {
    setFile(e.target.files[0]);
    setImageSrc(URL.createObjectURL(e.target.files[0]));
    console.log("fsadfasdf", e.target.files[0]);
  };

  return (
    <div className="CreatePostPage">
      <div className="form-container">
        <textarea
          id="rubrik"
          placeholder="Lorem ipsum dolor sit amet consectetur."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="TextAndImage">
          <textarea
            placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, laudantium atque inventore, molestias aliquam quod tempore, dolorem nesciunt optio dolores voluptatibus. Animi minima suscipit fuga officiis dignissimos perferendis cumque eligendi."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div
            className="image"
            style={{
              backgroundImage: `url(${imageSrc})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>

        <textarea
          id="main-text"
          placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quod officia possimus est eius itaque odio assumenda maxime numquam placeat quasi fugiat atque saepe, iure dolore, nisi porro officiis similique praesentium vel commodi quisquam pariatur corporis! Fugit fugiat accusamus, adipisci, provident quia asperiores quas veniam aliquid iure totam tempora assumenda ex voluptatibus possimus culpa facilis ducimus perferendis cupiditate exercitationem a nostrum! Rerum, et. Possimus obcaecati, tempora ipsa iste voluptate ducimus pariatur minima vero error omnis repellat explicabo quaerat ratione in distinctio quasi illo optio ex molestias magnam quisquam velit itaque dolorum. Dolorem unde voluptas vel eius excepturi deleniti ratione omnis aliquid, iusto, odit voluptatum voluptate suscipit animi exercitationem delectus qui. Esse, ut assumenda, quas amet at ad debitis suscipit dicta odio, fugiat et ipsam veniam necessitatibus autem delectus labore libero facilis iure! Laudantium odio ratione recusandae adipisci nam harum molestias eligendi modi necessitatibus nihil? Ratione tempora eligendi dolores, eaque mollitia exercitationem. Placeat minus voluptates et asperiores vero tempore harum commodi laborum eligendi porro dolorum ipsa cumque, ab quo laudantium minima alias, sunt dolore quas ducimus ex voluptatem. Id sed hic, non expedita quo doloremque nesciunt provident quidem sint recusandae autem, sit placeat commodi magni, similique perferendis architecto voluptas iste ut aspernatur eveniet voluptatem. Dicta similique expedita accusantium repellendus molestiae omnis corrupti mollitia laborum, ipsa a doloremque minima aliquid doloribus nam? Laborum nisi sunt, nostrum aliquam natus, voluptas, accusamus culpa aperiam omnis earum architecto? Deleniti alias vitae dolor impedit quam explicabo maxime ex unde eligendi, cumque magnam nihil dolores fuga eum aliquid modi rem ipsum perferendis, itaque quibusdam, qui officiis eius. Dolor impedit id amet possimus quae qui at recusandae velit dignissimos quibusdam maiores ex, facilis assumenda dolorem veritatis, illo, ipsum totam cum hic tempore."
          value={contentBig}
          onChange={(e) => setContentBig(e.target.value)}
        />

        <input
          type="file"
          id="image"
          name="image"
          accept="image/png, image/jpeg"
          onChange={handleImageChange}
        />

        <button onClick={postToWordpress}>Posta inlägg</button>
      </div>
    </div>
  );
};

export default CreatePostPage;
