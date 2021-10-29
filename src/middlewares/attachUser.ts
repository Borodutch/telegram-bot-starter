import { NextFunction } from 'grammy'
import { findOrCreateUser } from '@/models/User'
import Context from '@/models/Context'

export default async function attachUser(ctx: Context, next: NextFunction) {
  const { doc } = await findOrCreateUser(ctx.from.id)
  ctx.dbuser = doc
  return next()
}
