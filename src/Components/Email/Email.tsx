import React, { useState } from "react";
import { Props } from "../../Pages/CreatePostPage/CreatePostPage";

const Email = ({
  breadth,
  setBreadth,
  entry,
  setEntry,
  title,
  setTitle,
  file,
  setFile,
}: Props) => {
  const [status, setStatus] = useState(""); // För att visa feedback till användaren

  const sendMail = async () => {
    const serviceId = "service_7nigrok";
    const templateId = "template_q2ilo02";
    const publicKey = "u_YqnrrTApsmG-_FN";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        title: title,
        entry: entry,
        breadth: breadth,
      },
    };

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setStatus("E-post skickades framgångsrikt!");
        console.log("E-post skickades", await response.json());
        setBreadth("");
      } else {
        setStatus("Misslyckades att skicka e-post.");
        console.error("Fel vid skickande av e-post", await response.text());
      }
    } catch (error) {
      setStatus("Något gick fel.");
      console.error("Något gick fel med begäran", error);
    }
  };

  return (
    <div>
      <button onClick={sendMail}>Skicka</button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default Email;
