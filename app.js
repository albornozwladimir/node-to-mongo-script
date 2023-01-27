import { getInternalContext } from './utils/internalContext.js'
//import { readScrap } from './utils/database/readScrap.js'
import { validateArgv } from './utils/validateArgv.js'

const internalContext = await getInternalContext()


const main = async () => {
  try {
    console.log("pre internalContext ", internalContext)
    let [response, message] = await validateArgv(internalContext, process.argv[2])
    if(!response){
      console.log("Error ", message)
      return  
    }
    console.log("post internalContext ", internalContext)
  } catch (error) {
    console.log("Main error: ", error)
  }
}

main()