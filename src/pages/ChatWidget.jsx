import { useState, useEffect, useRef } from "react";
import "./Chatai.css";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);


  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    setMessages([
      {
        role: "ai",
        text: "Hi! 👋 Ask me about my skills, projects, or contact info.",
      },
    ]);
  }, []);


  const getBotReply = (input) => {
    const text = input.toLowerCase();

    if (text.includes("hello") || text.includes("hi")) {
      return "Hey there! 😊";
    }

    if (text.includes("who are you")) {
      return "I'm a chatbot built to showcase this portfolio.";
    }

    if (text.includes("skills")) {
      return "JavaScript, React, Node.js, Express, MongoDB 🚀";
    }

    if (text.includes("projects")) {
      return "I've built a chatbot, portfolio website, and more cool stuff!";
    }

    if (text.includes("contact")) {
      return "📧 ommundhe207@email.com\n🌐 github.com/Om Mundhe";
    }

    if (text.includes("resume")) {
      return "You can download my resume from the portfolio website!";
    }

    return "Hmm... I don't understand that yet 🤔 Try asking about skills, projects, or contact.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userText = input;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userText },
    ]);

    setInput("");
    setLoading(true);

    setTimeout(() => {
      const reply = getBotReply(userText);

      setMessages((prev) => [
        ...prev,
        { role: "ai", text: reply },
      ]);

      setLoading(false);
    }, 700);
  };

  return (
    <>

      <div className="chat-bubble" onClick={() => setOpen(!open)}>
        💬
      </div>

     
      {open && (
        <div className="chat-box">
          <div className="chat-header">AI Assistant</div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={msg.role}>
                {msg.text}
              </div>
            ))}

           {loading && <div className="ai typing">Typing</div>}

            <div ref={chatEndRef}></div>
          </div>

          <div className="quick-questions">
            <button onClick={() => setInput("skills")}>Skills</button>
            <button onClick={() => setInput("projects")}>Projects</button>
            <button onClick={() => setInput("contact")}>Contact</button>
          </div>

          <div className="chat-footer">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me..."
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />

            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}