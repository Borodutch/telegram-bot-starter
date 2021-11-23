import { Bot } from 'grammy'
import Context from '@/models/Context'

if (!process.env.TOKEN) {
  throw new Error('TOKEN is not defined')
}

const bot = new Bot<Context>(process.env.TOKEN)

export default bot
