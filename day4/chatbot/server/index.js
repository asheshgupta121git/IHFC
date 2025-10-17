const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch"); // npm install node-fetch@2
const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "paste your api key here";
const API_URL = "https://openrouter.ai/api/v1/chat/completions";


app.post("/api/chat", async (req, res) => {
  try {
    const message = req.body.message || "Hello";
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-chat-v3.1:free",
        messages: [{ role: "user", content: message }],
        stream: false
      }),
    });




    const data = await response.json();
    res.json({ reply: data.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Error fetching API data" });
  }
});




app.listen(3001, () => console.log("Server running on http://localhost:3001"));
