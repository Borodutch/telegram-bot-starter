import Context from '@/models/Context'
import sendOptions from '@/helpers/sendOptions'

export default function handleHelp(ctx: Context) {
  return ctx.replyWithLocalization('help', sendOptions(ctx))
}
