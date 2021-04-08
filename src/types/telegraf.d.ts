import I18N from 'telegraf-i18n'
import { User } from '../models'
import { DocumentType } from '@typegoose/typegoose'
import { Middleware } from 'telegraf'

declare module 'telegraf' {
  export class Context {
    dbuser: DocumentType<User>
    i18n: I18N
  }

  export interface Composer<C extends Context> {
    action(
      action: string | string[] | RegExp,
      middleware: Middleware<C>,
      ...middlewares: Array<Middleware<C>>
    ): Composer<C>
  }
}
