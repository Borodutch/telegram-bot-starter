import { connect } from 'mongoose'

function startMongo() {
  const mongoUri = process.env.MONGO
  if (!mongoUri) {
    throw new Error('MONGO not set')
  }
  return connect(mongoUri)
}

export default startMongo
