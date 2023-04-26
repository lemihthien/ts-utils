interface ValidationResult {
  isValid: boolean
  msg: string
}

export const validateEmail = (email: string, maxLength = 80): ValidationResult => {
  const emailRegex = /^(([^<>()[\]\.,:\s@\"]+(\.[^<>()[\]\.,:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,:\s@\"]+\.)+[^<>()[\]\.,:\s@\"]{2,})$/i
  if (!email || email === '') {
    return { isValid: false, msg: 'Email is required.' }
  }
  if (!emailRegex.test(email)) {
    return { isValid: false, msg: 'Email is not valid.' }
  }
  if (email.length > maxLength) {
    return { isValid: false, msg: `Email too long (${maxLength}).` }
  }
  return { isValid: true, msg: '' }
}
