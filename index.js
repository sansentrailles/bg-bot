const TelegramBot = require('node-telegram-bot-api')
const Agent = require('socks5-https-client/lib/Agent')
const config = require('config')

const TOKEN = config.get('token')
const bot = new TelegramBot(TOKEN, { 
    polling: true,
    // request: {
    //     // proxy: 'https://11.22.33.44:1010/'
    //     proxy: 'http://46.172.237.120:39880'
    // }

    request: {
        agentClass: Agent,
        agentOptions: {
            socksHost: config.get('host'),
            socksPort: config.get('port'),
            // If authorization is needed:
            // socksUsername: process.env.PROXY_SOCKS5_USERNAME,
            // socksPassword: process.env.PROXY_SOCKS5_PASSWORD
        }
    }
})
console.log(bot)

bot.on('message', msg => {
    const {chat: {id}} = msg
    bot.sendMessage(id, 'Pong')
})
// const Telegraf = require('telegraf');
// const firebase = require('firebase');

// const TOKEN = config.get('token');

//         // const config = require('./config');
//         // let token = config.token;
//         // console.log(token);

// // const bot = new Telegraf(token);

// // bot.start((ctx) => {
// //     console.log('Id пользователя:', ctx.from.id);
// //     return ctx.reply('Добро пожаловать!');
// // });