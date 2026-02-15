"use client";
import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const botMsg = { sender: "bot", text: getBotReply(input) };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  const getBotReply = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi"))
      return "Hello! How can I assist you?";

    if (msg.includes("who are you"))
      return "I am a chatbot created for Kuldip Mahale’s portfolio.";

    if (msg.includes("skills"))
      return "My skills include HTML, CSS, JavaScript, React, Next.js, PHP, Python, and MySQL.";

    if (msg.includes("projects"))
      return "You can explore my projects in the Projects section of this website.";

    if (msg.includes("contact"))
      return "You can contact me at: kuldipmahale123@gmail.com";

    if (msg.includes("education"))
      return "I am pursuing Engineering in AI & Machine Learning.";

    return "Sorry, I didn’t understand that. Try asking about my skills, projects, or contact info.";
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg w-80 fixed bottom-5 right-5 shadow-xl">
      <h2 className="text-xl font-bold mb-3">💬 Chatbot</h2>

      <div className="h-64 overflow-y-auto bg-black p-3 rounded">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 my-2 rounded ${
              m.sender === "user" ? "bg-gray-700 text-right" : "bg-blue-600"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="flex mt-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 bg-gray-800 rounded"
          placeholder="Ask something..."
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-blue-600 px-3 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
