// Inside src/bot.ts or where you handle bot commands

import TelegramBot from 'node-telegram-bot-api';
import { BOT_TOKEN } from './config';

<<<<<<< HEAD
const bot = new TelegramBot(BOT_TOKEN, { polling: true });
=======
const TOKEN = '8068200087:AAHn6b77a6nFq9oOhxgSmz3YHI3ArKYypw4';
const bot = new TelegramBot(TOKEN, { polling: true });
>>>>>>> 657ca7fa22edb7ae35d97bd516eda241fee3e0f4

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    console.log("Received /start command from chat:", chatId);  // Debugging line
  
    const url = "https://mini-app-eight-kappa.vercel.app";
    bot.sendMessage(chatId, 'Welcome! Check out the prices at', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Go to Web App",
              url: url
            }
          ]
        ]
      }
    })
    .then(() => {
      console.log("Message sent to user");  // Debugging line
    })
    .catch((error) => {
      console.error("Error sending message:", error);  // Debugging line
    });
  });
  
