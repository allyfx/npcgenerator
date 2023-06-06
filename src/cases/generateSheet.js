import { SKILLS } from '../utils/skills.js'
import { NAMES, SURNAMES } from '../utils/names.js'
import { NPCNames } from '../utils/npcs.js'

function getRandomNumber(number = 1) {
  return Math.floor(Math.random() * number)
}

function generateAttributes() {
  const generatedAttributes = []

  for (let i = 0; i < 4; i++) {
    const index = getRandomNumber(SKILLS.length)
    generatedAttributes.push(SKILLS[index].toLowerCase())
  }

  return generatedAttributes;
}

function fillAttributes() {
  const atrs = {
    atr_agi: 0,
    atr_for: 0,
    atr_int: 0,
    atr_pre: 0,
    atr_vig: 0
  }

  const generatedAtrs = generateAttributes()

  for (let i = 0; i < 4; i++) {
    const currentAtr = generatedAtrs[i]

    atrs[`atr_${currentAtr}`] += 1
  }

  return atrs
}

function generateName(sex) {
  const nameIndex = getRandomNumber(NAMES[sex].length)
  const surnameIndex = getRandomNumber(SURNAMES.length)

  const newName = `${NAMES[sex][nameIndex]} ${SURNAMES[surnameIndex]}`

  if (NPCNames.includes(newName)) {
    return generateName(sex);
  }

  return `${NAMES[sex][nameIndex]} ${SURNAMES[surnameIndex]}`
}

function generateSheet(sex) {
  const attributes = fillAttributes()

  return {
    name: generateName(sex),
    move: getRandomNumber(5) + 3,
    atr_int: attributes.atr_int,
    atr_vig: attributes.atr_vig,
    atr_for: attributes.atr_for,
    atr_pre: attributes.atr_pre,
    atr_agi: attributes.atr_agi,
    skills: []
  }
}

export { generateSheet }
