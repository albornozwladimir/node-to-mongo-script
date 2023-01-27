import fs from 'fs'

export const readScrap = async ({ nameFile }) => {
  try {
    let allResults = fs.readFileSync(`./utils/database/resultScrap/${nameFile}`)
    let parseResults = JSON.parse(allResults)
    console.log(parseResults)
  } catch (error) {
    console.log("error: " + error);
  }
};