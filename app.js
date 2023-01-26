import { getInternalContext } from './utils/internalContext.js'

const internalContext = await getInternalContext()

const main = async () => {
  try {
    console.log("internalContext ", internalContext)
  } catch (error) {
    console.log("Main error: ", error)
  }
}

main()