const CAPTCHA_URL = "https://www.google.com/recaptcha/api/siteverify"

const CAPTCHA_ERROR_CODES = {
  'missing-input-secret': 'The secret parameter is missing.',
  'invalid-input-secret': 'The secret parameter is invalid or malformed.',
  'missing-input-response': 'The response parameter is missing.',
  'invalid-input-response': 'The response parameter is invalid or malformed.',
  'bad-request': 'The request is invalid or malformed.',
  'timeout-or-duplicate': 'Captcha is no longer valid. Please select again',
  'default': 'Captcha error'
}

const validateCaptcha = async (captchaValue: string | string[] | null | undefined, remoteAddress?: undefined) => {
  const captchaKey = process.env.CAPTCHA_SECRET_KEY

  // check we have recaptcha response
  if (captchaValue === undefined || captchaValue === '' || captchaValue === null) {
    throw new Error('Please select captcha first')
  }

  const res = await fetch(`${CAPTCHA_URL}?secret=${captchaKey}&response=${captchaValue}&remoteip=${remoteAddress || '159.253.78.100'}`, { method: 'post'})
  const data = await res.json()

  if (data.success == false || data.score < 0.5 && (data['error-codes'] && data['error-codes'].length > 0)) {
    /* @ts-ignore */
    throw new Error(CAPTCHA_ERROR_CODES[data['error-codes'][0]] || CAPTCHA_ERROR_CODES['default'])
  }

  if (data.success == true) return { msg: 'reCAPTCHA passed' }
}

export { validateCaptcha }