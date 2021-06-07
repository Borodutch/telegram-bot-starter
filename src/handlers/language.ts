import { Context, Markup as m } from 'telegraf'
import { readdirSync, readFileSync } from 'fs'
import { safeLoad } from 'js-yaml'

export const localeActions = localesFiles().map((file) => file.split('.')[0])

export function sendLanguage(ctx: Context) {
  return ctx.reply(ctx.i18n.t('language'), languageKeyboard())
}

export async function setLanguage(ctx: Context) {
  let user = ctx.dbuser
  if ('data' in ctx.callbackQuery) {
    user.language = ctx.callbackQuery.data
    user = await (user as any).save()
    const message = ctx.callbackQuery.message

    const anyI18N = ctx.i18n as any
    anyI18N.locale(ctx.callbackQuery.data)

    await ctx.telegram.editMessageText(
      message.chat.id,
      message.message_id,
      undefined,
      ctx.i18n.t('language_selected'),
      { parse_mode: 'HTML' }
    )
  }
}

function languageKeyboard() {
  const locales = localesFiles()
  const result = []
  locales.forEach((locale, index) => {
    const localeCode = locale.split('.')[0]
    const localeName = safeLoad(
      readFileSync(`${__dirname}/../../locales/${locale}`, 'utf8')
    ).name
    if (index % 2 == 0) {
      if (index === 0) {
        result.push([m.button.callback(localeName, localeCode)])
      } else {
        result[result.length - 1].push(
          m.button.callback(localeName, localeCode)
        )
      }
    } else {
      result[result.length - 1].push(m.button.callback(localeName, localeCode))
      if (index < locales.length - 1) {
        result.push([])
      }
    }
  })
  return m.inlineKeyboard(result)
}

function localesFiles() {
  return readdirSync(`${__dirname}/../../locales`)
}
