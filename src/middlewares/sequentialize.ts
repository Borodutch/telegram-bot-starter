import { sequentialize as baseSequentialize } from '@grammyjs/runner'
import Context from '@/models/Context'

function getSessionKey(ctx: Context) {
  return ctx.chat?.id.toString()
}

const sequentialize = baseSequentialize(getSessionKey)
export default sequentialize
