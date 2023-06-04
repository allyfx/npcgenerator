console.log('/*** NPC GENERATOR ***/')
console.log('Creating...')
console.log('')

import Sheet from "./models/Sheet.js"

const sex = process.argv[2].replace('-', '')
const sheet = new Sheet(sex)

console.log('Your new character is:')
console.log(sheet.name)

console.log('')

console.log('Attributes:')
const str = JSON.stringify(sheet.getSkills(), null, 4);
console.log(str.replace('{', '').replace('}', ''));

console.log('')
console.log('There you have it!')
