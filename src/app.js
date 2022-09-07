import { encrypt, decrypt } from './helperFunctions.js'

const encryptedWord = encrypt('hej')
console.log(encryptedWord)

const decryptedWord = decrypt(encryptedWord)
console.log(decryptedWord)
