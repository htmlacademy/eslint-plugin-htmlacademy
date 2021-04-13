declare module "eslint-plugin-htmlacademy" {
  interface WordCategories {
    isWord(word: string): boolean
  }

  export function extendWordCategories(extensions: { [id: string]: Array<string> }): WordCategories;
}
