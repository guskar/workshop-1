
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'

export function encrypt(word) {
  let result = ''

  for (const character of word) {
    if (CONSONANTS.includes(character)) {
      result += character + 'o' + character
    } else {
      result += character
    }
  }
  return result
}

export function decrypt(encryptedWord) {
  for (let i = 0; i < encryptedWord.length; i++) {
    if (CONSONANTS.includes(encryptedWord[i]))
    
  }
}
