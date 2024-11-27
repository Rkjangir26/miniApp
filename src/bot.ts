// Inside src/bot.ts or where you handle bot commands

import TelegramBot from 'node-telegram-bot-api';

const TOKEN = '8066245169:AAH0xU_ZY64Wzi1GxbwOnde7Yt6HZqSibpAE';
const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const url = "https://mini-app-eight-kappa.vercel.app"; // Your deployed frontend URL

  // Send message with a button linking to your frontend
  bot.sendMessage(chatId, 'Welcome! Check out the prices at', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Go to Web App",
            url: url // Link to your frontend app
          }
        ]
      ]
    }
  });
});
