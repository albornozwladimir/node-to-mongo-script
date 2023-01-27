import { getInternalContext } from './utils/internalContext.js'
import { readScrap } from './utils/database/readScrap.js'
import { validateArgv } from './utils/validateArgv.js'

const internalContext = await getInternalContext()


const main = async () => {
  try {
    const [response, message] = await validateArgv(internalContext, process.argv[2])
    if(!response){
      console.log("Error ", message)
      return  
    }

    await readScrap(internalContext.company) 
  } catch (error) {
    console.log("Main error: ", error)
  }
}

main()