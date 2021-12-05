import Context from '@/models/Context'
import languageMenu from '@/menus/language'

export default function handleLanguage(ctx: Context) {
  return ctx.reply(ctx.i18n.t('language'), {
    reply_markup: languageMenu,
  })
}
