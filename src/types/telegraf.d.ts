// Dependencies
import I18N from 'telegraf-i18n'
import * as tt from 'telegraf/typings/telegram-types.d'
import { User } from '../models'
import { DocumentType } from '@typegoose/typegoose'
import { Middleware } from 'telegraf'
import { TelegrafContext } from 'telegraf/typings/context'

declare module 'telegraf' {
  export class Context {
    dbuser: DocumentType<User>
    i18n: I18N
  }

  export interface Composer<TContext extends Context> {
    action(
      action: string | string[] | RegExp,
      middleware: Middleware<TelegrafContext>,
      ...middlewares: Array<Middleware<TelegrafContext>>
    ): Composer<TContext>
  }
}
