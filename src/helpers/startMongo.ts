import { connect } from 'mongoose'

function startMongo() {
  return connect(process.env.MONGO)
}

export default startMongo
