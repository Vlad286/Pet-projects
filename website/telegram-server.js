import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const TELEGRAM_BOT_TOKEN = "7945738910:AAFWviKoQFsNcYMSx1kzNZz2N-1aCvzS4OQ";
const TELEGRAM_CHAT_ID = "743994651";

app.get("/", (req, res) => {
  res.send("Сервер работает");
});

app.post("/send-message", async (req, res) => {
  console.log("Получен запрос с данными:", req.body);

  const { name, email, phone, message, agreement } = req.body;

  const text = `📩 Новое сообщение с сайта:\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n✉️ Email: ${email}\n📝 Сообщение: ${message}\n✅ Согласие: ${agreement ? "Да" : "Нет"}`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      }
    );

    const result = await response.json();
    console.log("Ответ от Telegram API:", result);

    if (result.ok) {
      res.status(200).json({ message: "Сообщение отправлено" });
    } else {
      res.status(500).json({ error: "Ошибка Telegram API", details: result });
    }
  } catch (err) {
    console.error("Ошибка:", err);
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
