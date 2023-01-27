export const validateArgv = (internalContext, companyName) => {
  
  if(!companyName) return [false, 'Empty company name']
   
  let companies = internalContext.companies.split(',')
  
  if (companies.includes(companyName)){
    
    let nameFile = `${companyName}.json`
    internalContext.company = {
      companyName,
      nameFile
    }
    return [true, '']

  }else{
    return [false, 'Company name not found']
  }

  
  
}