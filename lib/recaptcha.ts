export async function getRecaptchaKey() {
  return new Promise<string>((resolve, reject) => {
    const { grecaptcha } = window as any  
    let token;
  
    try {
      grecaptcha.ready(async () => {      
        token = await grecaptcha.execute('6LeuJq8cAAAAAORiBHHBTdFncGpgSiOzYaWEwH80', {action: 'submit'})
        
        resolve(token)
      })
    } catch (error) {
      reject('Error getting token')
    }
  })
}