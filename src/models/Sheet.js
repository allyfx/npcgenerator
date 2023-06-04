import { generateSheet } from "../cases/generateSheet.js"

class Sheet {
  constructor(sex) {
    const {
      name, move, atr_agi, atr_for, atr_int, atr_pre, atr_vig, skills
    } = generateSheet(sex)

    this.name = name

    this.move = move

    this.atr_int = atr_int
    this.atr_vig = atr_vig
    this.atr_for = atr_for
    this.atr_pre = atr_pre
    this.atr_agi = atr_agi

    this.skills = skills
  }

  getSkills() {
    return {
      'INTELECTO': this.atr_int,
      'FORÇA': this.atr_for,
      'VIGOR': this.atr_vig,
      'PRESENÇA': this.atr_pre,
      'AGILIDADE': this.atr_agi
    }
  }
}

export default Sheet
