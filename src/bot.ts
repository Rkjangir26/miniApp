// Inside src/bot.ts or where you handle bot commands

import TelegramBot from 'node-telegram-bot-api';
import { BOT_TOKEN } from './config';


const bot = new TelegramBot(BOT_TOKEN, { polling: true });




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
  
