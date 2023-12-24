export interface IDecrypter {
  decrypt(ciphertext: string): Promise<string>
}

export interface IEncrypter {
  encrypt(plaintext: object): Promise<string>
}
