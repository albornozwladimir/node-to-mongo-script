import * as dotenv from 'dotenv'
dotenv.config()


export const getInternalContext = async () => {
  let internalContext = {
    mongo: {
      url: process.env.MONGO_URL || "mongodb://localhost:27017/local",
      db: process.env.MONGO_DATABASE || "local",
      beersCollection: process.env.MONGO_BEER_COLLECTION
    },
    environment: process.env.ENVIRONMENT || "development"
  }

  return internalContext
}