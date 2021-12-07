import Context from '@/models/Context'
import languageMenu from '@/menus/language'

export default function handleLanguage(ctx: Context) {
  return ctx.replyWithLocalization('language', {
    reply_markup: languageMenu,
  })
}
