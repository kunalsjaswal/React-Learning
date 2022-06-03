import someObj, {someString,age} from './exportedFile.mjs'
import * as allImports from './exportedFile.mjs'

console.log("\nnamed imports: ",someString,age)
console.log("default import: ",someObj)

console.log("\nall imports as an object: ",allImports)