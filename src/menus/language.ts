import { Menu } from '@grammyjs/menu'
import { load } from 'js-yaml'
import { readFileSync, readdirSync } from 'fs'
import Context from '@/models/Context'

interface YamlWithName {
  name: string
}

const localeFilePaths = readdirSync(`${__dirname}/../../locales`)

const localeFile = (path: string) => {
  return load(
    readFileSync(`${__dirname}/../../locales/${path}`, 'utf8')
  ) as YamlWithName
}

const setLanguage = (languageCode: string) => async (ctx: Context) => {
  ctx.dbuser.language = languageCode
  await ctx.dbuser.save()
  ctx.i18n.locale(languageCode)
  return ctx.editMessageText(ctx.i18n.t('language_selected'), {
    parse_mode: 'HTML',
    reply_markup: undefined,
  })
}

const languageMenu = new Menu<Context>('language')

localeFilePaths.forEach((localeFilePath, index) => {
  const localeCode = localeFilePath.split('.')[0]
  const localeName = localeFile(localeFilePath).name
  languageMenu.text(localeName, setLanguage(localeCode))
  if (index % 2 != 0) {
    languageMenu.row()
  }
})

export default languageMenu
