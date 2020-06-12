// Dependencies
import { findUser } from '../models'
import { Context } from 'telegraf'

export async function attachUser(ctx: Context, next) {
  const dbuser = await findUser(ctx.from.id)
  ctx.dbuser = dbuser
  next()
}
