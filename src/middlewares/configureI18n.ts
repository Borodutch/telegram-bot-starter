import { NextFunction } from 'grammy'
import Context from '@/models/Context'

function configureI18n(ctx: Context, next: NextFunction) {
  ctx.i18n.locale(ctx.dbuser.language)
  return next()
}

export default configureI18n
