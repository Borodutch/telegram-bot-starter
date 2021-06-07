import { Context } from 'telegraf'

export function sendHelp(ctx: Context) {
  return ctx.replyWithHTML(ctx.i18n.t('help'))
}
