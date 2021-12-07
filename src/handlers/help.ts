import Context from '@/models/Context'

export default function handleHelp(ctx: Context) {
  return ctx.replyWithLocalization('help', {
    parse_mode: 'HTML',
  })
}
