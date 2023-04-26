import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose'

@modelOptions({ schemaOptions: { timestamps: true } })
export class User {
  @prop({ index: true, required: true, unique: true })
  id!: number
  @prop({ default: 'en', required: true })
  language!: string
}

const UserModel = getModelForClass(User)

export function findOrCreateUser(id: number) {
  return UserModel.findOneAndUpdate(
    { id },
    {},
    {
      new: true,
      upsert: true,
    }
  )
}
