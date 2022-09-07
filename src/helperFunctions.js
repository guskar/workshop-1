const CONSONANTS = 'bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ'
const UPPERCASE_CONSONANTS = 'BCDFGHJKLMNPQRSTVWXZ'

export function encrypt(word) {
  let result = ''

  for (const character of word) {
    if (CONSONANTS.includes(character)) {
      result += character
      isUpperCase(character) ? result += 'O' : result += 'o'
      result += character
    } else {
      result += character
    }
  }
  return result
}

export function decrypt(encryptedWord) {
  let result = ''

  for (let i = 0; i < encryptedWord.length; i++) {
    if (CONSONANTS.includes(encryptedWord[i])) {
      result += encryptedWord[i]
      i += 2
    } else {
      result += encryptedWord[i]
    }
  }
  return result
}

function isUpperCase (character) {
  if (UPPERCASE_CONSONANTS.includes(character)) {
    return true
  } else {
    return false
  }
}
