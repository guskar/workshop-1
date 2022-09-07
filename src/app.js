import { encrypt, decrypt } from './helperFunctions.js'

const encryptedWord = encrypt('snöBoll')
console.log(encryptedWord)

const decryptedWord = decrypt(encryptedWord)
console.log(decryptedWord)
