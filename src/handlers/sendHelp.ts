import Context from '@/models/Context'

export function sendHelp(ctx: Context) {
  return ctx.reply(ctx.i18n.t('help'), {
    parse_mode: 'HTML',
  })
}
