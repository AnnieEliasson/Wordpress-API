type Props = {
  article: {
    breadth: string;
    entry: string;
    title: string;
  };
};

const Email = ({ article }: Props) => {
  const sendMail = async () => {
    const serviceId = "service_7nigrok";
    const templateId = "template_q2ilo02";
    const publicKey = "u_YqnrrTApsmG-_FN";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        title: article.title,
        entry: article.entry,
        breadth: article.breadth,
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
        console.log("E-post skickades", await response.json());
      } else {
        console.error("Fel vid skickande av e-post", await response.text());
      }
    } catch (error) {
      console.error("Något gick fel med begäran", error);
    }
  };

  return (
    <div>
      <button onClick={sendMail}>Skicka</button>
    </div>
  );
};

export default Email;
