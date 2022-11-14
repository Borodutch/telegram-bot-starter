import Context from '@/models/Context'
import sendOptions from '@/helpers/sendOptions'
import simpleMenu from '@/menus/simple'

export default function handleSimple(ctx: Context) {
  return ctx.replyWithLocalization('language', {
    ...sendOptions(ctx),
    reply_markup: simpleMenu,
  })
}
