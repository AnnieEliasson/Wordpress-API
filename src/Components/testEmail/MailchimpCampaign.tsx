import React, { useState, useEffect } from "react";
import axios from "axios";

const MailchimpCampaign = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");

  // Hämta prenumeranter vid sidladdning
  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/subscribers");
        setSubscribers(response.data);
      } catch (error) {
        setStatus("Failed to fetch subscribers.");
      }
    };
    fetchSubscribers();
  }, []);

  // Skicka kampanjen
  const sendCampaign = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/send-campaign", {
        subject,
        content,
      });
      setStatus("Campaign sent successfully!");
    } catch (error) {
      setStatus("Failed to send campaign.");
    }
  };

  return (
    <div>
      <h1>Create and Send Campaign</h1>
      <form onSubmit={sendCampaign}>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          placeholder="Email Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Send Campaign</button>
      </form>

      {status && <p>{status}</p>}

      <h2>Subscribers List</h2>
      <ul>
        {subscribers.map((subscriber: any) => (
          <li key={subscriber.id}>{subscriber.email_address}</li>
        ))}
      </ul>
    </div>
  );
};

export default MailchimpCampaign;
