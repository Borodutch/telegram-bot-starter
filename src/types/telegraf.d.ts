// Dependencies
import I18N from 'telegraf-i18n'
import * as tt from 'telegraf/typings/telegram-types.d'
import { User } from '../models'
import { InstanceType } from 'typegoose'

declare module 'telegraf' {
  export class ContextMessageUpdate {
    dbuser: InstanceType<User>
    i18n: I18N
  }

  export interface Composer<TContext extends ContextMessageUpdate> {
    action(
      action: string | string[] | RegExp,
      middleware: Middleware<TContext>,
      ...middlewares: Array<Middleware<TContext>>
    ): Composer<TContext>
  }
}
