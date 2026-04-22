import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    const formattedMessages = [
      {
        role: "system",
        content: "You are a helpful assistant for my portfolio website.",
      },
      ...messages.map(m => ({
        role: m.role === "ai" ? "assistant" : "user",
        content: m.text
      }))
    ];

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: formattedMessages,
    });

    res.json({
      reply: completion.choices[0].message.content,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ reply: "Sorry, server error." });
  }
});