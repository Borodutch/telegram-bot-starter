import * as findorcreate from 'mongoose-findorcreate'
import { FindOrCreate } from '@typegoose/typegoose/lib/defaultClasses'
import {
  getModelForClass,
  modelOptions,
  plugin,
  prop,
} from '@typegoose/typegoose'

@plugin(findorcreate)
@modelOptions({ schemaOptions: { timestamps: true } })
export class User extends FindOrCreate {
  @prop({ required: true, index: true, unique: true })
  id!: number
  @prop({ required: true, default: 'en' })
  language!: string
}

const UserModel = getModelForClass(User)

export function findOrCreateUser(id: number) {
  return UserModel.findOrCreate({ id })
}
