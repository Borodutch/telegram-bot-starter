import 'reflect-metadata'
// Setup @/ aliases for modules
import 'module-alias/register'
// Config dotenv
import * as dotenv from 'dotenv'
dotenv.config({ path: `${__dirname}/../.env` })
// Dependencies
import { attachUser } from '@/middlewares/attachUser'
import { ignoreOldMessageUpdates } from '@/middlewares/ignoreOldMessageUpdates'
import { localeActions } from '@/handlers/language'
import { run } from '@grammyjs/runner'
import { sendHelp } from '@/handlers/sendHelp'
import { sendLanguage, setLanguage } from '@/handlers/language'
import bot from '@/helpers/bot'
import configureI18n from '@/middlewares/configureI18n'
import i18n from '@/helpers/i18n'
import sequentialize from '@/middlewares/sequentialize'
import startMongo from '@/helpers/startMongo'

async function runApp() {
  // Mongo
  await startMongo()
  console.log('Mongo connected')
  // Middlewares
  bot.use(sequentialize)
  bot.use(ignoreOldMessageUpdates)
  bot.use(attachUser)
  bot.use(i18n.middleware())
  bot.use(configureI18n)
  // Commands
  bot.command(['help', 'start'], sendHelp)
  bot.command('language', sendLanguage)
  // Actions
  bot.callbackQuery(localeActions, setLanguage)
  // Errors
  bot.catch(console.error)
  // Start bot
  await bot.init()
  run(bot)
  console.info(`Bot ${bot.botInfo.username} is up and running`)
}

void runApp()
