import Context from '@/models/Context'

export default function sendHelp(ctx: Context) {
  return ctx.reply(ctx.i18n.t('help'), {
    parse_mode: 'HTML',
  })
}
