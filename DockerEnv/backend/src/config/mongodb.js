import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from './environment.js'

let aurabloomDatabaseInstance = null

const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect()

  aurabloomDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}

export const GET_DB = () => {
  if (!aurabloomDatabaseInstance) {
    throw new Error('Must connect to Database first!')
  }
  return aurabloomDatabaseInstance
}

export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}
