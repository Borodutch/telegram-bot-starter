import { findUser } from '@/models'
import { Context } from 'telegraf'

export async function attachUser(ctx: Context, next) {
  ctx.dbuser = await findUser(ctx.from.id)
  return next()
}
