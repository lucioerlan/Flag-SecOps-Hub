export interface IHasher {
  hash(plaintext: string): Promise<string>
}

export interface IHashComparer {
  compare(plaitext: string, digest: string): Promise<boolean>
}
